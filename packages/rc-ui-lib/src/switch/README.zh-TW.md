# Switch 開關

### 介紹

用於在打開和關閉狀態之間進行切換。

### 引入

```js
import { Switch } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `defaultChecked` 默認開關的選中狀態，`true` 表示開，`false` 表示關。

```jsx
<Switch defaultChecked />
```

### 禁用狀態

通過 `disabled` 屬性來禁用開關，禁用狀態下開關不可點擊。

```jsx
<Switch defaultChecked disabled />
```

### 載入狀態

通過 `loading` 屬性設置開關為載入狀態，載入狀態下開關不可點擊。

```jsx
<Switch defaultChecked loading />
```

### 自定義大小

通過 `size` 屬性自定義開關的大小。

```jsx
<Switch defaultChecked size="24px" />
```

### 自定義顏色

`activeColor` 屬性表示打開時的背景色，`inactiveColor` 表示關閉時的背景色。

```jsx
<Switch defaultChecked activeColor="#ee0a24" inactiveColor="#dcdee0" />
```

### 異步控制

需要異步控制開關時，可以使用 `checked` 屬性和 `onChange` 事件代替 `defaultChecked`，並在事件回調函數中手動處理開關狀態。

```jsx
<Switch
  checked={value}
  onChange={(checked) => {
    Dialog.confirm({
      title: '提醒',
      message: '是否切換開關？',
    }).then(() => {
      setValue(checked);
    });
  }}
/>
```

### 搭配單元格使用

```jsx
<Cell
  center
  title="標題"
  rightIcon={
    <Switch size={24} defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
  }
/>
```

## API

### Props

| 參數           | 說明                     | 類型               | 默認值    |
| -------------- | ------------------------ | ------------------ | --------- |
| checked        | 開關選中狀態             | _any_              | `false`   |
| defaultChecked | 開關選中狀態             | _any_              | `false`   |
| loading        | 是否為載入狀態           | _boolean_          | `false`   |
| disabled       | 是否為禁用狀態           | _boolean_          | `false`   |
| size           | 開關尺寸，默認單位為`px` | _number \| string_ | `30px`    |
| activeColor    | 打開時的背景色           | _string_           | `#3f45ff` |
| inactiveColor  | 關閉時的背景色           | _string_           | `white`   |
| activeValue    | 打開時對應的值           | _any_              | `true`    |
| inactiveValue  | 關閉時對應的值           | _any_              | `false`   |

### Events

| 事件名   | 說明               | 回調參數       |
| -------- | ------------------ | -------------- |
| onChange | 開關狀態切換時觸發 | _value: any_   |
| onClick  | 點擊時觸發         | _event: Event_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱 | 默認值 | 描述 |
| --- | --- | --- |
| --rc-switch-size | _30px_ | - |
| --rc-switch-width | _2em_ | - |
| --rc-switch-height | _1em_ | - |
| --rc-switch-node-size | _1em_ | - |
| --rc-switch-node-background-color | _var(--rc-white)_ | - |
| --rc-switch-node-box-shadow | _0 3px 1px 0 rgba(0, 0, 0, 0.05)_ | - |
| --rc-switch-background-color | _var(--rc-white)_ | - |
| --rc-switch-on-background-color | _var(--rc-primary-color)_ | - |
| --rc-switch-transition-duration | _var(--rc-animation-duration-base)_ | - |
| --rc-switch-disabled-opacity | _var(--rc-disabled-opacity)_ | - |
| --rc-switch-border | _var(--rc-border-width-base) solid rgba(0, 0, 0, 0.1)_ | - |

