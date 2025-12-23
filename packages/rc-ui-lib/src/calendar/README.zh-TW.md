# Calendar 日曆

### 介紹

日曆組件用於選擇日期或日期區間。

### 引入

```js
import { Calendar } from 'rc-ui-lib';
```

## 程式碼示範

### 選擇單個日期

下面演示了結合單元格來使用日曆組件的用法，日期選擇完成後會觸發 `confirm` 事件。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  const onConfirm = (date) => {
    const dateStr = formatDate(date);
    setText(dateStr);
    setVisible(false);
  };
  return (
    <>
      <Cell title="選擇單個日期" value={text} onClick={() => setVisible(true)} />
      <Calendar visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### 選擇多個日期

設置 `type` 為 `multiple` 後可以選擇多個日期，此時 `confirm` 事件返回的 date 為數組結構，數組包含若干個選中的日期。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const onConfirm = (dates) => {
    setText(`選擇了 ${dates.length} 個日期`);
    setVisible(false);
  };
  return (
    <>
      <Cell title="選擇多個日期" value={text} onClick={() => setVisible(true)} />
      <Calendar type="multiple" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### 選擇日期區間

設置 `type` 為 `range` 後可以選擇日期區間，此時 `confirm` 事件返回的 date 為數組結構，數組第一項為開始時間，第二項為結束時間。

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
  const onConfirm = ([start, end]) => {
    setText(`${formatDate(start)} - ${formatDate(end)}`);
    setVisible(false);
  };
  return (
    <>
      <Cell title="選擇日期區間" value={text} onClick={() => setVisible(true)} />
      <Calendar type="range" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

> 提示：預設情況下，日期區間的起始時間不能為同一天，可以透過設置 allowSameDay 屬性來允許選擇同一天。

### 快捷選擇

將 `showConfirm` 設置為 `false` 可以隱藏確認按鈕，這種情況下選擇完成後會立即觸發 `confirm` 事件。

```tsx
<Calendar show={show} showConfirm={false} />
```

### 自定義顏色

透過 `color` 屬性可以自定義日曆的顏色，對選中日期和底部按鈕生效。

```tsx
<Calendar show={show} color="#1989fa" />
```

### 自訂日期範圍

通過 `minDate` 和 `maxDate` 定義日曆的範圍。

```jsx
const minDate = new Date(2010, 0, 1);
const maxDate = new Date(2010, 0, 31);

<Calendar visible={visible} minDate={minDate} maxDate={maxDate} />;
```

### 自定義按鈕文字

通過 `confirm-text` 設置按鈕文字，通過 `confirm-disabled-text` 設置按鈕禁用時的文字。

```tsx
<Calendar show={show} type="range" confirm-text="完成" confirm-disabled-text="請選擇結束時間" />
```

### 自定義日期文案

通過傳入 `formatter` 函數來對日曆上每一格的內容進行格式化。

```jsx
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '勞動節';
    } else if (date === 4) {
      day.topInfo = '青年節';
    } else if (date === 11) {
      day.text = '今天';（此句本身繁簡相同，无需轉換，呈现如上）
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';（此句代码中的英文及符号通常不作繁体转换，整体保持原样即可 ，若从纯文本角度“入住”繁体为“入住” ，整体无变化）
  } else if (day.type === 'end') {
    day.bottomInfo = '離店';
  }

  return day;
};

<Calendar visible={visible} type="range" formatter={formatter} />;
```

### 自定義彈出位置

通過 `position` 屬性自定義彈出層的彈出位置，可選值為 `top`、`left`、`right`。

```tsx
<Calendar show={show} round={false} position="right" />
```

### 日期區間最大範圍

選擇日期區間時，可以透過 `maxRange` 屬性來指定最多可選天數，選擇的範圍超過最多可選天數時，會彈出相應的提示文案。

```tsx
<Calendar type="range" maxRange={3} style={{ height: '500px' }} />
```

### 自定義周起始日

透過 `firstDayOfWeek` 屬性設置一周從哪天開始。

```tsx
<Calendar firstDayOfWeek="1" />
```

### 平鋪展示

將 `poppable` 設置為 `false`，日曆會直接展示在頁面內，而不是以彈層的形式出現。
```tsx
<Calendar title="日曆" poppable={false} showConfirm={false} style={{ height: '500px' }} />
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 選擇類型:<br/>`single` 表示選擇單個日期，<br/>`multiple` 表示選擇多個日期，<br/>`range` 表示選擇日期區間 | _string_ | `single` |
| title | 日曆標題 | _string_ | `日期選擇` |
| subtitle | 自定義日曆副標題 | _string\|React.ReactNode_ | - |
| color | 主題色，對底部按鈕和選中日期生效 | _string_ | `#ee0a24` |
| minDate | 可選擇的最小日期 | _Date_ | 當前日期 |
| maxDate | 可選擇的最大日期 | _Date_ | 當前日期的六個月後 |
| footer | 自定義底部區域內容 | _string\|React.ReactNode_ | - |
| topInfoRender | 自定義日期上方的提示資訊 | _(day: Day) => React.ReactNode_ | - |
| bottomInfoRender | 自定義日期下方的提示資訊 | _(day: Day) => React.ReactNode_ | - |
| defaultDate | 默認選中的日期，`type` 為 `multiple` 或 `range` 時為數組，傳入 `null` 表示默認不選擇 | _Date \| Date[] \| null_ | 今天 |
| rowHeight | 日期行高 | _number \| string_ | `64` |
| formatter | 日期格式化函數 | _(day: Day) => Day_ | - |
| poppable | 是否以彈層的形式展示日曆 | _boolean_ | `true` |
| lazyRender | 是否只渲染可視區域的內容 | _boolean_ | `true` |
| showMark | 是否顯示月份背景水印 | _boolean_ | `true` |
| showTitle | 是否展示日曆標題 | _boolean_ | `true` |
| showSubtitle | 是否展示日曆副標題（年月） | _boolean_ | `true` |
| showConfirm | 是否展示確認按鈕 | _boolean_ | `true` |
| readonly | 是否為只讀狀態，只讀狀態下不能選擇日期 | _boolean_ | `false` |
| confirmText | 確認按鈕的文字 | _string_ | `確定` |
| confirmDisabledText | 確認按鈕處於禁用狀態時的文字 | _string_ | `確定` |
| firstDayOfWeek | 設置周起始日 | _0-6_ | `0` |

### Calendar Poppable Props

當 Calendar 的 `poppable` 為 `true` 時，支援以下 props:

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| show | 是否顯示日曆彈窗 | _boolean_ | `false` |
| position | 彈出位置，可選值為 `top` `right` `left` | _string_ | `bottom` |
| round | 是否顯示圓角彈窗 | _boolean_ | `true` |
| closeOnPopstate | 是否在頁面回退時自動關閉 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在點擊遮罩層後關閉 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Calendar Range Props

當 Calendar 的 `type` 為 `range` 時，支援以下 props:

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| maxRange | 日期區間最多可選天數 | _number \| string_ | 無限制 |
| rangePrompt | 範圍選擇超過最多可選天數時的提示文案 | _string_ | `最多選擇 xx 天` |
| showRangePrompt | 範圍選擇超過最多可選天數時，是否展示提示文案 | _boolean_ | `true` |
| allowSameDay | 是否允許日期範圍的起始時間和結束時間為同一天 | _boolean_ | `false` |

### Calendar Multiple Props

當 Calendar 的 `type` 為 `multiple` 時，支援以下 props:

| 參數        | 說明                             | 類型               | 預設值           |
| ----------- | -------------------------------- | ------------------ | ---------------- |
| maxRange    | 日期最多可選天數                 | _number \| string_ | 無限制           |
| rangePrompt | 選擇超過最多可選天數時的提示文案 | _string_           | `最多選擇 xx 天` |

### Day 資料結構

日曆中的每個日期都對應一個 Day 物件，透過`formatter`屬性可以自定義 Day 物件的內容

| 鍵名       | 說明                                                                | 類型     |
| ---------- | ------------------------------------------------------------------- | -------- |
| date       | 日期對應的 Date 物件                                                | _Date_   |
| type       | 日期類型，可選值為 `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text       | 中間顯示的文字                                                      | _string_ |
| topInfo    | 上方的提示資訊                                                      | _string_ |
| bottomInfo | 下方的提示訊息                                                      | _string_ |
| className  | 額外類名                                                            | _string_ |
### Events

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| onSelect | 點擊並選中任意日期時觸發 | _value: Date \| Date[]_
| onConfirm | 日期選擇完成後觸發，若 `showConfirm` 為 `true`，則點擊確認按鈕後觸發 | _value: Date \| Date[]_ |
| onClose | 關閉彈出層時觸發 | - |
| onClosed | 關閉彈出層且動畫結束後觸發 | - |
| onUnselect | 當日曆組件的 `type` 為 `multiple` 時，取消選中日期時觸發 | _value: Date_ |
| onMonthShow | 當某個月份進入可視區域時觸發 | _{ date: Date, title: string }_ |
| onOverRange | 範圍選擇超過最多可選天數時觸發 | - |
| onClickSubtitle | 點擊日曆副標題時觸發 | _event: MouseEvent_ |

### 方法

通過 ref 可以獲取到 Calendar 實例並調用實例方法，詳見[組件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| reset | 將選中的日期重置到指定日期，未傳參時會重置到預設日期 | _date?: Date \| Date[]_ | - |
| scrollToDate | 滾動到某個日期 | _date: Date_ | - |

### 類型定義

元件導出以下類型定義：

```ts
import type {
  CalendarType,
  CalendarProps,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance,
} from 'rct';
```

`CalendarInstance`是元件實例的型別，用法如下：

```ts
import { useRef } from 'React';
import type { CalendarInstance } from 'rc-ui-lib';

const calendarRef = useRef<CalendarInstance>();

calendarRef.current?.reset();
```

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/config-provider)。

| 名稱                                       | 預設值                                 | 描述 |
| ------------------------------------------ | -------------------------------------- | ---- |
| --Calendar-background-color                | _var(--rc-background-color-light)_     | -    |
| --Calendar-popup-height                    | _80%_                                  | -    |
| --Calendar-header-box-shadow               | _0 2px 10px rgba(125, 126, 128, 0.16)_ | -    |
| --Calendar-header-title-height             | _44px_                                 | -    |
| --Calendar-header-title-font-size          | _var(--rc-font-size-lg)_               | -    |
| --Calendar-header-subtitle-font-size       | _var(--rc-font-size-md)_               | -    |
| --Calendar-weekdays-height                 | _30px_                                 | -    |
| --Calendar-weekdays-font-size              | _var(--rc-font-size-sm)_               | -    |
| --Calendar-month-title-font-size           | _var(--rc-font-size-md)_               | -    |
| --Calendar-month-mark-color                | _fade(var(--rc-gray-2), 80%)_          | -    |
| --Calendar-month-mark-font-size            | _160px_                                | -    |
| --Calendar-day-height                      | _64px_                                 | -    |
| --Calendar-day-font-size                   | _var(--rc-font-size-lg)_               | -    |
| --Calendar-range-edge-color                | _var(--rc-white)_                      | -    |
| --Calendar-range-edge-background-color     | _var(--rc-danger-color)_               | -    |
| --Calendar-range-middle-color              | _var(--rc-danger-color)_               | -    |
| --Calendar-range-middle-background-opacity | _0.1_                                  | -    |
| --Calendar-selected-day-size               | _54px_                                 | -    |
| --Calendar-selected-day-color              | _var(--rc-white)_                      | -    |
| --Calendar-info-font-size                  | _var(--rc-font-size-xs)_               | -    |
| --Calendar-info-line-height                | _var(--rc-line-height-xs)_             | -    |
| --Calendar-selected-day-background-color   | _var(--rc-danger-color)_               | -    |
| --Calendar-day-disabled-color              | _var(--rc-text-color-3)_               | -    |
| --Calendar-confirm-button-height           | _36px_                                 | -    |
| --Calendar-confirm-button-margin           | _7px 0_                                | -    |

## 常見問題

### 在 iOS 系統上初始化組件失敗？

如果你遇到了在 iOS 上無法渲染組件的問題，請確認在創建 Date 物件時沒有使用`new Date('2020-01-01')`這樣的寫法，iOS 不支持以中劃線分隔的日期格式，正確寫法是`new Date('2020/01/01')`。

對此問題的詳細解釋：[stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios)。
