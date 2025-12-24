# TextEllipsis

### Introduction

Ellipsis for long text, supports expand/collapse. Please upgrade to >= 2.0.0 to use this component.

### Import

Register the component globally through the following method. For more registration methods, please refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce).

```js
import { TextEllipsis } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Display `1` line by default, show ellipsis when exceeding `1` line.

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一个轻量、可定制的移动端React组件库，于 2021 年开源。50+ 个高质量组件，覆盖移动端各类场景，单元测试覆盖率超过 95%，提供稳定性保障, 支持按需引入、主题定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} />
    </>
  );
};
```

### Expand/Collapse

Support expand/collapse when exceeding the number of lines.

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一个轻量、可定制的移动端React组件库，于 2021 年开源。50+ 个高质量组件，覆盖移动端各类场景，单元测试覆盖率超过 95%，提供稳定性保障, 支持按需引入、主题定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} expandText="Expand" collapseText="Collapse" />
    </>
  );
};
```

### Custom Display Rows

Limit the number of display rows by setting `rows`.

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一个轻量、可定制的移动端React组件库，于 2021 年开源。50+ 个高质量组件，覆盖移动端各类场景，单元测试覆盖率超过 95%，提供稳定性保障, 支持按需引入、主题定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} rows="3" expandText="Expand" collapseText="Collapse" />
    </>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| rows | Number of rows to display | _number \| string_ | `1` |
| content | Text to display | _string_ | - |
| expand-text | Text for expand action | _string_ | - |
| collapse-text | Text for collapse action | _string_ | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| click-action | Triggered when clicking expand/collapse | _event: MouseEvent_ |

### Type Definitions

The component exports the following type definitions:

```ts
import type { TextEllipsisProps } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-text-ellipsis-action-color | _var(--rc-blue)_ | Color of the action button |
| --rc-text-ellipsis-line-height | _1.6_ | Line height of the text |

