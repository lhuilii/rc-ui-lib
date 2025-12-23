# FloatingBubble 浮動氣泡

### 介紹

懸浮在頁面邊緣的可點擊氣泡。請升級 `rc-ui-lib` 到 >= 2.1.0 版本來使用該元件。

### 引入

```js
import { FloatingBubble } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

浮動氣泡默認展示在右下角，並允許在 y 軸方向上下拖拽，你可以通過 `icon` 屬性設置氣泡的圖標。

```jsx
const onClick = () => {
  Toast('點擊氣泡');
};
<FloatingBubble icon="chat" onClick={onClick} />;
```

### 自由拖拽和磁吸

允許 x 和 y 軸方向拖拽，吸附到 x 軸方向最近一邊。

```jsx
const onOffsetChange = (offset) => {
  Toast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
};
<FloatingBubble axis="xy" icon="chat" magnetic="x" onOffsetChange={onOffsetChange} />;
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| offset | 氣泡初始位置 | _OffsetType_ | `默認右下角坐標` |
| axis | 拖拽的方向，`xy` 代表自由拖拽，`lock` 代表禁止拖拽 | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | 自動磁吸的方向 | _'x' \| 'y'_ | - |
| icon | 氣泡圖標名稱或圖片鏈接，等同於 Icon 元件的 name 屬性 | _string_ | - |
| gap | 氣泡與窗口的最小間距，單位為 `px` | _number_ | `24` |
| teleport | 指定掛載的節點 | _HTMLElment () => HTMLElement_ | `body` |

### Events

| 事件名         | 說明                         | 回調參數                 |
| -------------- | ---------------------------- | ------------------------ |
| onClick        | 點擊元件時觸發               | _MouseEvent_             |
| onOffsetChange | 由用戶拖拽結束位置改變後觸發 | _{x: string, y: string}_ |

### 類型定義

元件導出以下類型定義：

```ts
export type {
  FloatingBubbleProps,
  FloatingBubbleThemeVars,
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
  FloatingBubbleBoundary,
} from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                               | 默認值                               | 描述 |
| ---------------------------------- | ------------------------------------ | ---- |
| --rc-floating-bubble-size          | _48px_                               | -    |
| --rc-floating-bubble-initial-gap   | _24px_                               | -    |
| --rc-floating-bubble-icon-size     | _28px_                               | -    |
| --rc-floating-bubble-background    | _var(--rc-primary-color)_            | -    |
| --rc-floating-bubble-color         | _var(--rc-primary-color)_            | -    |
| --rc-floating-bubble-z-index       | _999_                                | -    |
| --rc-floating-bubble-border-radius | _--rc-floating-bubble-border-radius_ | -    |

