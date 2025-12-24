# Grid

### Introduction

Grid can divide the page into equal-width blocks in the horizontal direction, used to display content or for page navigation.

### Import

Register the component globally through the following method. For more registration methods, please refer to [Component Registration](#/en-US/advanced-usage#component-registration).

```js
import { Grid } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the icon in the grid through the `icon` property, and set the text content through the `text` property.

```jsx
<Grid>
  <Grid.Item icon="photo-o" text="Text" />
  <Grid.Item icon="photo-o" text="Text" />
  <Grid.Item icon="photo-o" text="Text" />
  <Grid.Item icon="photo-o" text="Text" />
</Grid>
```

### Custom Column Number

By default, four grids are displayed in one row. You can customize the number of columns through `columnNum`.

```jsx
<Grid columnNum={3}>
  {Array.from({ length: 6 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="Text" />
  ))}
</Grid>
```

### Custom Content

You can customize the content displayed in the grid through slots.

```jsx
<Grid border={false} columnNum={3}>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </Grid.Item>
</Grid>
```

### Square Grid

After setting the `square` property, the height of the grid will be consistent with the width.

```jsx
<Grid square>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="Text" />
  ))}
</Grid>
```

### Grid Spacing

Set the distance between grids through the `gutter` property.

```jsx
<Grid gutter={10}>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="Text" />
  ))}
</Grid>
```

### Horizontal Content

Setting the `direction` property to `horizontal` allows the grid content to be arranged horizontally.

```jsx
<Grid direction="horizontal" columnNum={3}>
  <Grid.Item icon="photo-o" text="Text" />
  <Grid.Item icon="photo-o" text="Text" />
  <Grid.Item icon="photo-o" text="Text" />
</Grid>
```

### Badge

After setting the `dot` property, a small red dot will be displayed in the top-right corner of the icon. After setting the `badge` property, the corresponding badge will be displayed in the top-right corner of the icon.

```jsx
<Grid columnNum={2}>
  <Grid.Item icon="home-o" text="Text" badge={{ dot: true }} />
  <Grid.Item icon="search" text="Text" badge={{ content: '99+' }} />
</Grid>
```

## API

### Grid Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| columnNum | Number of columns | _number_ | `4` |
| iconSize | Icon size, default unit is `px` | _number \| string_ | `28px` |
| gutter | Spacing between grids, default unit is `px` | _number_ | `0` |
| border | Whether to show border | _boolean_ | `true` |
| center | Whether to center the grid content | _boolean_ | `true` |
| square | Whether to fix the grid as a square | _boolean_ | `false` |
| direction | Direction of grid content arrangement, optional value is `horizontal` | `vertical` | - |
| reverse | Whether to swap the positions of icon and text | _boolean_ | `false` |
| className | Class name | _string_ | - |
| style | Style | _React.CSSProperties_ | - |

### GridItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text | _string_ | - |
| icon | Icon | _string \| React.ReactNode_ | - |
| iconPrefix | Icon class name prefix, equivalent to the [classPrefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| iconColor | Icon color, equivalent to the [color property](#/en-US/icon#props) of the Icon component | _string_ | - |
| badge | Badge content in the top-right corner of the icon | _BadgeProps_ | - |
| className | Class name | _string_ | - |
| style | Style | _React.CSSProperties_ | - |
| contentClassName | Content class name | _string_ | - |
| contentStyle | Content style | _React.CSSProperties_ | - |

### GridItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the grid | _event: MouseEvent_ |

### Type Definitions

The component exports the following type definitions:

```js
import type { GridDirection } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-grid-item-content-padding | _var(--rc-padding-md) var(--rc-padding-xs)_ | - |
| --rc-grid-item-content-background-color | _var(--rc-white)_ | - |
| --rc-grid-item-content-active-color | _var(--rc-active-color)_ | - |
| --rc-grid-item-icon-size | _28px_ | - |
| --rc-grid-item-text-color | _var(--rc-gray-7)_ | - |
| --rc-grid-item-text-font-size | _var(--rc-font-size-sm)_ | - |

