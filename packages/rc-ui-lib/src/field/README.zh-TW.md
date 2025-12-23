# Field 輸入框

### 介紹

表單中的輸入框元件。

### 引入

```js
import { Field } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

可以透過 `value` 和 `input` 雙向綁定輸入框的值，透過 `placeholder` 設定佔位提示文字。

```jsx
<!-- Field 是基於 Cell 實現的，可以使用 CellGroup 作為容器來提供外邊框。 -->
<CellGroup>
  <Field value={value1} type="text" label="文字" placeholder="請輸入使用者名稱" onChange={setValue1} />
</CellGroup>
```

```js
const [value1, setValue1] = useState('');
```

### 自訂型別

根據 `type` 屬性定義不同型別的輸入框，預設值為 `text`。

```jsx
<!-- 輸入任意文字 -->
<Field value={value2} label="文字" onChange={setValue2} />
<!-- 輸入手機號，喚起手機號鍵盤 -->
<Field value={tel} type="tel" label="手機號" onChange={setTel} />
<!-- 允許輸入正整數，喚起純數字鍵盤 -->
<Field value={digit} type="digit" label="整數" onChange={setDigit} />
<!-- 允許輸入數字，喚起帶符號的純數字鍵盤 -->
<Field value={number} type="number" label="數字" onChange={setNumber} />
<!-- 輸入密碼 -->
<Field value={password} type="password" label="密碼" onChange={setPasswrod} />
```

```js
const [value2, setValue2] = useState('');
const [tel, setTel] = useState('');
const [digit, setDigit] = useState('');
const [number, setNumber] = useState('');
const [password, setPasswrod] = useState('');
```

### 禁用輸入框

透過 `readonly` 將輸入框設定為唯讀狀態，透過 `disabled` 將輸入框設定為禁用狀態。

```jsx
<CellGroup>
  <Field label="文字" value="輸入框唯讀" readonly />
  <Field label="文字" value="輸入框已禁用" disabled />
</CellGroup>
```

### 顯示圖示

透過 `leftIcon` 和 `rightIcon` 配置輸入框兩側的圖示，透過設定 `clearable` 在輸入過程中展示清除圖示。

```jsx
<CellGroup>
  <Field
    value={value3}
    label="文字"
    leftIcon="smile-o"
    rightIcon="warning-o"
    placeholder="顯示圖示"
    onChange={setValue3}
  />
  <Field
    value={value4}
    clearable
    label="文字"
    leftIcon="music-o"
    placeholder="顯示清除圖示"
    onChange={setValue4}
  />
</CellGroup>
```

```js
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState('');
```

### 資訊提示（Tooltip）

```jsx
<Field label="文字" placeholder="請輸入文字" tooltip="success" />
```

### 錯誤提示

設定 `required` 屬性表示這是一個必填項，可以配合 `error` 或 `errorMessage` 屬性顯示對應的錯誤提示。

```jsx
<CellGroup>
  <Field
    value={username}
    error
    required
    label="使用者名稱"
    placeholder="請輸入使用者名稱"
    onChange={setUsername}
  />
  <Field
    value={phone}
    required
    label="手機號"
    placeholder="請輸入手機號"
    errorMessage="手機號格式錯誤"
    onChange={setPhone}
  />
</CellGroup>
```

### 插入按鈕

透過 `button` 傳入內容可以在輸入框尾部插入按鈕。

```jsx
<Field
  value={sms}
  center
  clearable
  label="簡訊驗證碼"
  placeholder="請輸入簡訊驗證碼"
  onChange={setSms}
  button={<Button size="small" type="primary" />}
/>
```

### 格式化輸入內容

透過 `formatter` 屬性可以對輸入的內容進行格式化，透過 `formatTrigger` 屬性可以指定執行格式化的時機，預設在輸入時進行格式化。

```jsx
<Field
  value={value5}
  label="文字"
  formatter={formatter}
  placeholder="在輸入時執行格式化"
  onChange={setValue5}
