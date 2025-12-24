# Cascader

### Introduction

Cascader selection box for multi-level data selection, typical scenarios include province, city, and district selection.

### Import

```js
import { Cascader } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

The cascader component can be used with Field and Popup components, as shown in the following example:

```jsx
import { Field, Popup, Cascader, useSetState } from 'rc-ui-lib';

// Option list, children represents sub-options, supports multi-level nesting
const options = [
  {
    text: 'Zhejiang Province',
    value: '330000',
    children: [{ text: 'Hangzhou', value: '330100' }],
  },
  {
    text: 'Jiangsu Province',
    value: '320000',
    children: [{ text: 'Nanjing', value: '320100' }],
  },
];

export default () => {
  const [state, set] = useSetState({
    visible: false,
    value: '',
  });
  // After all options are selected, the finish event will be triggered
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="Region"
        placeholder="Please select region"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="Please select region"
          options={options}
          onClose={() => set({ visible: false })}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### Custom Color

Set the highlight color of the selected state through the `activeColor` property.

```jsx
<Cascader title="Please select region" activeColor="#f44336" options={options} />
```

### Async Load Options

You can listen to the `onChange` event and dynamically set `options` to implement async loading of options.

```jsx
import { useState } from 'react'
import { Toast, Field, Popup, Cascader, useSetState } from 'rc-ui-lib';

export default () => {
  const [dynamicOpts, setDynamicOpts] = useState([
    {
      text: 'Zhejiang Province',
      value: '330000',
      children: [],
    },
  ]);
  const onChange = ({ value }) => {
    if (value === dynamicOpts[0].value) {
      Toast.loading({ message: 'Loading...', duration: 0 });
      setTimeout(() => {
        Toast.clear()
        const newOpts = [...dynamicOpts];
        newOpts[0].children = [
          { text: 'Hangzhou', value: '330100' },
          { text: 'Ningbo', value: '330200' },
        ];
        setDynamicOpts(newOpts);
      }, 2000);
    }
  };
  const onFinish = {({ selectedOptions }) => {
    set({
      visible: false,
      value: selectedOptions.map((option) => option.text).join('/'),
    });
  }}
  return (
    <>
      <Field
        isLink
        readonly
        value={state.value}
        label="Region"
        placeholder="Please select region"
        onClick={() => set({ visible: true })}
      />
      <Popup round visible={state.value} position="bottom" onClose={() => set({ visible: false })}>
        <Cascader
          title="Please select region"
          options={options}
          onClose={() => set({ visible: false })}
          onChange={onChange}
          onFinish={onFinish}
        />
      </Popup>
    </>
  );
};
```

### Custom Field Names

You can customize the field names in `options` through the `fieldNames` property.

```jsx
const options = [
  {
    name: 'Zhejiang Province',
    code: '330000',
    items: [{ name: 'Hangzhou', code: '330100' }],
  },
  {
    name: 'Jiangsu Province',
    code: '320000',
    items: [{ name: 'Nanjing', code: '320100' }],
  },
];

<Cascader
  title="Please select region"
  options={options}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items',
  }}
/>;
```

### Controlled Component

The Cascader can become a controlled component through the `value` property.

```jsx
import { useState } from 'react';
import { Cascader, Button, Popup, Field } from 'rc-ui-lib';

// Option list, children represents sub-options, supports multi-level nesting
const options = [
  {
    text: 'Zhejiang Province',
    value: '330000',
    children: [{ text: 'Hangzhou', value: '330100' }],
  },
  {
    text: 'Jiangsu Province',
    value: '320000',
    children: [{ text: 'Nanjing', value: '320100' }],
  },
];

// Get selected text from current selected value
// In actual business, you may need to adjust with childrenKey, valueKey, etc.
function getTextFromValue(value, opts) {
  const rs = [];
  value.reduce((a, v) => {
    const matchOpt = a.find((opt) => opt.value === v);
    rs.push(matchOpt.text);
    return matchOpt.children;
  }, opts);
  return rs.join('/');
}

export default () => {
  const [text, setText] = useState(getTextFromValue(['330000', '330100', '330103'], options));
  const [value, setValue] = useState(['330000', '330100', '330103']);
  const [visible, setVisible] = useState(false);

  const onFinish = ({ selectedOptions }) => {
    setText(selectedOptions.map((option) => option.text).join('/'));
    setValue(selectedOptions.map((option) => option.value));
    setVisible(false);
  };

  const onSetting = () => {
    const newValue = ['330000', '330100', '330104'];
    setText(getTextFromValue(newValue, options));
    setValue(newValue);
  };
  return (
    <>
      <Field
        isLink
        readonly
        value={text}
        label="Region"
        placeholder="Please select region"
        errorMessage={<div>Current value:{JSON.stringify(value)}</div>}
        onClick={() => setVisible(true)}
      />
      <Popup visible={visible} round position="bottom" onClose={() => setVisible(false)}>
        <Cascader
          title="Please select region"
          options={options}
          value={value}
          onClose={() => setVisible(false)}
          onFinish={onFinish}
        />
      </Popup>

      <Button onClick={onSetting}>External Setting</Button>
    </>
  );
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Top title | _ReactNode_ | - |
| value | Currently selected value | _(string \| number)[]_ | - |
| defaultValue | Default selected value | _(string \| number)[]_ | - |
| options | Option data source | _Option[]_ | `[]` |
| optionRender | Custom option text | _({ option: Option, selected: boolean }) => ReactNode_ | - |
| placeholder | Placeholder text when not selected | _string_ | `Please select` |
| activeColor | Highlight color of selected state | _string_ | `#ee0a24` |
| closeable | Whether to show close icon | _boolean_ | `true` |
| closeIcon | Close icon | _string\|ReactNode_ | `cross` |
| fieldNames | Custom fields in `options` structure | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Option Data Structure

The `options` property is an array of objects. Each object in the array configures an option. Objects can contain the following values:

| Key | Description | Type |
| --- | --- | --- |
| text | Option text (required) | _string_ |
| value | Value corresponding to the option (required) | _string \| number_ |
| color | Option text color | _string_ |
| children | Sub-option list | _Option[]_ |
| disabled | Whether to disable the option | _boolean_ |
| className | Add additional class for the corresponding column | _string \| Array \| object_ |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Triggered when selected item changes | `{ value, selectedOptions, tabIndex }` |
| onFinish | Triggered after all options are selected | `{ value, selectedOptions, tabIndex }` |
| onClose | Triggered when clicking the close icon | - |
| onClickTab | Triggered when clicking a tab | _tabIndex: number, title: string_ |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name                              | Default Value                   | Description |
| --------------------------------- | ------------------------------- | ----------- |
| --rc-cascader-header-height       | _48px_                          | -           |
| --rc-cascader-header-padding      | _0 var(--rc-padding-md)_        | -           |
| --rc-cascader-title-font-size     | _var(--rc-font-size-lg)_        | -           |
| --rc-cascader-title-line-height  | _20px_                          | -           |
| --rc-cascader-close-icon-size    | _22px_                          | -           |
| --rc-cascader-close-icon-color    | _var(--rc-gray-5)_              | -           |
| --rc-cascader-close-icon-active-color | _var(--rc-gray-6)_          | -           |
| --rc-cascader-selected-icon-size  | _18px_                          | -           |
| --rc-cascader-tabs-height         | _48px_                          | -           |
| --rc-cascader-active-color        | _var(--rc-danger-color)_        | -           |
| --rc-cascader-options-height      | _384px_                         | -           |
| --rc-cascader-option-disabled-color | _van(--rc-gray-5)_            | -           |
| --rc-cascader-tab-color           | _var(--rc-text-color)_          | -           |
| --rc-cascader-unselected-tab-color | _var(--rc-gray-6)_             | -           |

