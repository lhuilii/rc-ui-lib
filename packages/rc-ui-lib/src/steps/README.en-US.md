# Steps 

### Introduction

Used to display each link of the operation process, so that users can understand the position of the current operation in the overall process.

### Import

```js
import { Step, Steps } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The `active` property represents the index of the current step, starting from 0.

```jsx
import { useState } from 'react';
import { Steps } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Steps active={active}>
      <Steps.Item>Buyer places order</Steps.Item>
      <Steps.Item>Merchant accepts order</Steps.Item>
      <Steps.Item>Buyer picks up</Steps.Item>
      <Steps.Item>Transaction completed</Steps.Item>
    </Steps>
  );
};
```

### Custom Style

You can set the icon and color in the active state through the `activeIcon` and `activeColor` properties.

```jsx
<Steps active={active} activeIcon="success" activeColor="#38f">
  <Steps.Item>Buyer places order</Steps.Item>
  <Steps.Item>Merchant accepts order</Steps.Item>
  <Steps.Item>Buyer picks up</Steps.Item>
  <Steps.Item>Transaction completed</Steps.Item>
</Steps>
```

### Vertical Steps

You can change the display direction of the steps by setting the `direction` property.

```jsx
<Steps direction="vertical" active={0}>
  <Steps.Item>
    <h3>【City】Logistics Status 1</h3>
    <p>2016-07-12 12:40</p>
  </Steps.Item>
  <Steps.Item>
    <h3>【City】Logistics Status 2</h3>
    <p>2016-07-11 10:00</p>
  </Steps.Item>
  <Steps.Item>
    <h3>Parcel shipped</h3>
    <p>2016-07-10 09:30</p>
  </Steps.Item>
</Steps>
```

## API

### Steps Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| active | Index value corresponding to current step | _number \| string_ | `0` |
| direction | Steps direction, optional value is `vertical` | _string_ | `horizontal` |
| activeIcon | Bottom icon corresponding to current step, optional values see [Icon component](#/en-US/icon), supports customization | _string \| React.ReactNode_ | `checked` |
| inactiveIcon | Bottom icon corresponding to non-current step, optional values see [Icon component](#/en-US/icon), supports customization | _string \| React.ReactNode_ | - |
| finishIcon | Bottom icon corresponding to completed step, priority is higher than `inactive-icon`, optional values see [Icon component](#/en-US/icon), supports customization | _string \| React.ReactNode_ | - |
| activeColor | Color of current step and completed steps | _string_ | `#07c160` |
| inactiveColor | Color of inactive steps | _string_ | `#969799` |
| iconPrefix | Icon class name prefix, equivalent to the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |

### Steps Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClickStep | Triggered when clicking the step title or icon | _index: number_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-step-text-color | _var(--rc-gray-6)_ | - |
| --rc-step-active-color | _var(--rc-success-color)_ | - |
| --rc-step-process-text-color | _var(--rc-text-color)_ | - |
| --rc-step-font-size | _var(--rc-font-size-md)_ | - |
| --rc-step-line-color | _var(--rc-border-color)_ | - |
| --rc-step-finish-line-color | _var(--rc-success-color)_ | - |
| --rc-step-finish-text-color | _var(--rc-text-color)_ | - |
| --rc-step-icon-size | _12px_ | - |
| --rc-step-circle-size | _5px_ | - |
| --rc-step-circle-color | _var(--rc-gray-6)_ | - |
| --rc-step-horizontal-title-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-steps-background-color | _var(--rc-white)_ | - |

