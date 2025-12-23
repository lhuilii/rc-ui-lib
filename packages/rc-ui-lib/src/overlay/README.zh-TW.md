# Overlay 遮罩層

### 介紹

創建一個遮罩層，用於強調特定的頁面元素，並阻止用戶進行其他操作。

### 引入

```js
import { Overlay } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
const [show, setShow] = useState(false);

<Button type="primary" onClick={() => setShow(true)}>顯示遮罩層</Button>
<Overlay visible={show} onClick={() => setShow(false)} />
```

### 嵌入內容

通過默認插槽可以在遮罩層上嵌入任意內容。

```jsx
const [showEmbedded, setShowEmbedded] = useState(false);

<Button type="primary" onClick={() => setShowEmbedded(true)}>嵌入內容</Button>
<Overlay visible={showEmbedded} onClick={() => setShowEmbedded(false)}>
  <div className="wrapper">
    <div className="block" />
  </div>
</Overlay>
```

## API

### Props

| 參數        | 說明                                             | 類型               | 默認值  |
| ----------- | ------------------------------------------------ | ------------------ | ------- |
| visible     | 是否展示遮罩層                                   | _boolean_          | `false` |
| zIndex      | z-index 層級                                     | _number \| string_ | `1`     |
| duration    | 動畫時長，單位毫秒                               | _number \| string_ | `0.3`   |
| className   | 自定義類名                                       | _string_           | -       |
| customStyle | 自定義樣式                                       | _object_           | -       |
| lockScroll  | 是否鎖定背景滾動，鎖定時蒙層裡的內容也將無法滾動 | _boolean_          | `true`  |

### Events

| 事件名  | 說明       | 回調參數       |
| ------- | ---------- | -------------- |
| onClick | 點擊時觸發 | _event: Event_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                          | 默認值               | 描述 |
| ----------------------------- | -------------------- | ---- |
| --rc-overlay-z-index          | _1_                  | -    |
| --rc-overlay-background-color | _rgba(0, 0, 0, 0.7)_ | -    |

