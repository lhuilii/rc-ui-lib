# Checkbox

### Introduction

Used to toggle between selected and unselected states.

### Import

```js
import { Checkbox } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the default checked state of the checkbox through the `defaultChecked` value.

```jsx
<Checkbox defaultChecked onChange={(val) => console.log(val)}>
  Checkbox
</Checkbox>
```

### Disabled State

You can disable the checkbox by setting the `disabled` property.

```jsx
<Checkbox defaultChecked disabled>
  Checkbox
</Checkbox>
```

### Custom Shape

Set the `shape` property to `square`, and the shape of the checkbox will become square.

```jsx
<Checkbox defaultChecked shape="square">
  Checkbox
</Checkbox>
```

### Custom Color

Set the icon color of the selected state through the `checkedColor` property.

```jsx
<Checkbox defaultChecked checkedColor="#ee0a24">
  Checkbox
</Checkbox>
```

### Custom Size

You can customize the size of the icon through the `iconSize` property.

```jsx
<Checkbox defaultChecked iconSize={24}>
  Checkbox
</Checkbox>
```

### Disable Text Click

After setting the `labelDisabled` property, clicking content other than the icon will not trigger checkbox toggle.

```jsx
<Checkbox defaultChecked labelDisabled>
  Checkbox
</Checkbox>
```

### Async Update

After setting the `checked` property, clicking the icon will not change the state, but will directly execute the `onChange` method, and change the state in this method

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
  Checkbox
</Checkbox>
```

### Checkbox Group

Checkboxes can be used together with checkbox groups. Checkbox groups set the default checked state of checkboxes through the `defaultValue` array.

```js
const checked = ['a', 'b'];
```

```jsx
<Checkbox.Group defaultValue="checked">
  <Checkbox name="a">Checkbox a</Checkbox>
  <Checkbox name="b">Checkbox b</Checkbox>
</Checkbox.Group>
```

### Horizontal Layout

After setting the `direction` property to `horizontal`, the checkbox group will become horizontally arranged.

```jsx
<Checkbox.Group defaultValue="checked" direction="horizontal">
  <Checkbox name="a">Checkbox a</Checkbox>
  <Checkbox name="b">Checkbox b</Checkbox>
</Checkbox.Group>
```

### Limit Maximum Selectable Count

You can limit the maximum selectable count of the checkbox group through the `max` property.

```jsx
<Checkbox.Group defaultValue="result" max={2}>
  <Checkbox name="a">Checkbox a</Checkbox>
  <Checkbox name="b">Checkbox b</Checkbox>
  <Checkbox name="c">Checkbox c</Checkbox>
</Checkbox.Group>
```

### Select All and Invert

You can implement select all and invert through the `toggleAll` method on the `Checkbox.Group` instance.

```jsx
import { useState, useRef } from 'react';
import { Checkbox, Button } from 'rc-ui-lib';

export default () => {
  const ref = useRef(null);
  const [checkedAll, setCheckedAll] = useState([]);
  return (
    <>
      <Checkbox.Group value={checkedAll} onChange={setCheckedAll} ref={ref}>
        <Checkbox name="a">Checkbox a</Checkbox>
        <Checkbox name="b">Checkbox b</Checkbox>
        <Checkbox name="c">Checkbox c</Checkbox>
      </Checkbox.Group>

      <Button type="primary" onClick={() => ref.current?.toggleAll()}>
        Select All
      </Button>
      <Button type="primary" onClick={() => ref.current?.toggleAll(false)}>
        Invert
      </Button>
    </>
  );
};
```

### Use with Cell Component

