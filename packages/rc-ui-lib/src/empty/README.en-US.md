# Empty

### Introduction

Placeholder prompt for empty state.

### Import

```js
import { Empty } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

```jsx
<Empty description="Description" />
```

### Image Type

```jsx
<Empty image="error" description="Description" />
<Empty image="network" description="Description" />
<Empty image="search" description="Description" />
```

### Custom Image

When you need to customize the image, you can pass any image URL in the `image` property.

```jsx
<Empty
  className="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="Description"
/>

<style>
  .custom-image .rc-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
```

### Bottom Content

You can insert content below the Empty component through children.

```jsx
<Empty description="Description">
  <Button round type="primary" className="bottom-button">Button</Button>
</Empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, optional values are `error` `network` `search`, supports passing image URL | _string\|ReactNode_ | `default` |
| description | Description text below the image | _ReactNode_ | - |
| className | Define image or text style | _string_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-empty-padding | _var(--rc-padding-xl) 0_ | - |
| --rc-empty-image-size | _160px_ | - |
| --rc-empty-description-margin-top | _var(--rc-padding-md)_ | - |
| --rc-empty-description-padding | _0 60px_ | - |
| --rc-empty-description-color | _var(--rc-gray-6)_ | - |
| --rc-empty-description-font-size | _var(--rc-font-size-md)_ | - |
| --rc-empty-description-line-height | _var(--rc-line-height-md)_ | - |
| --rc-empty-bottom-margin-top | _24px_ | - |

