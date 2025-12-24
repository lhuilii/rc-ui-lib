# Slider 

### Introduction

Slider input bar for selecting a value within a given range.

### Import

```js
import { Slider } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'rc-ui-lib';

export default () => {
  const [value, setValue] = useState(10);
  const onChangeAfter = (v) => Toast.info(`Current value: ${v}`);
  return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### Dual Slider

Add the `range` property to enable dual slider mode. Make sure the value of `value` is an array.

```jsx
import { useState } from 'react';
import { Slider, Toast } from 'rc-ui-lib';

export default () => {
  const [value, setValue] = useState([10, 50]);
  const onChangeAfter = (v) => Toast.info(`Current value: ${v}`);
  return <Slider range value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
};
```

### Specify Selection Range

```jsx
<Slider value={value} onChange={setValue} min={-50} max={50} />
```

### Disabled

```jsx
<Slider disabled value={value} />
```

### Specify Step

```jsx
<Slider value={value} step={10} />
```

### Custom Style

```jsx
<Slider value={value} onChange={setValue} barHeight={4} activeColor="#ee0a24" />
```

### Custom Button

```jsx
<Slider
  value={value}
  onChange={setValue}
  activeColor="#ee0a24"
  button={<div className="custom-button">{value}</div>}
/>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### Vertical Direction

After setting the `vertical` property, the slider will be displayed vertically, and the height is 100% of the parent element height.

```jsx
<Slider vertical value={value} onChange={setValue} />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current progress percentage, in array format in dual slider mode | _number \| [number, number]_ | `0` |
| max | Maximum value | _number \| string_ | `100` |
| min | Minimum value | _number \| string_ | `0` |
| step | Step size | _number \| string_ | `1` |
| barHeight | Progress bar height, default unit is `px` | _number \| string_ | `2px` |
| buttonSize | Slider button size, default unit is `px` | _number \| string_ | `24px` |
| activeColor | Progress bar active color | _string_ | `#3f45ff` |
| inactiveColor | Progress bar inactive color | _string_ | `#e5e5e5` |
| range | Whether to enable dual slider mode | _boolean_ | `false` |
| reverse | Whether to reverse the progress bar | _boolean_ | `false` |
| disabled | Whether to disable the slider | _boolean_ | `false` |
| readonly | Whether it is in read-only state. In read-only state, the slider value cannot be modified | _boolean_ | `false` |
| vertical | Whether to display vertically | _boolean_ | `false` |
| button | Custom slider button | _ReactNode_ | - |
| leftButton | Custom left slider button (in dual slider mode) | _ReactNode_ | - |
| rightButton | Custom right slider button (in dual slider mode) | _ReactNode_ | - |

### Events

`SliderValue` refers to `props.value`

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | **Triggered in real-time** when progress changes | _value: SliderValue_ |
| onChangeAfter | **Triggered after** progress changes and **dragging ends** | _value: SliderValue_ |
| onDragStart | Triggered when starting to drag | _event: TouchEvent_, _value: SliderValue_ |
| onDragEnd | Triggered when dragging ends | _event: TouchEvent_, _value: SliderValue_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-slider-active-background-color | _var(--rc-primary-color)_ | - |
| --rc-slider-inactive-background-color | _var(--rc-gray-3)_ | - |
| --rc-slider-disabled-opacity | _var(--rc-disabled-opacity)_ | - |
| --rc-slider-bar-height | _2px_ | - |
| --rc-slider-button-width | _24px_ | - |
| --rc-slider-button-height | _24px_ | - |
| --rc-slider-button-border-radius | _50%_ | - |
| --rc-slider-button-background-color | _var(--rc-white)_ | - |
| --rc-slider-button-box-shadow | _0 1px 2px rgba(0, 0, 0, 0.5)_ | - |

