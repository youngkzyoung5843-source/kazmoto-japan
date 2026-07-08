# Kazmoto Japan — 物販サイト

消費者・購入者向けの物販ブランドサイト（静的HTML）です。
Amazon.co.jp・eBayでの販売を案内し、特定商取引法表記等を掲載します。

> **コーポレートサイト**（`../コーポレートサイト/`）= メーカー・卸向け（B2B）  
> **物販サイト**（本フォルダ）= 購入者向け（B2C）

## ファイル構成

```
物販サイト/
├── index.html       … トップ（ブランド・販売チャネル・取扱カテゴリ）
├── legal.html       … 特定商取引法に基づく表記
├── contact.html     … お問い合わせ
├── css/shop.css
├── js/main.js
└── README.md
```

## ローカルで確認

**推奨:** `start.command` をダブルクリック → **Google Chrome** で開きます。

```bash
cd "物販サイト"
python3 -m http.server 8081
# または ./start.command
```

ブラウザで http://localhost:8081 を開いてください。

## 公開前チェックリスト（オーナー判断）

- [ ] **eBayストアURL** — `index.html` のリンクを実際のセラーURLに更新
- [ ] **AmazonストアURL** — ストア開設後、`index.html` の「準備中」をリンクに差し替え
- [ ] **お問い合わせメール** — 取得後 `contact.html` に掲載
- [ ] **電話番号** — 掲載する場合は `legal.html` / `contact.html` に追加
- [ ] **ドメイン** — 例: shop.kazmoto.jp / kazmoto.jp（物販）と corp.kazmoto.jp（法人）の使い分け
- [ ] **Amazonセラー情報** — セラーセントラルに本サイトURLを登録

## ホスティング

`コーポレートサイト` と同様、Netlify / Cloudflare Pages 等にデプロイ可能です。
同一ドメインの `/shop/` 配下に置く場合は、相対パスを調整してください。

## 参照

- 法人サイト: `../コーポレートサイト/`
- 会社基本情報: `../ナレッジ/会社概要/会社基本情報.md`
