# ActionBar 

### Introduction

Used to provide convenient interaction for page-related operations.

### Import

```js
import { ActionBar } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
import React from 'react';
import { ActionBar } from 'rc-ui-lib';

export default () => {
  return (
    <ActionBar>
      <ActionBar.Icon icon="chat-o" text="Customer Service" />
      <ActionBar.Icon icon="cart-o" text="Shopping Cart" />
      <ActionBar.Icon icon="shop-o" text="Shop" />
      <ActionBar.Button type="danger" text="Buy Now" />
    </ActionBar>
  );
};
```

### Badge

You can set the `badge` property on the ActionBar.Icon component.

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" badge={{ dot: true }} text="Customer Service" />
  <ActionBar.Icon icon="cart-o" badge={{ content: 5 }} text="Shopping Cart" />
  <ActionBar.Icon icon="shop-o" badge={{ content: 12 }} text="Shop" />
  <ActionBar.Button type="warning" text="Add to Cart" />
  <ActionBar.Button type="danger" text="Buy Now" />
</ActionBar>
```

### Custom Icon Color

You can customize the icon color through the `color` property of ActionBarIcon.

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" color="#ee0a24" text="Customer Service" />
  <ActionBar.Icon icon="cart-o" text="Shopping Cart" />
  <ActionBar.Icon icon="star" color="#ff5000" text="Shop" />
  <ActionBar.Button type="warning" text="Add to Cart" />
  <ActionBar.Button type="danger" text="Buy Now" />
</ActionBar>
```

### Custom Button Color

You can customize the button color through the `color` property of ActionBarButton, which supports passing `linear-gradient` gradient colors.

```jsx
<ActionBar>
  <ActionBar.Icon icon="chat-o" text="Customer Service" />
  <ActionBar.Icon icon="cart-o" text="Shopping Cart" />
  <ActionBar.Button color="#be99ff" type="warning" text="Add to Cart" />
  <ActionBar.Button color="#7232dd" type="danger" text="Buy Now" />
</ActionBar>
```

## API

### ActionBar Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| safeAreaInsetBottom | Whether to enable [bottom safe area inset](#/en-US/advanced-usage#bottom-safe-area-inset) | _boolean_ | `true` |
| placeholder | Whether to generate an equal-height placeholder element at the label position | _boolean_ | `false` |

### ActionBarIcon Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _ReactNode_ | - |
| icon | Icon | _string\|ReactNode_ | - |
| color | Icon color | _string_ | `#323233` |
| iconClass | Additional icon class name | _string_ | - |
| iconPrefix | Icon class name prefix, equivalent to the [classPrefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| badge | Badge settings for the top-right corner of the icon | _BadgeProps_ | - |
| onClick | Click event | _(event) => void_ | - |

### ActionBarButton Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _ReactNode_ | - |
| type | Button type, optional values are `default` `primary` `info` `warning` `danger` | _string_ | `default` |
| color | Button color, supports passing `linear-gradient` gradient colors | _string_ | - |
| icon | [Icon name](#/en-US/icon) or image link on the left | _string_ | - |
| disabled | Whether to disable the button | _boolean_ | `false` |
| loading | Whether to display as loading state | _boolean_ | `false` |
| onClick | Click event | _(event) => void_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                                  | Default Value                 | Description |
| ------------------------------------- | ----------------------------- | ----------- |
| --rc-action-bar-background-color      | _var(--rc-white)_             | -           |
| --rc-action-bar-height                | _50px_                        | -           |
| --rc-action-bar-icon-width            | _48px_                        | -           |
| --rc-action-bar-icon-height           | _100%_                        | -           |
| --rc-action-bar-icon-color            | _var(--rc-text-color)_        | -           |
| --rc-action-bar-icon-size             | _18px_                        | -           |
| --rc-action-bar-icon-font-size        | _var(--rc-font-size-xs)_     | -           |
| --rc-action-bar-icon-active-color     | _var(--rc-active-color)_      | -           |
| --rc-action-bar-icon-text-color       | _var(--rc-gray-7)_            | -           |
| --rc-action-bar-icon-background-color | _var(--rc-white)_             | -           |
| --rc-action-bar-button-height         | _40px_                        | -           |
| --rc-action-bar-button-warning-color  | _var(--rc-gradient-orange)_   | -           |
| --rc-action-bar-button-danger-color   | _var(--rc-gradient-red)_      | -           |

