# Typography 文本

### 介紹

文本的基本格式。

### 引入

```js
import { Typography } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
<Typography.Text>這是一條文本</Typography.Text>
<Typography.Title>這是一條標題</Typography.Title>
<Typography.Link>這是一條鏈接</Typography.Link>
```

### 類型

設置 `type` 屬性後，文本會展示不同的 ui 狀態。

```jsx
<Typography.Text type="danger">這是一條文本</Typography.Text>
<Typography.Text type="primary">這是一條文本</Typography.Text>
<Typography.Text type="warning">這是一條文本</Typography.Text>
<Typography.Text type="secondary">這是一條文本</Typography.Text>
```

## API

### Typography.Text Typography.Link Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 文本類型，可選值`danger` ` secondary` `light` `primary` `success` `warning ` | _string_ | - |
| size | 文本大小，可選值`xs` `sm` `md` `lg` `xl` `xxl` | _boolean_ | `md` |
| disabled | 禁用文本 | _boolean_ | `false` |
| ellipsis | 文本省略 | _boolean_ _number_ | `false` |
| delete | 添加刪除線樣式 | _boolean_ | `false` |
| underline | 添加下劃線樣式 | _boolean_ | `false` |
| center | 文本居中 | _boolean_ | `false` |
| strong | 文本加粗 | _boolean_ | `false` |
| onClick | 點擊事件 | _function_ | - |

### Typography.Title Props

| 參數  | 說明                                 | 類型     | 默認值 |
| ----- | ------------------------------------ | -------- | ------ |
| level | 重要程度，可選值 `1` `2` `3` `4` `5` | _number_ | `4`    |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                            | 默認值                     | 描述 |
| ------------------------------- | -------------------------- | ---- |
| --rc-typography-color           | _var(--rc-text-color)_     | -    |
| --rc-typography-link-color      | _var(--rc-primary-color)_  | -    |
| --rc-typography-font-size       | _var(--rc-font-size-md)_   | -    |
| --rc-typography-line-height     | _var(--rc-line-height-md)_ | -    |
| --rc-typography-primary-color   | _var(--rc-primary-color)_  | -    |
| --rc-typography-danger-color    | _var(--rc-danger-color)_   | -    |
| --rc-typography-success-color   | _var(--rc-success-color)_  | -    |
| --rc-typography-warning-color   | _var(--rc-warning-color)_  | -    |
| --rc-typography-secondary-color | _var(--rc-gray-6)_         | -    |
| --rc-typography-disabled-color  | _var(--rc-gray-5)_         | -    |
| --rc-typography-light-color     | _var(--rc-white-color)_    | -    |

