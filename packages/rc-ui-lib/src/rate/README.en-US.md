# Rate 

### Introduction

Used to rate things.

### Import

```js
import { Rate } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Bind the current rating value through `value`.

```jsx
<Rate value={3} />
```

```jsx
export default () => {
  const [value, setValue] = useState(3);
  return <Rate value={value} onChange={(current) => setValue(current)} />;
};
```

### Custom Icon

Set the icon when selected through the `icon` property, and set the icon when not selected through the `voidIcon` property.

```jsx
<Rate defaultValue={3} icon="like" voidIcon="like-o" />
```

### Custom Style

Set the icon size through the `size` property, set the color when selected through the `color` property, and set the color when not selected through `voidColor`.

```jsx
<Rate defaultValue={3} size={25} color="#ffd21e" voidIcon="star" voidColor="#eee" />
```

### Half Star

After setting the `allowHalf` property, you can select half stars.

```jsx
<Rate defaultValue={3.5} allowHalf />
```

### Custom Count

Set the total number of ratings through the `count` property.

```jsx
<Rate defaultValue={1} count="8" />
```

### Disabled State

Disable rating through the `disabled` property.

```jsx
<Rate defaultValue={3} disabled />
```

### Readonly State Display Decimal

After setting the `readonly` and `allowHalf` properties, the Rate component can display any decimal result.

```jsx
<Rate defaultValue={3.3} readonly allowHalf />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current score | _number_ | - |
| defaultValue | Default score | _number_ | - |
| count | Total number of icons | _number \| string_ | `5` |
| size | Icon size, default unit is `px` | _number \| string_ | `20px` |
| gutter | Icon spacing, default unit is `px` | _number \| string_ | `4px` |
| color | Color when selected | _string_ | `#ee0a24` |
| voidColor | Color when not selected | _string_ | `#c8c9cc` |
| disabledColor | Color when disabled | _string_ | `#c8c9cc` |
| icon | [Icon name](#/en-US/icon) or image link when selected | _string_ | `star` |
| voidIcon | [Icon name](#/en-US/icon) or image link when not selected | _string_ | `star-o` |
| allowHalf | Whether to allow half selection | _boolean_ | `false` |
| readonly | Whether it is in read-only state. In read-only state, rating cannot be modified | _boolean_ | `false` |
| disabled | Whether to disable rating | _boolean_ | `false` |
| touchable | Whether rating can be selected through swipe gesture | _boolean_ | `true` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Event triggered when current score changes | Current score |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-rate-icon-size | _20px_ | - |
| --rc-rate-icon-gutter | _var(--rc-padding-base)_ | - |
| --rc-rate-icon-void-color | _var(--rc-gray-5)_ | - |
| --rc-rate-icon-full-color | _var(--rc-danger-color)_ | - |
| --rc-rate-icon-disabled-color | _var(--rc-gray-5)_ | - |

