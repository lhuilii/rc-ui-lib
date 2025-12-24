# ConfigProvider

### Import

```js
import { ConfigProvider } from 'rc-ui-lib';
```

## Customize Theme

### Introduction

rc-ui-lib components organize styles through rich [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). By overriding these CSS variables, you can achieve effects such as **customizing themes** and **dynamically switching themes**.

#### Example

Taking the Button component as an example, viewing the component's styles, you can see the following variables on the `.rc-button--primary` class name:

```css
.rc-button--primary {
  color: var(--rc-button-primary-color);
  background-color: var(--rc-button-primary-background-color);
}
```

The default values of these variables are defined on the `root` node, and any node in the HTML document can access these variables:

```css
:root {
  --rc-white: #fff;
  --rc-blue: #3f45ff;
  --rc-button-primary-color: var(--rc-white);
  --rc-button-primary-background-color: var(--rc-primary-color);
}
```

### Custom CSS Variables

#### Override via CSS

You can directly override these CSS variables in your code, and the Button component's styles will change accordingly:

```css
/* After adding this style, Primary Button will become red */
:root {
  --rc-button-primary-background-color: red;
}
```

#### Customize Theme via ConfigProvider

The `ConfigProvider` component provides the ability to override CSS variables. You need to wrap a `ConfigProvider` component at the root node and configure some theme variables through the `themeVars` property.

```jsx
import { ConfigProvider, Field, Rate, Slider, Button } from 'rc-ui-lib';

// Values in themeVars will be converted to corresponding CSS variables
// For example, sliderBarHeight will be converted to `--rc-slider-bar-height`
const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default () => {
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);

  return (
    <ConfigProvider themeVars={themeVars}>
      <Field label="Rating">
        <Rate value={rate} onChange={updateRate} />
      </Field>
      <Field label="Slider">
        <Slider value={slider} onChange={updateSlider} />
      </Field>
      <div style={{ margin: 16 }}>
        <Button block round type="primary">
          Submit
        </Button>
      </div>
    </ConfigProvider>
  );
};
```

> Note: ConfigProvider only affects the styles of its child components, not the global root node.

### Replace Icon via ConfigProvider

The `ConfigProvider` component provides the ability to replace icons. You need to wrap a `ConfigProvider` component at the root node and modify the icon class name prefix through the `iconPrefix` property.

```css
/* Import third-party or custom font icon styles */
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1619071_dqiwns2g0d.ttf') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-style: normal;
}

.iconfont-1111::before {
  content: '\e782';
}
.iconfont-emojifill::before {
  content: '\e78d';
}
.iconfont-emojilight::before {
  content: '\e7a1';
}
```

```jsx
import { ConfigProvider, Field, Rate, Button } from 'rc-ui-lib';

export default () => {
  return (
    <ConfigProvider iconPrefix="iconfont">
      <Field label="Rating">
        <Rate icon="emojifill" voidIcon="emojilight" />
      </Field>
      <div style={{ margin: 16 }}>
        <Button icon="1111" block round type="primary">
          Submit
        </Button>
      </div>
    </ConfigProvider>
  );
};
```

### Base Variables

CSS variables in rc-ui-lib are divided into **base variables** and **component variables**. Component variables inherit from base variables, so modifying base variables will affect all related components.

#### Modify Variables

Due to the CSS variable inheritance mechanism, there are certain differences in the modification methods:

- Base variables can only be modified through the `root selector`, not through the `ConfigProvider component`.
- Component variables can be modified through the `root selector` and the `ConfigProvider component`.

#### Variable List

Below are all the base variables:

```less
// Color Palette
--rc-black: #000;
--rc-white: #fff;
--rc-gray-1: #f7f8fa;
--rc-gray-2: #f2f3f5;
--rc-gray-3: #ebedf0;
--rc-gray-4: #dcdee0;
--rc-gray-5: #c8c9cc;
--rc-gray-6: #969799;
--rc-gray-7: #646566;
--rc-gray-8: #323233;
--rc-red: #ee0a24;
--rc-blue: #3f45ff;
--rc-orange: #ff976a;
--rc-orange-dark: #ed6a0c;
--rc-orange-light: #fffbe8;
--rc-green: #07c160;

// Gradient Colors
--rc-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
--rc-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
--rc-primary-color: var(--rc-blue);
--rc-success-color: var(--rc-green);
--rc-danger-color: var(--rc-red);
--rc-warning-color: var(--rc-orange);
--rc-text-color: var(--rc-gray-8);
--rc-active-color: var(--rc-gray-2);
--rc-active-opacity: 0.7;
--rc-disabled-opacity: 0.5;
--rc-background-color: var(--rc-gray-1);
--rc-background-color-light: #fafafa;
--rc-text-link-color: #576b95;

// Padding
--rc-padding-base: 4px;
--rc-padding-xs: 8px;
--rc-padding-sm: 12px;
--rc-padding-md: 16px;
--rc-padding-lg: 24px;
--rc-padding-xl: 32px;

// Font
--rc-font-size-xs: 10px;
--rc-font-size-sm: 12px;
--rc-font-size-md: 14px;
--rc-font-size-lg: 16px;
--rc-font-weight-bold: 500;
--rc-line-height-xs: 14px;
--rc-line-height-sm: 18px;
--rc-line-height-md: 20px;
--rc-line-height-lg: 22px;
--rc-base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial,
  Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
--rc-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
--rc-animation-duration-base: 0.3s;
--rc-animation-duration-fast: 0.2s;
--rc-animation-timing-function-enter: ease-out;
--rc-animation-timing-function-leave: ease-in;

// Border
--rc-border-color: var(--rc-gray-3);
--rc-border-width-base: 1px;
--rc-border-radius-sm: 2px;
--rc-border-radius-md: 4px;
--rc-border-radius-lg: 8px;
--rc-border-radius-max: 999px;
```

You can view component variables in the table at the bottom of each component's documentation.

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| themeVars | Custom theme variables | _object_ | - |
| prefixCls | Set unified style prefix. Note: needs to be used with less variable [@rc-prefix]() | _string_ | `rc` |
| iconPrefix | Class name prefix for all icons, equivalent to the [classPrefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| tag | HTML node tag name corresponding to `ConfigProvider` | _string_ | `div` |

