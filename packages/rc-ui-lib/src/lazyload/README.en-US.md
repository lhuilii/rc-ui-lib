# Lazyload

### Introduction

When a page needs to load a large amount of content, using lazy loading can delay loading content outside the visible area of the page, making page loading smoother.

### Import

```js
import { Lazyload } from 'rc-ui-lib';
```

## Code Example

### Image Lazy Load

Image lazy loading requires using the `Lazyload.Image` component. Place the images that need lazy loading in the `image` property to achieve image lazy loading.

```js
import React from 'react';
import { Lazyload } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload.Image key={image} image={image} />
      ))}
    </>
  );
};
```

### Background Image Lazy Load

Different from image lazy loading, background image lazy loading requires setting `type` to `background`. Note that the container height must be declared.

```js
import React from 'react';
import { Lazyload } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload.Image type="background" key={image} height="300px" image={image} />
      ))}
    </>
  );
};
```

### Component Lazy Load

Place the components that need lazy loading inside the `Lazyload` tag to achieve component lazy loading.

```js
import React from 'react';
import { Lazyload, Loading } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload key={image} loading={<Loading />}>
          <img alt="" src={image} width="100%" height="300" />
        </Lazyload>
      ))}
    </>
  );
};
```

## API

### LazyloadProps

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| children | Lazy load module | _React.ReactNode_ | - |
| loading | Component during loading | _React.ReactNode_ | - |
| height | Placeholder height | _string_\|_number_ | `0` |
| observer | Whether to use IntersectionObserver | _boolean_ | `true` |
| forceVisible | Whether to force display | _boolean_ | `false` |
| eventOptions | Event listener options | _EventOptions_ | - |
| observerOptions | ObserverOptions | _ObserverOptions_ | - |

### LazyloadImageProps

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image address | _string_ | - |
| loading | Image during loading | _string_ | - |
| errorImage | Image on error | _string_ | - |
| height | Image height | _string_\|_number_ | - |
| width | Image width | _string_\|_number_ | - |
| type | Load type | **'image'**\| **'background'** | `image` |
| observer | Whether to use IntersectionObserver | _boolean_ | `true` |
| eventOptions | Event listener options | _EventOptions_ | - |
| observerOptions | ObserverOptions | _ObserverOptions_ | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onLoaded | Callback when image loading is complete | - |

### ObserverOptions

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| root | Specify root element, used to check target visibility | _Element_ | - |
| rootMargin | Margin of root element | _string_ | - |
| threshold | When the intersection degree of target and root reaches this value, the callback function registered by IntersectionObserver will be executed | _number_\|_number[]_ | `0` |

### EventOptions

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| scrollContainer | Scroll container | _Element_ | `document.body` |
| offset | Offset | _number_ | `0` |
| listenEvents | Events to listen to | _string[]_ | `scroll` etc. |
| debounce | Use debounce and set wait time | _number_ | `300` |
| throttle | Use throttle and set wait time | _number_ | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { LazyloadProps, LazyloadImageProps } from 'rc-ui-lib';
```

