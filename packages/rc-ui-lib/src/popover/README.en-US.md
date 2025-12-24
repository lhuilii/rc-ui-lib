# Popover 

### Introduction

Pop-up bubble menu.

### Import

```js
import { Popover } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

When Popover pops up, it will be positioned based on the content of the `reference` property.

```jsx
import { Popover, Button, Toast } from 'rc-ui-lib';

const actions = [{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }];

export default () => {
  const onSelect = (item) => Toast.info(item.text);

  return (
    <Popover
      placement="bottom-start"
      actions={actions}
      onSelect={onSelect}
      reference={<Button type="primary">Light Style</Button>}
    />
  );
};
```

### Dark Style

Popover supports both light and dark styles. The default is light style. Setting the `theme` property to `dark` can switch to dark style.

```jsx
<Popover
  theme="dark"
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">Dark Style</Button>}
/>
```

### Popup Position

Control the popup position of the bubble through the `placement` property.

```jsx
<Popover placement="top" />
```

`placement` supports the following values:

```bash
top           # Top center position
top-start     # Top left position
top-end       # Top right position
left          # Left center position
left-start    # Left top position
left-end      # Left bottom position
right         # Right center position
right-start   # Right top position
right-end     # Right bottom position
bottom        # Bottom center position
bottom-start  # Bottom left position
bottom-end    # Bottom right position
```

### Show Icon

In the `actions` array, you can define the icon of the option through the `icon` field, supporting passing in [icon name](#/en-US/icon) or image link.

```jsx
const actions = [
  { text: 'Option 1', icon: 'add-o' },
  { text: 'Option 2', icon: 'music-o' },
  { text: 'Option 3', icon: 'more-o' },
];

<Popover
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">Light Style</Button>}
/>;
```

### Disable Option

In the `actions` array, you can disable an option through the `disabled` field.

```jsx
const actions = [
  { text: 'Option 1', disabled: true },
  { text: 'Option 2', disabled: true },
  { text: 'Option 3' },
];

<Popover
  actions={actions}
  onSelect={onSelect}
  reference={<Button type="primary">Light Style</Button>}
/>;
```

### Custom Content

You can place any content inside Popover through children.

```jsx
<Popover ref={popover} placement="top-start" reference={<Button type="primary">Custom Content</Button>}>
  <Grid square border={false} columnNum={3} style={{ width: 240 }}>
    {Array.from({ length: 6 }, (_, i) => (
      <Grid.Item onClick={() => popover.current?.hide()} key={i} icon="photo-o" text="Text" />
    ))}
  </Grid>
</Popover>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| actions | Option list | _Action[]_ | `[]` |
| placement | Popup position | _string_ | `bottom` |
| theme | Theme style, optional value is `dark` | _string_ | `light` |
| trigger | Trigger method, optional value is `manual` | _string_ | `click` |
| duration | Animation duration, unit is seconds. Set to 0 to disable animation | _number \| string_ | `0.3` |
| offset | Offset of appearance position | _[number, number]_ | `[0, 8]` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| overlayClass | Custom overlay class name | _string_ | - |
| overlayStyle | Custom overlay style | _CSSProperties_ | - |
| closeOnClickAction | Whether to close after clicking an option | _boolean_ | `true` |
| closeOnClickOutside | Whether to close menu after clicking outside element | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close menu after clicking overlay | _boolean_ | `true` |
| iconPrefix | Icon class name prefix, equivalent to the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| children | Custom menu content | _React.ReactNode_ | - |
| reference | Element content that triggers Popover display | _React.ReactNode_ | - |
| teleport | Specify mount node | _Element\|() => Element_ | - |

### Action Data Structure

The `actions` property is an array of objects. Each object in the array configures one column. Objects can contain the following values:

| Key | Description | Type |
| --- | --- | --- |
| text | Option text | _string_ |
| icon | Icon on the left side of the text, supports passing in [icon name](#/en-US/icon) or image link | _string_ |
| color | Option text color | _string_ |
| disabled | Whether it is in disabled state | _boolean_ |
| className | Add additional class name for the corresponding option | _string_ |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onSelect | Triggered when clicking an option | _action: Action, index: number_ |
| onOpen | Triggered when opening menu | - |
| onClose | Triggered when closing menu | - |
| onOpened | Triggered after opening menu and animation ends | - |
| onClosed | Triggered after closing menu and animation ends | - |
| onClickOverlay | Triggered when clicking overlay | _event: MouseEvent_ |

### Methods

You can get the Popover instance and call instance methods through ref.

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| show | Show popover | - | - |
| hide | Close popover | - | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-popover-arrow-size | _6px_ | - |
| --rc-popover-border-radius | _var(--rc-border-radius-lg)_ | - |
| --rc-popover-action-width | _128px_ | - |
| --rc-popover-action-height | _44px_ | - |
| --rc-popover-action-font-size | _var(--rc-font-size-md)_ | - |
| --rc-popover-action-line-height | _var(--rc-line-height-md)_ | - |
| --rc-popover-action-icon-size | _20px_ | - |
| --rc-popover-light-text-color | _var(--rc-text-color)_ | - |
| --rc-popover-light-background-color | _var(--rc-white)_ | - |
| --rc-popover-light-action-disabled-text-color | _var(--rc-gray-5)_ | - |
| --rc-popover-dark-text-color | _var(--rc-white)_ | - |
| --rc-popover-dark-background-color | _#4a4a4a_ | - |
| --rc-popover-dark-action-disabled-text-color | _var(--rc-gray-6)_ | - |

## Common Issues

### Popover click event cannot be triggered correctly?

This situation is usually caused by the introduction of the `fastclick` library in the project. It is recommended to remove `fastclick`, or configure the [ignore rule](https://github.com/ftlabs/fastclick#advanced) of `fastclick`.

