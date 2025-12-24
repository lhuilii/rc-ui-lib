# Progress 

### Introduction

Used to display the current progress of an operation.

### Import

```js
import { Progress } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The progress bar is blue by default. Use the `percentage` property to set the current progress.

```jsx
<Progress percentage={50} />
```

### Stroke Width

You can set the thickness of the progress bar through `strokeWidth`.

```jsx
<Progress percentage={50} stroke-width="8" />
```

### Inactive

After setting the `inactive` property, the progress bar will be grayed out.

```jsx
<Progress inactive percentage={50} />
```

### Style Customization

You can use the `pivotText` property to customize the text and the `color` property to customize the progress bar color.

```jsx
<Progress pivotText="Orange" color="#f2826a" percentage={25} />
<Progress pivotText="Red" color="#ee0a24" percentage={50} />
<Progress
  percentage="75"
  pivotText="Purple"
  pivotColor="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| percentage | Progress percentage | _number \| string_ | `0` |
| strokeWidth | Progress bar thickness, default unit is `px` | _number \| string_ | `4px` |
| color | Progress bar color | _string_ | `#1989fa` |
| trackColor | Track color | _string_ | `#e5e5e5` |
| pivotText | Progress text content | _string_ | Percentage |
| pivotColor | Progress text background color | _string_ | Same as progress bar color |
| textColor | Progress text color | _string_ | `white` |
| inactive | Whether to gray out | _boolean_ | `false` |
| showPivot | Whether to show progress text | _boolean_ | `true` |

### Type Definitions

The component exports the following type definitions:

```ts
import type { ProgressProps, ProgressInstance } from 'rc-ui-lib';
```

`ProgressInstance` is the type of the component instance. Usage is as follows:

```tsx
import { useRef } from 'react';
import type { ProgressInstance } from 'rc-ui-lib';

const progressRef = useRef<ProgressInstance>();

progressRef.value?.resize();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-progress-height | _4px_ | - |
| --rc-progress-color | _var(--rc-primary-color)_ | - |
| --rc-progress-inactive-color | _var(--rc-gray-5)_ | - |
| --rc-progress-background-color | _var(--rc-gray-3)_ | - |
| --rc-progress-pivot-padding | _0 5px_ | - |
| --rc-progress-pivot-text-color | _var(--rc-white)_ | - |
| --rc-progress-pivot-font-size | _var(--rc-font-size-xs)_ | - |
| --rc-progress-pivot-line-height | _1.6_ | - |
| --rc-progress-pivot-background-color | _var(--rc-primary-color)_ | - |

