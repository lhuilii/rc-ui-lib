# FloatingBubble

### Introduction

A clickable bubble that floats on the edge of the page. Please upgrade `rc-ui-lib` to >= 2.1.0 to use this component.

### Import

```js
import { FloatingBubble } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The floating bubble is displayed in the bottom-right corner by default and allows dragging up and down in the y-axis direction. You can set the bubble icon through the `icon` property.

```jsx
const onClick = () => {
  Toast('Click bubble');
};
<FloatingBubble icon="chat" onClick={onClick} />;
```

### Free Drag and Magnetic

Allows dragging in both x and y axis directions, and snaps to the nearest side in the x-axis direction.

```jsx
const onOffsetChange = (offset) => {
  Toast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
};
<FloatingBubble axis="xy" icon="chat" magnetic="x" onOffsetChange={onOffsetChange} />;
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| offset | Initial position of the bubble | _OffsetType_ | `Default bottom-right corner coordinates` |
| axis | Drag direction, `xy` means free drag, `lock` means drag disabled | _'x' \| 'y' \| 'xy' \| 'lock'_ | `y` |
| magnetic | Automatic magnetic snap direction | _'x' \| 'y'_ | - |
| icon | Bubble icon name or image link, equivalent to the name property of the Icon component | _string_ | - |
| gap | Minimum spacing between bubble and window, unit is `px` | _number_ | `24` |
| teleport | Specify mount node | _HTMLElment () => HTMLElement_ | `body` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the component | _MouseEvent_ |
| onOffsetChange | Triggered after the user drags and the end position changes | _{x: string, y: string}_ |

### Type Definitions

The component exports the following type definitions:

```ts
export type {
  FloatingBubbleProps,
  FloatingBubbleThemeVars,
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
  FloatingBubbleBoundary,
} from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-floating-bubble-size | _48px_ | - |
| --rc-floating-bubble-initial-gap | _24px_ | - |
| --rc-floating-bubble-icon-size | _28px_ | - |
| --rc-floating-bubble-background | _var(--rc-primary-color)_ | - |
| --rc-floating-bubble-color | _var(--rc-primary-color)_ | - |
| --rc-floating-bubble-z-index | _999_ | - |
| --rc-floating-bubble-border-radius | _--rc-floating-bubble-border-radius_ | - |

