# Typography 

### Introduction

Basic format for text.

### Import

```js
import { Typography } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
<Typography.Text>This is a text</Typography.Text>
<Typography.Title>This is a title</Typography.Title>
<Typography.Link>This is a link</Typography.Link>
```

### Type

After setting the `type` property, the text will display different UI states.

```jsx
<Typography.Text type="danger">This is a text</Typography.Text>
<Typography.Text type="primary">This is a text</Typography.Text>
<Typography.Text type="warning">This is a text</Typography.Text>
<Typography.Text type="secondary">This is a text</Typography.Text>
```

## API

### Typography.Text Typography.Link Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Text type, optional values are `danger` ` secondary` `light` `primary` `success` `warning ` | _string_ | - |
| size | Text size, optional values are `xs` `sm` `md` `lg` `xl` `xxl` | _boolean_ | `md` |
| disabled | Disable text | _boolean_ | `false` |
| ellipsis | Text ellipsis | _boolean_ _number_ | `false` |
| delete | Add strikethrough style | _boolean_ | `false` |
| underline | Add underline style | _boolean_ | `false` |
| center | Center text | _boolean_ | `false` |
| strong | Bold text | _boolean_ | `false` |
| onClick | Click event | _function_ | - |

### Typography.Title Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| level | Importance level, optional values are `1` `2` `3` `4` `5` | _number_ | `4` |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-typography-color | _var(--rc-text-color)_ | - |
| --rc-typography-link-color | _var(--rc-primary-color)_ | - |
| --rc-typography-font-size | _var(--rc-font-size-md)_ | - |
| --rc-typography-line-height | _var(--rc-line-height-md)_ | - |
| --rc-typography-primary-color | _var(--rc-primary-color)_ | - |
| --rc-typography-danger-color | _var(--rc-danger-color)_ | - |
| --rc-typography-success-color | _var(--rc-success-color)_ | - |
| --rc-typography-warning-color | _var(--rc-warning-color)_ | - |
| --rc-typography-secondary-color | _var(--rc-gray-6)_ | - |
| --rc-typography-disabled-color | _var(--rc-gray-5)_ | - |
| --rc-typography-light-color | _var(--rc-white-color)_ | - |

