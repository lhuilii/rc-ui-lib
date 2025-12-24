# Tabbar

### Introduction

Bottom navigation bar, used to switch between different pages.

### Import

```js
import { Tabbar } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

`value` is bound to the index value of the selected tab by default. You can switch the selected tab by modifying `value`.

```jsx
import { useState } from 'react';
import { Tabbar } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Tabbar value={active} onChange={setActive}>
      <Tabbar.Item icon="home-o">Tab</Tabbar.Item>
      <Tabbar.Item icon="search">Tab</Tabbar.Item>
      <Tabbar.Item icon="friends-o">Tab</Tabbar.Item>
      <Tabbar.Item icon="setting-o">Tab</Tabbar.Item>
    </Tabbar>
  );
};
```

### Match by Name

When the `name` property is specified for tabs, the value of `value` is the `name` of the current tab.

```jsx
<Tabbar
  value={name}
  onChange={(v) => {
    setName(v as string);
  }}
>
  <Tabbar.Item name="home" icon="home-o">
    Tab
  </Tabbar.Item>
  <Tabbar.Item name="search" icon="search">
    Tab
  </Tabbar.Item>
  <Tabbar.Item name="firends" icon="friends-o">
    Tab
  </Tabbar.Item>
  <Tabbar.Item name="setting" icon="setting-o">
    Tab
  </Tabbar.Item>
</Tabbar>
```

### Badge

You can set the badge content for the icon through the `badge` property.

```jsx
<Tabbar>
  <Tabbar.Item icon="home-o">Tab</Tabbar.Item>
  <Tabbar.Item badge={{ dot: true }} icon="search">
    Tab
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 5 }} icon="friends-o">
    Tab
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 20 }} icon="setting-o">
    Tab
  </Tabbar.Item>
</Tabbar>
```

### Custom Icon

Customize the icon through the `icon` property.

```jsx
const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

<Tabbar>
  <Tabbar.Item icon={(ac) => <img alt="" src={ac ? icon.active : icon.inactive} />}>
    Tab
  </Tabbar.Item>
  <Tabbar.Item icon="friends-o">Tab</Tabbar.Item>
  <Tabbar.Item icon="setting-o">Tab</Tabbar.Item>
</Tabbar>;
```

### Custom Color

Set the color of the selected tab through the `activeColor` property, and set the color of the unselected tab through the `inactiveColor` property.

```jsx
<Tabbar activeColor="#f44336" inactiveColor="#000">
  <Tabbar.Item icon="home-o">Tab</Tabbar.Item>
  <Tabbar.Item icon="search">Tab</Tabbar.Item>
  <Tabbar.Item icon="friends-o">Tab</Tabbar.Item>
  <Tabbar.Item icon="setting-o">Tab</Tabbar.Item>
</Tabbar>
```

### Listen to Change Event

Listen to changes in the selected tab through the `onChange` event.

```jsx
<Tabbar onChange={(v) => Toast.info(`Tab ${+v + 1}`)}>
  <Tabbar.Item icon="home-o">Tab</Tabbar.Item>
  <Tabbar.Item icon="search">Tab</Tabbar.Item>
  <Tabbar.Item icon="friends-o">Tab</Tabbar.Item>
  <Tabbar.Item icon="setting-o">Tab</Tabbar.Item>
</Tabbar>
```

## API

### Tabbar Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Name or index value of currently selected tab | _number \| string_ | - |
| defaultValue | Default selected tab name or index value | _number \| string_ | `0` |
| fixed | Whether to fix at the bottom | _boolean_ | `true` |
| border | Whether to show outer border | _boolean_ | `true` |
| zIndex | Element z-index | _number \| string_ | `1` |
| activeColor | Color of selected tab | _string_ | `#3f45ff` |
| inactiveColor | Color of unselected tab | _string_ | `#7d7e80` |
| placeholder | When fixed at the bottom, whether to generate an equal-height placeholder element at the tab position | _boolean_ | `false` |
| safeAreaInsetBottom | Whether to enable [bottom safe area adaptation](#/en-US/advanced-usage#di-bu-an-quan-qu-gua-pei), enabled by default when fixed is set | _boolean_ | `false` |

### Tabbar Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when switching tabs | _active: number \| string_ |

### TabbarItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Tab name, used as matching identifier | _number \| string_ | Current tab index value |
| icon | Icon | _string \| (active: boolean) => React.ReactNode_ | - |
| iconPrefix | Icon class name prefix, equivalent to the [classPrefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| badge | Badge content at the top right of the icon | _BadgeProps_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-tabbar-height | _50px_ | - |
| --rc-tabbar-z-index | _1_ | - |
| --rc-tabbar-background-color | _var(--rc-white)_ | - |
| --rc-tabbar-item-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-tabbar-item-text-color | _var(--rc-gray-7)_ | - |
| --rc-tabbar-item-active-color | _var(--rc-primary-color)_ | - |
| --rc-tabbar-item-active-background-color | _var(--rc-white)_ | - |
| --rc-tabbar-item-line-height | _1_ | - |
| --rc-tabbar-item-icon-size | _22px_ | - |
| --rc-tabbar-item-icon-margin-bottom | _var(--rc-padding-base)_ | - |

