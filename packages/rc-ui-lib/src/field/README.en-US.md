# Field 

### Introduction

Input field component in forms.

### Import

```js
import { Field } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

You can bind the input field value bidirectionally through `value` and `input`, and set placeholder text through `placeholder`.

```jsx
<!-- Field is implemented based on Cell, you can use CellGroup or CellGroup as a container to provide outer borders. -->
<CellGroup>
  <Field value={value1} type="text" label="Text" placeholder="Please enter username" onChange={setValue1} />
</CellGroup>
```

```js
const [value1, setValue1] = useState('');
```

### Custom Type

Define different types of input fields based on the `type` property, with the default value being `text`.

```jsx
<!-- Enter any text -->
<Field value={value2} label="Text" onChange={setValue2} />
<!-- Enter phone number, opens phone number keyboard -->
<Field value={tel} type="tel" label="Phone Number" onChange={setTel} />
<!-- Allow entering positive integers, opens numeric keyboard -->
<Field value={digit} type="digit" label="Integer" onChange={setDigit} />
<!-- Allow entering numbers, opens numeric keyboard with symbols -->
<Field value={number} type="number" label="Number" onChange={setNumber} />
<!-- Enter password -->
<Field value={password} type="password" label="Password" onChange={setPasswrod} />
```

```js
const [value2, setValue2] = useState('');
const [tel, setTel] = useState('');
const [digit, setDigit] = useState('');
const [number, setNumber] = useState('');
const [password, setPasswrod] = useState('');
```

### Disable Input Field

Set the input field to read-only state through `readonly`, and set the input field to disabled state through `disabled`.

```jsx
<CellGroup>
  <Field label="Text" value="Input field is read-only" readonly />
  <Field label="Text" value="Input field is disabled" disabled />
</CellGroup>
```

### Display Icons

Configure icons on both sides of the input field through `leftIcon` and `rightIcon`, and display a clear icon during input by setting `clearable`.

```jsx
<CellGroup>
  <Field
    value={value3}
    label="Text"
    leftIcon="smile-o"
    rightIcon="warning-o"
    placeholder="Show icon"
    onChange={setValue3}
  />
  <Field
    value={value4}
    clearable
    label="Text"
    leftIcon="music-o"
    placeholder="Show clear icon"
    onChange={setValue4}
  />
</CellGroup>
```

```js
const [value3, setValue3] = useState('');
const [value4, setValue4] = useState('');
```

### Information Hint (Tooltip)

```jsx
<Field label="Text" placeholder="Please enter text" tooltip="success" />
```

### Error Hint

Set the `required` property to indicate this is a required field, and you can display corresponding error hints with the `error` or `error-message` property.

```jsx
<CellGroup>
  <Field
    value={username}
    error
    required
    label="Username"
    placeholder="Please enter username"
    onChange={setUsername}
  />
  <Field
    value={phone}
    required
    label="Phone Number"
    placeholder="Please enter phone number"
    errorMessage="Phone number format error"
    onChange={setPhone}
  />
</CellGroup>
```

### Insert Button

You can insert a button at the end of the input field through the button slot.

```jsx
<Field
  value={sms}
  center
  clearable
  label="SMS Verification Code"
  placeholder="Please enter SMS verification code"
  onChange={setSms}
  button={<Button size="small" type="primary" />}
/>
```

### Format Input Content

You can format the input content through the `formatter` property, and specify when to execute formatting through the `format-trigger` property. By default, formatting is performed during input.

```jsx
<Field
  value={value5}
  label="Text"
  formatter={formatter}
  placeholder="Format on input"
  onChange={setValue5}
/>
<Field
  value={value6}
  label="Text"
  formatter={formatter}
  format-trigger="onBlur"
  placeholder="Format on blur"
  onChange={setValue6}
/>
```

```js
const [value5, setValue5] = useState('');
const [value6, setValue6] = useState('');

const formatter = (value) => value.replace(/\d/g, '');
```

### Auto Height

For textarea, you can set auto height through the `autosize` property.

```jsx
<Field
  value={message}
  rows="1"
  autosize
  label="Message"
  type="textarea"
  placeholder="Please enter message"
  onChange={setMessage}
/>
```

### Display Word Count

After setting the `maxlength` and `showWordLimit` properties, word count will be displayed at the bottom.

```jsx
<Field
  value={message2}
  rows="2"
  autosize
  label="Message"
  type="textarea"
  maxlength="50"
  placeholder="Please enter message"
  showWordLimit
  onChange={setMessage2}
/>
```

### Input Field Content Alignment

You can set the alignment of input field content through the `inputAlign` property, with optional values being `center` and `right`.

```jsx
<Field
  value={value7}
  label="Text"
  placeholder="Input field content right-aligned"
  inputAlign="right"
  onChange={setValue7}
