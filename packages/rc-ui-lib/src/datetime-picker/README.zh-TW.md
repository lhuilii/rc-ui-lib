# DatetimePicker 時間選擇

### 介紹

時間選擇器，支援日期、年月、時分等維度，通常與 [彈出層](#/zh-CN/popup) 元件配合使用。

### 引入

```js
import { DatetimePicker } from 'rc-ui-lib';
```

## 程式碼演示

### 選擇年月日

DatetimePicker 透過 `type` 屬性來定義需要選擇的時間型別，`type` 為 `date` 表示選擇年月日。透過 `minDate` 和 `maxDate` 屬性可以設定可選的時間範圍。

```jsx
<DatetimePicker
  type="date"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### 選擇年月

將 `type` 設定為 `year-month` 即可選擇年份和月份。透過傳入 `formatter` 函數，可以對選項文字進行格式化處理。

```jsx
<DatetimePicker
  type="year-month"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  formatter={(type: string, val: string) => {
    if (type === 'year') {
      return `${val}年`;
    }
    if (type === 'month') {
      return `${val}月`;
    }
    return val;
  }}
/>
```

### 選擇月日

將 `type` 設定為 `month-day` 即可選擇月份和日期。

```jsx
<DatetimePicker
  type="month-day"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  formatter={(type: string, val: string) => {
    if (type === 'month') {
      return `${val}月`;
    }
    if (type === 'day') {
      return `${val}日`;
    }
    return val;
  }}
/>
```

### 選擇時間

將 `type` 設定為 `time` 即可選擇時間（小時和分鐘）。

```jsx
<DatetimePicker type="time" minHour="10" maxHour="20" value="12:00" />
```

### 選擇完整時間

將 `type` 設定為 `datetime` 即可選擇完整時間，包括年月日和小時、分鐘。

```jsx
<DatetimePicker
  type="datetime"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### 選擇年月日小時

將 `type` 設定為 `datehour` 即可選擇日期和小時，包括年月日和小時。

```jsx
<DatetimePicker
  type="datehour"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### 選項過濾器

透過傳入 `filter` 函數，可以對選項陣列進行過濾，實現自訂時間間隔。

```jsx
<DatetimePicker
  type="time"
  minHour="10"
  maxHour="20"
  value="12:00"
  filter={(type, options) => {
    if (type === 'minute') {
      return options.filter((option) => option % 5 === 0);
    }
    return options;
  }}
/>
```

### 自訂列排序

```jsx
<DatetimePicker
  type="date"
  columnsOrder={['month', 'day', 'year']}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### 確認按鈕

```jsx
<DatetimePicker
  showSubmitBtn
  onConfirm={(value: Date) => Toast(`確認的日期：${value}`)}
  minDate={new Date(2021, 0, 1)}
  maxDate={new Date(2021, 2, 1)}
  value={new Date()}
/>
```

### 搭配彈出層使用

```jsx
<Field
  readonly
  clickable
  label="日期"
  value={fieldValue}
  placeholder="選擇日期"
  onClick={() => setShowPicker(true)}
/>
<Popup
  title="請選擇日期"
  closeable
  visible={showPicker}
  round
  position="bottom"
  onClose={() => setShowPicker(false)}
>
  <DatetimePicker
    showSubmitBtn
    onConfirm={(value: string) => {
      setFieldValue(value);
      setShowPicker(false);
    }}
    type="date"
    filter={(type: string, options) => {
      if (type === 'minute') {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    }}
    minDate={new Date(2021, 0, 1)}
    maxDate={new Date(2021, 2, 1)}
    value={new Date()}
  />
</Popup>
```

## API

### Props

| 參數 | 說明 | 型別 | 預設值 |
| --- | --- | --- | --- |
| type | 時間型別，可選值為 `date` `time` <br/> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | 頂部欄標題 | _ReactNode_ | `''` |
| confirmButtonText | 確認按鈕文字 | _ReactNode_ | `確認` |
| cancelButtonText | 取消按鈕文字 | _string_ | `取消` |
| showSoolbar | 是否顯示頂部欄 | _boolean_ | `true` |
| loading | 是否顯示載入狀態 | _boolean_ | `false` |
| readonly | 是否為唯讀狀態，唯讀狀態下無法切換選項 | _boolean_ | `false` |
| filter | 選項過濾函數 | _(type: string, values: string[]) => string[]_ | - |
| formatter | 選項格式化函數 | _(type: string, value: string) => string_ | - |
| columnsOrder | 自訂列排序陣列，子項可選值為<br/> `year`、`month`、`day`、`hour`、`minute` | _string[]_ | - |
| itemHeight | 選項高度，支援 `px` `vw` `vh` `rem` 單位，預設 `px` | _number \| string_ | `44` |
| visibleItemCount | 可見的選項個數 | _number \| string_ | `6` |
| swipeDuration | 快速滑動時慣性滾動的時長，單位 `ms` | _number \| string_ | `1000` |
| columnsTop | 自訂選項上方內容 | _ReactNode_ | - |
| columnsBottom | 自訂選項下方內容 | _ReactNode_ | - |
| optionRender | 自訂選項內容 | _(option: string \| object) => ReactNode_ | - |

### DatePicker Props

當時間選擇器型別為 `date` 或 `datetime` 時，支援以下 props：

| 參數    | 說明                         | 型別   | 預設值 |
| ------- | ---------------------------- | ------ | ------ |
| minDate | 可選的最小時間，精確到分鐘   | _Date_ | 十年前 |
| maxDate | 可選的最大時間，精確到分鐘   | _Date_ | 十年後 |

### TimePicker Props

當時間選擇器型別為 `time` 時，支援以下 props：

| 參數      | 說明             | 型別               | 預設值 |
| --------- | ---------------- | ------------------ | ------ |
| minHour   | 可選的最小小時   | _number \| string_ | `0`    |
| maxHour   | 可選的最大小時   | _number \| string_ | `23`   |
| minMinute | 可選的最小分鐘   | _number \| string_ | `0`    |
| maxMinute | 可選的最大分鐘   | _number \| string_ | `59`   |

### Events

| 事件名    | 說明                     | 回調參數              |
| --------- | ------------------------ | --------------------- |
| onChange  | 當值變化時觸發的事件     | value: 當前選中的時間 |
| onConfirm | 點擊完成按鈕時觸發的事件 | value: 當前選中的時間 |
| onCancel  | 點擊取消按鈕時觸發的事件 | -                     |

### 方法

透過 ref 可以取得 DatetimePicker 實例並呼叫實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| getPicker | 取得 `Picker` 實例，用於呼叫 Picker 的[實例方法](#/zh-CN/picker#fang-fa) | - | - |

### 型別定義

透過 `DatetimePickerInstance` 取得 DatetimePicker 實例的型別定義（自 3.2.0 版本開始支援）。

```jsx
import { useRef } from 'react';
import type { DatetimePickerInstance } from 'rc-ui-lib';

const datetimePickerRef = useRef<DatetimePickerInstance>();

datetimePickerRef.current?.getPicker();
```

## 常見問題

### 設定 `min-date` 或 `max-date` 後出現畫面卡死的情況？

請注意不要在模板中直接使用類似 `min-date="new Date()"` 的寫法，這樣會導致每次渲染元件時傳入一個新的 `Date` 物件，而傳入新的資料會觸發下一次渲染，從而陷入死循環。

正確的做法是將 `min-date` 作為一個資料定義在 `data` 函數中。

### 在 iOS 系統上初始化元件失敗？

如果你遇到了在 iOS 上無法渲染元件的問題，請確認在建立 `Date` 物件時沒有使用 `new Date('2020-01-01')` 這樣的寫法，iOS 不支援以連字號分隔的日期格式，正確寫法是 `new Date('2020/01/01')`。

對此問題的詳細解釋： [stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。

### 在桌面端無法操作元件？

參見[桌面端適配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### 是否有年份或月份選擇器？

如果僅需要選擇年份或者月份，建議直接使用 [Picker](#/zh-CN/picker) 元件。


