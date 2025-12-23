# Picker 選擇器

### 介紹

提供多個選項集合供用戶選擇，支持單列選擇和多列級聯，通常與[彈出層](#/zh-CN/popup)元件配合使用。

### 引入

```js
import { Picker } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

#### 選項配置

Picker 元件通過 `columns` 屬性配置選項數據，`columns` 是一個包含字符串或對象的數組。

#### 頂部欄

頂部欄包含標題、確認按鈕和取消按鈕，點擊確認按鈕觸發 `confirm` 事件，點擊取消按鈕觸發 `cancel` 事件。

```js
import { Picker, Toast } from 'rc-ui-lib';

const columns = ['南京', '蘇州', '常州', '淮安', '揚州', '南通', '宿遷', '泰州', '無錫'];
```

```jsx
<Picker
  columns={columns}
  title="標題"
  onChange={(value: string, index: number) => Toast(`當前值：${value}, 當前索引：${index}`)}
  onCancel={() => Toast.info('點擊取消按鈕')}
  onConfirm={() => Toast.info('點擊確認按鈕')}
/>
```

### 默認選中項

單列選擇時，可以通過 `defaultIndex` 屬性設置初始選中項的索引。

```jsx
<Picker
  columns={columns}
  defaultIndex={2}
  onChange={(value: string, index: number) => Toast(`當前值：${value}, 當前索引：${index}`)}
/>
```

### 多列選擇

`columns` 屬性可以通過對象數組的形式配置多列選擇，對象中可以配置選項數據、初始選中項等，詳細格式見[下方表格](#/zh-CN/picker#column-shu-ju-jie-gou)。

```jsx
<Picker
  columns={[
    {
      values: ['週一', '週二', '週三', '週四', '週五'],
      defaultIndex: 2,
    },
    // 第二列
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ]}
/>
```

### 級聯選擇

使用 `columns` 的 `children` 字段可以實現選項級聯的效果。

```jsx
<Picker
  title="標題"
  columns={[
    {
      text: '江蘇',
      children: [
        {
          text: '蘇州',
          children: [{ text: '姑蘇區' }, { text: '吳中區' }],
        },
        {
          text: '揚州',
          children: [{ text: '廣陵區' }, { text: '邗江區' }],
        },
      ],
    },
    {
      text: '浙江',
      children: [
        {
          text: '杭州',
          children: [{ text: '西湖區' }, { text: '余杭區' }],
        },
        {
          text: '溫州',
          children: [{ text: '鹿城區' }, { text: '甌海區' }],
        },
      ],
    },
  ]}
/>
```

> 級聯選擇的數據嵌套深度需要保持一致，如果部分選項沒有子選項，可以使用空字符串進行佔位

### 禁用選項

選項可以為對象結構，通過設置 `disabled` 來禁用該選項。

```jsx
<Picker columns={[{ text: '南京', disabled: true }, { text: '蘇州' }, { text: '揚州' }]} />
```

### 動態設置選項

通過 Picker 上的實例方法可以更靈活地控制選擇器，比如使用 `setColumnValues` 方法實現多列聯動。

```js
const picker = useRef(null);
const cities = {
  江蘇: ['南京', '蘇州', '常州', '淮安', '揚州'],
  浙江: ['杭州', '寧波', '溫州', '嘉興', '湖州'],
};
```

```jsx
<Picker
  ref={picker}
  columns={[{ values: Object.keys(cities) }, { values: cities['浙江'], defaultIndex: 2 }]}
  onChange={(values: string[]) => {
    picker.current.setColumnValues(1, cities[values[0]]);
  }}
/>
```

### 載入狀態

若選擇器數據是異步獲取的，可以通過 `loading` 屬性顯示載入提示。

```jsx
<Picker
  loading
  columns={[
    {
      values: ['週一', '週二', '週三', '週四', '週五'],
      defaultIndex: 2,
    },
    // 第二列
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ]}
/>
```

### 搭配彈出層使用

在實際場景中，Picker 通常作為用於輔助表單填寫，可以搭配 Popup 和 Field 實現該效果。

```js
const [fieldValue, setFieldValue] = useState('');
const [showPicker, setShowPicker] = useState(false);
```

```jsx
<Field
  readonly
  clickable
  label="城市"
  value={fieldValue}
  placeholder="選擇城市"
  onClick={() => setShowPicker(true)}
/>
<Popup
  round
  visible={showPicker}
  position="bottom"
  onClose={() => setShowPicker(false)}
>
  <Picker
    title="標題"
    onConfirm={(value: string) => {
      setFieldValue(value);
      setShowPicker(false);
    }}
    columns={columns}
  />
</Popup>
```

### 自定義 Columns 的結構

```jsx
const columns = [
  {
    cityName: '浙江',
    cities: [
      {
        cityName: '杭州',
        cities: [{ cityName: '西湖區' }, { cityName: '余杭區' }],
      },
      {
        cityName: '溫州',
        cities: [{ cityName: '鹿城區' }, { cityName: '甌海區' }],
      },
    ],
  },
  {
    cityName: '福建',
    cities: [
      {
        cityName: '福州',
        cities: [{ cityName: '鼓樓區' }, { cityName: '台江區' }],
      },
      {
        cityName: '廈門',
        cities: [{ cityName: '思明區' }, { cityName: '海滄區' }],
      },
    ],
  },
];
const columnsFieldNames = {
  text: 'cityName',
  children: 'cities',
};
<Picker title="標題" columnsFieldNames={columnsFieldNames} columns={columns} />;
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| columns | 對象數組，配置每一列顯示的數據 | _Column[]_ | `[]` |
| columnsFieldNames | 自定義 `columns` 結構中的字段 | _object_ | `{ text: 'text', values: 'values', children: 'children' }` |
| title | 頂部欄標題 | _ReactNode_ | - |
| confirmButtonText | 確認按鈕文字 | _ReactNode_ | `確認` |
| cancelButtonText | 取消按鈕文字 | _ReactNode_ | `取消` |
| toolbar | 自定義整個頂部欄的內容 | _ReactNode_ | - |
| toolbarPosition | 頂部欄位置，可選值為 `bottom` | _string_ | `top` |
| columnsTop | 自定義選項上方內容 | _ReactNode_ | - |
| columnsBottom | 自定義選項下方內容 | _ReactNode_ | - |
| optionRender | 自定義選項內容 | _(option: string \| object) => ReactNode_ | - |
| loading | 是否顯示載入狀態 | _boolean_ | `false` |
| showToolbar | 是否顯示頂部欄 | _boolean_ | `true` |
| defaultIndex | 單列選擇時，默認選中項的索引 | _number \| string_ | `0` |
| itemHeight | 選項高度，支持 `px` `vw` `vh` `rem` 單位，默認 `px` | _number \| string_ | `44` |
| visibleItemCount | 可見的選項個數 | _number \| string_ | `6` |
| swipeDuration | 快速滑動時慣性滾動的時長，單位 `ms` | _number \| string_ | `1000` |

### Events

當選擇器有多列時，事件回調參數會返回數組。

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| onConfirm | 點擊完成按鈕時觸發 | 單列：選中值，選中值對應的索引<br/>多列：所有列選中值，所有列選中值對應的索引 |
| onCancel | 點擊取消按鈕時觸發 | 單列：選中值，選中值對應的索引<br/>多列：所有列選中值，所有列選中值對應的索引 |
| onChange | 選項改變時觸發 | 單列：選中值，選中值對應的索引<br/>多列：所有列選中值，當前列對應的索引 |

### Column 數據結構

當傳入多列數據時，`columns` 為一個對象數組，數組中的每一個對象配置每一列，每一列有以下 `key`:

| 鍵名         | 說明                       | 類型                        |
| ------------ | -------------------------- | --------------------------- |
| values       | 列中對應的備選值           | _Array<string \| number>_   |
| defaultIndex | 初始選中項的索引，默認為 0 | _number_                    |
| className    | 為對應列添加額外的類名     | _string \| Array \| object_ |
| children     | 級聯選項                   | _Column_                    |

### 方法

通過 ref 可以獲取到 Picker 實例並調用實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名          | 說明                            | 參數                     | 返回值      |
| --------------- | ------------------------------- | ------------------------ | ----------- |
| getValues       | 獲取所有列選中的值              | -                        | values      |
| setValues       | 設置所有列選中的值              | values                   | -           |
| getIndexes      | 獲取所有列選中值對應的索引      | -                        | indexes     |
| setIndexes      | 設置所有列選中值對應的索引      | indexes                  | -           |
| getColumnValue  | 獲取對應列選中的值              | columnIndex              | value       |
| setColumnValue  | 設置對應列選中的值              | columnIndex, value       | -           |
| getColumnIndex  | 獲取對應列選中項的索引          | columnIndex              | optionIndex |
| setColumnIndex  | 設置對應列選中項的索引          | columnIndex, optionIndex | -           |
| getColumnValues | 獲取對應列中所有選項            | columnIndex              | values      |
| setColumnValues | 設置對應列中所有選項            | columnIndex, values      | -           |
| confirm         | 停止慣性滾動並觸發 confirm 事件 | -                        | -           |

### 類型定義

通過 `PickerInstance` 獲取 Picker 實例的類型定義。

```jsx
import { useRef } from 'react';
import type { PickerInstance } from 'rc-ui-lib';

const pickerRef = useRef<PickerInstance>();

pickerRef.current?.confirm();
```

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                | 默認值                      | 描述 |
| ----------------------------------- | --------------------------- | ---- |
| --rc-picker-background-color        | _var(--rc-white)_           | -    |
| --rc-picker-toolbar-height          | _44px_                      | -    |
| --rc-picker-title-font-size         | _var(--rc-font-size-lg)_    | -    |
| --rc-picker-title-line-height       | _var(--rc-line-height-md)_  | -    |
| --rc-picker-action-padding          | _0 var(--rc-padding-md)_    | -    |
| --rc-picker-action-font-size        | _var(--rc-font-size-md)_    | -    |
| --rc-picker-confirm-action-color    | _var(--rc-text-link-color)_ | -    |
| --rc-picker-cancel-action-color     | _var(--rc-gray-6)_          | -    |
| --rc-picker-option-padding          | _0 var(--rc-padding-base)_  | -    |
| --rc-picker-option-font-size        | _var(--rc-font-size-lg)_    | -    |
| --rc-picker-option-text-color       | _var(--rc-black)_           | -    |
| --rc-picker-option-disabled-opacity | _0.3_                       | -    |
| --rc-picker-loading-icon-color      | _var(--rc-primary-color)_   | -    |
| --rc-picker-loading-mask-color      | _rgba(255, 255, 255, 0.9)_  | -    |

## 常見問題

### 在桌面端無法操作元件？

參見[桌面端適配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

