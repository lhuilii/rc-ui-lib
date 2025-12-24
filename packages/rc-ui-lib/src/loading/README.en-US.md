# Loading 

### Introduction

Loading icon used to indicate a loading transition state.

### Import

```js
import { Loading } from 'rc-ui-lib';
```

## Code Example

### Loading Type

You can set the type of loading icon through the `type` property. The default is `circular`, and optional values are `spinner` and `ball`.

```jsx
<Loading />

<Loading type="spinner" />

<Loading type="ball" />
```

### Custom Color

Set the color of the loading icon through the `color` property.

```jsx
<Loading color="#1989fa" />

<Loading type="spinner" color="#1989fa" />
```

### Custom Size

Set the size of the loading icon through the `size` property. The default unit is `px`.

```jsx
<Loading size="24" />

<Loading type="spinner" size="24px" />
```

### Loading Text

You can insert loading text to the right of the icon using the default slot.

```jsx
<Loading size="24px">Loading...</Loading>
```

### Vertical Layout

After setting the `vertical` property, the icon and text will be arranged vertically.

```jsx
<Loading size="24px" vertical>
  Loading...
</Loading>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color | _string_ | `#c9c9c9` |
| type | Type, optional value is `spinner` | _string_ | `circular` |
| size | Loading icon size, default unit is `px` | _number \| string_ | `30px` |
| textSize | Text size, default unit is `px` | _number \| string_ | `14px` |
| textColor | Text color | _string_ | `#c9c9c9` |
| vertical | Whether to arrange icon and text content vertically | _boolean_ | `false` |

### Type Definitions

The component exports the following type definitions:

```js
import type { LoadingType } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-loading-text-color | _var(--rc-gray-6)_ | - |
| --rc-loading-text-font-size | _var(--rc-font-size-md)_ | - |
| --rc-loading-spinner-color | _var(--rc-gray-5)_ | - |
| --rc-loading-spinner-size | _30px_ | - |
| --rc-loading-spinner-animation-duration | _0.8s_ | - |

