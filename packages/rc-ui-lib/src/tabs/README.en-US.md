# Tabs 

### Import

```js
import { Tabs } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Bind the index value corresponding to the currently active tab through `active`. By default, the first tab is enabled.

```jsx
<Tabs active="active">
  <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
  <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
  <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
  <Tabs.TabPane title="Tab 4">Content 4</Tabs.TabPane>
</Tabs>
```

### Match by Name

When the `name` property is specified for tabs, the value of `active` is the `name` of the current tab (at this time, tabs cannot be matched by index value).

```jsx
<Tabs active="b">
  <Tabs.TabPane title="Tab 1" name="a">
    Content 1
  </Tabs.TabPane>
  <Tabs.TabPane title="Tab 2" name="b">
    Content 2
  </Tabs.TabPane>
  <Tabs.TabPane title="Tab 3" name="c">
    Content 3
  </Tabs.TabPane>
</Tabs>
```

### Tab Bar Scrolling

When the number of tabs exceeds 5, the tab bar can scroll horizontally, and the current tab will be automatically centered when switching.

```jsx
<Tabs>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`Tab ${item}`}>
      Content {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

### Disable Tab

Set the `disabled` property to disable a tab. If you need to listen to the click event of a disabled tab, you can listen to the `disabled` event on `Tabs`.

```jsx
<Tabs>
  <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
  <Tabs.TabPane title="Tab 2" disabled>
    Content 2
  </Tabs.TabPane>
  <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
</Tabs>
```

### Style

`Tab` supports two style types: `line` and `card`. The default is `line` style. You can switch style types through the `type` property.

```jsx
<Tabs type="card">
  <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
  <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
  <Tabs.TabPane title="Tab 3">Content 3</Tabs.TabPane>
</Tabs>
```

### Click Event

You can bind the `onClick` event on `Tabs`. The event parameters are the identifier and title corresponding to the tab.

```jsx
<Tabs onClick={(name, title) => Toast(title)}>
  <Tabs.TabPane title="Tab 1">Content 1</Tabs.TabPane>
  <Tabs.TabPane title="Tab 2">Content 2</Tabs.TabPane>
</Tabs>
```

### Sticky Layout

You can enable sticky layout through the `sticky` property. In sticky layout, the tab will automatically stick to the top when scrolling to the top.

```jsx
<Tabs active={2} sticky>
  {[1, 2, 3, 4].map((item) => (
    <Tabs.TabPane key={item} title={`Tab ${item}`}>
      <div style={{ height: '50vh' }}>Content {item}</div>
    </Tabs.TabPane>
  ))}
</Tabs>
```

### Scroll Navigation

You can enable scroll navigation mode through the `scrollspy` and `sticky` properties. In this mode, the content will be displayed flat.

```jsx
<Tabs sticky scrollspy>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`Tab ${item}`}>
      Content {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

## API

### Tabs Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| active | Identifier of the currently selected tab | _number \| string_ | `0` |
| type | Style type, optional value is `card` | _string_ | `line` |
| color | Tab theme color | _string_ | `#ee0a24` |
| background | Tab bar background color | _string_ | `white` |
| duration | Animation duration, unit is seconds | _number \| string_ | `0.3` |
| lineWidth | Bottom bar width, default unit `px` | _number \| string_ | `40px` |
| lineHeight | Bottom bar height, default unit `px` | _number \| string_ | `3px` |
| animated | Whether to enable transition animation when switching tab content | _boolean_ | `false` |
| border | Whether to show the outer border of the tab bar, only effective when `type="line"` | _boolean_ | `false` |
| ellipsis | Whether to ellipsis overly long title text | _boolean_ | `true` |
| sticky | Whether to use sticky positioning layout | _boolean_ | `false` |
| swipeable | Whether to enable gesture swipe switching | _boolean_ | `false` |
| lazyRender | Whether to enable lazy rendering (content rendering is triggered only when switching to a tab for the first time) | _boolean_ | `true` |
| scrollspy | Whether to enable scroll navigation | _boolean\|ScrollspyConfig_ | `false` |
| offsetTop | Minimum distance from the top in sticky positioning layout, supports `px` `vw` `vh` `rem` units, default `px` | _number \| string_ | `0` |
| swipeThreshold | Scroll threshold, when the number of tabs exceeds the threshold and the total width exceeds the tab bar width, horizontal scrolling starts | _number \| string_ | `5` |
| titleActiveColor | Title active state color | _string_ | - |
| titleInactiveColor | Title default state color | _string_ | - |
| beforeChange | Callback function before switching tabs, return `false` to prevent switching, supports returning Promise | _(name) => boolean \| Promise_ | - |

### ScrollspyConfig

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| autoFocusLast | In scroll navigation mode, whether to set the last tab to Active state when the container scrolls to the bottom | _boolean_ | - |
| reachBottomThreshold | Bottom offset | _number_ | - |

### TabPane Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| renderTitle | Custom title | _ReactNode \|(active: boolean) => ReactNode_ | - |
| disabled | Whether to disable the tab | _boolean_ | `false` |
| dot | Whether to show a red dot at the top right of the title | _boolean_ | `false` |
| badge | Badge content at the top right of the icon | _number \| string_ | - |
| name | Tab name, used as matching identifier | _number \| string_ | Tab index value |
| titleStyle | Custom title style | _CSSProperties_ | - |
| titleSlass | Custom title class name | _string_ | - |
| showZeroBadge | When badge is the number 0, whether to show the badge | _boolean_ | `true` |

### Tabs Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClickTab | Triggered when clicking a tab | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| onChange | Triggered when the currently active tab changes | _name: string \| number, title: string_ |
| onScroll | Triggered when scrolling, only effective in sticky mode | _{ scrollTop: number, isFixed: boolean }_ |

> Tip: The click and disabled events have been deprecated, please use the click-tab event instead.

### Tabs Methods

You can get the Tabs instance through ref and call instance methods. For details, see [Component Instance Methods](#/en-US/advanced-usage#zu-jian-shi-li-fang-fa).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| resize | When the size of the outer element or the display state of the component changes, you can call this method to trigger a redraw | - | - |
| scrollTo | Scroll to the specified tab page, available in scroll navigation mode | _name: string \| number_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-tab-text-color | _var(--rc-gray-7)_ | - |
| --rc-tab-active-text-color | _var(--rc-text-color)_ | - |
| --rc-tab-disabled-text-color | _var(--rc-gray-5)_ | - |
| --rc-tab-font-size | _var(--rc-font-size-md)_ | - |
| --rc-tab-line-height | _var(--rc-line-height-md)_ | - |
| --rc-tabs-default-color | _var(--rc-danger-color)_ | - |
| --rc-tabs-line-height | _44px_ | - |
| --rc-tabs-card-height | _30px_ | - |
| --rc-tabs-nav-background-color | _var(--rc-white)_ | - |
| --rc-tabs-bottom-bar-width | _40px_ | - |
| --rc-tabs-bottom-bar-height | _3px_ | - |
| --rc-tabs-bottom-bar-color | _var(--rc-danger-color)_ | - |

