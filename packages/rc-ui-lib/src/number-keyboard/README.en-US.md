# NumberKeyboard

### Introduction

H5 number keyboard that can be used with password input components or custom input components.

### Import

```js
import { NumberKeyboard } from 'rc-ui-lib';
```

## Code Example

### Default Style

The number keyboard provides onInput, onDelete, onBlur, and onClose events, corresponding to input content, delete content, lose focus, and close actions respectively.

```jsx
<Cell onClick={setVisible}>Show Default Keyboard</Cell>
<NumberKeyboard
  visible={visible}
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

```js
const [visible, setVisible] = useState(false);

const actions = {
  onClose: () => {
    Toast.info('closed');
    setVisible('');
  },
  onInput: (key: string) => {
    Toast.info(key);
  },
  onDelete: () => {
    Toast.info('delete');
  },
  onBlur: () => {
    setVisible('');
  },
};
```

### Keyboard with Right Sidebar

Set the `theme` property to `custom` to display the right sidebar of the keyboard, commonly used in scenarios for entering amounts.

```jsx
<NumberKeyboard
  visible={visible}
  theme="custom"
  extraInfo="."
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### ID Card Number Keyboard

You can set the content of the bottom-left key through the `extraKey` property. For example, when you need to enter an ID card number, you can set `extraKey` to `X`.

```jsx
<NumberKeyboard
  visible={visible}
  extraKey="X"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### Keyboard Title

You can set the keyboard title through the `title` property.

```jsx
<NumberKeyboard
  visible={visible}
  title="Keyboard Title"
  extraKey="."
  closeButtonText="Done"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### Configure Multiple Keys

When theme is `custom`, you can configure two `extraKey` in the form of an array.

```jsx
<NumberKeyboard
  visible={visible}
  theme="custom"
  extraKey={['00', '.']}
  closeButtonText="Done"
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

### Random Number Keyboard

You can randomly sort the number keyboard through the `randomKeyOrder` property, commonly used in scenarios with higher security levels.

```jsx
<NumberKeyboard
  visible={visible}
  randomKeyOrder
  onClose={actions.onClose}
  onInput={actions.onInput}
  onDelete={actions.onDelete}
  onBlur={actions.onBlur}
/>
```

## API

### Props

| Parameter Name | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show keyboard | _boolean_ | - |
| title | Keyboard title | _string_ | - |
| theme | Style theme, optional value is `custom` | _string_ | `default` |
| transition | Whether to enable transition animation | _boolean_ | `true` |
| zIndex | Keyboard z-index level | \_number | `100` |
| extraKey | Content of the bottom extra key | _string \| string[]_ | `''` |
| closeButtonText | Close button text, empty means not displayed | _string_ | - |
| deleteButtonText | Delete button text, empty means display delete icon | _string_ | - |
| closeButtonLoading | Whether to set the close button to loading state, only effective when `theme="custom"` | _boolean_ | `false` |
| showDeleteKey | Whether to show delete icon | _boolean_ | `true` |
| blurOnClose | Whether to trigger blur event when clicking close button | _boolean_ | `true` |
| hideOnClickOutside | Whether to hide keyboard when clicking outside | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable [bottom safe area adaptation](#/en-US/adrcced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| randomKeyOrder | Whether to display keys in random order | _boolean_ | `false` |
| titleLeft | Custom left content of title bar | React.ReactNode | - |
| teleport | Specify the mounted node | _HTMLElement_ | _(() => HTMLElement)_ |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onInput | Triggered when clicking a key | key: key content |
| onDelete | Triggered when clicking delete key | - |
| onBlur | Triggered when clicking close button or non-keyboard area | - |
| onClose | Triggered when clicking close button | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { NumberKeyboardProps, NumberKeyboardTheme } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-number-keyboard-background-color | _var(--rc-gray-2)_ | - |
| --rc-number-keyboard-key-height | _48px_ | - |
| --rc-number-keyboard-key-font-size | _28px_ | - |
| --rc-number-keyboard-key-active-color | _var(--rc-gray-3)_ | - |
| --rc-number-keyboard-key-background-color | _var(--rc-white)_ | - |
| --rc-number-keyboard-delete-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-number-keyboard-title-color | _var(--rc-gray-7)_ | - |
| --rc-number-keyboard-title-height | _34px_ | - |
| --rc-number-keyboard-title-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-number-keyboard-close-padding | _0 var(--rc-padding-md)_ | - |
| --rc-number-keyboard-close-color | _var(--rc-text-link-color)_ | - |
| --rc-number-keyboard-close-font-size | _var(--rc-font-size-md)_ | - |
| --rc-number-keyboard-button-text-color | _var(--rc-white)_ | - |
| --rc-number-keyboard-button-background-color | _var(--rc-primary-color)_ | - |
| --rc-number-keyboard-z-index | _100_ | - |

