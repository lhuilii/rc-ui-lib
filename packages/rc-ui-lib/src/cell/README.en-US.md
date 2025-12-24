# Cell

### Introduction

Cells are individual display items in a list.

### Import

```js
import { Cell } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

`Cell` can be used alone or in combination with `Cell.Group`. `Cell.Group` can provide top and bottom outer borders for `Cell`.

```jsx
<Cell.Group>
  <Cell title="Cell" value="Content" />
  <Cell title="Cell" value="Content" label="Description" />
</Cell.Group>
```

### Cell Size

You can control the size of the cell through the `size` property.

```jsx
<Cell title="Cell" value="Content" size="large" />
<Cell title="Cell" value="Content" label="Description" size="large" />
```

### Show Icon

Display an icon on the left side of the title through the `icon` property.

```jsx
<Cell title="Cell" icon="location-o" />
```

### Only Set Value

When only `value` is set, the content will be left-aligned.

```jsx
<Cell value="Content" />
```

### Show Arrow

After setting the `isLink` property, an arrow will be displayed on the right side of the cell, and the arrow direction can be controlled through the `arrowDirection` property.

```jsx
<Cell title="Cell" isLink />
<Cell title="Cell" isLink value="Content" />
<Cell title="Cell" isLink arrowDirection="down" value="Content" />
```

### Group Title

You can specify a group title through the `title` property of `Cell.Group` (or `Cell.Group`).

```jsx
<Cell.Group title="Group 1">
  <Cell title="Cell" value="Content" />
</Cell.Group>
<Cell.Group title="Group 2">
  <Cell title="Cell" value="Content" />
</Cell.Group>
```

### Card Type

You can display a card type through the `inset` property of `Cell.Group`.

```jsx
<Cell.Group inset>
  <Cell title="Cell" value="Content" />
  <Cell title="Cell" value="Content" />
</Cell.Group>
```

### Custom Content

If the above usage cannot meet your needs, you can customize the content.

```jsx
<Cell title="Cell" icon="shop-o">
  <div>Custom Content</div>
</Cell>
```

### Vertical Center

The `center` property can make the left and right content of `Cell` vertically centered.

```jsx
<Cell center title="Cell" value="Content" label="Description" />
```

## API

### Cell.Group Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Group title | _string_ | - |
| border | Whether to show outer border | _boolean_ | `true` |
| inset | Whether to display as rounded card style | _boolean_ | - |

### Cell Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Left title | _ReactNode_ | - |
| value | Right content | _number \| string_ | - |
| label | Description information below the title | _ReactNode_ | - |
| size | Cell size, optional value is `large` | _string_ | - |
| icon | Left icon | _string\|ReactNode_ | - |
| rightIcon | Custom right button, default is `arrow` | _string\|ReactNode_ | - |
| iconPrefix | Icon class name prefix, same as the [class-prefix property](#/en-US/icon) of the Icon component | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| replace | Whether to replace current page history when navigating | _boolean_ | `false` |
| clickable | Whether to enable click feedback | _boolean_ | `false` |
| isLink | Whether to show right arrow and enable click feedback | _boolean_ | `false` |
| required | Whether to show form required asterisk | _boolean_ | `false` |
| center | Whether to vertically center the content | _boolean_ | `false` |
| arrowDirection | Arrow direction, optional values are `left` `up` `down` | _string_ | `right` |
| titleStyle | Additional style for left title | _string_ | - |
| titleClass | Additional class name for left title | _string_ | - |
| valueClass | Additional class name for right content | _string_ | - |
| labelClass | Additional class name for description | _string_ | - |

### Cell Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the cell | _event: Event_ |

### Type Definitions

The component exports the following type definitions:

```js
import type { CellArrowDirection } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-cell-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-line-height | _24px_ | - |
| --rc-cell-vertical-padding | _10px_ | - |
| --rc-cell-horizontal-padding | _var(--rc-padding-md)_ | - |
| --rc-cell-text-color | _var(--rc-text-color)_ | - |
| --rc-cell-background-color | _var(--rc-white)_ | - |
| --rc-cell-border-color | _var(--rc-border-color)_ | - |
| --rc-cell-active-color | _var(--rc-active-color)_ | - |
| --rc-cell-required-color | _var(--rc-danger-color)_ | - |
| --rc-cell-label-color | _var(--rc-gray-6)_ | - |
| --rc-cell-label-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-cell-label-line-height | _var(--rc-line-height-sm)_ | - |
| --rc-cell-label-margin-top | _var(--rc-padding-base)_ | - |
| --rc-cell-value-color | _var(--rc-gray-6)_ | - |
| --rc-cell-icon-size | _16px_ | - |
| --rc-cell-right-icon-color | _var(--rc-gray-6)_ | - |
| --rc-cell-large-vertical-padding | _var(--rc-padding-sm)_ | - |
| --rc-cell-large-title-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-cell-large-label-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-group-background-color | _var(--rc-white)_ | - |
| --rc-cell-group-title-color | _var(--rc-gray-6)_ | - |
| --rc-cell-group-title-padding | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs)_ | - |
| --rc-cell-group-title-font-size | _var(--rc-font-size-md)_ | - |
| --rc-cell-group-title-line-height | _16px_ | - |
| --rc-cell-group-inset-padding | _0 var(--rc-padding-md)_ | - |
| --rc-cell-group-inset-border-radius | _var(--rc-border-radius-lg)_ | - |
| --rc-cell-group-inset-title-padding | _var(--rc-padding-md) var(--rc-padding-md) var(--rc-padding-xs) var(--rc-padding-xl)_ | - |

