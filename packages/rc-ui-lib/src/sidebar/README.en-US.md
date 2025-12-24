# Sidebar

### Introduction

Vertically displayed navigation bar for switching between different content areas.

### Import

```js
import { Sidebar } from 'rc-ui-lib';
```

### Basic Usage

Bind the index of the currently selected item through `value`.

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="Label" />
      <Sidebar.Item title="Label" />
      <Sidebar.Item title="Label" />
    </Sidebar>
  );
};
```

### Disable Option

Disable an option through the `disabled` property.

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="Label" />
      <Sidebar.Item title="Label" disabled />
      <Sidebar.Item title="Label" />
    </Sidebar>
  );
};
```

### Badge

After setting the `dot` property, a small red dot will be displayed in the top-right corner. After setting the `badge` property, the corresponding badge will be displayed in the top-right corner.

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item dot title="Label" />
      <Sidebar.Item badge="5" title="Label" />
      <Sidebar.Item badge="20" title="Label" />
    </Sidebar>
  );
};
```

### Listen to Switch Event

Set the `change` method to listen to events when switching navigation items.

```js
import React, { useState } from 'react';
import { Sidebar, Toast } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);

  const onChange = (value: number) => {
    Toast(`Clicked label ${value + 1}`);
    setActive(value);
  };
  return (
    <Sidebar value={active} onChange={onChange}>
      <Sidebar.Item title="Label" />
      <Sidebar.Item title="Label" />
      <Sidebar.Item title="Label" />
    </Sidebar>
  );
};
```

## API

### Sidebar Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Index of current navigation item | _number \| string_ | `0` |

### Sidebar Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when switching navigation item | _index: number_ |

### SidebarItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Content | _string_ | `''` |
| dot | Whether to show small red dot in top-right corner | _boolean_ | `false` |
| badge | Badge content in top-right corner of icon | _number \| string_ | - |
| disabled | Whether to disable this item | _boolean_ | `false` |

### SidebarItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking | _index: number_ |

### Type Definitions

The component exports the following type definitions:

```ts
import type { SidebarProps, SidebarItemProps } from 'vant';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-sidebar-width | _80px_ | - |
| --rc-sidebar-font-size | _var(--rc-font-size-md)_ | - |
| --rc-sidebar-line-height | _var(--rc-line-height-md)_ | - |
| --rc-sidebar-text-color | _var(--rc-text-color)_ | - |
| --rc-sidebar-disabled-text-color | _var(--rc-text-color-3)_ | - |
| --rc-sidebar-padding | _20px var(--rc-padding-sm)_ | - |
| --rc-sidebar-active-color | _var(--rc-active-color)_ | - |
| --rc-sidebar-background-color | _var(--rc-background-color)_ | - |
| --rc-sidebar-selected-font-weight | _var(--rc-font-weight-bold)_ | - |
| --rc-sidebar-selected-text-color | _var(--rc-text-color)_ | - |
| --rc-sidebar-selected-border-width | _4px_ | - |
| --rc-sidebar-selected-border-height | _16px_ | - |
| --rc-sidebar-selected-border-color | _var(--rc-danger-color)_ | - |
| --rc-sidebar-selected-background-color | _var(--rc-background-color-light)_ | - |

