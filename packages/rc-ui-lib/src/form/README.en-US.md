# Form

### Introduction

Used for data entry and validation, supporting input fields, radio buttons, checkboxes, file uploads, etc. Needs to be used with [rc-field-form](https://github.com/react-component/field-form).

### Import

`rc-field-form` is a prerequisite dependency for the Form component

```bash
# Add rc-field-form package
npm install rc-field-form
```

```js
import { Form } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

In a form, each Form.Item component represents a form item. Use the `rules` property of Form.Item to define validation rules.

> Form.Item is a wrapper based on Field and [RcField](https://github.com/react-component/field-form#field)

```jsx
import React from 'react';
import { Form, Field } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="username" label="Username">
        <Field />
      </Form.Item>
    </Form>
  );
};
```

### Validation Rules

Define form validation rules through `rules`, and modify the validation trigger timing with `validateTrigger`. Click here to view the documentation [rule](https://github.com/react-component/field-form#rule).

```jsx
import React from 'react';
import { Form, Button, Field } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      validateTrigger="onSubmit"
      footer={
        <div style={{ margin: '16px 16px 0' }}>
          <Button round nativeType="submit" type="primary" block>
            Submit
          </Button>
        </div>
      }
    >
      <Form.Item
        name="text1"
        label="Pattern Validation"
        rules={[{ pattern: /\d{6}/, message: 'Please enter 6 digits' }]}
      >
        <Field placeholder="Pattern Validation" />
      </Form.Item>
      <Form.Item
        name="text2"
        label="Function Validation"
        rules={[
          {
            validator: (_, value) => {
              if (/1\d{10}/.test(value)) {
                return Promise.resolve(true);
              }
              return Promise.reject(new Error('Please enter a valid phone number'));
            },
          },
        ]}
      >
        <Field placeholder="Function Validation" />
      </Form.Item>
      <Form.Item
        label="Async Function Validation"
        name="text3"
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading('Validating...');

                setTimeout(() => {
                  if (/\d{6}/.test(value)) {
                    resolve(true);
                  } else {
                    reject(new Error('Please enter correct content'));
                  }
                  Toast.clear();
                }, 1000);
              });
            },
          },
        ]}
      >
        <Field placeholder="Async Function Validation" />
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - Switch