/>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current input value | _number \| string_ | - |
| label | Text on the left side of the input field | _string_ | - |
| name | Name, identifier for form submission | _string_ | - |
| type | Input field type, optional values are `tel` `digit`<br/>`number` `textarea` `password`, etc. | _string_ | `text` |
| size | Size, optional value is `large` | _string_ | - |
| maxlength | Maximum number of characters to input | _number \| string_ | - |
| placeholder | Placeholder text for the input field | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable the input field | _boolean_ | `false` |
| readonly | Whether it is read-only | _boolean_ | `false` |
| colon | Whether to add a colon after label | _boolean_ | `false` |
| required | Whether to show form required asterisk | _boolean_ | `false` |
| center | Whether to vertically center content | _boolean_ | `false` |
| clearable | Whether to enable clear icon, clicking the clear icon will clear the input field | _boolean_ | `false` |
| clearIcon | Clear icon name or image link | _string_ | `clear` |
| clickable | Whether to enable click feedback | _boolean_ | `false` |
| isLink | Whether to show right arrow and enable click feedback | _boolean_ | `false` |
| showWordLimit | Whether to show word count, requires setting `maxlength` property | _boolean_ | `false` |
| error | Whether to mark input content in red | _boolean_ | `false` |
| errorMessage | Error hint text at the bottom, not displayed when empty | _string_ | - |
| formatter | Input content formatting function | _Function_ | - |
| formatTrigger | When to trigger the formatting function, optional value is `onBlur` | _string_ | `onChange` |
| arrowDirection | Arrow direction, optional values are `left` `up` `down` | _string_ | `right` |
| labelClass | Additional class name for left text | _any_ | - |
| labelWidth | Left text width, default unit is `px` | _number \| string_ | `6.2em` |
| labelAlign | Left text alignment, optional values are `center` `right` | _string_ | `left` |
| inputAlign | Input field alignment, optional values are `center` `right` | _string_ | `left` |
| errorMessageAlign | Error hint text alignment, optional values are `center` `right` | _string_ | `left` |
| autosize | Whether to auto-adapt content height, only effective for textarea,<br/>can pass an object, such as { maxHeight: 100, minHeight: 50 },<br/>unit is `px` | _boolean \| object_ | `false` |
| leftIcon | Left icon | _string\|ReactNode_ | - |
| rightIcon | Right icon | _string\|ReactNode_ | - |
| iconPrefix | Icon class name prefix, same as the [class-prefix property](#/en-US/icon#props) of the Icon component | _string_ | `van-icon` |
| rules | Form validation rules, see [Form component](#/en-US/form#rule-shu-ju-jie-gou) for details | _Rule[]_ | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when the input field value changes | _val: string \| number_ |
| onFocus | Triggered when the input field gains focus | _event: MouseEvent_ |
| onBlur | Triggered when the input field loses focus | _event: MouseEvent_ |
| onClear | Triggered when clicking the clear button | _event: MouseEvent_ |
| onClick | Triggered when clicking Field | _event: MouseEvent_ |
| onClickInput | Triggered when clicking the input area | _event: MouseEvent_ |
| onClickLeftIcon | Triggered when clicking the left icon | _event: MouseEvent_ |
| onClickRightIcon | Triggered when clicking the right icon | _event: MouseEvent_ |

### Methods

You can get the Field instance through ref and call instance methods

```js
const fieldRef = useRef(null);
```

```jsx
<Field
  ref={fieldRef}
  value={value}
  onChange={setValue}
  placeholder="Please enter text"
  maxlength="11"
/>

<input
  type="button"
  value="click"
  onClick={() => {
    fieldRef.current?.focus()
  }}
/>
```

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| focus | Get input field focus | - | - |
| blur | Remove input field focus | - | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-field-label-width | _6.2em_ | - |
| --rc-field-label-color | _var(--rc-gray-7)_ | - |
| --rc-field-label-margin-right | _var(--rc-padding-sm)_ | - |
| --rc-field-input-text-color | _var(--rc-text-color)_ | - |
| --rc-field-input-error-text-color | _var(--rc-danger-color)_ | - |
| --rc-field-input-disabled-text-color | _var(--rc-gray-5)_ | - |
| --rc-field-placeholder-text-color | _var(--rc-gray-5)_ | - |
| --rc-field-icon-size | _16px_ | - |
| --rc-field-clear-icon-size | _16px_ | - |
| --rc-field-clear-icon-color | _var(--rc-gray-5)_ | - |
| --rc-field-right-icon-color | _var(--rc-gray-6)_ | - |
| --rc-field-error-message-color | _var(--rc-danger-color)_ | - |
| --rc-field-error-message-font-size | _12px_ | - |
| --rc-field-text-area-min-height | _60px_ | - |
| --rc-field-word-limit-color | _var(--rc-gray-7)_ | - |
| --rc-field-word-limit-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-field-word-limit-line-height | _16px_ | - |
| --rc-field-disabled-text-color | _var(--rc-gray-5)_ | - |
| --rc-field-required-mark-color | _var(--rc-red)_ | - |

## Common Issues

### Why is the input tag type still text after setting type to number?

The native HTML `type="number"` attribute has certain issues on both iOS and Android systems, such as the maxlength property not working and being unable to get complete input content. Therefore, when setting type to `number`, Field will not use the native `type="number"` attribute, but instead use the [inputmode attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode) supported by modern browsers to control the type of input keyboard.

### Why doesn't clicking the clear button work on desktop?

The clear button listens to mobile Touch events. See [Desktop Adaptation](#/en-US/advanced-usage#zhuo-mian-duan-gua-pei).

