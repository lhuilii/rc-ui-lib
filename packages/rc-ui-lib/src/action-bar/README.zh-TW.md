# ActionBar 動作欄

### 介紹

用於為頁面相關操作提供便捷交互。

### 引入

```js
import { ActionBar } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
import React from 'react';
import { ActionBar } from 'rc-ui-lib';

export default () => {
  return (
    <ActionBar>
      <ActionBar.Icon icon="chat-o" text="客服" />（此為程式碼相關內容，通常不進行繁簡轉換，故保持原樣，若按字面直譯表述形式可寫為：<ActionBar.Icon icon="chat-o" text="客服" />（繁體情境下此代码内容本身无需转化，若强行对应繁体文字表述形式如此） ，实际代码中一般无需处理成繁体形式）
      <ActionBar.Icon icon="cart-o" text="購物車" />
      <ActionBar.Icon icon="shop-o" text="店鋪" />
      <ActionBar.Button type="danger" text="立即購買" />
    </ActionBar>
  );
};
```

### 徽標提示

在 ActionBar.Icon 元件上可以設置 `badge` 屬性。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" badge={{ dot: true }} text="客服" />（此段為代码類內容，通常不進行繁簡轉換，若按要求強轉繁體則内容同原文）
  <ActionBar.Icon icon="cart-o" badge={{ content: 5 }} text="購物車" />
  <ActionBar.Icon icon="shop-o" badge={{ content: 12 }} text="店鋪" />
  <ActionBar.Button type="warning" text="加入購物車" />
  <ActionBar.Button type="danger" text="立即購買" />
</ActionBar>
```

### 自定義圖標顏色

通過 ActionBarIcon 的 `color` 屬性可以自定義圖標的顏色。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" color="#ee0a24" text="客服" />（此為專業代碼表述，通常代碼本身在繁體系統中形式不變，故译文同原文）
  <ActionBar.Icon icon="cart-o" text="購物車" />
  <ActionBar.Icon icon="star" color="#ff5000" text="店鋪" />
  <ActionBar.Button type="warning" text="加入購物車" />
  <ActionBar.Button type="danger" text="立即購買" />
</ActionBar>
```

### 自定義按鈕顏色

透過 ActionBarButton 的 `color` 屬性可以自定義按鈕的顏色，支持傳入 `linear-gradient` 漸變色。

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" text="客服" />（此為程式碼，通常在不同語言環境不作翻譯，保持原樣即可 ，若非要呈现繁体对应形式也如此）
  <ActionBar.Icon icon="cart-o" text="購物車" />
  <ActionBar.Button color="#be99ff" type="warning" text="加入購物車" />
  <ActionBar.Button color="#7232dd" type="danger" text="立即購買" />
</ActionBar>
```

## API

### ActionBar Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| placeholder | 是否在標籤位置生成一個等高的佔位元素 | _boolean_ | `false` |

### ActionBarIcon Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| text | 按鈕文字 | _ReactNode_ | - |
| icon | 圖標 | _string\|ReactNode_ | - |
| color | 圖標顏色 | _string_ | `#323233` |
| iconClass | 圖標額外類名 | _string_ | - |
| iconPrefix | 圖標類名前綴，等同於 Icon 組件的 [classPrefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| badge | 圖標右上角徽標設定 | _BadgeProps_ | - |
| onClick | 點擊事件 | _(event) => void_ | - |

### ActionBarButton Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 按鈕文字 | _ReactNode_ | - |
| type | 按鈕類型，可選值為 `default` `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按鈕顏色，支持傳入 `linear-gradient` 漸變色 | _string_ | - |
| icon | 左側[圖標名稱](#/zh-CN/icon)或圖片連結 | _string_ | - |
| disabled | 是否禁用按鈕 | _boolean_ | `false` |
| loading | 是否顯示為加載狀態 | _boolean_ | `false` |
| onClick | 點擊事件 | _(event) => void_ | - |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/config-provider)。

| 名稱                                  | 預設值                      | 描述 |
| ------------------------------------- | --------------------------- | ---- |
| --rc-action-bar-background-color      | _var(--rc-white)_           | -    |
| --rc-action-bar-height                | _50px_                      | -    |
| --rc-action-bar-icon-width            | _48px_                      | -    |
| --rc-action-bar-icon-height           | _100%_                      | -    |
| --rc-action-bar-icon-color            | _var(--rc-text-color)_      | -    |
| --rc-action-bar-icon-size             | _18px_                      | -    |
| --rc-action-bar-icon-font-size        | _var(--rc-font-size-xs)_    | -    |
| --rc-action-bar-icon-active-color     | _var(--rc-active-color)_    | -    |
| --rc-action-bar-icon-text-color       | _var(--rc-gray-7)_          | -    |
| --rc-action-bar-icon-background-color | _var(--rc-white)_           | -    |
| --rc-action-bar-button-height         | _40px_                      | -    |
| --rc-action-bar-button-warning-color  | _var(--rc-gradient-orange)_ | -    |
| --rc-action-bar-button-danger-color   | _var(--rc-gradient-red)_    | -    |
