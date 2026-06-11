# HK MRI Instrument Website

HK MRI Instrument Limited 官方網站 — Next.js 16 + TypeScript + Tailwind CSS。

## 本地開發

```bash
npm install
npm run dev
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)

## 上傳 GitHub

**重要：請只上傳 `website` 這個資料夾的內容作為 GitHub 倉庫根目錄**（不要包含上層的 `source` 資料夾）。

### 方法一：使用 Git（推薦）

在 `website` 資料夾內執行：

```bash
git init
git add .
git commit -m "Initial commit: HK MRI Instrument website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 方法二：使用打包腳本

在 PowerShell 執行：

```powershell
.\scripts\package-for-deploy.ps1
```

會在 `dist/` 產生 zip 檔，解壓後上傳到 GitHub（可用 GitHub 網頁「Upload files」）。

## 部署到 Vercel

1. 前往 [vercel.com/new](https://vercel.com/new)
2. 選擇 **Import Git Repository**，連接你的 GitHub 倉庫
3. Vercel 會自動偵測 **Next.js**，設定如下（通常無需修改）：

| 設定 | 值 |
|------|-----|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | （自動） |
| Install Command | `npm install` |

4. 點擊 **Deploy**

此專案不需要環境變數（`.env`），可直接部署。

## 專案結構

```
website/
├── public/images/     # 品牌 logo、產品圖片
├── src/
│   ├── app/           # Next.js App Router 頁面
│   ├── components/    # UI 元件
│   ├── data/          # 產品與公司資料
│   └── i18n/          # 中英文翻譯
├── package.json
├── next.config.ts
└── vercel.json
```

## 常用指令

```bash
npm run dev      # 開發模式
npm run build    # 正式版建置（Vercel 會自動執行）
npm run start    # 執行建置後的正式版
npm run lint     # ESLint 檢查
```

## 注意事項

- `node_modules/`、`.next/` 不要上傳（已在 `.gitignore`）
- `public/images/` 必須一併上傳，否則網站圖片會缺失
- Node.js 版本建議 **20 或以上**（Vercel 預設支援）