/>
<Field
  value={value6}
  label="文字"
  formatter={formatter}
  format-trigger="onBlur"
  placeholder="在失焦時執行格式化"
  onChange={setValue6}
/>
```

```js
const [value5, setValue5] = useState('');
const [value6, setValue6] = useState('');

const formatter = (value) => value.replace(/\d/g, '');
```

### 高度自適應

對於 textarea，可以透過 `autosize` 屬性設定高度自適應。

```jsx
<Field
  value={message}
  rows="1"
  autosize
  label="留言"
  type="textarea"
  placeholder="請輸入留言"
  onChange={setMessage}
/>
```

### 顯示字數統計

設定 `maxlength` 和 `showWordLimit` 屬性後會在底部顯示字數統計。

```jsx
<Field
  value={message2}
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="請輸入留言"
  showWordLimit
  onChange={setMessage2}
/>
```

### 輸入框內容對齊

透過 `inputAlign` 屬性可以設定輸入框內容的對齊方式，可選值為 `center`、`right`。

```jsx
<Field
  value={value7}
  label="文字"
  placeholder="輸入框內容右對齊"
  inputAlign="right"
  onChange={setValue7}
/>
```

## API

### Props

| 參數 | 說明 | 型別 | 預設值 |
| --- | --- | --- | --- |
| value | 當前輸入的值 | _number \| string_ | - |
| label | 輸入框左側文字 | _string_ | - |
| name | 名稱，提交表單的識別符 | _string_ | - |
| type | 輸入框型別，可選值為 `tel` `digit`<br/>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可選值為 `large` | _string_ | - |
| maxlength | 輸入的最大字元數 | _number \| string_ | - |
| placeholder | 輸入框佔位提示文字 | _string_ | - |
| border | 是否顯示內邊框 | _boolean_ | `true` |
| disabled | 是否禁用輸入框 | _boolean_ | `false` |
| readonly | 是否唯讀 | _boolean_ | `false` |
| colon | 是否在 label 後面新增冒號 | _boolean_ | `false` |
| required | 是否顯示表單必填星號 | _boolean_ | `false` |
| center | 是否使內容垂直置中 | _boolean_ | `false` |
| clearable | 是否啟用清除圖示，點擊清除圖示後會清空輸入框 | _boolean_ | `false` |
| clearIcon | 清除圖示名稱或圖片連結 | _string_ | `clear` |
| clickable | 是否開啟點擊回饋 | _boolean_ | `false` |
| isLink | 是否展示右側箭頭並開啟點擊回饋 | _boolean_ | `false` |
| showWordLimit | 是否顯示字數統計，需要設定 `maxlength` 屬性 | _boolean_ | `false` |
| error | 是否將輸入內容標紅 | _boolean_ | `false` |
| errorMessage | 底部錯誤提示文案，為空時不展示 | _string_ | - |
| formatter | 輸入內容格式化函數 | _Function_ | - |
| formatTrigger | 格式化函數觸發的時機，可選值為 `onBlur` | _string_ | `onChange` |
| arrowDirection | 箭頭方向，可選值為 `left` `up` `down` | _string_ | `right` |
| labelClass | 左側文字額外類名 | _any_ | - |
| labelWidth | 左側文字寬度，預設單位為 `px` | _number \| string_ | `6.2em` |
| labelAlign | 左側文字對齊方式，可選值為 `center` `right` | _string_ | `left` |
| inputAlign | 輸入框對齊方式，可選值為 `center` `right` | _string_ | `left` |
| errorMessageAlign | 錯誤提示文案對齊方式，可選值為 `center` `right` | _string_ | `left` |
| autosize | 是否自適應內容高度，只對 textarea 有效，<br/>可傳入物件，如 { maxHeight: 100, minHeight: 50 }，<br/>單位為 `px` | _boolean \| object_ | `false` |
| leftIcon | 左側圖示 | _string\|ReactNode_ | - |
| rightIcon | 右側圖示 | _string\|ReactNode_ | - |
| iconPrefix | 圖示類名前綴，同 Icon 元件的 [class-prefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| rules | 表單校驗規則，詳見 [Form 元件](#/zh-CN/form#rule-shu-ju-jie-gou) | _Rule[]_ | - |

### Events

| 事件             | 說明                   | 回調參數                |
| ---------------- | ---------------------- | ----------------------- |
| onChange         | 輸入框內容變化時觸發   | _val: string \| number_ |
| onFocus          | 輸入框獲得焦點時觸發   | _event: MouseEvent_     |
| onBlur           | 輸入框失去焦點時觸發   | _event: MouseEvent_     |
| onClear          | 點擊清除按鈕時觸發     | _event: MouseEvent_     |
| onClick          | 點擊 Field 時觸發      | _event: MouseEvent_     |
| onClickInput     | 點擊輸入區域時觸發     | _event: MouseEvent_     |
| onClickLeftIcon  | 點擊左側圖示時觸發     | _event: MouseEvent_     |
| onClickRightIcon | 點擊右側圖示時觸發     | _event: MouseEvent_     |

### 方法

透過 ref 可以取得 Field 實例並呼叫實例方法。

```js
const fieldRef = useRef(null);
```

```jsx
<Field
  ref={fieldRef}
  value={value}
  onChange={setValue}
  placeholder="請輸入文字"
  maxlength="11"
