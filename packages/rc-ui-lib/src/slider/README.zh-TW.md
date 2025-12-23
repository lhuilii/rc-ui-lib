# Slider 滑塊

### 介紹

滑動輸入條，用於在給定的範圍內選擇一個值。

### 引入

```js
import { Slider } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'rc-ui-lib';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(`當前值：${v}`);
  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 雙滑塊

添加 `range` 屬性就可以開啟雙滑塊模式，確保 `value` 的值是一個數組。

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'rc-ui-lib';

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.info(`當前值：${v}`);
  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### 指定選擇範圍

```jsx
<Slider value={value} onChange={setValue} min={-50} max={50} />
```

### 禁用

```jsx
<Slider disabled value={value} />
```

### 指定步長

```jsx
<Slider value={value} step={10} />
```

### 自定義樣式

```jsx
<Slider value={value} onChange={setValue} barHeight={4} activeColor="#ee0a24" />
```

### 自定義按鈕

```jsx
<Slider
  value={value}
  onChange={setValue}
  activeColor="#ee0a24"
  button={<div className="custom-button">{value}</div>}
/>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### 垂直方向

設置 `vertical` 屬性後，滑塊會垂直展示，且高度為 100% 父元素高度。

```jsx
<Slider vertical value={value} onChange={setValue} />
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前進度百分比，在雙滑塊模式下為數組格式 | _number \| [number, number]_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步長 | _number \| string_ | `1` |
| barHeight | 進度條高度，默認單位為 `px` | _number \| string_ | `2px` |
| buttonSize | 滑塊按鈕大小，默認單位為 `px` | _number \| string_ | `24px` |
| activeColor | 進度條激活態顏色 | _string_ | `#3f45ff` |
| inactiveColor | 進度條非激活態顏色 | _string_ | `#e5e5e5` |
| range | 是否開啟雙滑塊模式 | _boolean_ | `false` |
| reverse | 是否將進度條反轉 | _boolean_ | `false` |
| disabled | 是否禁用滑塊 | _boolean_ | `false` |
| readonly | 是否為只讀狀態，只讀狀態下無法修改滑塊的值 | _boolean_ | `false` |
| vertical | 是否垂直展示 | _boolean_ | `false` |
| button | 自定義滑塊按鈕 | _ReactNode_ | - |
| leftButton | 自定義左側滑塊按鈕（雙滑塊模式下） | _ReactNode_ | - |
| rightButton | 自定義右側滑塊按鈕 （雙滑塊模式下） | _ReactNode_ | - |

### Events

`SliderValue`指`props.value`

| 事件名        | 說明                         | 回調參數                                  |
| ------------- | ---------------------------- | ----------------------------------------- |
| onChange      | 進度變化時**實時觸發**       | _value: SliderValue_                      |
| onChangeAfter | 進度變化且**結束拖動後觸發** | _value: SliderValue_                      |
| onDragStart   | 開始拖動時觸發               | _event: TouchEvent_, _value: SliderValue_ |
| onDragEnd     | 結束拖動時觸發               | _event: TouchEvent_, _value: SliderValue_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                  | 默認值                         | 描述 |
| ------------------------------------- | ------------------------------ | ---- |
| --rc-slider-active-background-color   | _var(--rc-primary-color)_      | -    |
| --rc-slider-inactive-background-color | _var(--rc-gray-3)_             | -    |
| --rc-slider-disabled-opacity          | _var(--rc-disabled-opacity)_   | -    |
| --rc-slider-bar-height                | _2px_                          | -    |
| --rc-slider-button-width              | _24px_                         | -    |
| --rc-slider-button-height             | _24px_                         | -    |
| --rc-slider-button-border-radius      | _50%_                          | -    |
| --rc-slider-button-background-color   | _var(--rc-white)_              | -    |
| --rc-slider-button-box-shadow         | _0 1px 2px rgba(0, 0, 0, 0.5)_ | -    |

