# Picker 

### Introduction

Provides multiple option sets for users to choose from, supports single-column selection and multi-column cascading, usually used together with the [Popup](#/en-US/popup) component.

### Import

```js
import { Picker } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

#### Option Configuration

The Picker component configures option data through the `columns` property. `columns` is an array containing strings or objects.

#### Top Bar

The top bar contains a title, confirm button, and cancel button. Clicking the confirm button triggers the `confirm` event, and clicking the cancel button triggers the `cancel` event.

```js
import { Picker, Toast } from 'rc-ui-lib';

const columns = ['Nanjing', 'Suzhou', 'Changzhou', 'Huaian', 'Yangzhou', 'Nantong', 'Suqian', 'Taizhou', 'Wuxi'];
```

```jsx
<Picker
  columns={columns}
  title="Title"
  onChange={(value: string, index: number) => Toast(`Current value: ${value}, current index: ${index}`)}
  onCancel={() => Toast.info('Clicked cancel button')}
  onConfirm={() => Toast.info('Clicked confirm button')}
/>
```

### Default Selected Item

For single-column selection, you can set the index of the initially selected item through the `defaultIndex` property.

```jsx
<Picker
  columns={columns}
  defaultIndex={2}
  onChange={(value: string, index: number) => Toast(`Current value: ${value}, current index: ${index}`)}
/>
```

### Multi-column Selection

The `columns` property can configure multi-column selection in the form of an object array. Objects can configure option data, initial selected items, etc. For detailed format, see [the table below](#/en-US/picker#column-shu-ju-jie-gou).

```jsx
<Picker
  columns={[
    {
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      defaultIndex: 2,
    },
    // Second column
    {
      values: ['Morning', 'Afternoon', 'Evening'],
      defaultIndex: 1,
    },
  ]}
/>
```

### Cascading Selection

Using the `children` field of `columns` can achieve the effect of option cascading.

```jsx
<Picker
  title="Title"
  columns={[
    {
      text: 'Jiangsu',
      children: [
        {
          text: 'Suzhou',
          children: [{ text: 'Gusu District' }, { text: 'Wuzhong District' }],
        },
        {
          text: 'Yangzhou',
          children: [{ text: 'Guangling District' }, { text: 'Hanjiang District' }],
        },
      ],
    },
    {
      text: 'Zhejiang',
      children: [
        {
          text: 'Hangzhou',
          children: [{ text: 'Xihu District' }, { text: 'Yuhang District' }],
        },
        {
          text: 'Wenzhou',
          children: [{ text: 'Lucheng District' }, { text: 'Ouhai District' }],
        },
      ],
    },
  ]}
/>
```

> The data nesting depth of cascading selection needs to be consistent. If some options do not have sub-options, you can use empty strings as placeholders.

### Disable Option

Options can be object structures, and you can disable the option by setting `disabled`.

```jsx
<Picker columns={[{ text: 'Nanjing', disabled: true }, { text: 'Suzhou' }, { text: 'Yangzhou' }]} />
```

### Dynamically Set Options

You can control the picker more flexibly through instance methods on Picker, such as using the `setColumnValues` method to achieve multi-column linkage.

```js
const picker = useRef(null);
const cities = {
  Jiangsu: ['Nanjing', 'Suzhou', 'Changzhou', 'Huaian', 'Yangzhou'],
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
};
```

```jsx
<Picker
  ref={picker}
  columns={[{ values: Object.keys(cities) }, { values: cities['Zhejiang'], defaultIndex: 2 }]}
  onChange={(values: string[]) => {
    picker.current.setColumnValues(1, cities[values[0]]);
  }}
/>
```

### Loading State

If the picker data is obtained asynchronously, you can display a loading hint through the `loading` property.

```jsx
<Picker
  loading
  columns={[
    {
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      defaultIndex: 2,
    },
    // Second column
    {
      values: ['Morning', 'Afternoon', 'Evening'],
      defaultIndex: 1,
    },
  ]}
/>
```

### Use with Popup

In actual scenarios, Picker is usually used to assist form filling and can be used together with Popup and Field to achieve this effect.

```js
const [fieldValue, setFieldValue] = useState('');
const [showPicker, setShowPicker] = useState(false);
```

```jsx
<Field
  readonly
  clickable
  label="City"
  value={fieldValue}
  placeholder="Select City"
  onClick={() => setShowPicker(true)}
/>
<Popup
  round
  visible={showPicker}
  position="bottom"
  onClose={() => setShowPicker(false)}
>
  <Picker
    title="Title"
    onConfirm={(value: string) => {
      setFieldValue(value);
      setShowPicker(false);
    }}
    columns={columns}
  />
</Popup>
```

### Custom Columns Structure

```jsx
const columns = [
  {
    cityName: 'Zhejiang',
    cities: [
      {
        cityName: 'Hangzhou',
        cities: [{ cityName: 'Xihu District' }, { cityName: 'Yuhang District' }],
      },
      {
        cityName: 'Wenzhou',
        cities: [{ cityName: 'Lucheng District' }, { cityName: 'Ouhai District' }],
      },
    ],
  },
  {
    cityName: 'Fujian',
    cities: [
      {
        cityName: 'Fuzhou',
        cities: [{ cityName: 'Gulou District' }, { cityName: 'Taijiang District' }],
      },
      {
        cityName: 'Xiamen',
        cities: [{ cityName: 'Siming District' }, { cityName: 'Haicang District' }],
      },
    ],
  },
];
const columnsFieldNames = {
  text: 'cityName',
  children: 'cities',
};
<Picker title="Title" columnsFieldNames={columnsFieldNames} columns={columns} />;
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Object array, configure the data displayed in each column | _Column[]_ | `[]` |
| columnsFieldNames | Customize fields in the `columns` structure | _object_ | `{ text: 'text', values: 'values', children: 'children' }` |
| title | Top bar title | _ReactNode_ | - |
| confirmButtonText | Confirm button text | _ReactNode_ | `Confirm` |
| cancelButtonText | Cancel button text | _ReactNode_ | `Cancel` |
| toolbar | Customize the entire top bar content | _ReactNode_ | - |
| toolbarPosition | Top bar position, optional value is `bottom` | _string_ | `top` |
| columnsTop | Custom content above options | _ReactNode_ | - |
| columnsBottom | Custom content below options | _ReactNode_ | - |
| optionRender | Custom option content | _(option: string \| object) => ReactNode_ | - |
| loading | Whether to show loading state | _boolean_ | `false` |
| showToolbar | Whether to show top bar | _boolean_ | `true` |
| defaultIndex | For single-column selection, the index of the default selected item | _number \| string_ | `0` |
| itemHeight | Option height, supports `px` `vw` `vh` `rem` units, default `px` | _number \| string_ | `44` |
| visibleItemCount | Number of visible options | _number \| string_ | `6` |
| swipeDuration | Duration of inertial scrolling during fast swiping, unit is `ms` | _number \| string_ | `1000` |

### Events

When the picker has multiple columns, the event callback parameters will return arrays.

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onConfirm | Triggered when clicking the confirm button | Single column: selected value, index corresponding to selected value<br/>Multi-column: all column selected values, indexes corresponding to all column selected values |
| onCancel | Triggered when clicking the cancel button | Single column: selected value, index corresponding to selected value<br/>Multi-column: all column selected values, indexes corresponding to all column selected values |
| onChange | Triggered when option changes | Single column: selected value, index corresponding to selected value<br/>Multi-column: all column selected values, index corresponding to current column |

### Column Data Structure

When passing in multi-column data, `columns` is an object array. Each object in the array configures each column. Each column has the following `key`:

| Key Name | Description | Type |
| --- | --- | --- |
| values | Alternative values corresponding to the column | _Array<string \| number>_ |
| defaultIndex | Index of the initially selected item, default is 0 | _number_ |
| className | Add additional class names for the corresponding column | _string \| Array \| object_ |
| children | Cascading options | _Column_ |

### Methods

You can get the Picker instance through ref and call instance methods. For details, see [Component Instance Methods](#/en-US/advanced-usage#zu-jian-shi-li-fang-fa).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| getValues | Get all column selected values | - | values |
| setValues | Set all column selected values | values | - |
| getIndexes | Get indexes corresponding to all column selected values | - | indexes |
| setIndexes | Set indexes corresponding to all column selected values | indexes | - |
| getColumnValue | Get the selected value of the corresponding column | columnIndex | value |
| setColumnValue | Set the selected value of the corresponding column | columnIndex, value | - |
| getColumnIndex | Get the index of the selected item in the corresponding column | columnIndex | optionIndex |
| setColumnIndex | Set the index of the selected item in the corresponding column | columnIndex, optionIndex | - |
| getColumnValues | Get all options in the corresponding column | columnIndex | values |
| setColumnValues | Set all options in the corresponding column | columnIndex, values | - |
| confirm | Stop inertial scrolling and trigger confirm event | - | - |

### Type Definitions

Get the type definition of the Picker instance through `PickerInstance`.

```jsx
import { useRef } from 'react';
import type { PickerInstance } from 'rc-ui-lib';

const pickerRef = useRef<PickerInstance>();

pickerRef.current?.confirm();
```

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-picker-background-color | _var(--rc-white)_ | - |
| --rc-picker-toolbar-height | _44px_ | - |
| --rc-picker-title-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-picker-title-line-height | _var(--rc-line-height-md)_ | - |
| --rc-picker-action-padding | _0 var(--rc-padding-md)_ | - |
| --rc-picker-action-font-size | _var(--rc-font-size-md)_ | - |
| --rc-picker-confirm-action-color | _var(--rc-text-link-color)_ | - |
| --rc-picker-cancel-action-color | _var(--rc-gray-6)_ | - |
| --rc-picker-option-padding | _0 var(--rc-padding-base)_ | - |
| --rc-picker-option-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-picker-option-text-color | _var(--rc-black)_ | - |
| --rc-picker-option-disabled-opacity | _0.3_ | - |
| --rc-picker-loading-icon-color | _var(--rc-primary-color)_ | - |
| --rc-picker-loading-mask-color | _rgba(255, 255, 255, 0.9)_ | - |

## Common Issues

### Cannot operate the component on desktop?

See [Desktop Adaptation](#/en-US/advanced-usage#zhuo-mian-duan-gua-pei).

