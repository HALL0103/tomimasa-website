export default function NotFound() {
  return <main className="tm-not-found">
    <p>404</p>
    <h1>ページが見つかりませんでした</h1>
    <p>お探しのページは、移動または削除された可能性があります。</p>
    <a className="tm-button tm-button-outline" href="/">HOMEへ戻る <span aria-hidden="true">→</span></a>
  </main>;
}
