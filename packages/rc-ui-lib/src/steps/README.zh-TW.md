# Steps 步驟條

### 介紹

用於展示操作流程的各個環節，讓用戶了解當前的操作在整體流程中的位置。

### 引入

```js
import { Step, Steps } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`active` 屬性表示當前步驟的索引，從 0 起計。

```jsx
import { useState } from 'react';
import { Steps } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Steps active={active}>
      <Steps.Item>買家下單</Steps.Item>
      <Steps.Item>商家接單</Steps.Item>
      <Steps.Item>買家提貨</Steps.Item>
      <Steps.Item>交易完成</Steps.Item>
    </Steps>
  );
};
```

### 自定義樣式

可以通過 `activeIcon` 和 `activeColor` 屬性設置激活狀態下的圖標和顏色。

```jsx
<Steps active={active} activeIcon="success" activeColor="#38f">
  <Steps.Item>買家下單</Steps.Item>
  <Steps.Item>商家接單</Steps.Item>
  <Steps.Item>買家提貨</Steps.Item>
  <Steps.Item>交易完成</Steps.Item>
</Steps>
```

### 豎向步驟條

可以通過設置 `direction` 屬性來改變步驟條的顯示方向。

```jsx
<Steps direction="vertical" active={0}>
  <Steps.Item>
    <h3>【城市】物流狀態1</h3>
    <p>2016-07-12 12:40</p>
  </Steps.Item>
  <Steps.Item>
    <h3>【城市】物流狀態2</h3>
    <p>2016-07-11 10:00</p>
  </Steps.Item>
  <Steps.Item>
    <h3>快件已發貨</h3>
    <p>2016-07-10 09:30</p>
  </Steps.Item>
</Steps>
```

## API

### Steps Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| active | 當前步驟對應的索引值 | _number \| string_ | `0` |
| direction | 步驟條方向，可選值為 `vertical` | _string_ | `horizontal` |
| activeIcon | 當前步驟對應的底部圖標，可選值見 [Icon 元件](#/zh-CN/icon)，支持自定義 | _string \| React.ReactNode_ | `checked` |
| inactiveIcon | 非當前步驟對應的底部圖標，可選值見 [Icon 元件](#/zh-CN/icon)，支持自定義 | _string \| React.ReactNode_ | - |
| finishIcon | 已完成步驟對應的底部圖標，優先級高於 `inactive-icon`，可選值見 [Icon 元件](#/zh-CN/icon)，支持自定義 | _string \| React.ReactNode_ | - |
| activeColor | 當前步驟和已完成步驟的顏色 | _string_ | `#07c160` |
| inactiveColor | 未激活步驟的顏色 | _string_ | `#969799` |
| iconPrefix | 圖標類名前綴，等同於 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### Steps Events

| 事件名      | 說明                       | 回調參數        |
| ----------- | -------------------------- | --------------- |
| onClickStep | 點擊步驟的標題或圖標時觸發 | _index: number_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 默認值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --rc-step-text-color                 | _var(--rc-gray-6)_        | -    |
| --rc-step-active-color               | _var(--rc-success-color)_ | -    |
| --rc-step-process-text-color         | _var(--rc-text-color)_    | -    |
| --rc-step-font-size                  | _var(--rc-font-size-md)_  | -    |
| --rc-step-line-color                 | _var(--rc-border-color)_  | -    |
| --rc-step-finish-line-color          | _var(--rc-success-color)_ | -    |
| --rc-step-finish-text-color          | _var(--rc-text-color)_    | -    |
| --rc-step-icon-size                  | _12px_                    | -    |
| --rc-step-circle-size                | _5px_                     | -    |
| --rc-step-circle-color                | _var(--rc-gray-6)_        | -    |
| --rc-step-horizontal-title-font-size | _var(--rc-font-size-sm)_  | -    |
| --rc-steps-background-color          | _var(--rc-white)_         | -    |

