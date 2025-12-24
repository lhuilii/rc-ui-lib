# DropdownMenu

### Introduction

Menu list that drops down.

### Import

```js
import { DropdownMenu } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
const option1 = [
  { text: 'All Products', value: 0 },
  { text: 'New Products', value: 1 },
  { text: 'Sale Products', value: 2 },
];
const option2 = [
  { text: 'Default Sort', value: 'a' },
  { text: 'Rating Sort', value: 'b' },
  { text: 'Sales Sort', value: 'c' },
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

### Custom Menu Content

```jsx
const option1 = [
  { text: 'All Products', value: 0 },
  { text: 'New Products', value: 1 },
  { text: 'Sale Products', value: 2 },
];
export default () => {
  const [value, setValue] = useState();
  return (
    <DropdownMenu>
      <DropdownMenu.Item name="ite" options={option1} />
      <DropdownMenu.Item title="Filter" name="value2">
        <Cell center title="Free Shipping" rightIcon={<Switch size={24} />} />
        <Cell center title="Group Buy" rightIcon={<Switch size={24} />} />
      </DropdownMenu.Item>
    </DropdownMenu>
  );
};
```

### Custom Highlight Color

```jsx
const option1 = [
  { text: 'All Products', value: 0 },
  { text: 'New Products', value: 1 },
  { text: 'Sale Products', value: 2 },
];
const option2 = [
  { text: 'Default Sort', value: 'a' },
  { text: 'Rating Sort', value: 'b' },
  { text: 'Sales Sort', value: 'c' },
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

### Expand Upward

```jsx
const option1 = [
  { text: 'All Products', value: 0 },
  { text: 'New Products', value: 1 },
  { text: 'Sale Products', value: 2 },
];
const option2 = [
  { text: 'Default Sort', value: 'a' },
  { text: 'Rating Sort', value: 'b' },
  { text: 'Sales Sort', value: 'c' },
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

### Disable Menu

```jsx
const option1 = [
  { text: 'All Products', value: 0 },
  { text: 'New Products', value: 1 },
  { text: 'Sale Products', value: 2 },
];
const option2 = [
  { text: 'Default Sort', value: 'a' },
  { text: 'Rating Sort', value: 'b' },
  { text: 'Sales Sort', value: 'c' },
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| activeColor | Selected state color of menu title and options | _string_ | `#ee0a24` |
| direction | Menu expansion direction, optional value is `up` | _string_ | `down` |
| zIndex | Menu bar z-index level | _number \| string_ | `10` |
| duration | Animation duration, unit is seconds | _number \| string_ | `0.2` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close menu after clicking overlay | _boolean_ | `true` |
| closeOnClickOutside | Whether to close menu after clicking outside element | _boolean_ | `true` |

### DropdownItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Value key corresponding to currently selected item | _number \| string_ | - |
| title | Menu item title | _ReactNode_ | Current selected item text |
| placeholder | Placeholder text | _string_ | `Please select` |
| options | Option array | _Option[]_ | `[]` |
| disabled | Whether to disable menu | _boolean_ | `false` |
| titleClass | Additional class name for title | _string_ | - |
| teleport | Specify mount node | _HTMLElment () => HTMLElement_ | - |

### DropdownMenu Events

| Event Name | Description | Callback Parameters | Parameter Type |
| --- | --- | --- | --- |
| onChange | Triggered when child component value changes | value | _Option_ |

### DropdownItem Events

| Event Name | Description | Callback Parameters | Parameter Type |
| --- | --- | --- | --- |
| onOpen | Triggered when opening menu bar | - | - |
| onOpened | Triggered after opening menu bar and animation ends | - | - |
| onClose | Triggered when closing menu bar | - | - |
| onClosed | Triggered after closing menu bar and animation ends | - | - |
| onChange | Triggered when clicking option causes value to change | value | _Option_ |

### Option Data Structure

| Key | Description | Type |
| --- | --- | --- |
| name | Text | _string_ |
| value | Option value | _number \| string_ |
| icon | [Icon name](#/en-US/icon) or image link on the left side of option | _string \| React.ReactNode_ |

### DropdownMenu Methods

You can get the DropdownMenu instance and call instance methods through ref.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| close | Close menu | - | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { DropdownMenuInstance } from 'rc-ui-lib';
```

`DropdownMenuInstance` is the type of the `DropdownMenu` component instance. Usage is as follows:

```js
import { useRef } from 'react';
import type { DropdownMenuInstance } from 'rc-ui-lib/es/dropdown-menu';

const DropdownMenuRef = useRef < DropdownMenuInstance > null;

DropdownMenuRef.current?.close();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-dropdown-menu-height | _48px_ | - |
| --rc-dropdown-menu-background-color | _var(--rc-white)_ | - |
| --rc-dropdown-menu-box-shadow | _0 2px 12px fade(var(--rc-gray-7), 12)_ | - |
| --rc-dropdown-menu-title-font-size | _15px_ | - |
| --rc-dropdown-menu-title-text-color | _var(--rc-text-color)_ | - |
| --rc-dropdown-menu-title-active-text-color | _var(--rc-danger-color)_ | - |
| --rc-dropdown-menu-title-disabled-text-color | _var(--rc-gray-6)_ | - |
| --rc-dropdown-menu-title-padding | _0 var(--rc-padding-xs)_ | - |
| --rc-dropdown-menu-title-line-height | _var(--rc-line-height-lg)_ | - |
| --rc-dropdown-menu-option-active-color | _var(--rc-danger-color)_ | - |
| --rc-dropdown-menu-content-max-height | _80%_ | - |
| --rc-dropdown-item-z-index | _10_ | - |

