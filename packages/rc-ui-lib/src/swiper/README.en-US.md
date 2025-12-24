# Swiper

### Introduction

Used to loop through a set of images or content.

### Import

```js
import { Swiper } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Each Swiper.Item represents a swiper card. You can set the interval for automatic swiping through the `autoplayInterval` property.

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper className="my-swipe" autoplayInterval={3000}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.my-swipe .rc-swiper-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: #3f45ff;
}
```

### Listen to onIndexChange Event

The `onIndexChange` event is triggered after each page swipe ends.

```jsx
import React from 'react';
import { Swiper, Toast } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper onIndexChange={(index) => Toast(`Current Swipe index: ${index}`)}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### Vertical Scrolling

After setting the `direction="vertical"` property, the slides will be arranged vertically. At this time, you need to specify the height of the swiper container.

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper direction="vertical">
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### Custom Slide Size

The slide width is `100%` by default. You can change the slide width through the `slideSize` property.

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### Center Slides

Change the slide offset through `trackOffset` to achieve centered display.

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### Center Vertical Slides

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper style={{ height: 150 }} direction="vertical" slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### Custom Indicator

You can customize the indicator style through the `indicator` property.

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper
      indicator={(total, current) => (
        <div className="custom-indicator">
          {current + 1}/{total}
        </div>
      )}
    >
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
}
```

## API

### Swipe Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| autoplayInterval | Auto-swipe interval, unit is ms | _number \| boolean_ | `false` |
| autoplayIntervalInterval | Animation duration, unit is ms | _number_ | `300` |
| defaultIndex | Initial position index value | _number_ | `0` |
| loop | Whether to enable loop playback | _boolean_ | `true` |
| direction | Scroll direction | _DirectionTypes_ | `horizontal` |
| touchable | Whether it can be swiped by gesture | _boolean_ | `true` |
| slideSize | Slide width percentage | _number_ | `100` |
| trackOffset | Track offset percentage | _number_ | `0` |
| stuckAtBoundary | Whether to stick at both boundaries to avoid blank space, only effective in non-`loop` mode and when `slideSize` < 100 | _boolean_ | `false` |
| indicator | Custom indicator | _boolean \| (total, current) => ReactNode_ | - |
| indicatorProps | Indicator properties | _IndicatorProps_ | - |
| stopPropagation | Prevent bubbling of certain events [2.0.2] | _PropagationEvent[]_ | [] |

```ts
type PropagationEvent = 'mouseup' | 'mousemove' | 'mousedown';
```

### DirectionTypes Format

| Name | Description | Type |
| --- | --- | --- |
| horizontal | Horizontal direction | _string_ |
| direction="vertical" | Vertical direction | _string_ |

### IndicatorProps Format

| Name | Description | Type |
| --- | --- | --- |
| className | Indicator class name | _string_ |
| style | Indicator style | _string_ |

### Swiper Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onIndexChange | Triggered after each page swipe ends | index, current page index |

### SwiperItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking | _event: MouseEvent_ |

### Swiper Methods

You can get the Swiper instance through ref and call instance methods.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| swipePrev | Switch to previous slide | - | - |
| swipeNext | Switch to next slide | - | - |
| swipeTo | Switch to specified position | _index: number_ | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { SwiperInstance } from 'rc-ui-lib';
```

`SwiperInstance` is the type of the component instance. Usage is as follows:

```js
import { useRef } from 'react';
import type { SwiperInstance } from 'rc-ui-lib';

const swipeRef = useRef < SwipeInstance > null;

swipeRef.current?.swipeNext();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-swipe-slide-size | _100%_ | - |
| --rc-swipe-track-offset | _0%_ | - |
| --rc-swipe-border-radius | _0px_ | - |
| --rc-swipe-indicator-size | _6px_ | - |
| --rc-swipe-indicator-margin | _var(--rc-padding-sm)_ | - |
| --rc-swipe-indicator-active-opacity | _1_ | - |
| --rc-swipe-indicator-inactive-opacity | _0.3_ | - |
| --rc-swipe-indicator-active-background-color | _var(--rc-primary-color)_ | - |
| --rc-swipe-indicator-inactive-background-color | _var(--rc-border-color)_ | - |

