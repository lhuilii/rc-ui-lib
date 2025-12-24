# ShareSheet

### Introduction

Share sheet that pops up from the bottom, used to display operation buttons corresponding to each sharing channel, without specific sharing logic.

### Import

```js
import { ShareSheet } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The share sheet defines share options through the `options` property. Each item in the array is an object. The object format is shown in the table below.

```jsx
import { useState } from 'react';
import { Cell, ShareSheet } from 'rc-ui-lib';
const options = [
  { name: 'WeChat', icon: 'wechat' },
  { name: 'Weibo', icon: 'weibo' },
  { name: 'Copy Link', icon: 'link' },
  { name: 'Share Poster', icon: 'poster' },
  { name: 'QR Code', icon: 'qrcode' },
];

export default () => {
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  return (
    <>
      <Cell isLink title="Show Share Sheet" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="Share with friends now"
        onCancel={close}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close();
        }}
      />
    </>
  );
};
```

### Show Multiple Rows of Options

When there are many share options, you can define `options` in a nested array format. Each sub-array will be displayed as a row of options.

```js
const options = [
  [
    { name: 'WeChat', icon: 'wechat' },
    { name: 'Moments', icon: 'wechat-moments' },
    { name: 'Weibo', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: 'Copy Link', icon: 'link' },
    { name: 'Share Poster', icon: 'poster' },
    { name: 'QR Code', icon: 'qrcode' },
    { name: 'Mini Program Code', icon: 'weapp-qrcode' },
  ],
];
```

### Custom Icon

In addition to using the built-in icons, you can directly pass an image URL in `icon` to use a custom icon.

```js
const options = [
  {
    name: 'Name',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: 'Name',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: 'Name',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];
```

### Show Description

You can set the description text below the title through the `description` property. Setting the `description` property in `options` can add share option descriptions.

```js
const options = [
  { name: 'WeChat', icon: 'wechat' },
  { name: 'Weibo', icon: 'weibo' },
  { name: 'Copy Link', icon: 'link', description: 'Description' },
  { name: 'Share Poster', icon: 'poster' },
  { name: 'QR Code', icon: 'qrcode' },
];

<ShareSheet title="Share with friends now" description="Description" options={options} />;
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show share sheet | _boolean_ | `false` |
| options | Share options | _Option[]_ | `[]` |
| title | Top title | _ReactNode_ | - |
| cancelText | Cancel button text. Pass empty string to hide the button | _ReactNode_ | `'Cancel'` |
| description | Auxiliary description text below the title | _ReactNode_ | - |
| duration | Animation duration, unit is seconds. Set to 0 to disable animation | _number \| string_ | `0.3` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class name | _string_ | - |
| overlayStyle | Custom overlay style | _CSSProperties_ | - |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close after clicking overlay | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable [bottom safe area inset](#/en-US/advanced-usage#bottom-safe-area-inset) | _boolean_ | `true` |

### Option Data Structure

The `options` property is an array of objects. Each object in the array configures one column. Objects can contain the following values:

| Key | Description | Type |
| --- | --- | --- |
| name | Share channel name | _string_ |
| description | Share option description | _string_ |
| icon | Icon, optional values are `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`, supports passing image URL | _string_ |
| className | Share option class name | _string_ |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onSelect | Triggered when clicking a share option | _option: Option, index: number_ |
| onCancel | Triggered when clicking cancel button | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-share-sheet-header-padding | _var(--rc-padding-sm) var(--rc-padding-md) var(--rc-padding-base)_ | - |
| --rc-share-sheet-title-color | _var(--rc-text-color)_ | - |
| --rc-share-sheet-title-font-size | _var(--rc-font-size-md)_ | - |
| --rc-share-sheet-title-line-height | _var(--rc-line-height-md)_ | - |
| --rc-share-sheet-description-color | _var(--rc-gray-6)_ | - |
| --rc-share-sheet-description-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-description-line-height | _16px_ | - |
| --rc-share-sheet-icon-size | _48px_ | - |
| --rc-share-sheet-option-name-color | _var(--rc-gray-7)_ | - |
| --rc-share-sheet-option-name-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-option-description-color | _var(--rc-gray-5)_ | - |
| --rc-share-sheet-option-description-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-share-sheet-cancel-button-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-share-sheet-cancel-button-height | _48px_ | - |
| --rc-share-sheet-cancel-button-background | _var(--rc-white)_ | - |

## Common Issues

### How to implement sharing logic?

In different Apps or browsers, there are various sharing interfaces or sharing methods. Therefore, the ShareSheet component does not provide specific sharing logic, and developers need to implement it according to business scenarios.

#### Share in WeChat

Since WeChat does not provide APIs related to sharing, users need to be guided to click the top-right corner to share.

#### Share in App

You can call the native App SDK for sharing through JSBridge.

#### Share Poster or QR Code

You can display the image in the form of a popup layer through the [Popup](#/en-US/popup) component, and then guide users to save the image for sharing.

