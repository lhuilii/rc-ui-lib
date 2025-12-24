# DatetimePicker

### Introduction

Date time picker that supports dimensions such as date, year-month, hour-minute, etc. Usually used with the [Popup](#/en-US/popup) component.

### Import

```js
import { DatetimePicker } from 'rc-ui-lib';
```

## Code Example

### Select Year, Month, Day

DatetimePicker defines the time type to be selected through the `type` property. `type` being `date` means selecting year, month, and day. The selectable time range can be determined through the `minDate` and `maxDate` properties.

```jsx
<DatetimePicker
  type="date"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### Select Year and Month

Set `type` to `year-month` to select year and month. By passing in a `formatter` function, you can format the option text.

```jsx
<DatetimePicker
  type="year-month"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  formatter={(type: string, val: string) => {
    if (type === 'year') {
      return `${val} Year`;
    }
    if (type === 'month') {
      return `${val} Month`;
    }
    return val;
  }}
/>
```

### Select Month and Day

Set `type` to `month-day` to select month and day.

```jsx
<DatetimePicker
  type="month-day"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
  formatter={(type: string, val: string) => {
    if (type === 'month') {
      return `${val} Month`;
    }
    if (type === 'day') {
      return `${val} Day`;
    }
    return val;
  }}
/>
```

### Select Time

Set `type` to `time` to select time (hours and minutes).

```jsx
<DatetimePicker type="time" minHour="10" maxHour="20" value="12:00" />
```

### Select Full Date Time

Set `type` to `datetime` to select full date time, including year, month, day, hour, and minute.

```jsx
<DatetimePicker
  type="datetime"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### Select Year, Month, Day, Hour

Set `type` to `datehour` to select date and hour, including year, month, day, and hour.

```jsx
<DatetimePicker
  type="datehour"
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### Option Filter

By passing in a `filter` function, you can filter the option array to achieve custom time intervals.

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

### Custom Column Order

```jsx
<DatetimePicker
  type="date"
  columnsOrder={['month', 'day', 'year']}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 10, 1)}
  value={new Date()}
/>
```

### Confirm Button

```jsx
<DatetimePicker
  showSubmitBtn
  onConfirm={(value: Date) => Toast(`Confirmed date: ${value}`)}
  minDate={new Date(2021, 0, 1)}
  maxDate={new Date(2021, 2, 1)}
  value={new Date()}
/>
```

### Use with Popup

```jsx
<Field
  readonly
  clickable
  label="Date"
  value={fieldValue}
  placeholder="Select date"
  onClick={() => setShowPicker(true)}
/>
<Popup
  title="Please select date"
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Time type, optional values are `date` `time` <br/> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | Top bar title | _ReactNode_ | `''` |
| confirmButtonText | Confirm button text | _ReactNode_ | `Confirm` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| showSoolbar | Whether to show top bar | _boolean_ | `true` |
| loading | Whether to show loading state | _boolean_ | `false` |
| readonly | Whether it is in read-only state. In read-only state, options cannot be switched | _boolean_ | `false` |
| filter | Option filter function | _(type: string, values: string[]) => string[]_ | - |
| formatter | Option formatter function | _(type: string, value: string) => string_ | - |
| columnsOrder | Custom column order array, sub-items optional values are<br/> `year`, `month`, `day`, `hour`, `minute` | _string[]_ | - |
| itemHeight | Option height, supports `px` `vw` `vh` `rem` units, default `px` | _number \| string_ | `44` |
| visibleItemCount | Number of visible options | _number \| string_ | `6` |
| swipeDuration | Duration of inertial scrolling when swiping quickly, unit `ms` | _number \| string_ | `1000` |
| columnsTop | Custom content above options | _ReactNode_ | - |
| columnsBottom | Custom content below options | _ReactNode_ | - |
| optionRender | Custom option content | _(option: string \| object) => ReactNode_ | - |

### DatePicker Props

When the time picker type is date or datetime, the following props are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| minDate | Minimum selectable time, accurate to minutes | _Date_ | Ten years ago |
| maxDate | Maximum selectable time, accurate to minutes | _Date_ | Ten years later |

### TimePicker Props

When the time picker type is time, the following props are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| minHour | Minimum selectable hour | _number \| string_ | `0` |
| maxHour | Maximum selectable hour | _number \| string_ | `23` |
| minMinute | Minimum selectable minute | _number \| string_ | `0` |
| maxMinute | Maximum selectable minute | _number \| string_ | `59` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Event triggered when value changes | value: Currently selected time |
| onConfirm | Event triggered when clicking the confirm button | value: Currently selected time |
| onCancel | Event triggered when clicking the cancel button | - |

### Methods

You can get the DatetimePicker instance and call instance methods through ref. For details, see [Component Instance Methods](#/en-US/advanced-usage#component-instance-methods).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| getPicker | Get Picker instance, used to call Picker's [instance methods](#/en-US/picker#methods) | - | - |

### Type Definitions

Get the type definition of the DatetimePicker instance through `DatetimePickerInstance` (supported from version 3.2.0).

```jsx
import { useRef } from 'react';
import type { DatetimePickerInstance } from 'rc-ui-lib';

const datetimePickerRef = useRef<DatetimePickerInstance>();

datetimePickerRef.current?.getPicker();
```

## Common Issues

### Page freezes after setting min-date or max-date?

Please note that do not directly use a writing method like `min-date="new Date()"` in the template, as this will cause a new Date object to be passed in every time the component is rendered, and passing in new data will trigger the next render, thus falling into an infinite loop.

The correct approach is to define `min-date` as data in the `data` function.

### Component initialization failed on iOS?

If you encounter the problem that the component cannot be rendered on iOS, please confirm that when creating a Date object, you are not using a writing method like `new Date('2020-01-01')`. iOS does not support date formats separated by hyphens. The correct way is `new Date('2020/01/01')`.

Detailed explanation of this issue: [stackoverflow](https://stackoverflow.com/questions/13363673/javascript-date-is-invalid-on-ios).

### Cannot operate component on desktop?

See [Desktop Adaptation](#/en-US/advanced-usage#desktop-adaptation).

### Is there a year or month picker?

If you only need to select year or month, it is recommended to use the [Picker](#/en-US/picker) component directly.

