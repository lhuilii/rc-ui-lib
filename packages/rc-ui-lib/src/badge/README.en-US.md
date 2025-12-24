# Badge

### Introduction

Display badge numbers or small red dots in the top-right corner.

### Import

```js
import { Badge } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

After setting the `content` property, Badge will display the corresponding badge in the top-right corner of the child element. You can also use `dot` to display a small red dot.

```jsx
<Badge content="5">
  <div className="child" />
</Badge>
<Badge content="10">
  <div className="child" />
</Badge>
<Badge content="Hot">
  <div className="child" />
</Badge>
<Badge dot>
  <div className="child" />
</Badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### Maximum Value

After setting the `max` property, when the value of `content` exceeds the maximum value, it will automatically display as `{max}+`.

```jsx
<Badge content="20" max="9">
  <div className="child" />
</Badge>
<Badge content="50" max="20">
  <div className="child" />
</Badge>
<Badge content="200" max="99">
  <div className="child" />
</Badge>
```

### Custom Color

Set the badge color through the `color` property.

```jsx
<Badge content="5" color="#1989fa">
  <div className="child" />
</Badge>
<Badge content="10" color="#1989fa">
  <div className="child" />
</Badge>
<Badge dot color="#1989fa">
  <div className="child" />
</Badge>
```

### Custom Badge Content

```jsx
<Badge content={<Icon name="success" className="badge-icon" />}>
  <div className="child" />
</Badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### Custom Badge Position

Set the badge position through the `position` property.

```jsx
<Badge content="10" position="top-left">
  <div className="child" />
</Badge>
<Badge content="10" position="bottom-left">
  <div className="child" />
</Badge>
<Badge content="10" position="bottom-right">
  <div className="child" />
</Badge>
```

### Standalone Display

When Badge has no child elements, it will be displayed as an independent element.

```jsx
<Badge content="20" />

<Badge content="200" max="99" />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| content | Badge content | _ReactNode_ | - |
| color | Badge background color | _string_ | `#f44336` |
| dot | Whether to display as a small red dot | _boolean_ | `false` |
| max | Maximum value. When the value exceeds the maximum, it will display as `{max}+`. Only valid when content is a number | _number \| string_ | - |
| offset | Set the offset of the badge. The two items of the array correspond to the horizontal and vertical offsets respectively. The default unit is `px` | _[number \| string, number \| string]_ | - |
| showZero | When content is the number 0, whether to display the badge | _boolean_ | `true` |
| position | Badge position, optional values are `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicked | _event: Event_ |

### Type Definitions

The component exports the following type definitions:

```ts
import type { BadgeProps, BadgePosition, BadgeThemeVars } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                      | Default Value                                          | Description |
| ------------------------- | ------------------------------------------------------ | ----------- |
| --rc-badge-size           | _16px_                                                 | -           |
| --rc-badge-color          | _var(--rc-white)_                                      | -           |
| --rc-badge-padding        | _0 3px_                                                | -           |
| --rc-badge-font-size      | _var(--rc-font-size-sm)_                               | -           |
| --rc-badge-font-weight    | _var(--rc-font-weight-bold)_                           | -           |
| --rc-badge-border-width   | _var(--rc-border-width-base)_                          | -           |
| --rc-badge-background-color | _var(--rc-danger-color)_                              | -           |
| --rc-badge-dot-color      | _var(--rc-danger-color)_                               | -           |
| --rc-badge-dot-size       | _8px_                                                  | -           |
| --rc-badge-font-family    | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | -           |

