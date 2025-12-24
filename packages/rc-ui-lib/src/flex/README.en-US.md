# Flex

### Introduction

The `Flex` component is a wrapper for CSS `flex` layout.

### Import

```js
import { Flex } from 'rc-ui-lib';
```

### Basic Usage

The `Flex` component provides a `24-column grid`. Using a single set of `Flex` and `Flex.Item` grid components, you can create a basic grid system. All columns (`Flex.Item`) must be placed inside `Flex`.

```jsx
<Flex>
  <Flex.Item span={12}>span: 12</Flex.Item>
  <Flex.Item span={12}>span: 12</Flex.Item>
</Flex>
<Flex>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### Column Spacing

You can set the spacing between column elements through the `gutter` property. The default spacing is `0`. If you need vertical spacing, you can write it in array form `[horizontal spacing, vertical spacing]`

```jsx
<Flex gutter={16}>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### Direction

Set the flex layout direction through the `direction` property. Default is `row`

```jsx
<Flex direction="row">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
<Flex direction="row-reverse">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
```

## API

### Flex

| Member | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Item positioning direction, optional values are `row` `row-reverse` `column` `column-reverse` | _string_ | `row` |
| wrap | Wrapping method for child elements, optional values are `nowrap` `wrap` `wrap-reverse` | _string_ | `nowrap` |
| gutter | Spacing between column elements. Can use array form to set both `[horizontal spacing, vertical spacing]` | _number \| array_ | `0` |
| align | Vertical alignment, optional values are `start` `center` `end` `baseline` `stretch` | _string_ | `start` |
| justify | Horizontal arrangement, optional values are `start` `end` `center` `around` `between` | _string_ | `start` |

### Flex.Item

| Member | Description | Type | Default |
| --- | --- | --- | --- |
| flex | Flex layout property | _string \| number_ | `-` |
| span | Number of grid placeholder columns, when 0 it is equivalent to `display: none` | _number_ | `-` |

