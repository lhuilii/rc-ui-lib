# ActionSheet

### Introduction

A modal panel that pops up from the bottom, containing multiple options related to the current context.

### Import

```js
import { ActionSheet } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The action panel defines options through the `actions` property. The `actions` property is an array of objects, where each object in the array configures one column. The object format is shown in the table below.

```jsx
const actions = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={() => setVisible(false)} actions={actions} />
    </>
  );
};
```

### Show Cancel Button

After setting the `cancelText` property, a cancel button will be displayed at the bottom. Clicking it will close the current panel and trigger the `onCancel` event.

```jsx
const actions = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="Cancel"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### Show Description

You can display description information at the top of the menu through `description`, and display description information on the right side of the option text through the `subname` property of the option.

```jsx
const actions = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3', subname: 'Description' }];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        description="This is a description"
        cancelText="Cancel"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### Option Status

You can set options to loading state or disabled state through `loading` and `disabled`, or set the color of options through `color`

```jsx
const actions = [
  { name: 'Option 1', color: '#ee0a24' },
  { name: 'Option 2', disabled: true },
  { loading: true },
];

export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet
        cancelText="Cancel"
        visible={visible}
        onCancel={() => setVisible(false)}
        actions={actions}
      />
    </>
  );
};
```

### Custom Panel

You can customize the panel content through slots, and you can use the `title` property to display the title bar

```jsx
export default () => {
  return (
    <>
      <Cell isLink onClick={() => setVisible(true)} />
      <ActionSheet title="Custom Content" visible={visible} onCancel={() => setVisible(false)}>
        <div>Custom Content</div>
      </ActionSheet>
    </>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show the action panel | _boolean_ | `false` |
| actions | Panel option list | _Action[]_ | `[]` |
| title | Top title | _ReactNode_ | - |
| cancelText | Cancel button | _ReactNode_ | - |
| description | Description information above the options | _ReactNode_ | - |
| closeable | Whether to show close icon | _boolean_ | `true` |
| closeIcon | Close icon | _string\|ReactNode_ | `cross` |
| duration | Animation duration, in milliseconds | _number \| string_ | `300` |
| round | Whether to show rounded corners | _boolean_ | `true` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class name | _string \| Array \| object_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `false` |
| closeOnClickAction | Whether to close after clicking an option | _boolean_ | `false` |
| closeOnClickOverlay | Whether to close after clicking the overlay | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable [bottom safe area inset](#/en-US/advanced-usage#bottom-safe-area-inset) | _boolean_ | `true` |
| beforeClose | Callback function before closing, returning `false` can prevent closing, supports returning Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Action Data Structure

The `actions` property is an array of objects, where each object in the array configures one column. Objects can contain the following values:

| Key | Description | Type |
| --- | --- | --- |
| name | Title | _string_ |
| subname | Subtitle | _string_ |
| color | Option text color | _string_ |
| className | Add additional class for the corresponding column | _string_ |
| style | Add additional style for the corresponding column | _CSSProperties_ |
| loading | Whether it is in loading state | _boolean_ |
| disabled | Whether it is in disabled state | _boolean_ |
| callback | Callback function triggered when clicked | _action: Action_ |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onSelect | Triggered when clicking an option, not triggered in disabled or loading state | _action: Action, index: number_ |
| onCancel | Triggered when clicking the cancel button | - |
| onOpen | Triggered when opening the panel | - |
| onClose | Triggered when closing the panel | - |
| onOpened | Triggered after opening the panel and animation ends | - |
| onClosed | Triggered after closing the panel and animation ends | - |
| onClickOverlay | Triggered when clicking the overlay | _event: MouseEvent_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                                  | Default Value                 | Description |
| ------------------------------------- | ----------------------------- | ----------- |
| --rc-action-sheet-max-height          | _80%_                         | -           |
| --rc-action-sheet-header-height       | _48px_                        | -           |
| --rc-action-sheet-header-font-size    | _var(--rc-font-size-lg)_      | -           |
| --rc-action-sheet-description-color   | _var(--rc-gray-6)_            | -           |
| --rc-action-sheet-description-font-size | _var(--rc-font-size-md)_     | -           |
| --rc-action-sheet-description-line-height | _var(--rc-line-height-md)_ | -           |
| --rc-action-sheet-item-background     | _var(--rc-white)_             | -           |
| --rc-action-sheet-item-font-size      | _var(--rc-font-size-lg)_      | -           |
| --rc-action-sheet-item-line-height    | _var(--rc-line-height-lg)_    | -           |
| --rc-action-sheet-item-text-color     | _var(--rc-text-color)_        | -           |
| --rc-action-sheet-item-disabled-text-color | _var(--rc-gray-5)_        | -           |
| --rc-action-sheet-subname-color       | _var(--rc-gray-6)_            | -           |
| --rc-action-sheet-subname-font-size   | _var(--rc-font-size-sm)_      | -           |
| --rc-action-sheet-subname-line-height | _var(--rc-line-height-sm)_    | -           |
| --rc-action-sheet-close-icon-size     | _22px_                        | -           |
| --rc-action-sheet-close-icon-color    | _var(--rc-gray-5)_            | -           |
| --rc-action-sheet-close-icon-active-color | _var(--rc-gray-6)_         | -           |
| --rc-action-sheet-close-icon-padding  | _0 var(--rc-padding-md)_      | -           |
| --rc-action-sheet-cancel-text-color   | _var(--rc-gray-7)_            | -           |
| --rc-action-sheet-cancel-padding-top | _var(--rc-padding-xs)_        | -           |
| --rc-action-sheet-cancel-padding-color | _var(--rc-background-color)_ | -           |
| --rc-action-sheet-loading-icon-size   | _22px_                        | -           |

