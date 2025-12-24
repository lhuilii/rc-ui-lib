# Radio 

### Introduction

Used to select a single result from multiple options.

### Import

```js
import { Radio } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the default selected item's name through the `defaultValue` value.

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1">Radio 1</Radio>
  <Radio name="2">Radio 2</Radio>
</Radio.Group>
```

### Horizontal Layout

After setting the `direction` property to `horizontal`, the radio group will become horizontally arranged.

```jsx
<Radio.Group defaultValue="1" direction="horizontal">
  <Radio name="1">Radio 1</Radio>
  <Radio name="2">Radio 2</Radio>
</Radio.Group>
```

### Disabled State

Disable option switching through the `disabled` property. Setting `disabled` on `Radio` can disable a single option.

```jsx
<Radio.Group defaultValue="1" disabled>
  <Radio name="1">Radio 1</Radio>
  <Radio name="2">Radio 2</Radio>
</Radio.Group>
```

### Custom Shape

Set the `shape` property to `square`, and the shape of the radio will become square.

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" shape="square">
    Radio 1
  </Radio>
  <Radio name="2" shape="square">
    Radio 2
  </Radio>
</Radio.Group>
```

### Custom Color

Set the icon color of the selected state through the `checkedColor` property.

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" checkedColor="#ee0a24">
    Radio 1
  </Radio>
  <Radio name="2" checkedColor="#ee0a24">
    Radio 2
  </Radio>
</Radio.Group>
```

### Custom Size

You can customize the size of the icon through the `iconSize` property.

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" iconSize="24px">
    Radio 1
  </Radio>
  <Radio name="2" iconSize="24px">
    Radio 2
  </Radio>
</Radio.Group>
```

### Disable Text Click

After setting the `labelDisabled` property, clicking content other than the icon will not trigger radio toggle.

```jsx
<Radio.Group defaultValue="1">
  <Radio name="1" labelDisabled>
    Radio 1
  </Radio>
  <Radio name="2" labelDisabled>
    Radio 2
  </Radio>
</Radio.Group>
```

### Async Update

After setting the `value` property, clicking the icon will not change the state, but will directly execute the `onChange` method, and change the state in this method

```jsx
<Radio.Group
  value={value}
  onChange={(val) => {
    Toast.loading({ forbidClick: true });

    clearTimeout(timer);
    timer = setTimeout(() => {
      Toast.clear();
      // Note that modifying value at this time will trigger the change event again
      setValue(val);
    }, 500);
  }}
>
  <Radio name="1" labelDisabled>
    Radio 1
  </Radio>
  <Radio name="2" labelDisabled>
    Radio 2
  </Radio>
</Radio.Group>
```

### Use with Cell Component

At this time, you need to import the `Cell` and `CellGroup` components.

```jsx
<Radio.Group value="1">
  <CellGroup>
    <Cell title="Radio 1" icon="shop-o" rightIconSlot={() => <Radio name="1" />} />{' '}
    <Cell title="Radio 2" icon="shop-o" rightIconSlot={() => <Radio name="2" />} />
  </CellGroup>
</Radio.Group>
```

## API

### Radio Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier | _any_ | - |
| shape | Shape, optional value is `square` | _string_ | `round` |
| disabled | Whether it is in disabled state | _boolean_ | `false` |
| labelDisabled | Whether to disable text content click | _boolean_ | `false` |
| labelPosition | Text position, optional value is `left` | _string_ | `right` |
| iconSize | Icon size, default unit is `px` | _number \| string_ | `21px` |
| checkedColor | Selected state color | _string_ | `#3f45ff` |
| iconRender | Custom icon | _({ checked, disabled }) => ReactNode_ | - |

### Radio.Group Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Identifier of currently selected item | _any_ | - |
| disabled | Whether to disable all radios | _boolean_ | `false` |
| direction | Arrangement direction, optional value is `horizontal` | _string_ | `vertical` |
| iconSize | Icon size of all radios, default unit is `px` | _number \| string_ | `21px` |
| checkedColor | Selected state color of all radios | _string_ | `#3f45ff` |

### Radio Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the radio | _event: Event_ |

### Radio.Group Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Event triggered when the bound value changes | _name: string_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-radio-size | _20px_ | - |
| --rc-radio-border-color | _var(--rc-gray-5)_ | - |
| --rc-radio-transition-duration | _var(--rc-animation-duration-fast)_ | - |
| --rc-radio-label-margin | _var(--rc-padding-xs)_ | - |
| --rc-radio-label-color | _var(--rc-text-color)_ | - |
| --rc-radio-checked-icon-color | _var(--rc-primary-color)_ | - |
| --rc-radio-disabled-icon-color | _var(--rc-gray-5)_ | - |
| --rc-radio-disabled-label-color | _var(--rc-gray-5)_ | - |
| --rc-radio-disabled-background-color | _var(--rc-border-color)_ | - |

