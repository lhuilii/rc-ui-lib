# Checkbox 複選框

### 介紹

用於在選中和未選中狀態之間進行切換。

### 引入

```js
import { Checkbox } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

透過 `defaultChecked` 值預設複選框的勾選狀態。

```jsx
<Checkbox defaultChecked onChange={(val) => console.log(val)}>
  複選框
</Checkbox>
```

### 禁用狀態

透過設定 `disabled` 屬性可以禁用複選框。

```jsx
<Checkbox defaultChecked disabled>
  複選框
</Checkbox>
```

### 自定義形狀

將 `shape` 屬性設定為 `square`，複選框的形狀會變成方形。

```jsx
<Checkbox defaultChecked shape="square">
  複選框
</Checkbox>
```

### 自定義顏色

透過 `checkedColor` 屬性設定選中狀態的圖示顏色。

```jsx
<Checkbox defaultChecked checkedColor="#ee0a24">
  複選框
</Checkbox>
```

### 自定義大小

透過 `iconSize` 屬性可以自定義圖示的大小。

```jsx
<Checkbox defaultChecked iconSize={24}>
  複選框
</Checkbox>
```

### 禁用文字點擊

設定 `labelDisabled` 屬性後，點擊圖示以外的內容不會觸發複選框切換。

```jsx
<Checkbox defaultChecked labelDisabled>
  複選框
</Checkbox>
```

### 非同步更新

設定 `checked` 屬性後，點擊圖示狀態不會改變，而是直接執行 `onChange` 方法，在此方法中更新狀態。

```jsx
<Checkbox
  checked={value}
  onChange={(val) => {
    Toast.loading({ forbidClick: true, duration: 0 });

    setTimeout(() => {
      Toast.clear();
      setValue(val);
    }, 500);
  }}
>
  複選框
</Checkbox>
```

### 複選框組

複選框可以與複選框組一起使用，複選框組透過 `defaultValue` 陣列預設複選框的勾選狀態。

```js
const checked = ['a', 'b'];
```

```jsx
<Checkbox.Group defaultValue="checked">
  <Checkbox name="a">複選框 a</Checkbox>
  <Checkbox name="b">複選框 b</Checkbox>
</Checkbox.Group>
```

### 水平排列

將 `direction` 屬性設定為 `horizontal` 後，複選框組會變成水平排列。

```jsx
<Checkbox.Group defaultValue="checked" direction="horizontal">
  <Checkbox name="a">複選框 a</Checkbox>
  <Checkbox name="b">複選框 b</Checkbox>
</Checkbox.Group>
```

### 限制最大可選數

透過 `max` 屬性可以限制複選框組的最大可選數。

```jsx
<Checkbox.Group defaultValue="result" max={2}>
  <Checkbox name="a">複選框 a</Checkbox>
  <Checkbox name="b">複選框 b</Checkbox>
  <Checkbox name="c">複選框 c</Checkbox>
</Checkbox.Group>
```

### 全選與反選

透過 `Checkbox.Group` 實例上的 `toggleAll` 方法可以實現全選與反選。

```jsx
import { useState, useRef } from 'react';
import { Checkbox, Button } from 'rc-ui-lib';

export default () => {
  const ref = useRef(null);
  const [checkedAll, setCheckedAll] = useState([]);
  return (
    <>
      <Checkbox.Group value={checkedAll} onChange={setCheckedAll} ref={ref}>
        <Checkbox name="a">複選框 a</Checkbox>
        <Checkbox name="b">複選框 b</Checkbox>
        <Checkbox name="c">複選框 c</Checkbox>
      </Checkbox.Group>

      <Button type="primary" onClick={() => ref.current?.toggleAll()}>
        全選
      </Button>
      <Button type="primary" onClick={() => ref.current?.toggleAll(false)}>
        反選
      </Button>
    </>
  );
};
```

### 搭配單元格元件使用

此時你需要再引入 `Cell` 和 `CellGroup` 元件。

```jsx
export default () => {
  const [value, setValue] = useState([]);

  const toggle = (name) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter((el) => el !== name)
      : [...cellCheck, name];
    setValue(newValue);
  };

  return (
    <Checkbox.Group value={value}>
      <CellGroup>
        <Cell
          clickable
          title="單選框1"
          icon="shop-o"
          onClick={() => toggle('a')}
          rightIcon={<Checkbox name="a" />}
        />
        <Cell
          clickable
          title="單選框2"
          icon="shop-o"
          onClick={() => toggle('b')}
          rightIcon={<Checkbox name="b" />}
        />
      </CellGroup>
    </Checkbox.Group>
  );
};
```

## API

### Checkbox Props

| 參數           | 說明                          | 類型                                   | 預設值    |
| -------------- | ----------------------------- | -------------------------------------- | --------- |
| checked        | 是否為選中狀態                | _boolean_                              | `false`   |
| defaultChecked | 預設選中項的標識符            | _any[]_                                | -         |
| name           | 標識符                        | _any_                                  | -         |
| shape          | 形狀，可選值為 `square`       | _string_                               | `round`   |
| disabled       | 是否禁用複選框                | _boolean_                              | `false`   |
| labelDisabled  | 是否禁用複選框文字點擊        | _boolean_                              | `false`   |
| labelPosition  | 文字位置，可選值為 `left`     | _string_                               | `right`   |
| iconSize       | 圖示大小，預設單位為 `px`     | _number \| string_                     | `20px`    |
| iconRender     | 自定義圖示                    | _({ checked, disabled }) => ReactNode_ | -         |
| checkedColor   | 選中狀態顏色                  | _string_                               | `#3f45ff` |
| bindGroup      | 是否與複選框組綁定            | _boolean_                              | `true`    |

