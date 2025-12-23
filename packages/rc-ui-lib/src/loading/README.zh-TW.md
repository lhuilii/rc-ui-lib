# Loading 載入

### 介紹

載入圖標，用於表示載入中的過渡狀態。

### 引入

```js
import { Loading } from 'rc-ui-lib';
```

## 程式碼演示

### 載入類型

通過 `type` 屬性可以設置載入圖標的類型，默認為 `circular`，可選值為 `spinner` 和 `ball`。

```jsx
<Loading />

<Loading type="spinner" />

<Loading type="ball" />
```

### 自定義顏色

通過 `color` 屬性設置載入圖標的顏色。

```jsx
<Loading color="#1989fa" />

<Loading type="spinner" color="#1989fa" />
```

### 自定義大小

通過 `size` 屬性設置載入圖標的大小，默認單位為 `px`。

```jsx
<Loading size="24" />

<Loading type="spinner" size="24px" />
```

### 載入文案

可以使用默認插槽在圖標的右側插入載入文案。

```jsx
<Loading size="24px">載入中...</Loading>
```

### 垂直排列

設置 `vertical` 屬性後，圖標和文案會垂直排列。

```jsx
<Loading size="24px" vertical>
  載入中...
</Loading>
```

## API

### Props

| 參數      | 說明                         | 類型               | 默認值     |
| --------- | ---------------------------- | ------------------ | ---------- |
| color     | 顏色                         | _string_           | `#c9c9c9`  |
| type      | 類型，可選值為 `spinner`     | _string_           | `circular` |
| size      | 載入圖標大小，默認單位為`px` | _number \| string_ | `30px`     |
| textSize  | 文字大小，默認單位為`px`     | _number \| string_ | `14px`     |
| textColor | 文字顏色                     | _string_           | `#c9c9c9`  |
| vertical  | 是否垂直排列圖標和文字內容   | _boolean_          | `false`    |

### 類型定義

元件導出以下類型定義：

```js
import type { LoadingType } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                    | 默認值                   | 描述 |
| --------------------------------------- | ------------------------ | ---- |
| --rc-loading-text-color                 | _var(--rc-gray-6)_       | -    |
| --rc-loading-text-font-size             | _var(--rc-font-size-md)_ | -    |
| --rc-loading-spinner-color              | _var(--rc-gray-5)_       | -    |
| --rc-loading-spinner-size               | _30px_                   | -    |
| --rc-loading-spinner-animation-duration | _0.8s_                   | -    |

