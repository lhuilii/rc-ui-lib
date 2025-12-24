# WaterMark 

### Introduction

Add a watermark to a certain area of the page, supporting text and patterns. Please upgrade `rc-ui-lib` to >= 2.1.0 to use this component.

### Import

Suitable for preventing information theft and identifying copyright.

```js
import { Watermark } from 'rc-ui-lib';
```

## Code Example

### Text Watermark

Set the watermark text through the `content` property.

```jsx
<Watermark content="rc-ui-lib" />
```

### Image Watermark

Set the watermark image through the `image` property, and use `opacity` to adjust the overall transparency of the watermark.

```jsx
<Watermark
  image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png"
  width={180}
  height={90}
  opacity={0.2}
/>
```

### Custom Gap

Control the gap between multiple repeated watermarks through the `gapX` and `gapY` properties.

```jsx
<Watermark
  image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png"
  gapX={30}
  gapY={10}
  opacity={0.2}
/>
```

### Custom Rotation Angle

Control the rotation angle of the watermark through the `rotate` property. The default value is `-22`.

```jsx
<Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" rotate="22" opacity={0.2} />
```

### Display Range

Control the display range of the watermark through the `full-page` property.

```jsx
<Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" fullPage />
```

### HTML Watermark

You can directly pass HTML as a watermark through `children`. Styles in HTML only support inline styles, and self-closing tags are not supported.

```jsx
<Watermark width={150}>
  <div style={{ background: 'linear-gradient(45deg, #000 0, #000 50%, #fff 50%)' }}>
    <p style={{ mixBlendMode: 'difference', color: '#fff' }}>rc watermark</p>
  </div>
</Watermark>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| width | Watermark width | _number_ | `100` |
| height | Watermark height | _number_ | `100` |
| zIndex | z-index of watermark | _number \| string_ | `100` |
| content | Text watermark content | _string_ | - |
| image | Image watermark content. If passed together with `content`, image watermark takes priority | _string_ | - |
| rotate | Rotation angle of watermark | _number \| string_ | `-22` |
| fullPage | Whether the watermark is displayed in full screen | _boolean_ | `false` |
| gapX | Horizontal gap between watermarks | _number_ | `0` |
| gapY | Vertical gap between watermarks | _number_ | `0` |
| textColor | Color of text watermark | _string_ | `#dcdee0` |
| opacity | Transparency of watermark | _number_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-water-mark-z-index | _100_ | - |

