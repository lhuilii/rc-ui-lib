# Button 按鈕

### 介紹

按鈕用於觸發一個操作，如提交表單。

### 引入

```js
import { Button } from 'rc-ui-lib';
```

## 程式碼演示

### 按鈕類型

按鈕支持 `default`、`primary`、`info`、`warning`、`danger` 五種類型，默認為 `default`。

```jsx
<Button type="primary">主要按鈕</Button>
<Button type="info">信息按鈕</Button>
<Button type="default">默認按鈕</Button>
<Button type="warning">警告按鈕</Button>
<Button type="danger">危險按鈕</Button>
```

### 樸素按鈕

通過 `plain` 屬性將按鈕設置為樸素按鈕，樸素按鈕的文字為按鈕顏色，背景為白色。

```jsx
<Button plain type="primary">樸素按鈕</Button>
<Button plain type="primary">樸素按鈕</Button>
```

### 細邊框

設置 `hairline` 屬性可以展示 0.5px 的細邊框。

```jsx
<Button plain hairline type="primary">細邊框按鈕</Button>
<Button plain hairline type="primary">細邊框按鈕</Button>
```

### 禁用狀態

通過 `disabled` 屬性來禁用按鈕，禁用狀態下按鈕不可點擊。

```jsx
<Button disabled type="primary">禁用狀態</Button>
<Button disabled type="primary">禁用狀態</Button>
```

### 載入狀態

通過 `loading` 屬性設置按鈕為載入狀態，載入狀態下默認會隱藏按鈕文字，可以通過 `loadingText` 設置載入狀態下的文字。

```jsx
<Button loading type="primary" />
<Button loading type="primary" loadingType="spinner" />
<Button loading type="primary" loadingText="載入中..." />
```

### 按鈕形狀

通過 `square` 設置方形按鈕，通過 `round` 設置圓形按鈕。

```jsx
<Button type="primary" square>方形按鈕</Button>
<Button type="primary" round>圓形按鈕</Button>
```

### 圖標按鈕

通過 `icon` 屬性設置按鈕圖標，支持 Icon 元件裡的所有圖標，也可以傳入圖標 URL。

```jsx
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">按鈕</Button>
<Button icon="https://img.yzcdn.cn/vant/user-active.png" plain type="primary">按鈕</Button>
```

### 按鈕尺寸

支持 `large`、`normal`、`small`、`mini` 四種尺寸，默認為 `normal`。

```jsx
<Button type="primary" size="large">大號按鈕</Button>
<Button type="primary" size="normal">普通按鈕</Button>
<Button type="primary" size="small">小型按鈕</Button>
<Button type="primary" size="mini">迷你按鈕</Button>
```

### 塊級元素

按鈕在默認情況下為行內塊級元素，通過 `block` 屬性可以將按鈕的元素類型設置為塊級元素。

```jsx
<Button type="primary" block>
  塊級元素
</Button>
```

### 自定義顏色

通過 `color` 屬性可以自定義按鈕的顏色。

```jsx
<Button color="#7232dd">單色按鈕</Button>
<Button color="#7232dd" plain>單色按鈕</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">漸變色按鈕</Button>
```

### 按鈕組

通過 `Button.Group`將多個按鈕並排顯示。

