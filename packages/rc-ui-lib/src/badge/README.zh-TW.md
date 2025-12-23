# Badge 徽標
### 介紹

在右上角展示徽標數字或小紅點。

### 引入

```js
import { Badge } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

設定 `content` 屬性後，Badge 會在子元素的右上角顯示對應的徽標，也可以透過 `dot` 來顯示小紅點。

```jsx
<Badge content="5">
  <div className="child" />
</Badge>
<Badge content="10">
  <div className="child" />
</Badge>
<Badge content="Hot">
  <div className="child" />
</Badge>
<Badge dot>
  <div className="child" />
</Badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### 最大值

設定 `max` 屬性後，當 `content` 的數值超過最大值時，會自動顯示為 `{max}+`。

```jsx
<Badge content="20" max="9">
  <div className="child" />
</Badge>
<Badge content="50" max="20">
  <div className="child" />
</Badge>
<Badge content="200" max="99">
  <div className="child" />
</Badge>
```

### 自定義顏色

透過 `color` 屬性來設定徽標的顏色。

```jsx
<Badge content="5" color="#1989fa">
  <div className="child" />
</Badge>
<Badge content="10" color="#1989fa">
  <div className="child" />
</Badge>
<Badge dot color="#1989fa">
  <div className="child" />
</Badge>
```

### 自定義徽標內容

```jsx
<Badge content={<Icon name="success" className="badge-icon" />}>
  <div className="child" />
</Badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```
### 自定義徽標位置

透過 `position` 屬性來設定徽標的位置。

```jsx
<Badge content="10" position="top-left">
  <div className="child" />
</Badge>
<Badge content="10" position="bottom-left">
  <div className="child" />
</Badge>
<Badge content="10" position="bottom-right">
  <div className="child" />
</Badge>
```


### 獨立展示

當 Badge 沒有子元素時，會作為一個獨立的元素進行展示。

```jsx
<Badge content="20" />

<Badge content="200" max="99" />
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| content | 徽標內容 | _ReactNode_ | - |
| color | 徽標背景顏色 | _string_ | `#f44336` |
| dot | 是否展示為小紅點 | _boolean_ | `false` |
| max | 最大值，超過最大值會顯示 `{max}+`，僅當 content 為數字時有效 | _number \| string_ | - |
| offset | 設定徽標的偏移量，陣列的兩項分別對應水平和垂直方向的偏移量，預設單位為 `px` | _[number \| string, number \| string]_ | - |
| showZero | 當 content 為數字 0 時，是否展示徽標 | _boolean_ | `true` |
| position | 徽標位置，可選值為 `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### 事件

| 事件名  | 說明       | 回調參數       |
| ------- | ---------- | -------------- |
| onClick | 點擊時觸發 | _event: Event_ |

### 型別定義

元件導出以下型別定義：

```ts
import type { BadgeProps, BadgePosition, BadgeThemeVars } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/config-provider)。

| 名稱                        | 預設值                                                  | 描述 |
| --------------------------- | ------------------------------------------------------- | ---- |
| --rc-badge-size             | _16px_                                                  | -    |
| --rc-badge-color            | _var(--rc-white)_                                       | -    |
| --rc-badge-padding          | _0 3px_                                                 | -    |
| --rc-badge-font-size        | _var(--rc-font-size-sm)_                                | -    |
| --rc-badge-font-weight      | _var(--rc-font-weight-bold)_                            | -    |
| --rc-badge-border-width     | _var(--rc-border-width-base)_                           | -    |
| --rc-badge-background-color | _var(--rc-danger-color)_                                | -    |
| --rc-badge-dot-color        | _var(--rc-danger-color)_                                | -    |
| --rc-badge-dot-size         | _8px_                                                   | -    |
| --rc-badge-font-family      | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | -    |


