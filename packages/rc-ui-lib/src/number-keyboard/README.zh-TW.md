# NumberKeyboard 數字鍵盤

### 介紹

H5 數字鍵盤，可以配合密碼輸入框元件或自定義的輸入框元件使用

### 引入

```js
import { NumberKeyboard } from 'rc-ui-lib';
```

## 程式碼演示

### 默認樣式

數字鍵盤提供了 onInput、onDelete、onBlur、onClose 事件，分別對應輸入內容、刪除內容失去焦點和關閉的動作。

```jsx
<Cell onClick={setVisible}>彈出默認鍵盤</Cell>
<NumberKeyboard
  visible={visible}
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

```js
const [visible, setVisible] = useState(false);

const actions = {
  onClose: () => {
    Toast.info('closed');
    setVisible('');
  },
  onInput: (key: string) => {
    Toast.info(key);
  },
  onDelete: () => {
    Toast.info('delete');
  },
  onBlur: () => {
    setVisible('');
  },
};
```

### 帶右側欄的鍵盤

將 theme 屬性設置為 `custom` 來展示鍵盤的右側欄，常用於輸入金額的場景。

```jsx
<NumberKeyboard
  visible={visible}
  theme="custom"
  extraInfo="."
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### 身份證號鍵盤

通過 `extraKey` 屬性可以設置左下角按鍵內容，比如需要輸入身份證號時，可以將 `extraKey` 設置為 `X`。

```jsx
<NumberKeyboard
  visible={visible}
  extraKey="X"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### 鍵盤標題

通過 `title` 屬性可以設置鍵盤標題。

```jsx
<NumberKeyboard
  visible={visible}
  title="鍵盤標題"
  extraKey="."
  closeButtonText="完成"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### 配置多個按鍵

當 theme 為 `custom` 時，支持以數組的形式配置兩個 `extraKey`。

```jsx
<NumberKeyboard
  visible={visible}
  theme="custom"
  extraKey={['00', '.']}
  closeButtonText="完成"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### 隨機數字鍵盤

通過 `randomKeyOrder` 屬性可以隨機排序數字鍵盤，常用於安全等級較高的場景。

```jsx
<NumberKeyboard
  visible={visible}
  randomKeyOrder
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

## API

### Props

| 參數名 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示鍵盤 | _boolean_ | - |
| title | 鍵盤標題 | _string_ | - |
| theme | 樣式風格，可選值為 `custom` | _string_ | `default` |
| transition | 是否開啟過場動畫 | _boolean_ | `true` |
| zIndex | 鍵盤 z-index 層級 | \_number | `100` |
| extraKey | 底部額外按鍵的內容 | _string \| string[]_ | `''` |
| closeButtonText | 關閉按鈕文字，空則不展示 | _string_ | - |
| deleteButtonText | 刪除按鈕文字，空則展示刪除圖標 | _string_ | - |
| closeButtonLoading | 是否將關閉按鈕設置為載入中狀態，僅在 `theme="custom"` 時有效 | _boolean_ | `false` |
| showDeleteKey | 是否展示刪除圖標 | _boolean_ | `true` |
| blurOnClose | 是否在點擊關閉按鈕時觸發 blur 事件 | _boolean_ | `true` |
| hideOnClickOutside | 是否在點擊外部時收起鍵盤 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/adrcced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| randomKeyOrder | 是否將通過隨機順序展示按鍵 | _boolean_ | `false` |
| titleLeft | 自定義標題欄左側內容 | React.ReactNode | - |
| teleport | 指定掛載的節點 | _HTMLElement_ | _(() => HTMLElement)_ |

### Events

| 事件名   | 說明                           | 回調參數      |
| -------- | ------------------------------ | ------------- |
| onInput  | 點擊按鍵時觸發                 | key: 按鍵內容 |
| onDelete | 點擊刪除鍵時觸發               | -             |
| onBlur   | 點擊關閉按鈕或非鍵盤區域時觸發 | -             |
| onClose  | 點擊關閉按鈕時觸發             | -             |

### 類型定義

元件導出以下類型定義：

```js
import type { NumberKeyboardProps, NumberKeyboardTheme } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                         | 默認值                      | 描述 |
| -------------------------------------------- | --------------------------- | ---- |
| --rc-number-keyboard-background-color        | _var(--rc-gray-2)_          | -    |
| --rc-number-keyboard-key-height              | _48px_                      | -    |
| --rc-number-keyboard-key-font-size           | _28px_                      | -    |
| --rc-number-keyboard-key-active-color        | _var(--rc-gray-3)_          | -    |
| --rc-number-keyboard-key-background-color    | _var(--rc-white)_           | -    |
| --rc-number-keyboard-delete-font-size        | _var(--rc-font-size-lg)_    | -    |
| --rc-number-keyboard-title-color             | _var(--rc-gray-7)_          | -    |
| --rc-number-keyboard-title-height            | _34px_                      | -    |
| --rc-number-keyboard-title-font-size         | _var(--rc-font-size-lg)_    | -    |
| --rc-number-keyboard-close-padding           | _0 var(--rc-padding-md)_    | -    |
| --rc-number-keyboard-close-color             | _var(--rc-text-link-color)_ | -    |
| --rc-number-keyboard-close-font-size         | _var(--rc-font-size-md)_    | -    |
| --rc-number-keyboard-button-text-color       | _var(--rc-white)_           | -    |
| --rc-number-keyboard-button-background-color | _var(--rc-primary-color)_   | -    |
| --rc-number-keyboard-z-index                 | _100_                       | -    |

