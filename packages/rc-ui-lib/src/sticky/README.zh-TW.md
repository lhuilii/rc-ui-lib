# Sticky 粘性佈局

### 介紹

Sticky 元件與 CSS 中`position: sticky`屬性實現的效果一致，當元件在屏幕範圍內時，會按照正常的佈局排列，當元件滾出屏幕範圍時，始終會固定在屏幕頂部。

### 引入

```js
import { Sticky } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

將內容包裹在 `Sticky` 元件內即可。

```jsx
<Sticky>
  <Button type="primary">基礎用法</Button>
</Sticky>
```

### 吸頂距離

通過 `offsetTop` 屬性可以設置元件在吸頂時與頂部的距離。

```jsx
<Sticky offsetTop={50}>
  <Button type="info">吸頂距離</Button>
</Sticky>
```

### 指定容器

通過 `container` 屬性可以指定元件的容器，頁面滾動時，元件會始終保持在容器範圍內，當元件即將超出容器底部時，會固定在容器的底部。

```js
const container = useRef(null);
```

```jsx
<div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
  <Sticky container={container}>
    <Button type="warning" style={{ marginLeft: '215px' }}>
      指定容器
    </Button>
  </Sticky>
</div>
```

### 吸底距離

將 `position` 設置為 `bottom` 可以讓元件吸附在底部。通過 `offsetBottom` 屬性可以設置元件在吸底時與底部的距離。

```jsx
<Sticky position="bottom" offsetBottom={50}>
  <Button type="info">吸底距離</Button>
</Sticky>
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| position | 吸附位置，可選值為 `bottom` | _string_ | `top` |
| offsetTop | 吸頂時與頂部的距離，支持 `px` `vw` `vh` `rem` 單位，默認 `px` | _number \| string_ | `0` |
| offsetBottom | 吸底時與底部的距離，支持 `px` `vw` `vh` `rem` 單位，默認 `px` | _number \| string_ | `0` |
| zIndex | 吸頂時的 z-index | _number \| string_ | `99` |
| container | 容器對應的 HTML 節點 | _RefElement_ | - |

### Events

| 事件名   | 說明                 | 回調參數                                  |
| -------- | -------------------- | ----------------------------------------- |
| onScroll | 滾動時觸發           | _{ scrollTop: number, isFixed: boolean }_ |
| onChange | 當吸頂狀態改變時觸發 | _isFixed: boolean_                        |

### 類型定義

元件導出以下類型定義：

```js
import type { StickyPosition } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                | 默認值 | 描述 |
| ------------------- | ------ | ---- |
| --rc-sticky-z-index | _99_   | -    |

