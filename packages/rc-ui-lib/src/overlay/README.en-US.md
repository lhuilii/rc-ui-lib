# Overlay 

### Introduction

Create an overlay to emphasize specific page elements and prevent users from performing other operations.

### Import

```js
import { Overlay } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
const [show, setShow] = useState(false);

<Button type="primary" onClick={() => setShow(true)}>Show Overlay</Button>
<Overlay visible={show} onClick={() => setShow(false)} />
```

### Embedded Content

You can embed any content on the overlay through the default slot.

```jsx
const [showEmbedded, setShowEmbedded] = useState(false);

<Button type="primary" onClick={() => setShowEmbedded(true)}>Embed Content</Button>
<Overlay visible={showEmbedded} onClick={() => setShowEmbedded(false)}>
  <div className="wrapper">
    <div className="block" />
  </div>
</Overlay>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show overlay | _boolean_ | `false` |
| zIndex | z-index level | _number \| string_ | `1` |
| duration | Animation duration, unit is milliseconds | _number \| string_ | `0.3` |
| className | Custom class name | _string_ | - |
| customStyle | Custom style | _object_ | - |
| lockScroll | Whether to lock background scrolling. When locked, content in the overlay will also be unable to scroll | _boolean_ | `true` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking | _event: Event_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-overlay-z-index | _1_ | - |
| --rc-overlay-background-color | _rgba(0, 0, 0, 0.7)_ | - |

