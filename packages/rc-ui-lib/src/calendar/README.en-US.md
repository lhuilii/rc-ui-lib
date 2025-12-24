# Calendar

### Introduction

The calendar component is used to select dates or date ranges.

### Import

```js
import { Calendar } from 'rc-ui-lib';
```

## Code Example

### Select Single Date

The following demonstrates how to use the calendar component combined with cells. The `confirm` event will be triggered after the date selection is completed.

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
      <Cell title="Select Single Date" value={text} onClick={() => setVisible(true)} />
      <Calendar visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### Select Multiple Dates

After setting `type` to `multiple`, you can select multiple dates. In this case, the date returned by the `confirm` event is an array structure, and the array contains several selected dates.

```jsx
import { useState } from 'react';
import { Cell, Calendar } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const onConfirm = (dates) => {
    setText(`Selected ${dates.length} dates`);
    setVisible(false);
  };
  return (
    <>
      <Cell title="Select Multiple Dates" value={text} onClick={() => setVisible(true)} />
      <Calendar type="multiple" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

### Select Date Range

After setting `type` to `range`, you can select a date range. In this case, the date returned by the `confirm` event is an array structure. The first item of the array is the start time, and the second item is the end time.

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
      <Cell title="Select Date Range" value={text} onClick={() => setVisible(true)} />
      <Calendar type="range" visible={visible} onConfirm={onConfirm} />
    </>
  );
};
```

> Tips: By default, the start and end times of a date range cannot be the same day. You can allow selecting the same day by setting the allowSameDay property.

### Quick Selection

Setting `showConfirm` to `false` can hide the confirm button. In this case, the `confirm` event will be triggered immediately after selection is completed.

```tsx
<Calendar show={show} showConfirm={false} />
```

### Custom Color

You can customize the calendar color through the `color` property, which takes effect on selected dates and the bottom button.

```tsx
<Calendar show={show} color="#1989fa" />
```

### Custom Date Range

Define the calendar range through `minDate` and `maxDate`.

```jsx
const minDate = new Date(2010, 0, 1);
const maxDate = new Date(2010, 0, 31);

<Calendar visible={visible} minDate={minDate} maxDate={maxDate} />;
```

### Custom Button Text

Set the button text through `confirm-text`, and set the text when the button is disabled through `confirm-disabled-text`.

```tsx
<Calendar show={show} type="range" confirm-text="Done" confirm-disabled-text="Please select end time" />
```

### Custom Date Text

Format the content of each cell on the calendar by passing in a `formatter` function.

```jsx
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = 'Labor Day';
    } else if (date === 4) {
      day.topInfo = 'Youth Day';
    } else if (date === 11) {
      day.text = 'Today';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = 'Check-in';
  } else if (day.type === 'end') {
    day.bottomInfo = 'Check-out';
  }

  return day;
};

<Calendar visible={visible} type="range" formatter={formatter} />;
```

### Custom Popup Position

Customize the popup position of the popup layer through the `position` property. Optional values are `top`, `left`, `right`.

```tsx
<Calendar show={show} round={false} position="right" />
```

### Maximum Date Range

When selecting a date range, you can specify the maximum number of selectable days through the `maxRange` property. When the selected range exceeds the maximum number of selectable days, a corresponding prompt text will pop up.

```tsx
<Calendar type="range" maxRange={3} style={{ height: '500px' }} />
```

### Custom Week Start Day

Set which day of the week starts through the `firstDayOfWeek` property.

```tsx
<Calendar firstDayOfWeek="1" />
```

### Flat Display

Setting `poppable` to `false`, the calendar will be displayed directly on the page instead of appearing as a popup layer.

```tsx
<Calendar title="Calendar" poppable={false} showConfirm={false} style={{ height: '500px' }} />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Selection type:<br/>`single` means select a single date,<br/>`multiple` means select multiple dates,<br/>`range` means select a date range | _string_ | `single` |
| title | Calendar title | _string_ | `Date Selection` |
| subtitle | Custom calendar subtitle | _string\|React.ReactNode_ | - |
| color | Theme color, takes effect on the bottom button and selected dates | _string_ | `#ee0a24` |
| minDate | Minimum selectable date | _Date_ | Current date |
| maxDate | Maximum selectable date | _Date_ | Six months after current date |
| footer | Custom bottom area content | _string\|React.ReactNode_ | - |
| topInfoRender | Custom prompt information above the date | _(day: Day) => React.ReactNode_ | - |
| bottomInfoRender | Custom prompt information below the date | _(day: Day) => React.ReactNode_ | - |
| defaultDate | Default selected date. When `type` is `multiple` or `range`, it is an array. Passing `null` means no selection by default | _Date \| Date[] \| null_ | Today |
| rowHeight | Date row height | _number \| string_ | `64` |
| formatter | Date formatting function | _(day: Day) => Day_ | - |
| poppable | Whether to display the calendar as a popup layer | _boolean_ | `true` |
| lazyRender | Whether to only render the content of the visible area | _boolean_ | `true` |
| showMark | Whether to show the month background watermark | _boolean_ | `true` |
| showTitle | Whether to display the calendar title | _boolean_ | `true` |
| showSubtitle | Whether to display the calendar subtitle (year and month) | _boolean_ | `true` |
| showConfirm | Whether to display the confirm button | _boolean_ | `true` |
| readonly | Whether it is in read-only state. In read-only state, dates cannot be selected | _boolean_ | `false` |
| confirmText | Text of the confirm button | _string_ | `Confirm` |
| confirmDisabledText | Text when the confirm button is in disabled state | _string_ | `Confirm` |
| firstDayOfWeek | Set the week start day | _0-6_ | `0` |

### Calendar Poppable Props

