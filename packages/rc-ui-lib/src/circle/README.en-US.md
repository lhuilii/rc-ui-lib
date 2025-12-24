# Circle

### Introduction

A circular progress bar component that supports gradient animation.

### Import

```js
import { Circle } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The `rate` property represents the progress of the progress bar. When `rate` changes, the progress bar will change at the speed of `speed` until it reaches the value set by `rate`.

```jsx
import { setState } from 'react';
import { Circle, Button } from 'rc-ui-lib';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default () => {
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };
  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <>
      <Circle rate={rate} speed={100} text={`${rate}%`} />
      <ButtonGroup>
        <Button onClick={add} type="primary">
          Increase
        </Button>
        <Button onClick={reduce} type="danger">
          Decrease
        </Button>
      </ButtonGroup>
    </>
  );
};
```

### Custom Width

Control the progress bar width through the `strokeWidth` property.

```jsx
<Circle rate={rate} strokeWidth={60} text="Custom Width" />
```

### Custom Color

Control the progress bar color through the `color` property, and control the track color through the `layer-color` property.

```jsx
<Circle rate={rate} layerColor="#ebedf0" text="Custom Color" />
```

### Gradient Color

The `color` property supports passing object format to define gradient colors.

```jsx
<Circle
  rate={rate}
  text="Gradient Color"
  color={{
    '0%': '#3fecff',
    '100%': '#6149f6',
  }}
/>
```

### Counterclockwise Direction

Set `clockwise` to `false`, and the progress will start from the counterclockwise direction.

```jsx
<Circle rate={rate} clockwise={false} text="Counterclockwise" />
```

### Custom Size

Set the circle diameter through the `size` property.

```jsx
<Circle rate={rate} size={120} text="Custom Size" />
```

### Start Position

The progress bar starts from the top by default. You can set the start position through the `startPosition` property.

```jsx
<Circle defaultRate={70} text="Left" startPosition="left" />
<Circle defaultRate={70} text="Right" startPosition="right" />
<Circle defaultRate={70} text="Bottom" startPosition="bottom" />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| defaultRate | Default progress | _number_ | - |
| rate | Current progress | _number_ | - |
| size | Circle diameter, default unit is `px` | _number \| string_ | `100px` |
| color | Progress bar color, passing object format can define gradient colors | _string \| object_ | `#3f45ff` |
| layerColor | Track color | _string_ | `white` |
| fill | Fill color | _string_ | `none` |
| speed | Animation speed (unit is rate/s) | _number \| string_ | `0` |
| text | Text | _string_ | - |
| strokeWidth | Progress bar width | _number \| string_ | `40` |
| strokeLinecap | Shape of progress bar endpoints, optional values are `square` `butt` | _string_ | `round` |
| clockwise | Whether to increase clockwise | _boolean_ | `true` |
| startPosition | Progress start position, optional values are `left`, `right`, `bottom` | _CircleStartPosition_ | `top` |

### Type Definitions

The component exports the following type definitions:

```js
import type { CircleStartPosition } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                        | Default Value                       | Description |
| --------------------------- | ----------------------------------- | ----------- |
| --rc-circle-size            | _100px_                             | -           |
| --rc-circle-color           | _var(--rc-primary-color)_           | -           |
| --rc-circle-layer-color     | _var(--rc-white)_                   | -           |
| --rc-circle-text-color      | _var(--rc-text-color)_              | -           |
| --rc-circle-text-font-weight | _var(--rc-font-weight-bold)_       | -           |
| --rc-circle-text-font-size  | _var(--rc-font-size-md)_            | -           |
| --rc-circle-text-line-height | _var(--rc-line-height-md)_          | -           |

