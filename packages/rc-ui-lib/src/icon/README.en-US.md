# Icon

### Introduction

Font-based icon set that can be used through the `Icon` component, or referenced in other components through the `icon` property.

### Import

```js
import { Icon } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The `name` property of `Icon` supports passing in icon names or image links. All available icon names are shown in the example on the right.

```jsx
<Icon name="chat-o" />
<Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Badge

The `badge` property of `Icon` is used to set badge content.

```jsx
<Icon name="chat-o" badge={{ dot: true }} />
<Icon name="chat-o" badge={{ content: "99+" }} />
```

### Icon Color

The `color` property of `Icon` is used to set the icon color.

```jsx
<Icon name="cart-o" color="#1989fa" />
<Icon name="fire-o" color="#ee0a24" />
```

### Icon Size

The `size` property of `Icon` is used to set the icon size. The default unit is `px`.

```jsx
<Icon name="chat-o" size="40" />
<Icon name="chat-o" size="3rem" />
```

### Custom Icon

#### Method 1

If you need to use more icons based on the existing `Icon`, you can import the font file and `CSS` file corresponding to a third-party `iconfont`, and then you can use it directly in the `Icon` component

```css
/* Import third-party or custom font icon styles */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```jsx
<!-- Specify class name as my-icon through classPrefix -->
<Icon classPrefix="my-icon" name="extra"/>
```

#### Method 2

Import the js file from [iconfont.cn](https://www.iconfont.cn) through the method `createFromIconfontCN`

```jsx
const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/xxx.js');
<!-- classPrefix property is invalid, do not specify it -->
<IconFont name="cuIcon-thank"/>

```

## API

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| Icon.createFromIconfontCN | Create third-party Icon | `scriptUrl: string` | _Icon component_ |

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name or image link | _string_ | - |
| badge | Badge in the top-right corner of the icon | [_BadgeProps_](#/en-US/badge) | - |
| color | Icon color | _string_ | `inherit` |
| size | Icon size, such as `20px` `2em`, default unit is `px` | _number \| string_ | `inherit` |
| classPrefix | Class name prefix, used for custom icons | _string_ | `van-icon` |
| tag | HTML tag | _string_ | `i` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the icon | _event: Event_ |