When Calendar's `poppable` is `true`, the following props are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the calendar popup | _boolean_ | `false` |
| position | Popup position, optional values are `top` `right` `left` | _string_ | `bottom` |
| round | Whether to show rounded popup | _boolean_ | `true` |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close after clicking the overlay | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable [bottom safe area inset](#/en-US/advanced-usage#bottom-safe-area-inset) | _boolean_ | `true` |

### Calendar Range Props

When Calendar's `type` is `range`, the following props are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| maxRange | Maximum number of selectable days for date range | _number \| string_ | Unlimited |
| rangePrompt | Prompt text when the range selection exceeds the maximum number of selectable days | _string_ | `Maximum xx days` |
| showRangePrompt | Whether to display prompt text when the range selection exceeds the maximum number of selectable days | _boolean_ | `true` |
| allowSameDay | Whether to allow the start and end times of the date range to be the same day | _boolean_ | `false` |

### Calendar Multiple Props

When Calendar's `type` is `multiple`, the following props are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| maxRange | Maximum number of selectable days for dates | _number \| string_ | Unlimited |
| rangePrompt | Prompt text when selection exceeds the maximum number of selectable days | _string_ | `Maximum xx days` |

### Day Data Structure

Each date in the calendar corresponds to a Day object. You can customize the content of the Day object through the `formatter` property

| Key | Description | Type |
| --- | --- | --- |
| date | Date object corresponding to the date | _Date_ |
| type | Date type, optional values are `selected`, `start`, `middle`, `end`, `disabled` | _string_ |
| text | Text displayed in the middle | _string_ |
| topInfo | Prompt information above | _string_ |
| bottomInfo | Prompt information below | _string_ |
| className | Additional class name | _string_ |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onSelect | Triggered when clicking and selecting any date | _value: Date \| Date[]_ |
| onConfirm | Triggered after date selection is completed. If `showConfirm` is `true`, it will be triggered after clicking the confirm button | _value: Date \| Date[]_ |
| onClose | Triggered when closing the popup layer | - |
| onClosed | Triggered after closing the popup layer and animation ends | - |
| onUnselect | When the calendar component's `type` is `multiple`, triggered when unselecting a date | _value: Date_ |
| onMonthShow | Triggered when a certain month enters the visible area | _{ date: Date, title: string }_ |
| onOverRange | Triggered when the range selection exceeds the maximum number of selectable days | - |
| onClickSubtitle | Triggered when clicking the calendar subtitle | _event: MouseEvent_ |

### Methods

You can get the Calendar instance and call instance methods through ref. For details, see [Component Instance Methods](#/en-US/advanced-usage#component-instance-methods).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| reset | Reset the selected date to the specified date. When no parameter is passed, it will reset to the default date | _date?: Date \| Date[]_ | - |
| scrollToDate | Scroll to a certain date | _date: Date_ | - |

### Type Definitions

The component exports the following type definitions:

```ts
import type {
  CalendarType,
  CalendarProps,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance,
} from 'rct';
```

`CalendarInstance` is the type of the component instance. Usage is as follows:

```ts
import { useRef } from 'React';
import type { CalendarInstance } from 'rc-ui-lib';

const calendarRef = useRef<CalendarInstance>();

calendarRef.current?.reset();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                                  | Default Value                                 | Description |
| ------------------------------------- | --------------------------------------------- | ----------- |
| --Calendar-background-color           | _var(--rc-background-color-light)_            | -           |
| --Calendar-popup-height               | _80%_                                         | -           |
| --Calendar-header-box-shadow          | _0 2px 10px rgba(125, 126, 128, 0.16)_        | -           |
| --Calendar-header-title-height        | _44px_                                        | -           |
| --Calendar-header-title-font-size     | _var(--rc-font-size-lg)_                     | -           |
| --Calendar-header-subtitle-font-size  | _var(--rc-font-size-md)_                     | -           |
| --Calendar-weekdays-height            | _30px_                                        | -           |
| --Calendar-weekdays-font-size        | _var(--rc-font-size-sm)_                     | -           |
| --Calendar-month-title-font-size      | _var(--rc-font-size-md)_                     | -           |
| --Calendar-month-mark-color           | _fade(var(--rc-gray-2), 80%)_                 | -           |
| --Calendar-month-mark-font-size       | _160px_                                       | -           |
| --Calendar-day-height                 | _64px_                                        | -           |
| --Calendar-day-font-size              | _var(--rc-font-size-lg)_                     | -           |
| --Calendar-range-edge-color           | _var(--rc-white)_                             | -           |
| --Calendar-range-edge-background-color | _var(--rc-danger-color)_                      | -           |
| --Calendar-range-middle-color         | _var(--rc-danger-color)_                      | -           |
| --Calendar-range-middle-background-opacity | _0.1_                                     | -           |
| --Calendar-selected-day-size          | _54px_                                        | -           |
| --Calendar-selected-day-color         | _var(--rc-white)_                             | -           |
| --Calendar-info-font-size             | _var(--rc-font-size-xs)_                     | -           |
| --Calendar-info-line-height           | _var(--rc-line-height-xs)_                   | -           |
| --Calendar-selected-day-background-color | _var(--rc-danger-color)_                  | -           |
| --Calendar-day-disabled-color         | _var(--rc-text-color-3)_                      | -           |
| --Calendar-confirm-button-height      | _36px_                                        | -           |
| --Calendar-confirm-button-margin      | _7px 0_                                       | -           |

## Common Issues

### Component initialization failed on iOS?

If you encounter the problem that the component cannot be rendered on iOS, please confirm that when creating a Date object, you are not using a writing method like `new Date('2020-01-01')`. iOS does not support date formats separated by hyphens. The correct way is `new Date('2020/01/01')`.

Detailed explanation of this issue: [stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios).

