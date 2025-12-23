# Sidebar 側邊導航

### 介紹

垂直展示的導航欄，用於在不同的內容區域之間進行切換。

### 引入

```js
import { Sidebar } from 'rc-ui-lib';
```

### 基礎用法

通過 `value` 綁定當前選中項的索引。

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="標籤名" />
      <Sidebar.Item title="標籤名" />
      <Sidebar.Item title="標籤名" />
    </Sidebar>
  );
};
```

### 禁用選項

通過 `disabled` 屬性禁用選項。

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item title="標籤名" />
      <Sidebar.Item title="標籤名" disabled />
      <Sidebar.Item title="標籤名" />
    </Sidebar>
  );
};
```

### 徽標提示

設置 `dot` 屬性後，會在右上角展示一個小紅點；設置 `badge` 屬性後，會在右上角展示相應的徽標。

```js
import React, { useState } from 'react';
import { Sidebar } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar value={active} onChange={setActive}>
      <Sidebar.Item dot title="標籤名" />
      <Sidebar.Item badge="5" title="標籤名" />
      <Sidebar.Item badge="20" title="標籤名" />
    </Sidebar>
  );
};
```

### 監聽切換事件

設置 `change` 方法來監聽切換導航項時的事件。

```js
import React, { useState } from 'react';
import { Sidebar, Toast } from 'rc-ui-lib';
export default () => {
  const [active, setActive] = useState(0);

  const onChange = (value: number) => {
    Toast(`點擊了標籤${value + 1}`);
    setActive(value);
  };
  return (
    <Sidebar value={active} onChange={onChange}>
      <Sidebar.Item title="標籤名" />
      <Sidebar.Item title="標籤名" />
      <Sidebar.Item title="標籤名" />
    </Sidebar>
  );
};
```

## API

### Sidebar Props

| 參數  | 說明             | 類型               | 默認值 |
| ----- | ---------------- | ------------------ | ------ |
| value | 當前導航項的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名   | 說明             | 回調參數        |
| -------- | ---------------- | --------------- |
| onChange | 切換導航項時觸發 | _index: number_ |

### SidebarItem Props

| 參數     | 說明                 | 類型               | 默認值  |
| -------- | -------------------- | ------------------ | ------- |
| title    | 內容                 | _string_           | `''`    |
| dot      | 是否顯示右上角小紅點 | _boolean_          | `false` |
| badge    | 圖標右上角徽標的內容 | _number \| string_ | -       |
| disabled | 是否禁用該項         | _boolean_          | `false` |

### SidebarItem Events

| 事件名  | 說明       | 回調參數        |
| ------- | ---------- | --------------- |
| onClick | 點擊時觸發 | _index: number_ |

### 類型定義

元件導出以下類型定義：

```ts
import type { SidebarProps, SidebarItemProps } from 'vant';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                   | 默認值                             | 描述 |
| -------------------------------------- | ---------------------------------- | ---- |
| --rc-sidebar-width                     | _80px_                             | -    |
| --rc-sidebar-font-size                 | _var(--rc-font-size-md)_           | -    |
| --rc-sidebar-line-height               | _var(--rc-line-height-md)_         | -    |
| --rc-sidebar-text-color                | _var(--rc-text-color)_             | -    |
| --rc-sidebar-disabled-text-color       | _var(--rc-text-color-3)_           | -    |
| --rc-sidebar-padding                   | _20px var(--rc-padding-sm)_        | -    |
| --rc-sidebar-active-color              | _var(--rc-active-color)_           | -    |
| --rc-sidebar-background-color          | _var(--rc-background-color)_       | -    |
| --rc-sidebar-selected-font-weight      | _var(--rc-font-weight-bold)_       | -    |
| --rc-sidebar-selected-text-color       | _var(--rc-text-color)_             | -    |
| --rc-sidebar-selected-border-width     | _4px_                              | -    |
| --rc-sidebar-selected-border-height    | _16px_                             | -    |
| --rc-sidebar-selected-border-color     | _var(--rc-danger-color)_           | -    |
| --rc-sidebar-selected-background-color | _var(--rc-background-color-light)_ | -    |