/>

<input
  type="button"
  value="click"
  onClick={() => {
    fieldRef.current?.focus()
  }}
/>
```

| 方法名 | 說明           | 參數 | 回傳值 |
| ------ | -------------- | ---- | ------ |
| focus  | 取得輸入框焦點 | -    | -      |
| blur   | 取消輸入框焦點 | -    | -      |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 預設值                   | 描述 |
| ------------------------------------ | ------------------------ | ---- |
| --rc-field-label-width               | _6.2em_                  | -    |
| --rc-field-label-color               | _var(--rc-gray-7)_       | -    |
| --rc-field-label-margin-right        | _var(--rc-padding-sm)_   | -    |
| --rc-field-input-text-color          | _var(--rc-text-color)_   | -    |
| --rc-field-input-error-text-color    | _var(--rc-danger-color)_ | -    |
| --rc-field-input-disabled-text-color | _var(--rc-gray-5)_       | -    |
| --rc-field-placeholder-text-color    | _var(--rc-gray-5)_       | -    |
| --rc-field-icon-size                 | _16px_                   | -    |
| --rc-field-clear-icon-size           | _16px_                   | -    |
| --rc-field-clear-icon-color          | _var(--rc-gray-5)_       | -    |
| --rc-field-right-icon-color          | _var(--rc-gray-6)_       | -    |
| --rc-field-error-message-color       | _var(--rc-danger-color)_ | -    |
| --rc-field-error-message-font-size   | _12px_                   | -    |
| --rc-field-text-area-min-height      | _60px_                   | -    |
| --rc-field-word-limit-color          | _var(--rc-gray-7)_       | -    |
| --rc-field-word-limit-font-size      | _var(--rc-font-size-sm)_ | -    |
| --rc-field-word-limit-line-height    | _16px_                   | -    |
| --rc-field-disabled-text-color       | _var(--rc-gray-5)_       | -    |
| --rc-field-required-mark-color       | _var(--rc-red)_          | -    |

## 常見問題

### 設定 type 為 `number` 後，為什麼 input 標籤的型別仍為 `text`?

HTML 原生的 `type="number"` 屬性在 iOS 和 Android 系統上都存在一定問題，比如 `maxlength` 屬性不生效、無法取得到完整的輸入內容等。因此設定 `type` 為 `number` 時，Field 不會使用原生的 `type="number"` 屬性，而是用現代瀏覽器支援的 [inputmode 屬性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode) 來控制輸入鍵盤的型別。

### 在桌面端點擊清除按鈕無效？

清除按鈕監聽的是行動端的 Touch 事件，參見[桌面端適配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。


