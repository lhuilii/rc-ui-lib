# Switch 

### Introduction

Used to switch between on and off states.

### Import

```js
import { Switch } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the default checked state of the switch through `defaultChecked`, `true` means on, `false` means off.

```jsx
<Switch defaultChecked />
```

### Disabled State

Disable the switch through the `disabled` property. The switch is not clickable when disabled.

```jsx
<Switch defaultChecked disabled />
```

### Loading State

Set the switch to loading state through the `loading` property. The switch is not clickable when loading.

```jsx
<Switch defaultChecked loading />
```

### Custom Size

Customize the switch size through the `size` property.

```jsx
<Switch defaultChecked size="24px" />
```

### Custom Color

The `activeColor` property represents the background color when on, and `inactiveColor` represents the background color when off.

```jsx
<Switch defaultChecked activeColor="#ee0a24" inactiveColor="#dcdee0" />
```

### Async Control

When you need to control the switch asynchronously, you can use the `checked` property and `onChange` event instead of `defaultChecked`, and manually handle the switch state in the event callback function.

```jsx
<Switch
  checked={value}
  onChange={(checked) => {
    Dialog.confirm({
      title: 'Reminder',
      message: 'Switch the toggle?',
    }).then(() => {
      setValue(checked);
    });
  }}
/>
```

### Use with Cell

```jsx
<Cell
  center
  title="Title"
  rightIcon={
    <Switch size={24} defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
  }
/>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Switch checked state | _any_ | `false` |
| defaultChecked | Switch checked state | _any_ | `false` |
| loading | Whether it is in loading state | _boolean_ | `false` |
| disabled | Whether it is in disabled state | _boolean_ | `false` |
| size | Switch size, default unit is `px` | _number \| string_ | `30px` |
| activeColor | Background color when on | _string_ | `#3f45ff` |
| inactiveColor | Background color when off | _string_ | `white` |
| activeValue | Value when on | _any_ | `true` |
| inactiveValue | Value when off | _any_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when switch state changes | _value: any_ |
| onClick | Triggered when clicking | _event: Event_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-switch-size | _30px_ | - |
| --rc-switch-width | _2em_ | - |
| --rc-switch-height | _1em_ | - |
| --rc-switch-node-size | _1em_ | - |
| --rc-switch-node-background-color | _var(--rc-white)_ | - |
| --rc-switch-node-box-shadow | _0 3px 1px 0 rgba(0, 0, 0, 0.05)_ | - |
| --rc-switch-background-color | _var(--rc-white)_ | - |
| --rc-switch-on-background-color | _var(--rc-primary-color)_ | - |
| --rc-switch-transition-duration | _var(--rc-animation-duration-base)_ | - |
| --rc-switch-disabled-opacity | _var(--rc-disabled-opacity)_ | - |
| --rc-switch-border | _var(--rc-border-width-base) solid rgba(0, 0, 0, 0.1)_ | - |

