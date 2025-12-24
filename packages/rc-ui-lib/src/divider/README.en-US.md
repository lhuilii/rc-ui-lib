# Divider 

### Introduction

Used to separate content into multiple areas.

### Import

```js
import { Divider } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Renders a horizontal divider by default.

```jsx
<Divider />
```

### Show Text

Insert content in the middle of the divider through slots.

```jsx
<Divider>Text</Divider>
```

### Content Position

Specify the position of the content through `contentPosition`.

```jsx
<Divider content-position="left">Text</Divider>
<Divider content-position="right">Text</Divider>
```

### Dashed Line

Add the `dashed` property to render the divider as a dashed line.

```jsx
<Divider dashed>Text</Divider>
```

### Custom Style

You can directly set the style of the divider through the `style` property.

```jsx
<Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>Text</Divider>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed line | _boolean_ | `false` |
| hairline | Whether to use 0.5px line | _boolean_ | `true` |
| contentPosition | Content position, optional values are `left` `right` | _string_ | `center` |
| className | Class name | _string_ | - |
| style | Style | _React.CSSProperties_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-divider-margin | _var(--rc-padding-md) 0_ | - |
| --rc-divider-text-color | _var(--rc-gray-6)_ | - |
| --rc-divider-font-size | _var(--rc-font-size-md)_ | - |
| --rc-divider-line-height | _24px_ | - |
| --rc-divider-border-color | _var(--rc-border-color)_ | - |
| --rc-divider-content-padding | _var(--rc-padding-md)_ | - |
| --rc-divider-content-left-width | _10%_ | - |
| --rc-divider-content-right-width | _10%_ | - |

