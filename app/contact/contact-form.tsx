'use client';

import { FormEvent, useState } from 'react';
import { Check, ChevronLeft, LoaderCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/app/site-config';
import { phoneTimeOptions } from '@/app/form-options';

type ContactMethod = 'phone' | 'email';
type FormValues = { name: string; contactMethod: ContactMethod; phone: string; email: string; area: string; timeSlot: string; message: string };

const initialValues: FormValues = { name: '', contactMethod: 'phone', phone: '', email: '', area: '', timeSlot: '', message: '' };
const labels: Record<keyof FormValues, string> = {
  name: 'お名前', contactMethod: 'ご連絡方法', phone: '電話番号', email: 'メールアドレス', area: '施工予定地域', timeSlot: 'ご希望の連絡時間帯', message: 'お問い合わせ内容',
};

function ContactFormHeading({ confirm = false }: { confirm?: boolean }) {
  return <header className="ct-form-heading">
    <p className="ct-kicker">CONTACT FORM</p>
    <h2>お問い合わせ<br />フォーム</h2>
    <span />
    <p>{confirm ? '入力内容をご確認のうえ、送信してください。' : <>下記のフォームにご入力のうえ、<br />確認画面へお進みください。</>}</p>
  </header>;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [stage, setStage] = useState<'input' | 'confirm' | 'success'>('input');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [botField, setBotField] = useState('');
  const [consent, setConsent] = useState(false);
  const update = (key: keyof FormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const changeContactMethod = (contactMethod: ContactMethod) => setValues((current) => ({
    ...current,
    contactMethod,
    timeSlot: contactMethod === 'phone' ? current.timeSlot : '',
  }));
  const phoneRequired = values.contactMethod === 'phone';
  const confirmationKeys = (Object.keys(values) as (keyof FormValues)[]).filter((key) => phoneRequired || key !== 'timeSlot');

  const openConfirmation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent || !event.currentTarget.reportValidity()) return;
    const trimmed = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])) as FormValues;
    const missing = (['name', 'area', 'message'] as const).find((key) => !trimmed[key]);
    if (missing) {
      setError(labels[missing] + 'を入力してください（空白のみは入力できません）。');
      return;
    }
    setValues(trimmed);
    setError('');
    setStage('confirm');
    requestAnimationFrame(() => document.querySelector('.ct-form-section')?.scrollIntoView({ behavior: 'smooth' }));
  };

  const submit = async () => {
    if (submitting || !consent) return;
    // 意匠確認中は確認画面までに留め、外部への送信は行わない。
    if (!siteConfig.interactionsEnabled) return;
    setSubmitting(true);
    setError('');
    const payload = new URLSearchParams({
      'form-name': 'tomimasa-contact',
      'bot-field': botField,
      subject: '【ホームページ】お問い合わせフォーム',
      '個人情報の取り扱いへの同意': '同意する',
      'お名前': values.name,
      'ご連絡方法': values.contactMethod === 'phone' ? '電話での連絡を希望する' : 'メールでの連絡を希望する',
      '電話番号': values.phone,
      email: values.email,
      '施工予定地域': values.area,
      'ご希望の連絡時間帯': values.timeSlot,
      'お問い合わせ内容': values.message,
    });
    try {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: payload.toString() });
      if (!response.ok) throw new Error('送信に失敗しました。');
      setStage('success');
    } catch {
      setError('送信できませんでした。時間をおいて再度お試しいただくか、お電話でお問い合わせください。');
    } finally { setSubmitting(false); }
  };

  if (stage === 'success') return <><ContactFormHeading /><div className="ct-form-card ct-form-success" role="status">
    <span><Check /></span><p className="ct-kicker">THANK YOU</p><h2>お問い合わせを受け付けました</h2>
    <p>内容を確認のうえ、ご連絡いたします。</p><a className="tm-button tm-button-outline" href="/">ホームへ戻る</a>
  </div></>;

  if (stage === 'confirm') return <><ContactFormHeading confirm /><div className="ct-form-card ct-confirm-card">
    <p className="ct-kicker">CONFIRM</p><h2>入力内容を<span className="copy-nowrap">ご確認ください</span></h2>
    <dl className="ct-confirm-list">{confirmationKeys.map((key) => <div key={key}>
      <dt>{labels[key]}</dt><dd>{key === 'contactMethod' ? (values[key] === 'phone' ? '電話での連絡を希望する' : 'メールでの連絡を希望する') : values[key] || '—'}</dd>
    </div>)}</dl>
    {error && <p className="ct-form-error" role="alert">{error}</p>}
    <div className="ct-form-actions">
      <button className="tm-button tm-button-outline ct-back-button" type="button" onClick={() => setStage('input')}><ChevronLeft />修正する</button>
      <button className="tm-button tm-button-outline" type="button" onClick={submit} disabled={submitting}>{submitting ? <LoaderCircle className="ct-spin" /> : <Mail />}送信する<span aria-hidden="true">›</span></button>
    </div>
  </div></>;

  return <><ContactFormHeading /><form className="ct-form-card ct-contact-form" name="tomimasa-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={openConfirmation}>
    <input type="hidden" name="form-name" value="tomimasa-contact" />
    <input type="hidden" name="subject" value="【ホームページ】お問い合わせフォーム" />
    <p hidden aria-hidden="true"><label>この欄は入力しないでください<input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(event) => setBotField(event.target.value)} /></label></p>

    <label className="ct-form-field"><span>お名前 <em>必須</em></span>
      <input name="お名前" value={values.name} onChange={(e) => update('name', e.target.value)} placeholder="例）富正 太郎" autoComplete="name" required />
    </label>

    <fieldset className="ct-form-field ct-radio-field">
      <legend>ご連絡方法 <em>必須</em></legend>
      <label><input type="radio" name="ご連絡方法" value="電話での連絡を希望する" checked={phoneRequired} onChange={() => changeContactMethod('phone')} />電話での連絡を希望する</label>
      <label><input type="radio" name="ご連絡方法" value="メールでの連絡を希望する" checked={!phoneRequired} onChange={() => changeContactMethod('email')} />メールでの連絡を希望する</label>
    </fieldset>

    <label className="ct-form-field"><span>電話番号 {phoneRequired && <em>必須</em>} <small>（電話での連絡を希望する場合）</small></span>
      <input name="電話番号" type="tel" inputMode="tel" pattern="[0-9０-９+()（）ー\-\s]{8,}" value={values.phone} onChange={(e) => update('phone', e.target.value)} placeholder="例）090-1234-5678" autoComplete="tel" required={phoneRequired} />
    </label>
    {phoneRequired && <label className="ct-form-field ct-time-slot-field"><span>ご希望の連絡時間帯 <em>必須</em></span>
      <select name="ご希望の連絡時間帯" required={phoneRequired} value={values.timeSlot} onChange={(e) => update('timeSlot', e.target.value)}>
        <option value="">選択してください</option>
        {phoneTimeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
      </select>
      <small className="ct-form-note">※ご希望の時間帯に添えない場合があります。</small>
      <small className="ct-form-note">※「いつでも可」は、電話受付時間内で時間帯の指定がない場合です。</small>
    </label>}
    <label className="ct-form-field"><span>メールアドレス {!phoneRequired && <em>必須</em>} <small>（メールでの連絡を希望する場合）</small></span>
      <input name="email" type="email" value={values.email} onChange={(e) => update('email', e.target.value)} placeholder="例）taro@example.com" autoComplete="email" required={!phoneRequired} />
    </label>
    <label className="ct-form-field"><span>施工予定地域 <em>必須</em></span>
      <input name="施工予定地域" value={values.area} onChange={(e) => update('area', e.target.value)} placeholder="例）和歌山市、海南市 など" autoComplete="address-level2" required />
    </label>
    <label className="ct-form-field"><span>お問い合わせ内容 <em>必須</em></span>
      <textarea name="お問い合わせ内容" value={values.message} onChange={(e) => update('message', e.target.value)} placeholder="ご相談内容やご質問などをご入力ください。" rows={7} required />
    </label>
    <p className="ct-form-privacy">送信前に<a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>をご確認ください。</p>
    <label className="ct-form-consent"><input type="checkbox" name="個人情報の取り扱いへの同意" value="同意する" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />個人情報の取り扱いに同意する <em>必須</em></label>
    {error && <p className="ct-form-error" role="alert">{error}</p>}
    <button className="tm-button tm-button-outline ct-submit-button" type="submit" disabled={!consent}><Mail />確認画面へ進む<span aria-hidden="true">›</span></button>
  </form></>;
}
