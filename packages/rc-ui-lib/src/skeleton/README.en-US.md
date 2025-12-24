# Skeleton

### Introduction

Used to display a set of placeholder graphics during content loading.

### Import

```js
import { Skeleton } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

Display title placeholder through the `title` property, and configure the number of placeholder paragraph lines through the `row` property.

```jsx
<Skeleton title />
```

### Show Avatar

Display avatar placeholder through the `avatar` property.

```jsx
<Skeleton avatar />
```

### Custom Height

Display avatar placeholder through the `rowHeight` property.

```jsx
<Skeleton rowHeight={10} />
```

### Display Child Components

Setting the `loading` property to `false` means the content has finished loading. At this time, the placeholder will be hidden and the child components of `Skeleton` will be displayed.

```jsx
import { useState } from 'react';
import { Flex, Typography, Switch, Skeleton } from 'rc-ui-lib';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Switch checked={loading} onChange={setLoading} size={24} />
      <Skeleton avatar loading={loading}>
        <Flex className="demo-preview">
          <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
          <div className="demo-content">
            <Typography.Title>About rc-ui-lib</Typography.Title>
            <Typography.Text type="secondary">
              rc-ui-lib is a lightweight and reliable mobile React component library that provides rich basic components and business components to help developers quickly build mobile applications.
            </Typography.Text>
          </div>
        </Flex>
      </Skeleton>
    </>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| row | Number of paragraph placeholder lines | _number \| string_ | `3` |
| rowWidth | Paragraph placeholder width, can pass array to set the width of each row | _number \| string \|<br/>(number \| string)[]_ | `100%` |
| rowHeight | Paragraph placeholder height, can pass array to set the height of each row | _number \| string \|<br/>(number \| string)[]_ | - |
| title | Whether to show title placeholder | _boolean_ | `false` |
| avatar | Whether to show avatar placeholder | _boolean_ | `false` |
| loading | Whether to show skeleton screen. When passing `false`, child component content will be displayed | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round | Whether to display title and paragraph in rounded corner style | _boolean_ | `false` |
| titleWidth | Title placeholder width | _number \| string_ | `40%` |
| avatarSize | Avatar placeholder size | _number \| string_ | `32px` |
| avatarShape | Avatar placeholder shape, optional value is `square` | _string_ | `round` |
| className | Class name | _string_ | - |
| style | Style | _React.CSSProperties_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-skeleton-row-height | _16px_ | - |
| --rc-skeleton-row-background-color | _var(--rc-active-color)_ | - |
| --rc-skeleton-row-margin-top | _var(--rc-padding-sm)_ | - |
| --rc-skeleton-title-width | _40%_ | - |
| --rc-skeleton-avatar-size | _32px_ | - |
| --rc-skeleton-avatar-background-color | _var(--rc-active-color)_ | - |
| --rc-skeleton-animation-duration | _1.2s_ | - |

