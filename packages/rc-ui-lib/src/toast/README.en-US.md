# Toast 

### Introduction

A semi-transparent black prompt pops up in the middle of the page, used for message notifications, loading hints, operation result hints, etc.

### Import

```js
import { Toast } from 'rc-ui-lib';
```

## Code Example

### Text Toast

```js
Toast('Message');
Toast.info({ message: 'Message' });
```

### Loading Toast

Use the `Toast.loading` method to display a loading toast. You can disable background clicks through the `forbidClick` property.

```js
Toast.loading({
  message: 'Loading...',
  forbidClick: true,
});
```

### Success/Fail Toast

Use the `Toast.success` method to display a success toast, and use the `Toast.fail` method to display a fail toast.

```js
Toast.success('Success message');
Toast.fail('Fail message');
```

### Dynamic Update Toast

When executing the Toast method, it returns the corresponding Toast instance. You can achieve the effect of dynamically updating the toast by modifying the `message` property on the instance.

```jsx
let remain = 4;
const updateConfig = Toast({
  message: `${remain + 1} seconds remaining`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
const timer = setInterval(() => {
  updateConfig({ message: `${remain--} seconds remaining` });
}, 1000);
```

### Custom Icon

You can customize the icon through the `icon` option, supporting passing in [icon name](#/en-US/icon), image link, or custom component. You can customize the loading icon type through the `loadingType` property.

```js
Toast({
  message: 'Custom icon',
  icon: 'like-o',
});

Toast({
  message: 'Custom component icon',
  icon: <CustomIcon />,
});

Toast({
  message: 'Custom image',
  icon: 'https://rancui.github.io/rc-ui-lib/rc-ui-lib.png',
});

Toast.loading({
  message: 'Loading...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### Custom Position

Toast is rendered in the center of the screen by default. You can control the display position of Toast through the `position` property.

```js
Toast({
  message: 'Display at top',
  position: 'top',
});

Toast({
  message: 'Display at bottom',
  position: 'bottom',
});
```

### Dynamic Update Toast

When executing the Toast method, it returns the corresponding Toast instance. You can achieve the effect of dynamically updating the toast by modifying the `message` property on the instance.

```js
let remain = 4;
let timer;
const toast = Toast.info({
  message: `${remain + 1} seconds remaining`,
  duration: 5000,
  onClose: () => clearInterval(timer),
});
timer = setInterval(() => {
  toast.config({ message: `${remain--} seconds remaining` });
}, 1000);
```

### Singleton Mode

Toast uses singleton mode by default, meaning only one Toast exists at a time. If you need to pop up multiple Toasts at the same time, you can refer to the following example:

```js
Toast.allowMultiple();

const toast1 = Toast.info('First Toast');
const toast2 = Toast.success('Second Toast');

toast1.clear();
toast2.clear();
```

### Modify Default Options

You can globally modify the default options of Toast through the `Toast.setDefaultOptions` function.

```js
Toast.setDefaultOptions({ duration: 2000 });

Toast.setDefaultOptions('loading', { forbidClick: true });

Toast.resetDefaultOptions();

Toast.resetDefaultOptions('loading');
```

## API

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| Toast | Show toast | `options \| message` | toast instance |
| Toast.info | Show text toast | `options \| message` | toast instance |
| Toast.loading | Show loading toast | `options \| message` | toast instance |
| Toast.success | Show success toast | `options \| message` | toast instance |
| Toast.fail | Show fail toast | `options \| message` | toast instance |
| Toast.clear | Close toast | `clearAll: boolean` | `void` |
| Toast.allowMultiple | Allow multiple Toasts to exist at the same time | - | `void` |
| Toast.setDefaultOptions | Modify default options, effective for all Toasts.<br/>Pass in type to modify the default options of the specified type | `type \| options` | `void` |
| Toast.resetDefaultOptions | Reset default options, effective for all Toasts.<br/>Pass in type to reset the default options of the specified type | `type` | `void` |

### Options

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Toast type, optional values are `loading` `success` `fail` `info` | _string_ | `info` |
| position | Position, optional values are `top` `bottom` | _string_ | `middle` |
| message | Text content, supports line breaks through `\n` | _string_ | - |
| icon | Custom icon | _string\|ReactNode_ | - |
| iconSize | Icon size, such as `20px` `2em`, default unit is `px` | _number \| string_ | `36px` |
| iconPrefix | Icon class name prefix, equivalent to the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| forbidClick | Whether to disable background clicks | _boolean_ | `false` |
| closeOnClick | Whether to close after clicking | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close after clicking the overlay | _boolean_ | `false` |
| loadingType | [Loading icon type](#/en-US/loading), optional value is `spinner` | _string_ | `circular` |
| duration | Display duration (ms), when the value is 0, the toast will not disappear | _number_ | `2000` |
| className | Custom class name | _string_ | - |
| overlay | Whether to show background overlay | _boolean_ | `false` |
| overlayClass | Custom overlay class name | _string_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| onOpened | Callback function after fully displayed | _Function_ | - |
| onClose | Callback function when closing | _Function_ | - |
| transition | Animation class name | _string_ | `rc-fade` |
| teleport | Specify the mounted node | _HTMLElement_ _(() => HTMLElement))_ | `document.body` |

### Type Definitions

The component exports the following type definitions:

```js
import type { ToastType, ToastOptions, ToastPosition } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-toast-max-width | _70%_ | - |
| --rc-toast-font-size | _var(--rc-font-size-md)_ | - |
| --rc-toast-text-color | _var(--rc-white)_ | - |
| --rc-toast-loading-icon-color | _var(--rc-white)_ | - |
| --rc-toast-line-height | _var(--rc-line-height-md)_ | - |
| --rc-toast-border-radius | _var(--rc-border-radius-lg)_ | - |
| --rc-toast-background-color | _fade(var(--rc-black), 70%)_ | - |
| --rc-toast-icon-size | _36px_ | - |
| --rc-toast-text-min-width | _96px_ | - |
| --rc-toast-text-padding | _var(--rc-padding-xs) var(--rc-padding-sm)_ | - |
| --rc-toast-default-padding | _var(--rc-padding-md)_ | - |
| --rc-toast-default-width | _88px_ | - |
| --rc-toast-default-min-height | _88px_ | - |
| --rc-toast-position-top-distance | _20%_ | - |
| --rc-toast-position-bottom-distance | _20%_ | - |

