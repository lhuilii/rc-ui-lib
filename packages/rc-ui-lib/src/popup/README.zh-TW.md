# Popup 彈出層

### 介紹

彈出層容器，用於展示彈窗、信息提示等內容，支持多個彈出層疊加展示。

### 引入

```js
import { Popup } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `visible` 以及 `onClose` 控制彈出層是否展示。

```js
const [showPopup, setShowPopup] = useState(false);
```

```jsx
<Cell title="展示彈出層" isLink onClick={() => setShowPopup(true)} />
<Popup
  visible={showPopup}
  onClose={() => setShowPopup(false)}>
  內容
</Popup>
```

### 彈出位置

通過 `position` 屬性設置彈出位置，默認居中彈出，可以設置為 `top`、`bottom`、`left`、`right`。

```jsx
<Popup visible={show} position="top" style={{ height: '30%' }} />
```

### 關閉圖標

設置 `closeable` 屬性後，會在彈出層的右上角顯示關閉圖標，並且可以通過 `closeIcon` 屬性自定義圖標，使用 `closeIconPosition` 屬性可以自定義圖標位置。

```jsx
<Popup visible={show} closeable position="bottom" style={{ height: "30%" }} />
<!-- 自定義圖標 -->
<Popup visible={show} closeable closeIcon="close" position="bottom" style={{ height: "30%" }} />
<!-- 圖標位置 -->
<Popup
  visible={show}
  closeable
  closeIconPosition="top-left"
  position="bottom"
  style={{ height: "30%" }}
/>
```

### 圓角彈窗

設置 `round` 屬性後，彈窗會根據彈出位置添加不同的圓角樣式。

```jsx
<Popup visible={show} round position="bottom" style={{ height: '30%' }} />
```

### 標題彈窗

設置 `title` 和 `description` 屬性後，彈窗會顯示標題和描述文字，建議在 `bottom` 彈框下使用。

```jsx
<Popup
  visible={show}
  closeable
  title="標題"
  description="這是一段很長很長的描述"
  style={{ height: '30%' }}
  position="bottom"
  round
/>
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示彈出層 | _boolean_ | `false` |
| className | popup 類名 | _boolean_ | - |
| overlay | 是否顯示遮罩層 | _boolean_ | `true` |
| position | 彈出位置，可選值為 `top` `bottom` `right` `left` | _string_ | `center` |
| overlayClass | 自定義遮罩層類名 | _string_ | - |
| overlayStyle | 自定義遮罩層樣式 | _object_ | - |
| duration | 動畫時長，單位秒 | _number \| string_ | `0.3` |
| round | 是否顯示圓角 | _boolean_ | `false` |
| title | 彈出層標題 | _string_ | - |
| description | 彈出層描述 | _string_ | - |
| lockScroll | 是否鎖定背景滾動 | _boolean_ | `true` |
| destroyOnClose | 關閉時銷毀 Popup 裡的子元素 | _boolean_ | `false` |
| preventDefaultMouseDown | 是否禁止 mouseDown 事件，禁止後可防止 onBlur 事件冒泡 | _boolean_ | `false` |
| closeOnPopstate | 是否在頁面回退時自動關閉 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉 | _boolean_ | `true` |
| closeable | 是否顯示關閉圖標 | _boolean_ | `false` |
| closeIcon | 關閉圖標名稱或圖片鏈接 | _string_ | `cross` |
| closeIconPosition | 關閉圖標位置，可選值為`top-left`<br/>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | 動畫類名，等價於 transtion 的`name`屬性 | _string_ | - |
| teleport | 指定掛載的節點 | _HTMLElement_ | _(() => HTMLElement)_ |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名           | 說明                       | 回調參數       |
| ---------------- | -------------------------- | -------------- |
| onClick          | 點擊彈出層時觸發           | _event: Event_ |
| onClickOverlay   | 點擊遮罩層時觸發           | -              |
| onClickCloseIcon | 點擊關閉圖標時觸發         | _event: Event_ |
| onOpen           | 打開彈出層時觸發           | -              |
| onClose          | 關閉彈出層時觸發           | -              |
| onOpened         | 打開彈出層且動畫結束後觸發 | -              |
| onClosed         | 關閉彈出層且動畫結束後觸發 | -              |

### 類型定義

元件導出以下類型定義：

```js
import type { PopupPosition, PopupCloseIconPosition } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                               | 默認值                                        | 描述 |
| ---------------------------------- | --------------------------------------------- | ---- |
| --rc-popup-background-color        | _var(--rc-white)_                             | -    |
| --rc-popup-transition              | _transform var(--rc-animation-duration-base)_ | -    |
| --rc-popup-round-border-radius     | _16px_                                        | -    |
| --rc-popup-close-icon-size         | _22px_                                        | -    |
| --rc-popup-close-icon-color        | _var(--rc-gray-5)_                            | -    |
| --rc-popup-close-icon-active-color | _var(--rc-gray-6)_                            | -    |
| --rc-popup-close-icon-margin       | _16px_                                        | -    |
| --rc-popup-close-icon-z-index      | _1_                                           | -    |

