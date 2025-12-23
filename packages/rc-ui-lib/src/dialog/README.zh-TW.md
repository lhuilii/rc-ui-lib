# Dialog 彈出框

### 介紹

彈出模態框，常用於訊息提示、訊息確認，或在當前頁面內完成特定的互動操作。

彈出框元件支援**函式呼叫**和**元件呼叫**兩種方式。

### 函式呼叫

`Dialog` 是一個函式，呼叫後會直接在頁面中彈出相應的模態框。

```js
import { Dialog } from 'rc-ui-lib';
```

## 程式碼演示

### 訊息提示

用於提示一些訊息，只包含一個確認按鈕。

```js
Dialog.alert({
  title: '標題',
  message: '彈窗內容',
}).then(() => {
  // on close
});
```

### Promise 呼叫

Dialog 支援 Promise。

```js
try {
  await Dialog.confirm({
    title: '標題',
    message: '彈窗內容',
  });
  // after confirm do something
  console.log('confirm');
} catch (erorr) {
  // after cancel do something
}
```

### 訊息確認

用於確認訊息，包含取消和確認按鈕。

```js
Dialog.confirm({
  title: '標題',
  message: '彈窗內容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圓角按鈕風格

將 `theme` 選項設定為 `round-button` 可以展示圓角按鈕風格的彈窗，該選項從 2.10.0 版本開始支援。

```jsx
Dialog.alert({
  title: '標題',
  message: '彈窗內容',
  theme: 'round-button',
});

Dialog.alert({
  message: '彈窗內容',
  theme: 'round-button',
});
```

### 自訂內容

透過 `children` 屬性可以傳入 `JSX`，來自訂顯示的內容。

```jsx
Dialog.alert({
  title: '標題',
  closeable: true,
  theme: 'round-button',
  children: (
    <div style={{ textAlign: 'center', margin: '16px' }}>
      程式碼是寫給人看的，附帶能在機器上執行
    </div>
  ),
});
```

### 非同步關閉

透過在 `onConfirm` 和 `onCancel` 屬性中回傳 `Promise`，可以在彈窗關閉前執行特定操作。

```jsx
const onConfirm = (action, done) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
      Toast.success({ message: '確認按鈕非同步' });
    }, 3000);
  });
};

Dialog.confirm({
  title: '標題',
  message: '彈窗內容',
  onConfirm,
});
```

### 元件呼叫

如果需要在彈窗內嵌入元件或其他自訂內容，可以使用元件呼叫的方式。

```js
const [show, setShow] = useState(false);
```

```jsx
<Dialog
  visible={show}
  title="標題"
  showCancelButton
  onCancel={() => setShow(false)}
  onConfirm={() => alert('confirm button click')}
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
</Dialog>
```

## API

### 方法

| 方法名         | 說明               | 參數      | 回傳值            |
| -------------- | ------------------ | --------- | ----------------- |
| Dialog         | 彈窗元件           | `options` | `React.ReactNode` |
| Dialog.show    | 展示提示彈窗       | `options` | `Promise`         |
| Dialog.alert   | 展示訊息提示彈窗   | `options` | `Promise`         |
| Dialog.confirm | 展示訊息確認彈窗   | `options` | `Promise`         |

### Props

透過函式呼叫 `Dialog` 時，支援傳入以下選項：

| 參數 | 說明 | 型別 | 預設值 |
| --- | --- | --- | --- |
| visible | 是否顯示彈窗 | _boolean_ | - |
| title | 標題 | _string_ | - |
| width | 彈窗寬度，預設單位為 `px` | _number \| string_ | `320px` |
| message | 文字內容，支援透過 `\n` 換行 | _string_ | - |
| messageAlign | 內容對齊方式，可選值為 `left` `right` | _string_ | `center` |
| theme | 樣式風格，可選值為 `round` | _string_ | `default` |
| className | 自訂類名 | _any_ | - |
| showConfirmButton | 是否顯示確認按鈕 | _boolean_ | `true` |
| showCancelButton | 是否顯示取消按鈕 | _boolean_ | `false` |
| confirmButtonText | 確認按鈕文字 | _string_ | `確認` |
| confirmButtonColor | 確認按鈕顏色 | _string_ | `#ee0a24` |
| cancelButtonText | 取消按鈕文字 | _string_ | `取消` |
| cancelButtonColor | 取消按鈕顏色 | _string_ | `black` |
| overlay | 是否顯示遮罩層 | _boolean_ | `true` |
| overlayClass | 自訂遮罩層類名 | _string_ | - |
| overlayStyle | 自訂遮罩層樣式 | _object_ | - |
| closeOnPopstate | 是否在頁面返回時自動關閉 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉彈窗 | _boolean_ | `false` |
| lockScroll | 是否鎖定背景滾動 | _boolean_ | `true` |
| transition | 動畫類名 [see](https://reactcommunity.org/react-transition-group/) | _string_ | - |
| onCancel | 點擊取消按鈕時觸發 | _Function_ | - |
| onConfirm | 點擊確認按鈕時觸發 | _Function_ | - |
| onClose | Dialog 關閉時的回呼 | _Function_ | - |
| onClosed | Dialog 完全關閉時的回呼 | _Function_ | - |
| teleport | 指定掛載的節點 | _HTMLElement \| () => HTMLElement_ | `body` |
| footer | 自訂底部按鈕區域 | _ReactNode_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                      | 預設值                              | 描述 |
| ----------------------------------------- | ----------------------------------- | ---- |
| --rc-dialog-width                         | _320px_                             | -    |
| --rc-dialog-small-screen-width            | _90%_                               | -    |
| --rc-dialog-font-size                     | _var(--rc-font-size-lg)_            | -    |
| --rc-dialog-transition                    | _var(--rc-animation-duration-base)_ | -    |
| --rc-dialog-border-radius                 | _16px_                              | -    |
| --rc-dialog-background-color              | _var(--rc-white)_                   | -    |
| --rc-dialog-header-font-weight            | _var(--rc-font-weight-bold)_        | -    |
| --rc-dialog-header-line-height            | _24px_                              | -    |
| --rc-dialog-header-padding-top            | _26px_                              | -    |
| --rc-dialog-header-isolated-padding       | _var(--rc-padding-lg) 0_            | -    |
| --rc-dialog-message-padding               | _var(--rc-padding-lg)_              | -    |
| --rc-dialog-message-font-size             | _var(--rc-font-size-md)_            | -    |
| --rc-dialog-message-line-height           | _var(--rc-line-height-md)_          | -    |
| --rc-dialog-message-max-height            | _60vh_                              | -    |
| --rc-dialog-has-title-message-text-color  | _var(--rc-gray-7)_                  | -    |
| --rc-dialog-has-title-message-padding-top | _var(--rc-padding-xs)_              | -    |
| --rc-dialog-button-height                 | _48px_                              | -    |
| --rc-dialog-round-button-height           | _36px_                              | -    |
| --rc-dialog-confirm-button-text-color     | _var(--rc-danger-color)_            | -    |


