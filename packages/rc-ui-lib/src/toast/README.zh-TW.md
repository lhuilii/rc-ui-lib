# Toast 輕提示

### 介紹

在頁面中間彈出黑色半透明提示，用於消息通知、載入提示、操作結果提示等場景。

### 引入

```js
import { Toast } from 'rc-ui-lib';
```

## 程式碼演示

### 文字提示

```js
Toast('提示內容');
Toast.info({ message: '提示內容' });
```

### 載入提示

使用 `Toast.loading` 方法展示載入提示，通過 `forbidClick` 屬性可以禁用背景點擊。

```js
Toast.loading({
  message: '載入中...',
  forbidClick: true,
});
```

### 成功/失敗提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失敗提示。

```js
Toast.success('成功文案');
Toast.fail('失敗文案');
```

### 動態更新提示

執行 Toast 方法時會返回對應的 Toast 實例，通過修改實例上的 message 屬性可以實現動態更新提示的效果。

```jsx
let remain = 4;
const updateConfig = Toast({
  message: `還剩 ${remain + 1} 秒`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
const timer = setInterval(() => {
  updateConfig({ message: `還剩 ${remain--} 秒` });
}, 1000);
```

### 自定義圖標

通過 `icon` 選項可以自定義圖標，支持傳入[圖標名稱](#/zh-CN/icon)、圖片鏈接或者自定義元件通過`loadingType` 屬性可以自定義載入圖標類型。

```js
Toast({
  message: '自定義圖標',
  icon: 'like-o',
});

Toast({
  message: '自定義元件圖標',
  icon: <CustomIcon />,
});

Toast({
  message: '自定義圖片',
  icon: 'https://rancui.github.io/rc-ui-lib/rc-ui-lib.png',
});

Toast.loading({
  message: '載入中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 自定義位置

Toast 默認渲染在屏幕正中位置，通過 `position` 屬性可以控制 Toast 展示的位置。

```js
Toast({
  message: '頂部展示',
  position: 'top',
});

Toast({
  message: '底部展示',
  position: 'bottom',
});
```

### 動態更新提示

執行 Toast 方法時會返回對應的 Toast 實例，通過修改實例上的 `message` 屬性可以實現動態更新提示的效果。

```js
let remain = 4;
let timer;
const toast = Toast.info({
  message: `還剩 ${remain + 1} 秒`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
timer = setInterval(() => {
  toast.config({ message: `還剩 ${remain--} 秒` });
}, 1000);
```

### 單例模式

Toast 默認採用單例模式，即同一時間只會存在一個 Toast，如果需要在同一時間彈出多個 Toast，可以參考下面的示例：

```js
Toast.allowMultiple();

const toast1 = Toast.info('第一個 Toast');
const toast2 = Toast.success('第二個 Toast');

toast1.clear();
toast2.clear();
```

### 修改默認配置

通過 `Toast.setDefaultOptions` 函數可以全局修改 Toast 的默認配置。

```js
Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');
```

## API

### 方法

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| Toast | 展示提示 | `options \| message` | toast 實例 |
| Toast.info | 展示文字提示 | `options \| message` | toast 實例 |
| Toast.loading | 展示載入提示 | `options \| message` | toast 實例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 實例 |
| Toast.fail | 展示失敗提示 | `options \| message` | toast 實例 |
| Toast.clear | 關閉提示 | `clearAll: boolean` | `void` |
| Toast.allowMultiple | 允許同時存在多個 Toast | - | `void` |
| Toast.setDefaultOptions | 修改默認配置，對所有 Toast 生效。<br/>傳入 type 可以修改指定類型的默認配置 | `type \| options` | `void` |
| Toast.resetDefaultOptions | 重置默認配置，對所有 Toast 生效。<br/>傳入 type 可以重置指定類型的默認配置 | `type` | `void` |

### Options

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 提示類型，可選值為 `loading` `success` `fail` `info` | _string_ | `info` |
| position | 位置，可選值為 `top` `bottom` | _string_ | `middle` |
| message | 文本內容，支持通過`\n`換行 | _string_ | - |
| icon | 自定義圖標 | _string\|ReactNode_ | - |
| iconSize | 圖標大小，如 `20px` `2em`，默認單位為 `px` | _number \| string_ | `36px` |
| iconPrefix | 圖標類名前綴，等同於 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| forbidClick | 是否禁止背景點擊 | _boolean_ | `false` |
| closeOnClick | 是否在點擊後關閉 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉 | _boolean_ | `false` |
| loadingType | [載入圖標類型](#/zh-CN/loading), 可選值為 `spinner` | _string_ | `circular` |
| duration | 展示時長(ms)，值為 0 時，toast 不會消失 | _number_ | `2000` |
| className | 自定義類名 | _string_ | - |
| overlay | 是否顯示背景遮罩層 | _boolean_ | `false` |
| overlayClass | 自定義遮罩層類名 | _string_ | - |
| overlayStyle | 自定義遮罩層樣式 | _object_ | - |
| onOpened | 完全展示後的回調函數 | _Function_ | - |
| onClose | 關閉時的回調函數 | _Function_ | - |
| transition | 動畫類名 | _string_ | `rc-fade` |
| teleport | 指定掛載的節點 | _HTMLElement_ _(() => HTMLElement))_ | `document.body` |

### 類型定義

元件導出以下類型定義：

```js
import type { ToastType, ToastOptions, ToastPosition } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                | 默認值                                      | 描述 |
| ----------------------------------- | ------------------------------------------- | ---- |
| --rc-toast-max-width                | _70%_                                       | -    |
| --rc-toast-font-size                | _var(--rc-font-size-md)_                    | -    |
| --rc-toast-text-color               | _var(--rc-white)_                           | -    |
| --rc-toast-loading-icon-color       | _var(--rc-white)_                           | -    |
| --rc-toast-line-height              | _var(--rc-line-height-md)_                  | -    |
| --rc-toast-border-radius            | _var(--rc-border-radius-lg)_                | -    |
| --rc-toast-background-color         | _fade(var(--rc-black), 70%)_                | -    |
| --rc-toast-icon-size                | _36px_                                      | -    |
| --rc-toast-text-min-width           | _96px_                                      | -    |
| --rc-toast-text-padding             | _var(--rc-padding-xs) var(--rc-padding-sm)_ | -    |
| --rc-toast-default-padding          | _var(--rc-padding-md)_                      | -    |
| --rc-toast-default-width            | _88px_                                      | -    |
| --rc-toast-default-min-height       | _88px_                                      | -    |
| --rc-toast-position-top-distance    | _20%_                                       | -    |
| --rc-toast-position-bottom-distance | _20%_                                       | -    |

