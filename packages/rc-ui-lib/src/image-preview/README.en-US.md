# ImagePreview

### Introduction

Image preview, supporting both function call and component call methods.

### Function Call

`ImagePreview.open` is a function. After calling the function, the image preview interface will be displayed directly on the page.

```js
import { ImagePreview } from 'rc-ui-lib';

ImagePreview.open({ images: ['https://img.yzcdn.cn/vant/apple-1.jpg'] });
```

### Component Call

When calling `ImagePreview` through a component, you can register it in the following way.

```jsx
import { ImagePreview, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Component Call</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## Code Example

### Basic Usage

Directly pass in an array of images to display the image preview.

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});
```

### Specify Initial Position

`ImagePreview` supports passing in a configuration object and specifying the initial position (index value) of the image through the `startPosition` option.

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  startPosition: 1,
});
```

### Show Close Button

After setting the `closeable` property, a close icon will be displayed in the top-right corner of the popup layer, and you can customize the icon through the `closeIcon` property. You can customize the icon position using the `closeIconPosition` property.

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  closeable: true,
});
```

### Listen to Close Event

Listen to the close event of the image preview through the `onClose` option.

```js
import { Toast } from 'rc-ui-lib';

ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  onClose() {
    Toast('Closed');
  },
});
```

### Async Close

`ImagePreview.open` returns the destroy method of the instance.

```js
const destory = ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});

setTimeout(() => {
  // Call the instance's destroy method to manually close the image preview
  destory();
}, 2000);
```

### Component Call

If you need to embed components or other custom content in the image preview, you can use the component call method.

```jsx
import { ImagePreview, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Component Call</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## API

### Options

When calling `ImagePreview.open` via function, the following options are supported:

| Parameter Name | Description | Type | Default |
| --- | --- | --- | --- |
| images | Array of image URLs to preview | _string[]_ | `[]` |
| startPosition | Starting position index of image preview | _number \| string_ | `0` |
| swipeDuration | Animation duration, unit is `ms` | _number \| string_ | `300` |
| showIndex | Whether to show page number | _boolean_ | `true` |
| showIndicators | Whether to show carousel indicators | _boolean_ | `false` |
| loop | Whether to enable loop playback | _boolean_ | `true` |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `true` |
| className | Custom class name | _string \| Array \| object_ | - |
| closeable | Whether to show close icon | _boolean_ | `false` |
| closeIcon | Close icon name or image link | _string_ | `clear` |
| closeIconPosition | Close icon position, optional values are `top-left`<br/>`bottom-left` `bottom-right` | _string_ | `top-right` |
| overlayStyle | Custom overlay style | _object_ | - |
| onClose | Callback function when closing | _Function_ | - |
| onClosed | Callback when completely closed | _Function_ | - |
| onChange | Callback function when switching images, callback parameter is current index | _Function_ | - |
| beforeClose | Callback function before closing, returning `false` can prevent closing, supports returning Promise | _(active) => boolean \| Promise_ | - |
| teleport | Specify mount node | _HTMLElement \| () => HTMLElement_ | `body` |

### onClose Callback Parameters

| Parameter Name | Description | Type |
| --- | --- | --- |
| url | Current image URL | _string_ |
| index | Index value of current image | _number_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-image-preview-index-text-color | _var(--rc-white)_ | - |
| --rc-image-preview-index-font-size | _var(--rc-font-size-md)_ | - |
| --rc-image-preview-index-line-height | _var(--rc-line-height-md)_ | - |
| --rc-image-preview-index-text-shadow | _0 1px 1px var(--rc-gray-8)_ | - |
| --rc-image-preview-overlay-background-color | _rgba(0, 0, 0, 0.9)_ | - |
| --rc-image-preview-close-icon-size | _22px_ | - |
| --rc-image-preview-close-icon-color | _var(--rc-gray-5)_ | - |
| --rc-image-preview-close-icon-active-color | _var(--rc-gray-6)_ | - |
| --rc-image-preview-close-icon-margin | _var(--rc-padding-md)_ | - |
| --rc-image-preview-close-icon-z-index | _1_ | - |