```jsx
<Button.Group>
  <Button block>上一步</Button>
  <Button block type="primary">
    下一步
  </Button>
</Button.Group>
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，可選值為 `primary` `info` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可選值為 `large` `small` `mini` | _string_ | `normal` |
| text | 按鈕文字 | _string_ | - |
| color | 按鈕顏色，支持傳入 `linear-gradient` 漸變色 | _string_ | - |
| icon | 左側名稱 | _string\|ReactNode_ | - |
| iconPrefix | 圖標類名前綴，同 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| iconPosition | 圖標展示位置，可選值為 `right` | _string_ | `left` |
| tag | 按鈕根節點的 HTML 標籤 | _string_ | `Button` |
| nativeType | 原生 Button 標籤的 type 屬性 | _string_ | `Button` |
| block | 是否為塊級元素 | _boolean_ | `false` |
| plain | 是否為樸素按鈕 | _boolean_ | `false` |
| square | 是否為方形按鈕 | _boolean_ | `false` |
| round | 是否為圓形按鈕 | _boolean_ | `false` |
| shadow | 顯示陰影，可選值為 `1` `2` `3` | _boolean_ _number_ | `false` |
| disabled | 是否禁用按鈕 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 邊框 | _boolean_ | `false` |
| loading | 是否顯示為載入狀態 | _boolean_ | `false` |
| loadingText | 載入狀態提示文字 | _string_ | - |
| loadingType | [載入圖標類型](#/zh-CN/loading)，可選值為 `spinner` | _string_ | `circular` |
| loadingSize | 載入圖標大小 | _string_ | `20px` |

### Events

| 事件名  | 說明                                     | 回調參數       |
| ------- | ---------------------------------------- | -------------- |
| onClick | 點擊按鈕，且按鈕狀態不為載入或禁用時觸發 | _event: Event_ |

### 類型定義

元件導出以下類型定義：

```js
import type { ButtonType, ButtonSize } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 默認值                        | 描述 |
| ------------------------------------ | ----------------------------- | ---- |
| --rc-button-mini-height              | _24px_                        | -    |
| --rc-button-mini-padding             | _0 var(--rc-padding-base)_    | -    |
| --rc-button-mini-font-size           | _var(--rc-font-size-xs)_      | -    |
| --rc-button-small-height             | _32px_                        | -    |
| --rc-button-small-padding            | _0 var(--rc-padding-xs)_      | -    |
| --rc-button-small-font-size          | _var(--rc-font-size-sm)_      | -    |
| --rc-button-normal-font-size         | _var(--rc-font-size-md)_      | -    |
| --rc-button-normal-padding           | _0 15px_                      | -    |
| --rc-button-large-height             | _50px_                        | -    |
| --rc-button-default-height           | _44px_                        | -    |
| --rc-button-default-line-height      | _1.2_                         | -    |
| --rc-button-default-font-size        | _var(--rc-font-size-lg)_      | -    |
| --rc-button-default-color            | _var(--rc-text-color)_        | -    |
| --rc-button-default-background-color | _var(--rc-white)_             | -    |
| --rc-button-default-border-color     | _var(--rc-border-color)_      | -    |
| --rc-button-primary-color            | _var(--rc-white)_             | -    |
| --rc-button-primary-background-color | _var(--rc-primary-color)_     | -    |
| --rc-button-primary-border-color     | _var(--rc-primary-color)_     | -    |
| --rc-button-success-color            | _var(--rc-white)_             | -    |
| --rc-button-success-background-color | _var(--rc-success-color)_     | -    |
| --rc-button-success-border-color     | _var(--rc-success-color)_     | -    |
| --rc-button-danger-color             | _var(--rc-white)_             | -    |
| --rc-button-danger-background-color  | _var(--rc-danger-color)_      | -    |
| --rc-button-danger-border-color      | _var(--rc-danger-color)_      | -    |
| --rc-button-warning-color            | _var(--rc-white)_             | -    |
| --rc-button-warning-background-color | _var(--rc-orange)_            | -    |
| --rc-button-warning-border-color     | _var(--rc-orange)_            | -    |
| --rc-button-border-width             | _var(--rc-border-width-base)_ | -    |
| --rc-button-border-radius            | _var(--rc-border-radius-sm)_  | -    |
| --rc-button-round-border-radius      | _var(--rc-border-radius-max)_ | -    |
| --rc-button-plain-background-color   | _var(--rc-white)_             | -    |
| --rc-button-disabled-opacity         | _var(--rc-disabled-opacity)_  | -    |
| --rc-button-icon-size                | _1.2em_                       | -    |
| --rc-button-loading-icon-size        | _20px_                        | -    |

