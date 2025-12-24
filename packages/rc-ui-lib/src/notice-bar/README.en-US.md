# NoticeBar

### Introduction

Used to loop through and display a set of message notifications.

### Import

```js
import { NoticeBar } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the content of the notice bar through the `text` property, and set the icon on the left side of the notice bar through the `leftRcon` property.

```jsx
<NoticeBar leftIcon="speaker-s" text="The frequency with which people swear while reading code is the only measure of code quality." />
```

### Scrolling Playback

When the content length of the notice bar overflows, scrolling playback will automatically start. You can control this behavior through the `scrollable` property.

```jsx
<NoticeBar scrollable text="The frequency with which people swear while reading code is the only measure of code quality." />
```

### Multi-line Display

When the text is long, you can enable multi-line display by setting the `wrapable` property.

```jsx
<NoticeBar wrapable text="The frequency with which people swear while reading code is the only measure of code quality." />
```

### Notice Bar Mode

The notice bar supports two modes: `closeable` and `link`.

```jsx
<!-- closeable mode, display close button on the right -->
<NoticeBar mode="closeable">Technology is the common soul of the people who develop it.</NoticeBar>

<!-- link mode, display link arrow on the right -->
<NoticeBar mode="link">Technology is the common soul of the people who develop it.</NoticeBar>
```

### Custom Style

Set the text color through the `color` property and set the background color through the `background` property.

```jsx
<NoticeBar color="#1989fa" background="#ecf9ff" leftIcon="info">
  Technology is the common soul of the people who develop it.
</NoticeBar>
```

### Vertical Scrolling

Combining NoticeBar and Swipe components can achieve vertical scrolling effects.

```jsx
<NoticeBar leftIcon="info">
  <Swipe autoplay={3000} vertical className="notice-swipe">
    <Swipe.Item>Content 1</Swipe.Item>
    <Swipe.Item>Content 2</Swipe.Item>
    <Swipe.Item>Content 3</Swipe.Item>
  </Swipe>
</NoticeBar>
```

```css
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Notice bar mode, optional values are `closeable` `link` | _string_ | `''` |
| text | Notice text content | _ReactNode_ | `''` |
| color | Notice text color | _string_ | `#f60` |
| background | Scroll bar background | _string_ | `#fff7cc` |
| leftIcon | Left icon | _string\|ReactNode_ | - |
| rightIcon | Custom right icon | _string\|ReactNode_ | - |
| delay | Animation delay time (s) | _number \| string_ | `1` |
| speed | Scrolling speed (px/s) | _number \| string_ | `60` |
| scrollable | Whether to enable scrolling playback, enabled by default when content length overflows | _boolean_ | - |
| wrapable | Whether to enable text wrapping, only effective when scrolling is disabled | _boolean_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking the notice bar | _event: Event_ |
| onClose | Triggered when closing the notice bar | _event: Event_ |
| onReplay | Triggered every time the scroll bar starts scrolling again | - |

### Methods

You can get the Field instance through ref and call instance methods.

```ts
const noticeBarRef = useRef<NoticeBarInstance>(null);
```

```jsx
<NoticeBar ref={noticeBarRef} scrollable text="The frequency with which people swear while reading code is the only measure of code quality." />

<input
  type="button"
  value="click"
  onClick={() => {
    noticeBarRef.current?.reset()
  }}
/>
```

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| reset | Reset scrolling | - | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-notice-bar-height | _40px_ | - |
| --rc-notice-bar-padding | _0 var(--rc-padding-md)_ | - |
| --rc-notice-bar-wrapable-padding | _var(--rc-padding-xs) var(--rc-padding-md)_ | - |
| --rc-notice-bar-text-color | _var(--rc-orange-dark)_ | - |
| --rc-notice-bar-font-size | _var(--rc-font-size-md)_ | - |
| --rc-notice-bar-line-height | _24px_ | - |
| --rc-notice-bar-background-color | _var(--rc-orange-light)_ | - |
| --rc-notice-bar-icon-size | _16px_ | - |
| --rc-notice-bar-icon-min-width | _24px_ | - |

