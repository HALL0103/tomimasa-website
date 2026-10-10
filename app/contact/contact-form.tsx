'use client';

import { FormEvent, useState } from 'react';
import { Check, ChevronLeft, LoaderCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/app/site-config';

type ContactMethod = 'phone' | 'email';
type FormValues = { name: string; contactMethod: ContactMethod; phone: string; email: string; area: string; timeSlot: string; message: string };

const initialValues: FormValues = { name: '', contactMethod: 'phone', phone: '', email: '', area: '', timeSlot: '指定なし', message: '' };
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
  const update = (key: keyof FormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));
  const changeContactMethod = (contactMethod: ContactMethod) => setValues((current) => ({
    ...current,
    contactMethod,
    timeSlot: contactMethod === 'phone' ? (current.timeSlot || '指定なし') : '',
  }));
  const phoneRequired = values.contactMethod === 'phone';
  const confirmationKeys = (Object.keys(values) as (keyof FormValues)[]).filter((key) => phoneRequired || key !== 'timeSlot');

  const openConfirmation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setStage('confirm');
    requestAnimationFrame(() => document.querySelector('.ct-form-section')?.scrollIntoView({ behavior: 'smooth' }));
  };

  const submit = async () => {
    if (submitting) return;
    // 意匠確認中は確認画面までに留め、外部への送信は行わない。
    if (!siteConfig.interactionsEnabled) return;
    setSubmitting(true);
    setError('');
    const payload = new URLSearchParams({ 'form-name': 'tomimasa-contact', ...values });
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
    <p>内容を確認のうえ、ご連絡いたします。</p><a className="tm-button tm-button-dark" href="/">ホームへ戻る</a>
  </div></>;

  if (stage === 'confirm') return <><ContactFormHeading confirm /><div className="ct-form-card ct-confirm-card">
    <p className="ct-kicker">CONFIRM</p><h2>入力内容を<span className="copy-nowrap">ご確認ください</span></h2>
    <dl className="ct-confirm-list">{confirmationKeys.map((key) => <div key={key}>
      <dt>{labels[key]}</dt><dd>{key === 'contactMethod' ? (values[key] === 'phone' ? '電話での連絡を希望する' : 'メールでの連絡を希望する') : values[key] || '—'}</dd>
    </div>)}</dl>
    {error && <p className="ct-form-error" role="alert">{error}</p>}
    <div className="ct-form-actions">
      <button className="tm-button ct-back-button" type="button" onClick={() => setStage('input')}><ChevronLeft />修正する</button>
      <button className="tm-button tm-button-dark" type="button" onClick={submit} disabled={submitting}>{submitting ? <LoaderCircle className="ct-spin" /> : <Mail />}送信する<span aria-hidden="true">＞</span></button>
    </div>
  </div></>;

  return <><ContactFormHeading /><form className="ct-form-card ct-contact-form" name="tomimasa-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={openConfirmation}>
    <input type="hidden" name="form-name" value="tomimasa-contact" />
    <p className="ct-honeypot"><label>この欄は入力しないでください<input name="bot-field" /></label></p>

    <label className="ct-form-field"><span>お名前 <em>必須</em></span>
      <input name="name" value={values.name} onChange={(e) => update('name', e.target.value)} placeholder="例）富正 太郎" autoComplete="name" required />
    </label>

    <fieldset className="ct-form-field ct-radio-field">
      <legend>ご連絡方法 <em>必須</em></legend>
      <label><input type="radio" name="contactMethod" value="phone" checked={phoneRequired} onChange={() => changeContactMethod('phone')} />電話での連絡を希望する</label>
      <label><input type="radio" name="contactMethod" value="email" checked={!phoneRequired} onChange={() => changeContactMethod('email')} />メールでの連絡を希望する</label>
    </fieldset>

    <label className="ct-form-field"><span>電話番号 {phoneRequired && <em>必須</em>} <small>（電話での連絡を希望する場合）</small></span>
      <input name="phone" type="tel" inputMode="tel" pattern="[0-9０-９+()（）ー\-\s]{8,}" value={values.phone} onChange={(e) => update('phone', e.target.value)} placeholder="例）090-1234-5678" autoComplete="tel" required={phoneRequired} />
    </label>
    {phoneRequired && <label className="ct-form-field ct-time-slot-field"><span>ご希望の連絡時間帯 <small>（任意）</small></span>
      <select name="timeSlot" value={values.timeSlot} onChange={(e) => update('timeSlot', e.target.value)}>
        <option value="指定なし">指定なし</option>
        <option value="午前中">午前中</option>
        <option value="12時〜15時">12時〜15時</option>
        <option value="15時〜18時">15時〜18時</option>
        <option value="18時以降">18時以降</option>
      </select>
      <small className="ct-form-note">※ご希望の時間帯に添えない場合があります。</small>
    </label>}
    <label className="ct-form-field"><span>メールアドレス {!phoneRequired && <em>必須</em>} <small>（メールでの連絡を希望する場合）</small></span>
      <input name="email" type="email" value={values.email} onChange={(e) => update('email', e.target.value)} placeholder="例）taro@example.com" autoComplete="email" required={!phoneRequired} />
    </label>
    <label className="ct-form-field"><span>施工予定地域 <em>必須</em></span>
      <input name="area" value={values.area} onChange={(e) => update('area', e.target.value)} placeholder="例）和歌山市、海南市 など" autoComplete="address-level2" required />
    </label>
    <label className="ct-form-field"><span>お問い合わせ内容 <em>必須</em></span>
      <textarea name="message" value={values.message} onChange={(e) => update('message', e.target.value)} placeholder="ご相談内容やご質問などをご入力ください。" rows={7} required />
    </label>
    <p className="ct-form-privacy">送信前に<a href="/privacy">プライバシーポリシー</a>をご確認ください。</p>
    <button className="tm-button tm-button-dark ct-submit-button" type="submit"><Mail />確認画面へ進む<span aria-hidden="true">＞</span></button>
  </form></>;
}