Use [Switch component](#/en-US/switch) in forms.

```jsx
import React from 'react';
import { Form, Switch } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - Checkbox

Use [Checkbox component](#/en-US/checkbox) in forms.

```jsx
import React from 'react';
import { Form, Checkbox } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="checkbox" label="Checkbox" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="Checkbox Group">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            Checkbox 1
          </Checkbox>
          <Checkbox shape="square" name="c2">
            Checkbox 2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - Radio

Use [Radio component](#/en-US/radio) in forms.

```jsx
import React from 'react';
import { Form, Radio } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="radio" label="Radio">
        <Radio.Group direction="horizontal">
          <Radio name="r1">Radio 1</Radio>
          <Radio name="r2">Radio 2</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - Rating

Use [Rate component](#/en-US/rate) in forms.

```jsx
import React from 'react';
import { Form, Rate } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item name="rate" label="Rating" initialValue={3}>
        <Rate />
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - File Upload

Use [Uploader component](#/en-US/uploader) in forms.

```jsx
import React from 'react';
import { Form, Uploader } from 'rc-ui-lib';

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('form submit', values);
  };

  return (
    <Form onFinish={onFinish} form={form}>
      <Form.Item
        name="uploader"
        label="File Upload"
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: 'Image Name',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
    </Form>
  );
};
```

### Form Item Type - TextArea

```js
<Form.Item name="textarea" label="Detailed Address">
  <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
</Form.Item>
```

## API

### Form Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| layout | Form layout | _horizontal \| vertical_ | `horizontal` |
| colon | Configure the default value of Form.Item's colon. Indicates whether to show the colon after label | _boolean_ | `false` |
| showValidateMessage | Whether to show validation error messages | _boolean_ | `true` |
| inset | Whether to display as rounded card style | _boolean_ | `false` |
| border | Whether to show outer border | _boolean_ | `false` |
| footer | Form bottom content | _ReactNode_ | - |
| validateTrigger | Form validation trigger timing, optional values are `onChange`, `onSubmit`, see table below for specific usage | _strting_ | `onChange` |

> More Form API see: [rc-field-form](https://github.com/react-component/field-form#form)

### Form.Item Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| colon | Used with label property, indicates whether to show the colon after label | _boolean_ | `false` |
| showValidateMessage | Whether to show validation messages | _boolean_ | `true` |
| intro | Additional hint information | _ReactNode_ | - |
| required | Required style setting. If not set, it will be automatically generated based on validation rules | _boolean_ | `false` |
| tooltip | Field hint information | _ReactNode \|_ [DialogProps & { icon: ReactNode }](/#/en-US/dialog#props) |
| customField | Custom item, at this time the built-in field will not be rendered, usually used for custom form items | _boolean_ | `false` |
| disabled | Whether to disable form item | _boolean_ | `false` |
| labelClass | Additional class name for left text | _any_ | - |
| labelWidth | Left text width, default unit is `px` | _number \| string_ | `6.2em` |
| labelAlign | Left text alignment, optional values are `center` `right` | _string_ | `left` |
| validateTrigger | Form validation trigger timing, priority is higher than the value set by `Form`, optional values are `onChange`, `onSubmit`, see table below for specific usage | _strting_ | `onChange` |

> More Form.Item API see: [rc-field-form](https://github.com/react-component/field-form#field)

### Form.List Props

| Parameter | Description | Type |
| --- | --- | --- |
| children | Render function | _(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode_ |
| initialValue | Set default value for child elements, if it conflicts with Form's initialValues, Form takes precedence | _any[]_ |
| name | Field name, supports array | _string \| number \| (string \| number)[]_ |

#### operation

| Parameter | Description | Type |
| --- | --- | --- |
| add | Add form item | _(defaultValue?: any, insertIndex?: number) => void_ |
| move | Move form item | _(from: number, to: number) => void_ |
| remove | Remove form item | _(index: number \| number[]) => void_ |

### Rule Data Structure

Use Field's `rules` property to define validation rules. Optional properties are as follows:

| Key | Description | Type |
| --- | --- | --- |
| type | Type, common ones are `string` `number` `boolean` `url` `email`. For more, please refer to [here](https://github.com/yiminghe/async-validator#type) | _string_ |
| enum | Whether to match values in enum (need to set `type` to `enum`) | _any[]_ |
| len | String length when type is string; specific number when type is number; array length when type is array | _number_ |
| max | Must set type: maximum string length when type is string; maximum value when type is number; maximum array length when type is array | _number_ |
| min | Must set type: minimum string length when type is string; minimum value when type is number; minimum array length when type is array | _number_ |
| transform | Convert field value to target value before validation | _(value) => any_ |
| whitespace | Validation fails if field contains only spaces, only effective when type: 'string' | _boolean_ |
| required | Whether it is a required field | _boolean_ |
| message | Error prompt text | _string_ |
| validator | Custom validation, receives Promise as return value | _(rule, value, callback: (error?: string) => void, form) => Promise \| void_ |
| pattern | Regular expression matching | _RegExp_ |
| validateTrigger | Set validation trigger timing, must be a subset of Form.Item's validateTrigger | _string_ |

### validateTrigger Optional Values

You can customize the form validation trigger timing through the `validateTrigger` property.

| Value | Description |
| --- | --- |
| onSubmit | Only trigger validation when submitting the form |
| onBlur | Trigger validation when submitting the form and when the input field loses focus |
| onChange | Trigger validation when submitting the form and when the input field content changes |

