# Kazmoto合同会社 — コーポレートサイト

メーカー・卸売業者向けの公式コーポレートサイト（静的HTML）です。
Amazon物販（メーカー仕入）の新規取引審査で、法人の信頼性を示すために使用します。

## ファイル構成

```
コーポレートサイト/
├── index.html       … トップページ
├── company.html     … 会社概要（定款情報）
├── business.html    … 事業内容・取引条件
├── contact.html     … お問い合わせ
├── privacy.html     … プライバシーポリシー
├── css/style.css
└── js/main.js
```

## ローカルで確認

```bash
cd "コーポレートサイト"
python3 -m http.server 8080
```

ブラウザで http://localhost:8080 を開いてください。

## 公開前チェックリスト（オーナー判断）

- [ ] **法人番号** — 登記完了後、`company.html` の会社概要表に追記
- [ ] **インボイス登録番号** — 取得後、`business.html` の請求書欄に追記
- [ ] **電話番号** — 掲載する場合は `contact.html` に追加
- [ ] **ドメイン** — 例: kazmoto.jp / kazmoto.co.jp の取得
- [ ] **ホスティング** — Netlify / Cloudflare Pages / さくら等で公開
- [ ] **SSL** — HTTPS必須（ホスティングサービスで自動設定）

## ホスティング例（Netlify）

1. [Netlify](https://www.netlify.com/) にアカウント作成
2. `コーポレートサイト` フォルダをドラッグ&ドロップでデプロイ
3. カスタムドメインを設定

## 参照ナレッジ

- 定款: `ナレッジ/会社概要/定款_2026-03-18.md`
- 会社基本情報: `ナレッジ/会社概要/会社基本情報.md`
