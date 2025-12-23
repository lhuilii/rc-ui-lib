# NumberKeyboard 數字鍵盤

### 介紹

帶網格的輸入框元件，可以用於輸入密碼、短信驗證碼等場景，通常與[數字鍵盤](#/zh-CN/number-keyboard)元件配合使用。

### 引入

```js
import { PasswordInput, NumberKeyboard } from 'rc-ui-lib';
```

### 基礎用法

搭配數字鍵盤元件來實現密碼輸入功能。

```jsx
<PasswordInput
    focused={focused}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    onChange={handleChange(value)}
    keyboard={<NumberKeyboard />}
```

```js
const [focused, setFocused] = useState(false);

const handleChange = (value) => {
  console.log(value);
};
```

### 原生鍵盤用法

搭配原生鍵盤元件來實現密碼輸入功能。

```jsx
<PasswordInput
    focused={focused}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    onChange={handleChange(value)}
```

```js
const [focused, setFocused] = useState(false);

const handleChange = (value) => {
  console.log(value);
};
```

### 自定義長度

通過 `length` 屬性來設置密碼長度。

```jsx
<PasswordInput
  length={4}
  focused={focused}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### 格子間距

通過 `gutter` 屬性來設置格子之間的間距。

```jsx
<PasswordInput
  focused={focused}
  gutter={10}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### 明文展示

將 `mask` 設置為 `false` 可以明文展示輸入的內容，適用於短信驗證碼等場景。

```jsx
<PasswordInput
  focused={focused}
  mask={false}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### 提示信息

通過 `info` 屬性設置提示信息，通過 `error-info` 屬性設置錯誤提示，例如當輸入六位時提示密碼錯誤。

```jsx
<PasswordInput
  focused={focused}
  info="密碼為 6 位數字"
  errorInfo={errorInfo}
  onFill={handleFill}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

```js
const [focused, setFocused] = useState(false);
const [errorInfo, setErrorInfo] = useState < string > '';

const handleChange = (value) => {
  console.log(value);
};

const handleFill = () => {
  setErrorInfo('密碼錯誤');
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 默認非受控密碼值 | _string_ | `''` |
| info | 輸入框下方文字提示 | _string_ | - |
| error-info | 輸入框下方錯誤提示 | _string_ | - |
| length | 密碼最大長度 | _number \| string_ | `6` |
| gutter | 輸入框格子之間的間距，如 `20px` `2em`，默認單位為`px` | _number \| string_ | `0` |
| mask | 是否隱藏密碼內容 | _boolean_ | `true` |
| focused | 是否已聚焦，聚焦時會顯示光標 | _boolean_ | `false` |

### Events

| 事件名   | 說明           | 回調參數      |
| -------- | -------------- | ------------- |
| onChange | 輸入時回調     | key: 按鍵內容 |
| onFill   | 填寫完成回調   | -             |
| onBlur   | 輸入框失焦回調 | -             |
| onFocus  | 輸入框聚焦回調 | -             |

### Ref

| 事件名     | 說明                                     | 回調參數 |
| ---------- | ---------------------------------------- | -------- |
| focus      | 輸入框聚焦回調，若是原生輸入則會自動聚焦 | -        |
| blur       | 輸入框失焦，若是原生輸入則會自動失焦     | -        |
| resetValue | 清空輸入框                               | -        |

### 類型定義

元件導出以下類型定義：

```js
import type { PasswordInputProps, PasswordInputInstance } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                          | 默認值                             | 描述 |
| --------------------------------------------- | ---------------------------------- | ---- |
| --rc-password-input-height                    | _50px_                             | -    |
| --rc-password-input-margin                    | _0 var(--rc-padding-md)_           | -    |
| --rc-password-input-font-size                 | _20px_                             | -    |
| --rc-password-input-border-radius             | _6px_                              | -    |
| --rc-password-input-background-color          | _var(--rc-background-color-light)_ | -    |
| --rc-password-input-info-color                | _var(--rc-text-color-2)_           | -    |
| --rc-password-input-info-font-size            | _var(--rc-font-size-md)_           | -    |
| --rc-password-input-error-info-color          | _var(--rc-danger-color)_           | -    |
| --rc-password-input-dot-size                  | _10px_                             | -    |
| --rc-password-input-dot-color                 | _var(--rc-text-color)_             | -    |
| --rc-password-input-text-color                | _var(--rc-text-color)_             | -    |
| --rc-password-input-cursor-color              | _var(--rc-text-color)_             | -    |
| --rc-password-input-cursor-width              | _1px_                              | -    |
| --rc-password-input-cursor-height             | _40%_                              | -    |
| --rc-password-input-cursor-animation-duration | _1s_                               | -    |

