# Tag 

### Import

```js
import { Tag } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Control the tag color through the `type` property.

```jsx
<Tag type="primary">Tag</Tag>
<Tag type="success">Tag</Tag>
<Tag type="danger">Tag</Tag>
<Tag type="warning">Tag</Tag>
```

### Plain Style

Set the `plain` property to plain style.

```jsx
<Tag plain type="primary">
  Tag
</Tag>
```

### Round Style

Set to round style through `round`.

```jsx
<Tag round type="primary">
  Tag
</Tag>
```

### Mark Style

Set to mark style (semi-round) through `mark`.

```jsx
<Tag mark type="primary">
  Tag
</Tag>
```

### Closable Tag

Adding the `closeable` property indicates that the tag is closable. When closing the tag, the `close` event will be triggered. You can execute the logic to hide the tag in the `close` event.

```jsx
<Tag visible={visible} closeable size="medium" type="primary" onClose={() => setVisible(false)}>
  Tag
</Tag>
```

### Tag Size

Adjust the tag size through the `size` property.

```jsx
<Tag type="primary" size="mini">Tag</Tag>
<Tag type="primary">Tag</Tag>
<Tag type="primary" size="medium">Tag</Tag>
<Tag type="primary" size="large">Tag</Tag>
```

### Custom Color

Set the tag color through the `color` and `textColor` properties.

```jsx
<Tag color="#7232dd">Tag</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">Tag</Tag>
<Tag color="#7232dd" plain>Tag</Tag>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, optional values are `large` `medium` | _string_ | - |
| color | Tag color | _string_ | - |
| visible | Whether to show the tag | _boolean_ | `true` |
| plain | Whether it is plain style | _boolean_ | `false` |
| round | Whether it is round style | _boolean_ | `false` |
| mark | Whether it is mark style | _boolean_ | `false` |
| textColor | Text color, priority is higher than `color` property | _string_ | `white` |
| closeable | Whether it is a closable tag | _boolean_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking | _event: MouseEvent_ |
| onClose | Triggered when closing the tag | _event: MouseEvent_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-tag-padding | _0 var(--rc-padding-base)_ | - |
| --rc-tag-text-color | _var(--rc-white)_ | - |
| --rc-tag-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-tag-border-radius | _2px_ | - |
| --rc-tag-line-height | _16px_ | - |
| --rc-tag-medium-padding | _2px 6px_ | - |
| --rc-tag-large-padding | _var(--rc-padding-base) var(--rc-padding-xs)_ | - |
| --rc-tag-large-border-radius | _var(--rc-border-radius-md)_ | - |
| --rc-tag-large-font-size | _var(--rc-font-size-md)_ | - |
| --rc-tag-round-border-radius | _var(--rc-border-radius-max)_ | - |
| --rc-tag-danger-color | _var(--rc-danger-color)_ | - |
| --rc-tag-primary-color | _var(--rc-primary-color)_ | - |
| --rc-tag-success-color | _var(--rc-success-color)_ | - |
| --rc-tag-warning-color | _var(--rc-warning-color)_ | - |
| --rc-tag-default-color | _var(--rc-gray-6)_ | - |
| --rc-tag-plain-background-color | _var(--rc-white)_ | - |

