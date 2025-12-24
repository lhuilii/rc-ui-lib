# Popup 

### Introduction

Popup container for displaying popups, information prompts, etc. Supports multiple popups stacked display.

### Import

```js
import { Popup } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Control whether the popup is displayed through `visible` and `onClose`.

```js
const [showPopup, setShowPopup] = useState(false);
```

```jsx
<Cell title="Show Popup" isLink onClick={() => setShowPopup(true)} />
<Popup
  visible={showPopup}
  onClose={() => setShowPopup(false)}>
  Content
</Popup>
```

### Popup Position

Set the popup position through the `position` property. It pops up in the center by default, and can be set to `top`, `bottom`, `left`, `right`.

```jsx
<Popup visible={show} position="top" style={{ height: '30%' }} />
```

### Close Icon

After setting the `closeable` property, a close icon will be displayed in the top-right corner of the popup layer, and you can customize the icon through the `closeIcon` property. You can customize the icon position using the `closeIconPosition` property.

```jsx
<Popup visible={show} closeable position="bottom" style={{ height: "30%" }} />
<!-- Custom icon -->
<Popup visible={show} closeable closeIcon="close" position="bottom" style={{ height: "30%" }} />
<!-- Icon position -->
<Popup
  visible={show}
  closeable
  closeIconPosition="top-left"
  position="bottom"
  style={{ height: "30%" }}
/>
```

### Round Popup

After setting the `round` property, the popup will add different rounded corner styles according to the popup position.

```jsx
<Popup visible={show} round position="bottom" style={{ height: '30%' }} />
```

### Title Popup

After setting the `title` and `description` properties, the popup will display the title and description text. It is recommended to use it with `bottom` popup.

```jsx
<Popup
  visible={show}
  closeable
  title="Title"
  description="This is a very long description"
  style={{ height: '30%' }}
  position="bottom"
  round
/>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show popup | _boolean_ | `false` |
| className | popup class name | _boolean_ | - |
| overlay | Whether to show overlay | _boolean_ | `true` |
| position | Popup position, optional values are `top` `bottom` `right` `left` | _string_ | `center` |
| overlayClass | Custom overlay class name | _string_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| duration | Animation duration, unit is seconds | _number \| string_ | `0.3` |
| round | Whether to show rounded corners | _boolean_ | `false` |
| title | Popup title | _string_ | - |
| description | Popup description | _string_ | - |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| destroyOnClose | Destroy child elements in Popup when closing | _boolean_ | `false` |
| preventDefaultMouseDown | Whether to prevent mouseDown event. After preventing, it can prevent onBlur event from bubbling | _boolean_ | `false` |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close after clicking overlay | _boolean_ | `true` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| closeIcon | Close icon name or image link | _string_ | `cross` |
| closeIconPosition | Close icon position, optional values are `top-left`<br/>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | Animation class name, equivalent to the `name` property of transtion | _string_ | - |
| teleport | Specify mount node | _HTMLElement_ | _(() => HTMLElement)_ |
| safeAreaInsetBottom | Whether to enable [bottom safe area inset](#/en-US/advanced-usage#bottom-safe-area-inset) | _boolean_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking popup | _event: Event_ |
| onClickOverlay | Triggered when clicking overlay | - |
| onClickCloseIcon | Triggered when clicking close icon | _event: Event_ |
| onOpen | Triggered when opening popup | - |
| onClose | Triggered when closing popup | - |
| onOpened | Triggered after opening popup and animation ends | - |
| onClosed | Triggered after closing popup and animation ends | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { PopupPosition, PopupCloseIconPosition } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-popup-background-color | _var(--rc-white)_ | - |
| --rc-popup-transition | _transform var(--rc-animation-duration-base)_ | - |
| --rc-popup-round-border-radius | _16px_ | - |
| --rc-popup-close-icon-size | _22px_ | - |
| --rc-popup-close-icon-color | _var(--rc-gray-5)_ | - |
| --rc-popup-close-icon-active-color | _var(--rc-gray-6)_ | - |
| --rc-popup-close-icon-margin | _16px_ | - |
| --rc-popup-close-icon-z-index | _1_ | - |

