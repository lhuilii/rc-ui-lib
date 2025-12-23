# DropdownMenu 下拉選單

### 介紹

向下展開的選單列表。

### 引入

```js
import { DropdownMenu } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活動商品', value: 2 },
];
const option2 = [
  { text: '預設排序', value: 'a' },
  { text: '好評排序', value: 'b' },
  { text: '銷量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState({});
  return (
    <DropdownMenu>
      <DropdownMenu.Item name="item1" options={option1} />
      <DropdownMenu.Item name="item2" options={option2} />
    </DropdownMenu>
  );
};
```

### 自訂選單內容

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活動商品', value: 2 },
];
export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu>
      <DropdownMenu.Item name="ite" options={option1} />
      <DropdownMenu.Item title="篩選" name="value2">
        <Cell center title="包郵" rightIcon={<Switch size={24} />} />
        <Cell center title="團購" rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};
```

### 自訂高亮顏色

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活動商品', value: 2 },
];
const option2 = [
  { text: '預設排序', value: 'a' },
  { text: '好評排序', value: 'b' },
  { text: '銷量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu activeColor="#f44336">
      <DropdownMenu.Item name="item1" options={option1} />
      <DropdownMenu.Item name="item2" options={option2} />
    </DropdownMenu>
  );
};
```

### 向上展開

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活動商品', value: 2 },
];
const option2 = [
  { text: '預設排序', value: 'a' },
  { text: '好評排序', value: 'b' },
  { text: '銷量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu direction="up">
      <DropdownMenu.Item name="item1" options={option1} />
      <DropdownMenu.Item name="item2" options={option2} />
    </DropdownMenu>
  );
};
```

### 禁用選單

```jsx
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活動商品', value: 2 },
];
const option2 = [
  { text: '預設排序', value: 'a' },
  { text: '好評排序', value: 'b' },
  { text: '銷量排序', value: 'c' },
];

export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu disabled>
      <DropdownMenu.Item name="item1" options={option1} />
      <DropdownMenu.Item name="item2" options={option2} />
    </DropdownMenu>
  );
};
```

## API

### DropdownMenu Props

| 參數                | 說明                             | 型別               | 預設值    |
| ------------------- | -------------------------------- | ------------------ | --------- |
| activeColor         | 選單標題和選項的選中態顏色       | _string_           | `#ee0a24` |
| direction           | 選單展開方向，可選值為 `up`      | _string_           | `down`    |
| zIndex              | 選單欄 z-index 層級               | _number \| string_ | `10`      |
| duration            | 動畫時長，單位秒                 | _number \| string_ | `0.2`     |
| overlay             | 是否顯示遮罩層                   | _boolean_          | `true`    |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉選單       | _boolean_          | `true`    |
| closeOnClickOutside | 是否在點擊外部元素後關閉選單     | _boolean_          | `true`    |

### DropdownItem Props

| 參數        | 說明                         | 型別                           | 預設值         |
| ----------- | ---------------------------- | ------------------------------ | -------------- |
| name        | 當前選中項對應的 value key   | _number \| string_             | -              |
| title       | 選單項標題                   | _ReactNode_                    | 當前選中項文字 |
| placeholder | 佔位文字                     | _string_                       | `請選擇`       |
| options     | 選項陣列                     | _Option[]_                     | `[]`           |
| disabled    | 是否禁用選單                 | _boolean_                      | `false`        |
| titleClass  | 標題額外類名                 | _string_                       | -              |
| teleport    | 指定掛載的節點               | _HTMLElment () => HTMLElement_ | -              |

### DropdownMenu Events

| 事件名   | 說明                      | 回調參數 | 參數型別 |
| -------- | ------------------------- | -------- | -------- |
| onChange | 子元件 value 變化時觸發   | value    | _Option_ |

### DropdownItem Events

| 事件名   | 說明                              | 回調參數 | 參數型別 |
| -------- | --------------------------------- | -------- | -------- |
| onOpen   | 打開選單欄時觸發                  | -        | -        |
| onOpened | 打開選單欄且動畫結束後觸發        | -        | -        |
| onClose  | 關閉選單欄時觸發                  | -        | -        |
| onClosed | 關閉選單欄且動畫結束後觸發        | -        | -        |
| onChange | 點擊選項導致 value 變化時觸發     | value    | _Option_ |

### Option 資料結構

| 鍵名  | 說明                                         | 型別                        |
| ----- | -------------------------------------------- | --------------------------- |
| name  | 文案                                         | _string_                    |
| value | 選項值                                       | _number \| string_          |
| icon  | 選項左側[圖示名稱](#/zh-CN/icon)或圖片連結   | _string \| React.ReactNode_ |

### DropdownMenu 方法

透過 ref 可以取得 `DropdownMenu` 實例並呼叫實例方法。

| 方法名 | 說明     | 參數 | 回傳值 |
| ------ | -------- | ---- | ------ |
| close  | 關閉選單 | -    | -      |

### 型別定義

元件匯出以下型別定義：

```js
import type { DropdownMenuInstance } from 'rc-ui-lib';
```

`DropdownMenuInstance` 是元件 `DropdownMenu` 實例的型別，用法如下：

```js
import { useRef } from 'react';
import type { DropdownMenuInstance } from 'rc-ui-lib/es/dropdown-menu';

const DropdownMenuRef = useRef<DropdownMenuInstance>(null);

DropdownMenuRef.current?.close();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                         | 預設值                                  | 描述 |
| -------------------------------------------- | --------------------------------------- | ---- |
| --rc-dropdown-menu-height                    | _48px_                                  | -    |
| --rc-dropdown-menu-background-color          | _var(--rc-white)_                       | -    |
| --rc-dropdown-menu-box-shadow                | _0 2px 12px fade(var(--rc-gray-7), 12)_ | -    |
| --rc-dropdown-menu-title-font-size           | _15px_                                  | -    |
| --rc-dropdown-menu-title-text-color          | _var(--rc-text-color)_                  | -    |
| --rc-dropdown-menu-title-active-text-color   | _var(--rc-danger-color)_                | -    |
| --rc-dropdown-menu-title-disabled-text-color | _var(--rc-gray-6)_                      | -    |
| --rc-dropdown-menu-title-padding             | _0 var(--rc-padding-xs)_                | -    |
| --rc-dropdown-menu-title-line-height         | _var(--rc-line-height-lg)_              | -    |
| --rc-dropdown-menu-option-active-color       | _var(--rc-danger-color)_                | -    |
| --rc-dropdown-menu-content-max-height        | _80%_                                   | -    |
| --rc-dropdown-item-z-index                   | _10_                                    | -    |


