# Button

### Introduction

Buttons are used to trigger an action, such as submitting a form.

### Import

```js
import { Button } from 'rc-ui-lib';
```

## Code Example

### Button Type

Buttons support five types: `default`, `primary`, `info`, `warning`, `danger`. The default is `default`.

```jsx
<Button type="primary">Primary Button</Button>
<Button type="info">Info Button</Button>
<Button type="default">Default Button</Button>
<Button type="warning">Warning Button</Button>
<Button type="danger">Danger Button</Button>
```

### Plain Button

Set the button as a plain button through the `plain` property. The text of a plain button is the button color, and the background is white.

```jsx
<Button plain type="primary">Plain Button</Button>
<Button plain type="primary">Plain Button</Button>
```

### Hairline

Setting the `hairline` property can display a 0.5px hairline border.

```jsx
<Button plain hairline type="primary">Hairline Button</Button>
<Button plain hairline type="primary">Hairline Button</Button>
```

### Disabled State

Disable the button through the `disabled` property. The button cannot be clicked in the disabled state.

```jsx
<Button disabled type="primary">Disabled</Button>
<Button disabled type="primary">Disabled</Button>
```

### Loading State

Set the button to loading state through the `loading` property. In loading state, the button text will be hidden by default. You can set the text in loading state through `loadingText`.

```jsx
<Button loading type="primary" />
<Button loading type="primary" loadingType="spinner" />
<Button loading type="primary" loadingText="Loading..." />
```

### Button Shape

Set a square button through `square`, and set a round button through `round`.

```jsx
<Button type="primary" square>Square Button</Button>
<Button type="primary" round>Round Button</Button>
```

### Icon Button

Set the button icon through the `icon` property, supporting all icons in the Icon component, or you can pass an icon URL.

```jsx
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">Button</Button>
<Button icon="https://img.yzcdn.cn/vant/user-active.png" plain type="primary">Button</Button>
```

### Button Size

Supports four sizes: `large`, `normal`, `small`, `mini`. The default is `normal`.

```jsx
<Button type="primary" size="large">Large Button</Button>
<Button type="primary" size="normal">Normal Button</Button>
<Button type="primary" size="small">Small Button</Button>
<Button type="primary" size="mini">Mini Button</Button>
```

### Block Element

Buttons are inline-block elements by default. You can set the element type of the button to a block element through the `block` property.

```jsx
<Button type="primary" block>
  Block Element
</Button>
```

### Custom Color

You can customize the button color through the `color` property.

```jsx
<Button color="#7232dd">Solid Color Button</Button>
<Button color="#7232dd" plain>Solid Color Button</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">Gradient Button</Button>
```

### Button Group

Display multiple buttons side by side through `Button.Group`.

```jsx
<Button.Group>
  <Button block>Previous</Button>
  <Button block type="primary">
    Next
  </Button>
</Button.Group>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Size, optional values are `large` `small` `mini` | _string_ | `normal` |
| text | Button text | _string_ | - |
| color | Button color, supports passing `linear-gradient` gradient colors | _string_ | - |
| icon | Left icon name | _string\|ReactNode_ | - |
| iconPrefix | Icon class name prefix, same as the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| iconPosition | Icon display position, optional value is `right` | _string_ | `left` |
| tag | HTML tag of the button root node | _string_ | `Button` |
| nativeType | type attribute of the native Button tag | _string_ | `Button` |
| block | Whether it is a block element | _boolean_ | `false` |
| plain | Whether it is a plain button | _boolean_ | `false` |
| square | Whether it is a square button | _boolean_ | `false` |
| round | Whether it is a round button | _boolean_ | `false` |
| shadow | Show shadow, optional values are `1` `2` `3` | _boolean_ _number_ | `false` |
| disabled | Whether to disable the button | _boolean_ | `false` |
| hairline | Whether to use 0.5px border | _boolean_ | `false` |
| loading | Whether to display as loading state | _boolean_ | `false` |
| loadingText | Loading state prompt text | _string_ | - |
| loadingType | [Loading icon type](#/en-US/loading), optional value is `spinner` | _string_ | `circular` |
| loadingSize | Loading icon size | _string_ | `20px` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the button, and the button state is not loading or disabled | _event: Event_ |

### Type Definitions

The component exports the following type definitions:

```js
import type { ButtonType, ButtonSize } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                                 | Default Value                        | Description |
| ------------------------------------ | ------------------------------------ | ----------- |
| --rc-button-mini-height              | _24px_                               | -           |
| --rc-button-mini-padding             | _0 var(--rc-padding-base)_           | -           |
| --rc-button-mini-font-size           | _var(--rc-font-size-xs)_             | -           |
| --rc-button-small-height             | _32px_                               | -           |
| --rc-button-small-padding            | _0 var(--rc-padding-xs)_             | -           |
| --rc-button-small-font-size          | _var(--rc-font-size-sm)_             | -           |
| --rc-button-normal-font-size         | _var(--rc-font-size-md)_             | -           |
| --rc-button-normal-padding           | _0 15px_                             | -           |
| --rc-button-large-height             | _50px_                               | -           |
| --rc-button-default-height           | _44px_                               | -           |
| --rc-button-default-line-height      | _1.2_                                | -           |
| --rc-button-default-font-size        | _var(--rc-font-size-lg)_             | -           |
| --rc-button-default-color            | _var(--rc-text-color)_               | -           |
| --rc-button-default-background-color | _var(--rc-white)_                    | -           |
| --rc-button-default-border-color     | _var(--rc-border-color)_             | -           |
| --rc-button-primary-color            | _var(--rc-white)_                    | -           |
| --rc-button-primary-background-color | _var(--rc-primary-color)_            | -           |
| --rc-button-primary-border-color     | _var(--rc-primary-color)_            | -           |
| --rc-button-success-color            | _var(--rc-white)_                    | -           |
| --rc-button-success-background-color | _var(--rc-success-color)_            | -           |
| --rc-button-success-border-color     | _var(--rc-success-color)_            | -           |
| --rc-button-danger-color             | _var(--rc-white)_                    | -           |
| --rc-button-danger-background-color  | _var(--rc-danger-color)_             | -           |
| --rc-button-danger-border-color      | _var(--rc-danger-color)_             | -           |
| --rc-button-warning-color            | _var(--rc-white)_                    | -           |
| --rc-button-warning-background-color | _var(--rc-orange)_                   | -           |
| --rc-button-warning-border-color     | _var(--rc-orange)_                   | -           |
| --rc-button-border-width             | _var(--rc-border-width-base)_        | -           |
| --rc-button-border-radius            | _var(--rc-border-radius-sm)_         | -           |
| --rc-button-round-border-radius      | _var(--rc-border-radius-max)_        | -           |
| --rc-button-plain-background-color   | _var(--rc-white)_                    | -           |
| --rc-button-disabled-opacity         | _var(--rc-disabled-opacity)_         | -           |
| --rc-button-icon-size                | _1.2em_                              | -           |
| --rc-button-loading-icon-size        | _20px_                               | -           |

