# SwipeCell

### Introduction

A cell component that can be swiped left and right to reveal action buttons.

### Import

```js
import { SwipeCell } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The `SwipeCell` component provides `left` and `right` props to define the content of the sliding areas on both sides.

```js
import { SwipeCell, Button, Cell } from 'rc-ui-lib';

export default () => {
  return (
    <SwipeCell
      left={<Button square type="primary" text="Select" />}
      right={
        <>
          <Button square type="danger" text="Delete" />
          <Button square type="primary" text="Favorite" />
        </>
      }
    >
      <Cell title="Cell" value="Content" />
    </SwipeCell>
  );
};
```

### Basic Usage

You can disable swiping by passing the `disabled` property.

```js
import { SwipeCell, Button, Cell } from 'rc-ui-lib';

export default () => {
  return (
    <SwipeCell
      disabled
      left={<Button square type="primary" text="Select" />}
      right={
        <>
          <Button square type="danger" text="Delete" />
          <Button square type="primary" text="Favorite" />
        </>
      }
    >
      <Cell title="Cell" value="Content" />
    </SwipeCell>
  );
};
```

### Async Close

By passing a `beforeClose` callback function, you can customize the behavior when closing the sliding content on both sides.

```js
import { SwipeCell, Dialog, Button, Cell } from 'rc-ui-lib';

export default () => {
  const beforeClose = ({ position, instance }) => {
    switch (position) {
      case 'right':
        Dialog.confirm({
          title: 'confirm',
        }).then(() => {
          instance.close();
        });
        break;
      case 'left':
      case 'cell':
      case 'outside':
        instance.close();
        break;
      default:
        break;
    }
  };

  return (
    <SwipeCell
      beforeClose={beforeClose}
      left={<Button square type="primary" text="Select" />}
      right={
        <>
          <Button square type="danger" text="Delete" />
          <Button square type="primary" text="Favorite" />
        </>
      }
    >
      <Cell title="Cell" value="Content" />
    </SwipeCell>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier, can be obtained in event parameters | _number \| string_ | `''` |
| leftWidth | Specify the width of the left sliding area, unit is `px` | _number \| string_ | `auto` |
| rightWidth | Specify the width of the right sliding area, unit is `px` | _number \| string_ | `auto` |
| beforeClose | Callback function before closing, return `false` to prevent closing, supports returning Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | Whether to disable swiping | _boolean_ | `false` |
| left | Custom left action bar content | ReactNode | - |
| right | Custom right action bar content | ReactNode | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onClick | Triggered when clicking | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| onOpen | Triggered when opening | _{ name: string \| number, position: 'left' \| 'right' }_ |
| onClose | Triggered when closing | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose Parameters

The first parameter of beforeClose is an object containing the following properties:

| Parameter Name | Description | Type |
| --- | --- | --- |
| name | Identifier | _string \| number_ |
| position | Click position when closing | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### Methods

You can get the SwipeCell instance through ref and call instance methods. For details, see [Component Instance Methods](#/en-US/advanced-usage#zu-jian-shi-li-fang-fa).

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| open | Open the cell sidebar | position: `left \| right` | - |
| close | Close the cell sidebar | - | - |

### Type Definitions

The component exports the following type definitions:

```ts
import type {
  SwipeCellSide,
  SwipeCellProps,
  SwipeCellPosition,
  SwipeCellInstance,
} from 'rc-ui-lib';
```

`SwipeCellInstance` is the type of the component instance. Usage is as follows:

```ts
import { Ref } from 'React';
import type { SwipeCellInstance } from 'rc-ui-lib';

const swipeCellRef = Ref<SwipeCellInstance>();

swipeCellRef.current?.close();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-switch-cell-padding-top | _var(--rc-cell-vertical-padding) - 1px_ | - |
| --rc-switch-cell-padding-bottom | _var(--rc-cell-vertical-padding) - 1px_ | - |
| --rc-switch-cell-large-padding-top | _var(--rc-cell-large-vertical-padding) - 1px_ | - |
| --rc-switch-cell-large-padding-bottom | _var(--rc-cell-large-vertical-padding) - 1px_ | - |

