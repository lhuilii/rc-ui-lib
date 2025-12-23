# Tag 標籤

### 引入

```js
import { Tag } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `type` 屬性控制標籤顏色。

```jsx
<Tag type="primary">標籤</Tag>
<Tag type="success">標籤</Tag>
<Tag type="danger">標籤</Tag>
<Tag type="warning">標籤</Tag>
```

### 空心樣式

設置 `plain` 屬性設置為空心樣式。

```jsx
<Tag plain type="primary">
  標籤
</Tag>
```

### 圓角樣式

通過 `round` 設置為圓角樣式。

```jsx
<Tag round type="primary">
  標籤
</Tag>
```

### 標記樣式

通過 `mark` 設置為標記樣式(半圓角)。

```jsx
<Tag mark type="primary">
  標籤
</Tag>
```

### 可關閉標籤

添加 `closeable` 屬性表示標籤是可關閉的，關閉標籤時會觸發 `close` 事件，在 `close` 事件中可以執行隱藏標籤的邏輯。

```jsx
<Tag visible={visible} closeable size="medium" type="primary" onClose={() => setVisible(false)}>
  標籤
</Tag>
```

### 標籤大小

通過 `size` 屬性調整標籤大小。

```jsx
<Tag type="primary" size="mini">標籤</Tag>
<Tag type="primary">標籤</Tag>
<Tag type="primary" size="medium">標籤</Tag>
<Tag type="primary" size="large">標籤</Tag>
```

### 自定義顏色

通過 `color` 和 `textColor` 屬性設置標籤顏色。

```jsx
<Tag color="#7232dd">標籤</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">標籤</Tag>
<Tag color="#7232dd" plain>標籤</Tag>
```

## API

### Props

| 參數      | 說明                                                  | 類型      | 默認值    |
| --------- | ----------------------------------------------------- | --------- | --------- |
| type      | 類型，可選值為 `primary` `success` `danger` `warning` | _string_  | `default` |
| size      | 大小, 可選值為 `large` `medium`                       | _string_  | -         |
| color     | 標籤顏色                                              | _string_  | -         |
| visible   | 是否展示標籤                                          | _boolean_ | `true`    |
| plain     | 是否為空心樣式                                        | _boolean_ | `false`   |
| round     | 是否為圓角樣式                                        | _boolean_ | `false`   |
| mark      | 是否為標記樣式                                        | _boolean_ | `false`   |
| textColor | 文本顏色，優先級高於 `color` 屬性                     | _string_  | `white`   |
| closeable | 是否為可關閉標籤                                      | _boolean_ | `false`   |

### Events

| 事件名  | 說明           | 回調參數            |
| ------- | -------------- | ------------------- |
| onClick | 點擊時觸發     | _event: MouseEvent_ |
| onClose | 關閉標籤時觸發 | _event: MouseEvent_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                            | 默認值                                        | 描述 |
| ------------------------------- | --------------------------------------------- | ---- |
| --rc-tag-padding                | _0 var(--rc-padding-base)_                    | -    |
| --rc-tag-text-color             | _var(--rc-white)_                             | -    |
| --rc-tag-font-size              | _var(--rc-font-size-sm)_                      | -    |
| --rc-tag-border-radius          | _2px_                                         | -    |
| --rc-tag-line-height            | _16px_                                        | -    |
| --rc-tag-medium-padding         | _2px 6px_                                     | -    |
| --rc-tag-large-padding          | _var(--rc-padding-base) var(--rc-padding-xs)_ | -    |
| --rc-tag-large-border-radius    | _var(--rc-border-radius-md)_                  | -    |
| --rc-tag-large-font-size        | _var(--rc-font-size-md)_                      | -    |
| --rc-tag-round-border-radius    | _var(--rc-border-radius-max)_                 | -    |
| --rc-tag-danger-color           | _var(--rc-danger-color)_                      | -    |
| --rc-tag-primary-color          | _var(--rc-primary-color)_                     | -    |
| --rc-tag-success-color          | _var(--rc-success-color)_                     | -    |
| --rc-tag-warning-color          | _var(--rc-warning-color)_                     | -    |
| --rc-tag-default-color          | _var(--rc-gray-6)_                            | -    |
| --rc-tag-plain-background-color | _var(--rc-white)_                             | -    |

