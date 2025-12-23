# Image 圖片

### 介紹

增強版的 img 標籤，提供多種圖片填充模式，支持圖片懶加載、載入中提示、載入失敗提示。

### 引入

```js
import { Image } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

基礎用法與原生 `img` 標籤一致，可以設置 `src`、`width`、`height`、`alt` 等原生屬性。

```jsx
<Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 填充模式

通過 `fit` 屬性可以設置圖片填充模式，可選值見下方表格。

```jsx
<Image width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 圓形圖片

通過 `round` 屬性可以設置圖片變圓，注意當圖片寬高不相等且 `fit` 為 `contain` 或 `scale-down` 時，將無法填充一個完整的圓形。

```jsx
<Image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 載入中提示

`Image` 元件提供了默認的載入中提示，支持通過 `loadingIcon` 自定義內容。

```jsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" loadingIcon={<Loading type="spinner" />} />
```

### 載入失敗提示

`Image` 元件提供了默認的載入失敗提示，支持通過 `errorIcon` 自定義內容。

```jsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" errorIcon={<div>載入失敗</div>} />
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| src | 圖片鏈接 | _string_ | - |
| fit | 圖片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 寬度，默認單位為 `px` | _number \| string_ | - |
| height | 高度，默認單位為 `px` | _number \| string_ | - |
| radius | 圓角大小，默認單位為 `px` | _number \| string_ | `0` |
| round | 是否顯示為圓形 | _boolean_ | `false` |
| showError | 是否展示圖片載入失敗提示 | _boolean_ | `true` |
| showLoading | 是否展示圖片載入中提示 | _boolean_ | `true` |
| errorIcon | 失敗時提示的圖標 | _string\|ReactNode_ | `photo-fail` |
| loadingIcon | 載入時提示的圖標 | _string\|ReactNode_ | `photo` |
| iconSize | 載入圖標和失敗圖標的大小 | _number \| string_ | `32px` |
| iconPrefix | 圖標類名前綴，同 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### 圖片填充模式 

| 名稱       | 含義                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持寬高縮放圖片，使圖片的長邊能完全顯示出來           |
| cover      | 保持寬高縮放圖片，使圖片的短邊能完全顯示出來，裁剪長邊 |
| fill       | 拉伸圖片，使圖片填滿元素                               |
| none       | 保持圖片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中較小的一個                    |

### Events

| 事件名  | 說明               | 回調參數            |
| ------- | ------------------ | ------------------- |
| onClick | 點擊圖片時觸發     | _event: MouseEvent_ |
| onLoad  | 圖片載入完畢時觸發 | -                   |
| onError | 圖片載入失敗時觸發 | -                   |

### 類型定義

元件導出以下類型定義：

```js
import type { ImageFit } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                    | 默認值                       | 描述 |
| --------------------------------------- | ---------------------------- | ---- |
| --rc-image-placeholder-text-color       | _var(--rc-gray-6)_           | -    |
| --rc-image-placeholder-font-size        | _var(--rc-font-size-md)_     | -    |
| --rc-image-placeholder-background-color | _var(--rc-background-color)_ | -    |
| --rc-image-loading-icon-size            | _32px_                       | -    |
| --rc-image-loading-icon-color           | _var(--rc-gray-4)_           | -    |
| --rc-image-error-icon-size              | _32px_                       | -    |
| --rc-image-error-icon-color             | _var(--rc-gray-4)_           | -    |

## 常見問題

### 如何引用本地圖片？

在 .tsx, jsx 文件中通過相對路徑引用本地圖片時，需要在圖片的鏈接外包上一層 `require()`，將圖片 URL 轉換為 webpack 模塊請求，並結合 [file-loader](https://github.com/webpack-contrib/file-loader) 或者 [url-loader](https://github.com/webpack-contrib/url-loader) 進行處理。

```jsx
// 錯誤寫法
<Image src="./image.png" />

// 正確寫法
<Image src="require('./image.png')" />
```

