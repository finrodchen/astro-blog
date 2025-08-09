# 自訂字型使用指南

## 概述

您的 Astro 部落格已經配置為使用自訂字型。本指南將說明如何添加和配置您自己的字型檔案。

## 字型檔案放置

### 1. 字型檔案位置
將您的自訂字型檔案放置在 `public/fonts/` 目錄中：

```
public/
└── fonts/
    ├── custom-regular.woff2    # 主要格式（推薦）
    ├── custom-regular.woff     # 備用格式
    ├── custom-bold.woff2       # 粗體主要格式
    ├── custom-bold.woff        # 粗體備用格式
    ├── atkinson-regular.woff   # 現有備用字型
    └── atkinson-bold.woff      # 現有備用字型
```

### 2. 支援的字型格式
- **WOFF2** (推薦) - 最佳壓縮率和現代瀏覽器支援
- **WOFF** - 良好的瀏覽器相容性
- **TTF/OTF** - 也可使用，但檔案較大

## 字型配置

### 當前配置
在 `src/styles/global.css` 中已設定：

```css
/* 自訂字型定義 */
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-regular.woff2") format("woff2"),
       url("/fonts/custom-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-bold.woff2") format("woff2"),
       url("/fonts/custom-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 字型堆疊
```css
font-family: "CustomFont", "Atkinson", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

## 如何添加您的字型

### 步驟 1：準備字型檔案
1. 取得您想使用的字型檔案
2. 確保您有使用該字型的合法授權
3. 建議同時準備 WOFF2 和 WOFF 格式以確保相容性

### 步驟 2：重新命名檔案
將您的字型檔案重新命名為：
- `custom-regular.woff2` / `custom-regular.woff` (一般字重)
- `custom-bold.woff2` / `custom-bold.woff` (粗體字重)

### 步驟 3：放置檔案
將檔案複製到 `public/fonts/` 目錄

### 步驟 4：測試
重新啟動開發伺服器並檢查字型是否正確載入

## 進階配置

### 添加更多字重
如果您需要更多字重（如 Light、Medium 等），可以在 `global.css` 中添加：

```css
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-light.woff2") format("woff2"),
       url("/fonts/custom-light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-medium.woff2") format("woff2"),
       url("/fonts/custom-medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

### 添加斜體字型
```css
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-italic.woff2") format("woff2"),
       url("/fonts/custom-italic.woff") format("woff");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
```

### 更改字型名稱
如果您想使用不同的字型名稱，請：

1. 在 `@font-face` 規則中更改 `font-family` 值
2. 在 `body` 選擇器中更新 `font-family` 屬性

例如：
```css
@font-face {
  font-family: "MyAwesomeFont";  /* 更改這裡 */
  /* ... */
}

body {
  font-family: "MyAwesomeFont", "Atkinson", sans-serif;  /* 和這裡 */
}
```

## 效能最佳化

### 字型預載入
在 `src/components/BaseHead.astro` 中添加字型預載入：

```html
<link rel="preload" href="/fonts/custom-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/custom-bold.woff2" as="font" type="font/woff2" crossorigin>
```

### 字型顯示策略
- `font-display: swap` - 立即顯示備用字型，載入完成後切換
- `font-display: fallback` - 短暫等待，然後顯示備用字型
- `font-display: optional` - 僅在快速載入時使用自訂字型

## 疑難排解

### 字型未載入
1. 檢查檔案路徑是否正確
2. 確認檔案名稱拼寫正確
3. 檢查瀏覽器開發者工具的網路標籤
4. 驗證字型檔案格式是否支援

### 字型顯示異常
1. 清除瀏覽器快取
2. 檢查字型檔案是否損壞
3. 確認字型授權和格式相容性

## 推薦字型資源

### 免費字型
- [Google Fonts](https://fonts.google.com/)
- [Adobe Fonts](https://fonts.adobe.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)

### 字型轉換工具
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/)

---

現在您可以開始使用自訂字型了！記得確保您有使用字型的合法授權。