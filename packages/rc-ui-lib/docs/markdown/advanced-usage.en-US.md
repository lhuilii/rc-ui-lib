# Advanced Usage (@todo)

### Introduction

This section covers advanced usage, such as various browser adaptation methods.

### Component Instance Methods

Many components in rc-ui-lib provide instance methods. To call instance methods, we need to reference the component instance through [useRef](https://beta.reactjs.org/apis/react/useRef). We can access the corresponding component instance through `ref.current` and call the instance methods on it.

```jsx
import { useRef } from 'react';
import { Checkbox } from 'rc-ui-lib';

export default () => {
  const checkbox = useRef(null);
  return (
    <Checkbox checked={checked} ref={checkbox}>
      Checkbox
    </Checkbox>
  );
};
```

## Browser Adaptation

rc-ui-lib uses `px` as the style unit by default. If you need to use `viewport` units (vw, vh, vmin, vmax), it is recommended to use [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) for conversion.

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) is a PostCSS plugin used to convert px units to vw/vh units.

#### PostCSS Example Configuration

Below is a basic PostCSS example configuration that can be modified according to project requirements.

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

> Tips: When configuring postcss-loader, you should avoid ignoring the node_modules directory, otherwise rc-ui-lib styles will not be compiled.

### Touch Event Simulation

This is a mobile-oriented component library, so it only adapts to mobile devices by default. This means components only listen to mobile `touch` events and do not listen to desktop `mouse` events.

If you need to use it on desktop, you can import the [@vant/touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator) we provide. This library will automatically convert `mouse` events to corresponding `touch` events on desktop, allowing components to be used on desktop.

```bash
# Install module
npm i vant/touch-emulator -S
```

```js
// Automatically takes effect after importing the module
import '@vant/touch-emulator';
```

### Bottom Safe Area Adaptation

iPhone X and other models have a bottom indicator bar at the bottom. The operation area of the indicator bar overlaps with the bottom of the page, which can easily cause user misoperation. Therefore, we need to adapt to the safe area for these models. Some components provide `safeAreaInsetTop` or `safeAreaInsetBottom` properties. After setting these properties, you can enable adaptation on the corresponding models, as shown in the following example:

```jsx
<!-- Add meta tag in head tag and set viewport-fit=cover value -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

<!-- Enable top safe area adaptation -->
<Navbar safeAreaInsetTop />

<!-- Enable bottom safe area adaptation -->
<NumberKeyboard safeAreaInsetBottom />
```

<img src="https://img.yzcdn.cn/vant/safearea.png" />

