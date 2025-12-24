# Sticky 

### Introduction

The Sticky component achieves the same effect as the `position: sticky` property in CSS. When the component is within the screen range, it will be arranged according to the normal layout. When the component scrolls out of the screen range, it will always be fixed at the top of the screen.

### Import

```js
import { Sticky } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Wrap the content inside the `Sticky` component.

```jsx
<Sticky>
  <Button type="primary">Basic Usage</Button>
</Sticky>
```

### Sticky Top Distance

You can set the distance between the component and the top when it is sticky through the `offsetTop` property.

```jsx
<Sticky offsetTop={50}>
  <Button type="info">Sticky Top Distance</Button>
</Sticky>
```

### Specify Container

You can specify the container of the component through the `container` property. When the page scrolls, the component will always stay within the container range. When the component is about to exceed the bottom of the container, it will be fixed at the bottom of the container.

```js
const container = useRef(null);
```

```jsx
<div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
  <Sticky container={container}>
    <Button type="warning" style={{ marginLeft: '215px' }}>
      Specify Container
    </Button>
  </Sticky>
</div>
```

### Sticky Bottom Distance

Setting `position` to `bottom` allows the component to stick to the bottom. You can set the distance between the component and the bottom when it is sticky through the `offsetBottom` property.

```jsx
<Sticky position="bottom" offsetBottom={50}>
  <Button type="info">Sticky Bottom Distance</Button>
</Sticky>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| position | Sticky position, optional value is `bottom` | _string_ | `top` |
| offsetTop | Distance from top when sticky, supports `px` `vw` `vh` `rem` units, default `px` | _number \| string_ | `0` |
| offsetBottom | Distance from bottom when sticky, supports `px` `vw` `vh` `rem` units, default `px` | _number \| string_ | `0` |
| zIndex | z-index when sticky | _number \| string_ | `99` |
| container | HTML node corresponding to container | _RefElement_ | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onScroll | Triggered when scrolling | _{ scrollTop: number, isFixed: boolean }_ |
| onChange | Triggered when sticky state changes | _isFixed: boolean_ |

### Type Definitions

The component exports the following type definitions:

```js
import type { StickyPosition } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-sticky-z-index | _99_ | - |

