# Image

### Introduction

Enhanced img tag that provides multiple image fill modes, supports image lazy loading, loading hints, and loading failure hints.

### Import

```js
import { Image } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Basic usage is consistent with the native `img` tag. You can set native properties such as `src`, `width`, `height`, `alt`, etc.

```jsx
<Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Fill Mode

You can set the image fill mode through the `fit` property. Optional values are shown in the table below.

```jsx
<Image width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Round Image

You can make the image round through the `round` property. Note that when the image width and height are not equal and `fit` is `contain` or `scale-down`, it will not be able to fill a complete circle.

```jsx
<Image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Loading Hint

The `Image` component provides a default loading hint and supports custom content through `loadingIcon`.

```jsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" loadingIcon={<Loading type="spinner" />} />
```

### Loading Failure Hint

The `Image` component provides a default loading failure hint and supports custom content through `errorIcon`.

```jsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" errorIcon={<div>Failed to load</div>} />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image link | _string_ | - |
| fit | Image fill mode | _string_ | `fill` |
| alt | Alternative text | _string_ | - |
| width | Width, default unit is `px` | _number \| string_ | - |
| height | Height, default unit is `px` | _number \| string_ | - |
| radius | Border radius, default unit is `px` | _number \| string_ | `0` |
| round | Whether to display as round | _boolean_ | `false` |
| showError | Whether to show image loading failure hint | _boolean_ | `true` |
| showLoading | Whether to show image loading hint | _boolean_ | `true` |
| errorIcon | Icon shown on failure | _string\|ReactNode_ | `photo-fail` |
| loadingIcon | Icon shown during loading | _string\|ReactNode_ | `photo` |
| iconSize | Size of loading icon and error icon | _number \| string_ | `32px` |
| iconPrefix | Icon class name prefix, same as the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |

### Image Fill Mode

| Name | Meaning |
| --- | --- |
| contain | Maintain aspect ratio and scale the image so that the long side of the image can be fully displayed |
| cover | Maintain aspect ratio and scale the image so that the short side of the image can be fully displayed, cropping the long side |
| fill | Stretch the image to fill the element |
| none | Keep the original size of the image |
| scale-down | Take the smaller one of `none` or `contain` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the image | _event: MouseEvent_ |
| onLoad | Triggered when image loading is complete | - |
| onError | Triggered when image loading fails | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { ImageFit } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-image-placeholder-text-color | _var(--rc-gray-6)_ | - |
| --rc-image-placeholder-font-size | _var(--rc-font-size-md)_ | - |
| --rc-image-placeholder-background-color | _var(--rc-background-color)_ | - |
| --rc-image-loading-icon-size | _32px_ | - |
| --rc-image-loading-icon-color | _var(--rc-gray-4)_ | - |
| --rc-image-error-icon-size | _32px_ | - |
| --rc-image-error-icon-color | _var(--rc-gray-4)_ | - |

## Common Issues

### How to reference local images?

When referencing local images through relative paths in .tsx, jsx files, you need to wrap the image link with `require()` to convert the image URL into a webpack module request, and process it with [file-loader](https://github.com/webpack-contrib/file-loader) or [url-loader](https://github.com/webpack-contrib/url-loader).

```jsx
// Wrong way
<Image src="./image.png" />

// Correct way
<Image src="require('./image.png')" />
```

