# 字型檔案目錄

此目錄包含網站使用的字型檔案。

## 當前字型檔案

### 現有字型
- `atkinson-regular.woff` - Atkinson 字型（一般字重）
- `atkinson-bold.woff` - Atkinson 字型（粗體）

### 需要添加的自訂字型
為了使用自訂字型，您需要添加以下檔案：

- `custom-regular.woff2` - 自訂字型（一般字重，WOFF2 格式）
- `custom-regular.woff` - 自訂字型（一般字重，WOFF 格式）
- `custom-bold.woff2` - 自訂字型（粗體，WOFF2 格式）
- `custom-bold.woff` - 自訂字型（粗體，WOFF 格式）

## 如何獲取字型檔案

### 方法 1：從 Google Fonts 下載
1. 前往 [Google Fonts](https://fonts.google.com/)
2. 選擇您喜歡的字型
3. 點擊「Download family」
4. 使用線上轉換工具將 TTF 轉換為 WOFF/WOFF2 格式

### 方法 2：使用現有字型檔案
如果您已有 TTF 或 OTF 字型檔案：
1. 使用 [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
2. 上傳您的字型檔案
3. 選擇「Optimal」設定
4. 下載生成的 WOFF 和 WOFF2 檔案

### 方法 3：購買商業字型
從字型廠商購買授權並下載 Web 字型格式

## 檔案命名規則

請確保您的字型檔案遵循以下命名規則：

```
custom-regular.woff2    # 主要字重，WOFF2 格式
custom-regular.woff     # 主要字重，WOFF 格式
custom-bold.woff2       # 粗體字重，WOFF2 格式
custom-bold.woff        # 粗體字重，WOFF 格式
```

## 授權注意事項

⚠️ **重要**：請確保您有使用所選字型的合法授權。

- 免費字型：檢查授權條款
- 商業字型：確保購買了 Web 字型授權
- Google Fonts：大多數都是開源授權

## 測試字型

添加字型檔案後：
1. 重新啟動開發伺服器
2. 檢查瀏覽器開發者工具的網路標籤
3. 確認字型檔案成功載入
4. 檢查網站文字是否使用新字型

## 疑難排解

如果字型未正確顯示：
1. 檢查檔案名稱是否正確
2. 確認檔案格式是否支援
3. 清除瀏覽器快取
4. 檢查字型檔案是否損壞

---

更多詳細資訊請參考專案根目錄的 `CUSTOM_FONTS_GUIDE.md`。