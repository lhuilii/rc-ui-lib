# Divider 分隔線

### 介紹

用於將內容分隔為多個區域。

### 引入

```js
import { Divider } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

預設會渲染一條水平分隔線。

```jsx
<Divider />
```

### 顯示文字

透過子內容可以在分隔線中間插入文字。

```jsx
<Divider>文字</Divider>
```

### 內容位置

透過 `contentPosition` 指定內容所在位置。

```jsx
<Divider content-position="left">文字</Divider>
<Divider content-position="right">文字</Divider>
```

### 虛線

新增 `dashed` 屬性使分隔線渲染為虛線。

```jsx
<Divider dashed>文字</Divider>
```

### 自訂樣式

可以直接透過 `style` 屬性設定分隔線的樣式。

```jsx
<Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>文字</Divider>
```

## API

### Props

| 參數            | 說明                              | 型別                  | 預設值   |
| --------------- | --------------------------------- | --------------------- | -------- |
| dashed          | 是否使用虛線                      | _boolean_             | `false`  |
| hairline        | 是否使用 0.5px 線                 | _boolean_             | `true`   |
| contentPosition | 內容位置，可選值為 `left` `right` | _string_              | `center` |
| className       | 類名                              | _string_              | -        |
| style           | 樣式                              | _React.CSSProperties_ | -        |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                             | 預設值                   | 描述 |
| -------------------------------- | ------------------------ | ---- |
| --rc-divider-margin              | _var(--rc-padding-md) 0_ | -    |
| --rc-divider-text-color          | _var(--rc-gray-6)_       | -    |
| --rc-divider-font-size           | _var(--rc-font-size-md)_ | -    |
| --rc-divider-line-height         | _24px_                   | -    |
| --rc-divider-border-color        | _var(--rc-border-color)_ | -    |
| --rc-divider-content-padding     | _var(--rc-padding-md)_   | -    |
| --rc-divider-content-left-width  | _10%_                    | -    |
| --rc-divider-content-right-width | _10%_                    | -    |


