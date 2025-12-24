# PasswordInput

### Introduction

Input component with grid that can be used for entering passwords, SMS verification codes, etc. Usually used together with the [Number Keyboard](#/en-US/number-keyboard) component.

### Import

```js
import { PasswordInput, NumberKeyboard } from 'rc-ui-lib';
```

### Basic Usage

Use together with the number keyboard component to implement password input functionality.

```jsx
<PasswordInput
    focused={focused}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    onChange={handleChange(value)}
    keyboard={<NumberKeyboard />}
```

```js
const [focused, setFocused] = useState(false);

const handleChange = (value) => {
  console.log(value);
};
```

### Native Keyboard Usage

Use together with the native keyboard component to implement password input functionality.

```jsx
<PasswordInput
    focused={focused}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    onChange={handleChange(value)}
```

```js
const [focused, setFocused] = useState(false);

const handleChange = (value) => {
  console.log(value);
};
```

### Custom Length

Set the password length through the `length` property.

```jsx
<PasswordInput
  length={4}
  focused={focused}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### Grid Gap

Set the gap between grids through the `gutter` property.

```jsx
<PasswordInput
  focused={focused}
  gutter={10}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### Plain Text Display

Setting `mask` to `false` can display the input content in plain text, suitable for scenarios such as SMS verification codes.

```jsx
<PasswordInput
  focused={focused}
  mask={false}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

### Hint Information

Set hint information through the `info` property, and set error hint through the `error-info` property. For example, when entering six digits, prompt that the password is incorrect.

```jsx
<PasswordInput
  focused={focused}
  info="Password is 6 digits"
  errorInfo={errorInfo}
  onFill={handleFill}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={handleChange(value)}
/>
```

```js
const [focused, setFocused] = useState(false);
const [errorInfo, setErrorInfo] = useState < string > '';

const handleChange = (value) => {
  console.log(value);
};

const handleFill = () => {
  setErrorInfo('Password error');
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Default uncontrolled password value | _string_ | `''` |
| info | Text hint below the input box | _string_ | - |
| error-info | Error hint below the input box | _string_ | - |
| length | Maximum password length | _number \| string_ | `6` |
| gutter | Gap between input box grids, such as `20px` `2em`, default unit is `px` | _number \| string_ | `0` |
| mask | Whether to hide password content | _boolean_ | `true` |
| focused | Whether it is focused, cursor will be displayed when focused | _boolean_ | `false` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Callback when inputting | key: key content |
| onFill | Callback when filling is complete | - |
| onBlur | Callback when input box loses focus | - |
| onFocus | Callback when input box is focused | - |

### Ref

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| focus | Callback when input box is focused, if it's a native input, it will automatically focus | - |
| blur | Input box loses focus, if it's a native input, it will automatically blur | - |
| resetValue | Clear input box | - |

### Type Definitions

The component exports the following type definitions:

```js
import type { PasswordInputProps, PasswordInputInstance } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-password-input-height | _50px_ | - |
| --rc-password-input-margin | _0 var(--rc-padding-md)_ | - |
| --rc-password-input-font-size | _20px_ | - |
| --rc-password-input-border-radius | _6px_ | - |
| --rc-password-input-background-color | _var(--rc-background-color-light)_ | - |
| --rc-password-input-info-color | _var(--rc-text-color-2)_ | - |
| --rc-password-input-info-font-size | _var(--rc-font-size-md)_ | - |
| --rc-password-input-error-info-color | _var(--rc-danger-color)_ | - |
| --rc-password-input-dot-size | _10px_ | - |
| --rc-password-input-dot-color | _var(--rc-text-color)_ | - |
| --rc-password-input-text-color | _var(--rc-text-color)_ | - |
| --rc-password-input-cursor-color | _var(--rc-text-color)_ | - |
| --rc-password-input-cursor-width | _1px_ | - |
| --rc-password-input-cursor-height | _40%_ | - |
| --rc-password-input-cursor-animation-duration | _1s_ | - |

