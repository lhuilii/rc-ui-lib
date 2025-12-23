# Cell 單元格

### 介紹

單元格為列表中的單個展示項。

### 引入

```js
import { Cell } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`Cell` 可以單獨使用，也可以與 `Cell.Group` 搭配使用，`Cell.Group` 可以為 `Cell` 提供上下外邊框。

```jsx
<Cell.Group>
  <Cell title="單元格" value="內容" />
  <Cell title="單元格" value="內容" label="描述資訊" />
</Cell.Group>
```

### 單元格大小

透過 `size` 屬性可以控制單元格的大小。

```jsx
<Cell title="單元格" value="內容" size="large" />
<Cell title="單元格" value="內容" label="描述資訊" size="large" />
```

### 展示圖示

透過 `icon` 屬性在標題左側展示圖示。

```jsx
<Cell title="單元格" icon="location-o" />
```

### 僅設定 value

僅設定 `value` 時，內容會靠左對齊。

```jsx
<Cell value="內容" />
```

### 展示箭頭

設定 `isLink` 屬性後會在單元格右側顯示箭頭，並且可以透過 `arrowDirection` 屬性控制箭頭方向。

```jsx
<Cell title="單元格" isLink />
<Cell title="單元格" isLink value="內容" />
<Cell title="單元格" isLink arrowDirection="down" value="內容" />
```

### 分組標題

透過 `Cell.Group` 的 `title` 屬性可以指定分組標題。

```jsx
<Cell.Group title="分組1">
  <Cell title="單元格" value="內容" />
</Cell.Group>
<Cell.Group title="分組2">
  <Cell title="單元格" value="內容" />
</Cell.Group>
```

### 卡片類型

透過 `Cell.Group` 的 `inset` 屬性可以展示卡片類型。

```jsx
<Cell.Group inset>
  <Cell title="單元格" value="內容" />
  <Cell title="單元格" value="內容" />
</Cell.Group>
```

### 自定義內容

如以上用法無法滿足你的需求，可以來自定義內容。

```jsx
<Cell title="單元格" icon="shop-o">
  <div>自定義內容</div>
</Cell>
```

### 垂直置中

透過 `center` 屬性可以讓 `Cell` 的左右內容都垂直置中。

```jsx
<Cell center title="單元格" value="內容" label="描述資訊" />
```

## API

### Cell.Group Props

| 參數  | 說明                     | 類型      | 預設值 |
| ----- | ------------------------ | --------- | ------ |
| title | 分組標題                 | _string_  | -      |
| border | 是否顯示外邊框          | _boolean_ | `true` |
| inset | 是否展示為圓角卡片風格   | _boolean_ | -      |

### Cell Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| title | 左側標題 | _ReactNode_ | - |
| value | 右側內容 | _number \| string_ | - |
| label | 標題下方的描述資訊 | _ReactNode_ | - |
| size | 單元格大小，可選值為 `large` | _string_ | - |
| icon | 左側圖示 | _string\|ReactNode_ | - |
| rightIcon | 自定義右側按鈕，預設為 `arrow` | _string\|ReactNode_ | - |
| iconPrefix | 圖示類名前綴，同 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon) | _string_ | `van-icon` |
| border | 是否顯示內邊框 | _boolean_ | `true` |
| replace | 是否在跳轉時替換當前頁面歷史 | _boolean_ | `false` |
| clickable | 是否開啟點擊回饋 | _boolean_ | `false` |
| isLink | 是否展示右側箭頭並開啟點擊回饋 | _boolean_ | `false` |
| required | 是否顯示表單必填星號 | _boolean_ | `false` |
| center | 是否使內容垂直置中 | _boolean_ | `false` |
| arrowDirection | 箭頭方向，可選值為 `left` `up` `down` | _string_ | `right` |
| titleStyle | 左側標題額外樣式 | _string_ | - |
| titleClass | 左側標題額外類名 | _string_ | - |
| valueClass | 右側內容額外類名 | _string_ | - |
| labelClass | 描述資訊額外類名 | _string_ | - |

### Cell Events

| 事件名  | 說明             | 回調參數       |
| ------- | ---------------- | -------------- |
| onClick | 點擊單元格時觸發 | _event: Event_ |

### 型別定義

元件匯出以下型別定義：

```js
import type { CellArrowDirection } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱 | 預設值 | 描述 |
| --- | --- | --- |
| --rc-cell-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-line-height | _24px_ | - |
| --rc-cell-vertical-padding | _10px_ | - |
| --rc-cell-horizontal-padding | _var(--rc-padding-md)_ | - |
| --rc-cell-text-color | _var(--rc-text-color)_ | - |
| --rc-cell-background-color | _var(--rc-white)_ | - |
| --rc-cell-border-color | _var(--rc-border-color)_ | - |
| --rc-cell-active-color | _var(--rc-active-color)_ | - |
| --rc-cell-required-color | _var(--rc-danger-color)_ | - |
| --rc-cell-label-color | _var(--rc-gray-6)_ | - |
| --rc-cell-label-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-cell-label-line-height | _var(--rc-line-height-sm)_ | - |
| --rc-cell-label-margin-top | _var(--rc-padding-base)_ | - |
| --rc-cell-value-color | _var(--rc-gray-6)_ | - |
| --rc-cell-icon-size | _16px_ | - |
| --rc-cell-right-icon-color | _var(--rc-gray-6)_ | - |
| --rc-cell-large-vertical-padding | _var(--rc-padding-sm)_ | - |
| --rc-cell-large-title-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-cell-large-label-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-group-background-color | _var(--rc-white)_ | - |
| --rc-cell-group-title-color | _var(--rc-gray-6)_ | - |
| --rc-cell-group-title-padding | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs)_ | - |
| --rc-cell-group-title-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-group-title-line-height | _16px_ | - |
| --rc-cell-group-inset-padding | _0 var(--rc-padding-md)_ | - |
| --rc-cell-group-inset-border-radius | _var(--rc-border-radius-lg)_ | - |
| --rc-cell-group-inset-title-padding | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs) var(--rc-padding-xl)_ | - |