### Checkbox.Group Props

| 參數         | 說明                                      | 類型               | 預設值     |
| ------------ | ----------------------------------------- | ------------------ | ---------- |
| value        | 所有選中項的標識符                        | _any[]_            | -          |
| defaultValue | 預設選中項的標識符                        | _any[]_            | -          |
| disabled     | 是否禁用所有複選框                        | _boolean_          | `false`    |
| max          | 最大可選數，`0` 為無限制                  | _number \| string_ | `0`        |
| direction    | 排列方向，可選值為 `horizontal`           | _string_           | `vertical` |
| iconSize     | 所有複選框的圖示大小，預設單位為 `px`     | _number \| string_ | `20px`     |
| checkedColor | 所有複選框的選中狀態顏色                  | _string_           | `#3f45ff`  |

### Checkbox Events

| 事件名   | 說明                         | 回調參數            |
| -------- | ---------------------------- | ------------------- |
| onChange | 當綁定值變化時觸發的事件     | _checked: boolean_  |
| onClick  | 點擊複選框時觸發             | _event: MouseEvent_ |

### Checkbox.Group Events

| 事件名   | 說明                         | 回調參數       |
| -------- | ---------------------------- | -------------- |
| onChange | 當綁定值變化時觸發的事件     | _names: any[]_ |

### Checkbox.Group 方法

透過 ref 可以取得 Checkbox.Group 實例並呼叫實例方法。

| 方法名    | 說明                                                                 | 參數                         | 返回值 |
| --------- | -------------------------------------------------------------------- | ---------------------------- | ------ |
| toggleAll | 切換所有複選框，傳入 `true` 為選中，`false` 為取消選中，不傳參為取反 | _options?: boolean \| object_ | -      |

### toggleAll 方法示例

```jsx
import { Checkbox.GroupInstance } from 'rc-ui-lib';

const Checkbox.Group = useRef < Checkbox.GroupInstance > null;

// 全部反選
Checkbox.Group.current?.toggleAll();
// 全部選中
Checkbox.Group.current?.toggleAll(true);
// 全部取消
Checkbox.Group.current?.toggleAll(false);

// 全部反選，並跳過禁用的複選框
Checkbox.Group.current?.toggleAll({
  skipDisabled: true,
});
// 全部選中，並跳過禁用的複選框
Checkbox.Group.current?.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox 方法

透過 ref 可以取得 Checkbox 實例並呼叫實例方法。

| 方法名 | 說明                                                         | 參數               | 返回值 |
| ------ | ------------------------------------------------------------ | ------------------ | ------ |
| toggle | 切換選中狀態，傳 `true` 為選中，`false` 為取消選中，不傳參為取反 | _checked?: boolean_ | -      |

### 型別定義

透過 `CheckboxInstance` 和 `Checkbox.GroupInstance` 取得 Checkbox 實例的型別定義。

```js
import { useRef } from 'react';
import type { CheckboxInstance, Checkbox.GroupInstance } from 'rc-ui-lib';

const checkboxRef = useRef<CheckboxInstance>();
const Checkbox.GroupRef = useRef<Checkbox.GroupInstance>();

checkboxRef.current?.toggle();
Checkbox.GroupRef.current?.toggleAll();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                    | 預設值                              | 描述 |
| --------------------------------------- | ----------------------------------- | ---- |
| --rc-checkbox-size                      | _20px_                              | -    |
| --rc-checkbox-border-color              | _var(--rc-gray-5)_                  | -    |
| --rc-checkbox-transition-duration       | _var(--rc-animation-duration-fast)_ | -    |
| --rc-checkbox-label-margin              | _var(--rc-padding-xs)_              | -    |
| --rc-checkbox-label-color               | _var(--rc-text-color)_              | -    |
| --rc-checkbox-checked-icon-color        | _var(--rc-primary-color)_           | -    |
| --rc-checkbox-disabled-icon-color       | _var(--rc-gray-5)_                  | -    |
| --rc-checkbox-disabled-label-color      | _var(--rc-gray-5)_                  | -    |
| --rc-checkbox-disabled-background-color | _var(--rc-border-color)_            | -    |


