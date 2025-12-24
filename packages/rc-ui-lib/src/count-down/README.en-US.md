# CountDown

### Introduction

Used to display countdown values in real-time, supporting millisecond precision.

### Import

```js
import { CountDown } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The `time` property represents the total duration of the countdown in milliseconds.

```jsx
import { setState } from 'react';
import { CountDown } from 'rc-ui-lib';
export default () => {
  const [time] = useState(30 * 60 * 60 * 1000);
  return <CountDown time={time} />;
};
```

### Custom Format

Set the content of the countdown text through the `format` property.

```jsx
<CountDown time={30 * 60 * 60 * 1000} format="DD Day HH:mm:ss" />
```

### Millisecond Rendering

The countdown renders once per second by default. Setting the `millisecond` property can enable millisecond-level rendering.

```jsx
<CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" />
```

### Custom Style

Add _ReactNode_ through `renderChildren` to define CSS variables, which can be used to customize styles. The `CurrentTime` object format is shown in the table below.

```jsx
<CountDown
  time={time}
  renderChildren={(timeData: CurrentTime) => {
    return (
      <>
        <span className="block">{timeData.hours}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.minutes}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.seconds}</span>
      </>
    );
  }}
/>
```

### Manual Control

After getting the component instance through ref, you can call the `start`, `pause`, and `reset` methods.

```jsx
import { CountDown, Toast } from 'rc-ui-lib';
export default () => {
  const countDownRef = useRef<CountDownInstance>();
  const start = () => {
    CountDownRef.current.start();
  };
  const pause = () => {
    CountDownRef.current.pause();
  };
  const reset = () => {
    CountDownRef.current.reset();
  };
  const onFinish = () => Toast('Countdown finished');

  return (
    <>
      <CountDown format="ss:SSS" time={3000} onFinish={onFinish} ref={CountDownRef} />
      <Grid columnNum={3}>
        <Grid.Item icon="play-circle-o" text="Start" onClick={start} />
        <Grid.Item icon="pause-circle-o" text="Pause" onClick={pause} />
        <Grid.Item icon="replay" text="Reset" onClick={reset} />
      </Grid>
    </>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| time | Countdown duration in milliseconds | _number \| string_ | `0` |
| format | Time format | _string_ | `HH:mm:ss` |
| autoStart | Whether to automatically start countdown | _boolean_ | `true` |
| millisecond | Whether to enable millisecond-level rendering | _boolean_ | `false` |
| renderChildren | Custom child element method | _(timeData:currentTime)=>React.ReactNode_ | - |

### format Format

| Format | Description |
| --- | --- |
| DD | Days |
| HH | Hours |
| mm | Minutes |
| ss | Seconds |
| S | Milliseconds (1 digit) |
| SS | Milliseconds (2 digits) |
| SSS | Milliseconds (3 digits) |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onFinish | Triggered when countdown ends | - |
| onChange | Triggered when countdown changes | _currentTime: CurrentTime_ |

### CurrentTime Format

| Name | Description | Type |
| --- | --- | --- |
| total | Remaining total time (in milliseconds) | _number_ |
| days | Remaining days | _number_ |
| hours | Remaining hours | _number_ |
| minutes | Remaining minutes | _number_ |
| seconds | Remaining seconds | _number_ |
| milliseconds | Remaining milliseconds | _number_ |

### Methods

You can get the CountDown instance and call instance methods through ref.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| start | Start countdown | - | - |
| pause | Pause countdown | - | - |
| reset | Reset countdown. If `auto-start` is `true`, it will automatically start after reset | - | - |

### Type Definitions

Get the type definition of the CountDown instance through `CountDownInstance`.

```jsx
import { useRef } from 'react';
import type { CountDownInstance } from 'rc-ui-lib';

const countDownRef = useRef<CountDownInstance>();

countDownRef.current?.start();
```

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-count-down-text-color | _var(--rc-count-down-text-color)_ | - |
| --rc-count-down-font-size | _14px_ | - |
| --rc-count-down-line-height | _20px_ | - |

## Common Issues

### Countdown not working on iOS?

If you encounter the problem that the countdown does not work on iOS, please confirm that when creating a Date object, you are not using a writing method like `new Date('2020-01-01')`. iOS does not support date formats separated by hyphens. The correct way is `new Date('2020/01/01')`.

