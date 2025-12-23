# Radio 單選框

### 介紹

用於在多個選項中選擇單個結果。

### 引入

```js
import { Radio } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `defaultValue` 值默認當前選中項的 name。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1">單選框 1</Radio>
  <Radio name="2">單選框 2</Radio>
</Radio.Group>
```

### 水平排列

將 `direction` 屬性設置為 `horizontal` 後，單選框組會變成水平排列。

```jsx
<Radio.Group defaultValue="1" direction="horizontal">
  <Radio name="1">單選框 1</Radio>
  <Radio name="2">單選框 2</Radio>
</Radio.Group>
```

### 禁用狀態

通過 `disabled` 屬性禁止選項切換，在 `Radio` 上設置 `disabled` 可以禁用單個選項。

```jsx
<Radio.Group defaultValue="1" disabled>
  <Radio name="1">單選框 1</Radio>
  <Radio name="2">單選框 2</Radio>
</Radio.Group>
```

### 自定義形狀

將 `shape` 屬性設置為 `square`，單選框的形狀會變成方形。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" shape="square">
    單選框 1
  </Radio>
  <Radio name="2" shape="square">
    單選框 2
  </Radio>
</Radio.Group>
```

### 自定義顏色

通過 `checkedColor` 屬性設置選中狀態的圖標顏色。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" checkedColor="#ee0a24">
    單選框 1
  </Radio>
  <Radio name="2" checkedColor="#ee0a24">
    單選框 2
  </Radio>
</Radio.Group>
```

### 自定義大小

通過 `iconSize` 屬性可以自定義圖標的大小。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" iconSize="24px">
    單選框 1
  </Radio>
  <Radio name="2" iconSize="24px">
    單選框 2
  </Radio>
</Radio.Group>
```

### 禁用文本點擊

設置 `labelDisabled` 屬性後，點擊圖標以外的內容不會觸發單選框切換。

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" labelDisabled>
    單選框 1
  </Radio>
  <Radio name="2" labelDisabled>
    單選框 2
  </Radio>
</Radio.Group>
```

### 異步更新

設置 `value` 屬性後，點擊圖標狀態不會改變，而是直接執行 `onChange` 方法，在此方法中更換狀態

```jsx
<Radio.Group
  value={value}
  onChange={(val) => {
    Toast.loading({ forbidClick: true });

    clearTimeout(timer);
    timer = setTimeout(() => {
      Toast.clear();
      // 注意此時修改 value 後會再次觸發 change 事件
      setValue(val);
    }, 500);
  }}
>
  <Radio name="1" labelDisabled>
    單選框 1
  </Radio>
  <Radio name="2" labelDisabled>
    單選框 2
  </Radio>
</Radio.Group>
```

### 與 Cell 元件一起使用

此時你需要再引入 `Cell` 和 `CellGroup` 元件。

```jsx
<Radio.Group value="1">
  <CellGroup>
    <Cell title="單選框1" icon="shop-o" rightIconSlot={() => <Radio name="1" />} />{' '}
    <Cell title="單選框2" icon="shop-o" rightIconSlot={() => <Radio name="2" />} />
  </CellGroup>
</Radio.Group>
```

## API

### Radio Props

| 參數          | 說明                      | 類型                                   | 默認值    |
| ------------- | ------------------------- | -------------------------------------- | --------- |
| name          | 標識符                    | _any_                                  | -         |
| shape         | 形狀，可選值為 `square`   | _string_                               | `round`   |
| disabled      | 是否為禁用狀態            | _boolean_                              | `false`   |
| labelDisabled | 是否禁用文本內容點擊      | _boolean_                              | `false`   |
| labelPosition | 文本位置，可選值為 `left` | _string_                               | `right`   |
| iconSize      | 圖標大小，默認單位為`px`  | _number \| string_                     | `21px`    |
| checkedColor  | 選中狀態顏色              | _string_                               | `#3f45ff` |
| iconRender    | 自定義圖標                | _({ checked, disabled }) => ReactNode_ | -         |

### Radio.Group Props

| 參數         | 說明                                 | 類型               | 默認值     |
| ------------ | ------------------------------------ | ------------------ | ---------- |
| value        | 當前選中項的標識符                   | _any_              | -          |
| disabled     | 是否禁用所有單選框                   | _boolean_          | `false`    |
| direction    | 排列方向，可選值為`horizontal`       | _string_           | `vertical` |
| iconSize     | 所有單選框的圖標大小，默認單位為`px` | _number \| string_ | `21px`     |
| checkedColor | 所有單選框的選中狀態顏色             | _string_           | `#3f45ff`  |

### Radio Events

| 事件名  | 說明             | 回調參數       |
| ------- | ---------------- | -------------- |
| onClick | 點擊單選框時觸發 | _event: Event_ |

### Radio.Group Events

| 事件名   | 說明                     | 回調參數       |
| -------- | ------------------------ | -------------- |
| onChange | 當綁定值變化時觸發的事件 | _name: string_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 默認值                              | 描述 |
| ------------------------------------ | ----------------------------------- | ---- |
| --rc-radio-size                      | _20px_                              | -    |
| --rc-radio-border-color              | _var(--rc-gray-5)_                  | -    |
| --rc-radio-transition-duration       | _var(--rc-animation-duration-fast)_ | -    |
| --rc-radio-label-margin              | _var(--rc-padding-xs)_              | -    |
| --rc-radio-label-color               | _var(--rc-text-color)_              | -    |
| --rc-radio-checked-icon-color        | _var(--rc-primary-color)_           | -    |
| --rc-radio-disabled-icon-color       | _var(--rc-gray-5)_                  | -    |
| --rc-radio-disabled-label-color      | _var(--rc-gray-5)_                  | -    |
| --rc-radio-disabled-background-color | _var(--rc-border-color)_            | -    |

