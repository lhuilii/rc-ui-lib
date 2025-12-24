# NavBar

### Introduction

Provides navigation functionality for pages, commonly used at the top of pages.

### Import

```js
import { NavBar } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Set the navigation bar title through the `title` property.

```jsx
<NavBar title="Title" />
```

### Go Back

Implement go back functionality in the navigation bar.

```jsx
import { useNavigate } from 'react-router-dom';
export default (): React.ReactNode => {
  const navigate = useNavigate();
  const onClickLeft = () => navigate(-1);
  return <NavBar title="Title" leftArea="Back" leftArrow onClickLeft={onClickLeft} />;
};
```

### Right Button

Add a clickable button on the right side of the navigation bar.

```jsx
import { Toast } from 'rc-ui-lib';
import { useNavigate } from 'react-router-dom';
export default (): React.ReactNode => {
  const navigate = useNavigate();
  const onClickLeft = () => navigate(-1);
  const onClickRight = () => Toast('Button');
  return (
    <NavBar
      title="Title"
      leftArea="Back"
      rightArea="Button"
      left-arrow
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
    />
  );
};
```

### Custom Content

Customize the content on both sides of the navigation bar.

```jsx
import { Icon } from 'rc-ui-lib';
export default (): React.ReactNode => {
  return (
    <NavBar title="Title" leftArea="Back" rightArea={<Icon name="search" size="18" />} left-arrow />
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_\| _ReactNode_ | `''` |
| leftArea | Left area | _string_\| _ReactNode_ | `''` |
| rightArea | Right area | _string_\| _ReactNode_ | `''` |
| leftArrow | Whether to show left arrow | _boolean_ | `false` |
| border | Whether to show bottom border | _boolean_ | `true` |
| fixed | Whether to fix at the top | _boolean_ | `false` |
| placeholder | When fixed at the top, whether to generate an equal-height placeholder element at the tag position | _boolean_ | `false` |
| zIndex | Navigation bar z-index | _number \| string_ | `1` |
| safeAreaInsetTop | Whether to enable [top safe area adaptation](#/en-US/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClickLeft | Triggered when clicking the left button | _event: MouseEvent_ |
| onClickRight | Triggered when clicking the right button | _event: MouseEvent_ |

### Type Definitions

The component exports the following type definitions:

```ts
import type { NavBarProps } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-nav-bar-height | _46px_ | - |
| --rc-nav-bar-background-color | _var(--rc-background-color-light)_ | - |
| --rc-nav-bar-arrow-size | _16px_ | - |
| --rc-nav-bar-icon-color | _var(--rc-primary-color)_ | - |
| --rc-nav-bar-text-color | _var(--rc-primary-color)_ | - |
| --rc-nav-bar-title-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-nav-bar-title-text-color | _var(--rc-text-color)_ | - |
| --rc-nav-bar-z-index | _1_ | - |

