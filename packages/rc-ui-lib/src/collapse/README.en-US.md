# Collapse Panel

### Introduction

Place a group of content in multiple collapse panels. Clicking the panel title can expand or collapse its content.

### Import

```js
import { Collapse } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Control the expanded panel list through `initValue`, `initValue` is in array format.

```js
const initValue = ['1'];
```

```jsx
<Collapse initValue={initValue}>
  <Collapse.Item title="Title 1" name="1">
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 2" name="2">
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 3" name="3">
    Content
  </Collapse.Item>
</Collapse>
```

### Accordion

You can set it to accordion mode through `accordion`, with at most one panel expanded. In this case, `initValue` is in string format.

```jsx
<Collapse initValue="1" accordion>
  <Collapse.Item title="Title 1" name="1">
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 2" name="2">
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 3" name="3">
    Content
  </Collapse.Item>
</Collapse>
```

### Disabled State

Disable a single panel through the `disabled` property.

```jsx
<Collapse initValue="initValue">
  <Collapse.Item title="Title 1" name="1">
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 2" name="2" disabled>
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 3" name="3" disabled>
    Content
  </Collapse.Item>
</Collapse>
```

### Custom Title Content

You can customize the content of the title bar through the `title` slot.

```jsx
<Collapse initValue="initValue">
  <Collapse.Item
    name="1"
    title={
      <div>
        Title 1 <Icon name="question-o" />
      </div>
    }
  >
    Content
  </Collapse.Item>
  <Collapse.Item title="Title 2" name="2" icon="shop-o">
    Content
  </Collapse.Item>
</Collapse>
```

## API

### Collapse Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| initValue | Default opened panel name | Accordion mode: _number \| string_<br/>Non-accordion mode: _(number \| string)[]_ | - |
| value | Name of currently expanded panel | _number \| string_ \| _(number \| string)[]_ | - |
| accordion | Whether to enable accordion mode | _boolean_ | `false` |
| border | Whether to show outer border | _boolean_ | `true` |

### Collapse Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when switching panels | initValue: Type is consistent with the value bound to initValue |

### CollapseItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Unique identifier, default is index value | _number \| string_ | `index` |
| icon | Left icon of title bar | _string\|ReactNode_ | - |
| size | Title bar size, optional value is `large` | _string_ | - |
| title | Left content of title bar | _number \| string_ | - |
| value | Right content of title bar | _number \| string_ | - |
| label | Description information of title bar | _number \| string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| isLink | Whether to show right arrow of title bar and enable click feedback | _boolean_ | `true` |
| disabled | Whether to disable the panel | _boolean_ | `false` |
| titleClass | Additional class name for left title | _string_ | - |
| valueClass | Additional class name for right content | _string_ | - |
| labelClass | Additional class name for description | _string_ | - |

### CollapseItem Methods

You can get the CollapseItem instance and call instance methods through ref. For details, see [Component Instance Methods](#/en-US/advanced-usage#component-instance-methods).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| toggle | Toggle panel expansion state, pass `true` to expand, `false` to collapse, no parameter to toggle | _expand?: boolean_ | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { CollapseItemInstance } from 'rc-ui-lib';
```

`CollapseItemInstance` is the type of the component instance. Usage is as follows:

```js
import { useRef } from 'react';
import type { CollapseItemInstance } from 'rc-ui-lib';

const collapseItemRef = useRef<CollapseItemInstance>();

collapseItemRef.current?.toggle();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                                    | Default Value                                      | Description |
| --------------------------------------- | -------------------------------------------------- | ----------- |
| --rc-collapse-item-transition-duration  | _var(--rc-animation-duration-base)_               | -           |
| --rc-collapse-item-content-padding      | _var(--rc-padding-sm) var(--rc-padding-md)_       | -           |
| --rc-collapse-item-content-font-size    | _var(--rc-font-size-md)_                          | -           |
| --rc-collapse-item-content-line-height  | _1.5_                                              | -           |
| --rc-collapse-item-content-text-color   | _var(--rc-gray-6)_                                 | -           |
| --rc-collapse-item-content-background-color | _var(--rc-white)_                              | -           |
| --rc-collapse-item-title-disabled-color | _var(--rc-gray-5)_                                 | -           |

