'use client';

import { useState, type FormEvent } from 'react';

export function RecruitSection() {
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || status === 'sending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const payload = new URLSearchParams();
    new FormData(form).forEach((value, key) => payload.append(key, String(value)));
    setStatus('sending');
    try {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: payload.toString() });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch { setStatus('error'); }
  }
  return <section className="tm-recruit" id="recruit" aria-labelledby="recruit-heading">
    <div className="tm-shell">
      <header className="tm-section-heading tm-section-heading-line"><p>RECRUIT</p><h2 id="recruit-heading">採用情報</h2></header>
      <p className="tm-recruit-lead">一緒に働く仲間を募集しています。</p>
      <dl className="tm-recruit-facts">
        <div><dt>業務内容</dt><dd>左官工事・外構工事</dd></div>
        <div><dt>就業場所</dt><dd>近畿一円の各工事現場<small>※現場により事業所集合または直行直帰となります。</small></dd></div>
        <div><dt>給与</dt><dd>日給10,000円〜18,000円</dd></div>
        <div><dt>応募方法</dt><dd>採用応募フォームより</dd></div>
      </dl>
      <details className="tm-recruit-details">
        <summary className="tm-button tm-button-outline">求人応募フォームはこちら<span aria-hidden="true" className="tm-recruit-toggle">＋</span></summary>
        <div className="tm-recruit-form-panel">
          <h3>求人応募フォーム</h3>
          {status === 'success' ? <div role="status" className="tm-recruit-success"><p>求人応募を受け付けました。</p><p>内容を確認のうえ、ご連絡いたします。</p></div> : <>
            <p className="tm-recruit-form-lead">下記フォームよりご応募・お問い合わせいただけます。</p>
            <form name="recruit-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
              <input type="hidden" name="form-name" value="recruit-form" />
              <input type="hidden" name="subject" value="【富正】求人応募" />
              <p hidden><label>この欄は入力しないでください<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
              <div className="tm-recruit-fields">
                <label><span>お名前 <em>必須</em></span><input name="お名前" autoComplete="name" placeholder="例）山田 太郎" required /></label>
                <label><span>電話番号 <em>必須</em></span><input name="電話番号" type="tel" autoComplete="tel" placeholder="例）090-1234-5678" required /></label>
                <label><span>メールアドレス <small>任意</small></span><input name="email" type="email" autoComplete="email" placeholder="例）example@example.com" /></label>
                <label><span>年齢 <em>必須</em></span><input name="年齢" type="number" min="1" step="1" inputMode="numeric" placeholder="例）30" required /></label>
                <fieldset className="tm-recruit-wide tm-recruit-experience">
                  <legend>左官・外構工事の経験 <em>必須</em></legend>
                  <div>{['未経験', '経験あり', 'その他'].map((experience) => <label key={experience}><input type="radio" name="左官・外構工事の経験" value={experience} required />{experience}</label>)}</div>
                </fieldset>
                <label className="tm-recruit-wide"><span>電話対応可能時間 <small>任意</small></span><input name="電話対応可能時間" placeholder="例）9:00〜18:00" /></label>
                <label className="tm-recruit-wide"><span>ご質問・メッセージ <small>任意</small></span><textarea name="ご質問・メッセージ" rows={4} placeholder="ご質問などがあればご記入ください。" /></label>
              </div>
              <div className="tm-recruit-consent"><label><input name="個人情報の取り扱いへの同意" type="checkbox" value="同意する" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />個人情報の取り扱いに同意する <em>必須</em></label><a href="/privacy" target="_blank" rel="noopener noreferrer">個人情報の取り扱いについて（別タブ）</a></div>
              {status === 'error' && <p role="alert">送信できませんでした。時間をおいて再度お試しください。</p>}
              <button className="tm-button tm-button-outline" type="submit" disabled={!consent || status === 'sending'}>{status === 'sending' ? '送信中…' : '求人応募フォームを送信する'}<span aria-hidden="true">›</span></button>
            </form>
          </>}
        </div>
      </details>
    </div>
  </section>;
}
