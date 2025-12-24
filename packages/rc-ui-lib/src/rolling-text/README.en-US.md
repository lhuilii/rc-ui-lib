# RollingText

### Introduction

Text rolling animation that can roll numbers and other types of text. Please upgrade `rc-ui-lib` to >= 2.1.0 to use this component.

### Import

```js
import { RollingText } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the starting value through `startNum` and the target value through `targetNum`. The RollingText component will automatically start the animation, rolling from the starting value to the target value.

```jsx
<RollingText startNum={0} targetNum={123} />
```

### Set Rolling Direction

Set the rolling direction of numbers through the `direction` property. The default is rolling down. Set it to `up` to roll up.

```jsx
<RollingText startNum={0} targetNum={432} direction="up" />
```

### Set Stop Order of Each Digit

Set the stop order of each digit in the animation through the `stopOrder` property. By default, the high digit stops first. Set it to `rtl` to stop from the ones digit first.

```jsx
<RollingText startNum={0} targetNum={54321} stopOrder="rtl" />
```

### Roll Non-Numeric Content

Use the `textList` property to set the rolling of non-numeric content. The component will roll from the first item of the array to the last item. Please ensure that the array length is greater than or equal to 2, and the length of each item is consistent.

```jsx

export default () => {
  const textList = [
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd',
      'eeeee',
      'fffff',
      'ggggg',
    ];
  return <RollingText textList={textList} duration={1} />;
};
```

### Custom Style

The RollingText component provides some CSS variables. Override these variables to customize styles, or directly modify the component's styles. In addition, you can set the number height through the `height` property.

```jsx
<RollingText
  className="my-rolling-text"
  height={54}
  startNum={12345}
  targetNum={54321}
/>
```

```css
.my-rolling-text {
  --rc-rolling-text-background: #1989fa;
  --rc-rolling-text-color: white;
  --rc-rolling-text-font-size: 24px;
  --rc-rolling-text-gap: 6px;
  --rc-rolling-text-item-border-radius: 5px;
  --rc-rolling-text-item-width: 40px;
}
```

### Manual Control

After getting the component instance through ref, call the `start` and `reset` methods. The `start` method is used to start the animation, and the `reset` method is used to reset the animation.

```jsx
export default () => {
  const rollingTextRef = useRef<RollingTextInstance>();
  
    const start = () => {
      rollingTextRef.current.start();
    };
  
    const reset = () => {
      rollingTextRef.current.reset();
    };

    return (
      <>
        <rc-rolling-text
          ref="rollingTextRef"
          startNum={0}
          targetNum={54321}
          autoStart={false}
        />
        <rc-grid columnNum={2}>
          <rc-grid-item icon="play-circle-o" text="start" onClick={start} />
          <rc-grid-item icon="replay" text="reset" onClick={reset} />
        </rc-grid>
      </>
    )

}
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| startNum | Starting value | _number_ | `0` |
| targetNum | Target value | _number_ | - |
| textList | Content array, used for rolling non-numeric content | _string[]_ | `[]` |
| duration | Animation duration, unit is seconds | _number_ | `2` |
| direction | Text rolling direction, values are `down` and `up` | _string_ | `down` |
| autoStart | Whether to automatically start animation | _boolean_ | `true` |
| stopOrder | Stop order of each digit animation, values are `ltr` and `rtl` | _string_ | `ltr` |
| height | Number height, unit is `px` | _number_ | `40` |

### Methods

You can get the RollingText instance and call instance methods through ref. For details, see [Component Instance Methods](#/en-US/advanced-usage#component-instance-methods).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| start | Start animation | - | - |
| reset | Reset animation | - | - |

### Type Definitions

The component exports the following type definitions:

```ts
import type {
  RollingTextProps,
  RollingTextInstance,
  RollingTextDirection,
  RollingTextStopOrder,
} from 'rc-ui-lib';
```

`RollingTextInstance` is the type of the component instance. Usage is as follows:

```ts
import { useRef } from 'react';
import type { RollingTextInstance } from 'rc-ui-lib';

const rollingTextRef = useRef<RollingTextInstance>();

rollingTextRef.current?.start();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-rolling-text-background | _inherit_ | Single digit background color |
| --rc-rolling-text-color | _var(--rc-text-color)_ | Number color |
| --rc-rolling-text-font-size | _var(--rc-font-size-md)_ | Font size |
| --rc-rolling-text-gap | _0px_ | Gap between digits |
| --rc-rolling-text-item-width | _15px_ | Single digit width |
| --rc-rolling-text-item-border-radius | _0px_ | Single digit border radius |

