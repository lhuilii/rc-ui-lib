# ShareSheet 分享面板

### 介紹

底部彈起的分享面板，用於展示各分享渠道對應的操作按鈕，不含具體的分享邏輯。

### 引入

```js
import { ShareSheet } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

分享面板通過 `options` 屬性來定義分享選項，數組的每一項是一個對象，對象格式見文檔下方表格。

```jsx
import { useState } from 'react';
import { Cell, ShareSheet } from 'rc-ui-lib';
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '複製鏈接', icon: 'link' },
  { name: '分享海報', icon: 'poster' },
  { name: '二維碼', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  return (
    <>
      <Cell isLink title="顯示分享面板" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享給好友"
        onCancel={close}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close();
        }}
      />
    </>
  );
};
```

### 展示多行選項

當分享選項的數量較多時，可以將 `options` 定義為數組嵌套的格式，每個子數組會作為一行選項展示。

```js
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '複製鏈接', icon: 'link' },
    { name: '分享海報', icon: 'poster' },
    { name: '二維碼', icon: 'qrcode' },
    { name: '小程序碼', icon: 'weapp-qrcode' },
  ],
];
```

### 自定義圖標

除了使用內置的幾種圖標外，可以直接在 `icon` 中傳入圖片 URL 來使用自定義的圖標。

```js
const options = [
  {
    name: '名稱',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '名稱',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '名稱',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];
```

### 展示描述信息

通過 `description` 屬性可以設置標題下方的描述文字, 在 `options` 內設置 `description` 屬性可以添加分享選項描述。

```js
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '複製鏈接', icon: 'link', description: '描述信息' },
  { name: '分享海報', icon: 'poster' },
  { name: '二維碼', icon: 'qrcode' },
];

<ShareSheet title="立即分享給好友" description="描述信息" options={options} />;
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示分享面板 | _boolean_ | `false` |
| options | 分享選項 | _Option[]_ | `[]` |
| title | 頂部標題 | _ReactNode_ | - |
| cancelText | 取消按鈕文字，傳入空字符串可以隱藏按鈕 | _ReactNode_ | `'取消'` |
| description | 標題下方的輔助描述文字 | _ReactNode_ | - |
| duration | 動畫時長，單位秒，設置為 0 可以禁用動畫 | _number \| string_ | `0.3` |
| overlay | 是否顯示遮罩層 | _boolean_ | `true` |
| overlayClass | 自定義遮罩層類名 | _string_ | - |
| overlayStyle | 自定義遮罩層樣式 | _CSSProperties_ | - |
| lockScroll | 是否鎖定背景滾動 | _boolean_ | `true` |
| closeOnPopstate | 是否在頁面回退時自動關閉 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Option 數據結構

`options` 屬性為一個對象數組，數組中的每個對象配置一列，對象可以包含以下值：

| 鍵名 | 說明 | 類型 |
| --- | --- | --- |
| name | 分享渠道名稱 | _string_ |
| description | 分享選項描述 | _string_ |
| icon | 圖標，可選值為 `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`，支持傳入圖片 URL | _string_ |
| className | 分享選項類名 | _string_ |

### Events

| 事件名   | 說明               | 回調參數                        |
| -------- | ------------------ | ------------------------------- |
| onSelect | 點擊分享選項時觸發 | _option: Option, index: number_ |
| onCancel | 點擊取消按鈕時觸發 | -                               |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱 | 默認值 | 描述 |
| --- | --- | --- |
| --rc-share-sheet-header-padding | _var(--rc-padding-sm) var(--rc-padding-md) var(--rc-padding-base)_ | - |
| --rc-share-sheet-title-color | _var(--rc-text-color)_ | - |
| --rc-share-sheet-title-font-size | _var(--rc-font-size-md)_ | - |
| --rc-share-sheet-title-line-height | _var(--rc-line-height-md)_ | - |
| --rc-share-sheet-description-color | _var(--rc-gray-6)_ | - |
| --rc-share-sheet-description-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-description-line-height | _16px_ | - |
| --rc-share-sheet-icon-size | _48px_ | - |
| --rc-share-sheet-option-name-color | _var(--rc-gray-7)_ | - |
| --rc-share-sheet-option-name-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-option-description-color | _var(--rc-gray-5)_ | - |
| --rc-share-sheet-option-description-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-cancel-button-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-share-sheet-cancel-button-height | _48px_ | - |
| --rc-share-sheet-cancel-button-background | _var(--rc-white)_ | - |

## 常見問題

### 如何實現分享邏輯？

在不同的 App 或瀏覽器中，存在各式各樣的分享接口或分享方式，因此 ShareSheet 元件不提供具體的分享邏輯，需要開發者根據業務場景自行實現。

#### 微信內分享

由於微信未提供分享相關的 API，需要引導用戶點擊右上角進行分享。

#### App 內分享

可以通過 JSBridge 調用原生應用的 SDK 進行分享。

#### 分享海報或二維碼

可以通過 [Popup](#/zh-CN/popup) 元件以彈層的形式展示圖片，然後引導用戶保存圖片進行分享。