At this time, you need to import the `Cell` and `CellGroup` components.

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
          title="Checkbox 1"
          icon="shop-o"
          onClick={() => toggle('a')}
          rightIcon={<Checkbox name="a" />}
        />
        <Cell
          clickable
          title="Checkbox 2"
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Whether it is in selected state | _boolean_ | `false` |
| defaultChecked | Default identifier of selected item | _any[]_ | - |
| name | Identifier | _any_ | - |
| shape | Shape, optional value is `square` | _string_ | `round` |
| disabled | Whether to disable the checkbox | _boolean_ | `false` |
| labelDisabled | Whether to disable checkbox text click | _boolean_ | `false` |
| labelPosition | Text position, optional value is `left` | _string_ | `right` |
| iconSize | Icon size, default unit is `px` | _number \| string_ | `20px` |
| iconRender | Custom icon | _({ checked, disabled }) => ReactNode_ | - |
| checkedColor | Selected state color | _string_ | `#3f45ff` |
| bindGroup | Whether to bind with checkbox group | _boolean_ | `true` |

### Checkbox.Group Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Identifier of all selected items | _any[]_ | - |
| defaultValue | Default identifier of selected items | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | Maximum selectable count, `0` means unlimited | _number \| string_ | `0` |
| direction | Arrangement direction, optional value is `horizontal` | _string_ | `vertical` |
| iconSize | Icon size of all checkboxes, default unit is `px` | _number \| string_ | `20px` |
| checkedColor | Selected state color of all checkboxes | _string_ | `#3f45ff` |

### Checkbox Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Event triggered when the bound value changes | _checked: boolean_ |
| onClick | Triggered when clicking the checkbox | _event: MouseEvent_ |

### Checkbox.Group Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Event triggered when the bound value changes | _names: any[]_ |

### Checkbox.Group Methods

You can get the Checkbox.Group instance and call instance methods through ref.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| toggleAll | Toggle all checkboxes, pass `true` to select, `false` to deselect, no parameter to invert | _options?: boolean \| object_ | - |

### toggleAll Method Example

```jsx
import { Checkbox.GroupInstance } from 'rc-ui-lib';

const Checkbox.Group = useRef < Checkbox.GroupInstance > null;

// Invert all
Checkbox.Group.current?.toggleAll();
// Select all
Checkbox.Group.current?.toggleAll(true);
// Deselect all
Checkbox.Group.current?.toggleAll(false);

// Invert all, and skip disabled checkboxes
Checkbox.Group.current?.toggleAll({
  skipDisabled: true,
});
// Select all, and skip disabled checkboxes
Checkbox.Group.current?.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

### Checkbox Methods

You can get the Checkbox instance and call instance methods through ref.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| toggle | Toggle selected state, pass `true` to select, `false` to deselect, no parameter to invert | _checked?: boolean_ | - |

### Type Definitions

Get the type definition of the Checkbox instance through `CheckboxInstance` and `Checkbox.GroupInstance`

```js
import { useRef } from 'react';
import type { CheckboxInstance, Checkbox.GroupInstance } from 'rc-ui-lib';

const checkboxRef = useRef<CheckboxInstance>();
const Checkbox.GroupRef = useRef<Checkbox.GroupInstance>();

checkboxRef.current?.toggle();
Checkbox.GroupRef.current?.toggleAll();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                               | Default Value                              | Description |
| ---------------------------------- | ------------------------------------------ | ----------- |
| --rc-checkbox-size                 | _20px_                                     | -           |
| --rc-checkbox-border-color         | _var(--rc-gray-5)_                         | -           |
| --rc-checkbox-transition-duration  | _var(--rc-animation-duration-fast)_         | -           |
| --rc-checkbox-label-margin         | _var(--rc-padding-xs)_                     | -           |
| --rc-checkbox-label-color          | _var(--rc-text-color)_                     | -           |
| --rc-checkbox-checked-icon-color   | _var(--rc-primary-color)_                  | -           |
| --rc-checkbox-disabled-icon-color  | _var(--rc-gray-5)_                         | -           |
| --rc-checkbox-disabled-label-color | _var(--rc-gray-5)_                         | -           |
| --rc-checkbox-disabled-background-color | _var(--rc-border-color)_               | -           |

