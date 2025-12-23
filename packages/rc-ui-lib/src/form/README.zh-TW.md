# Form 表單

### 介紹

用於數據錄入、校驗，支持輸入框、單選框、複選框、文件上傳等類型，需要與 [rc-field-form](https://github.com/react-component/field-form) 搭配使用。

### 引入

`rc-field-form` 是 Form 元件的前置依賴

```bash
# 添加 rc-field-form包
npm install rc-field-form
```

```js
import { Form } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

在表單中，每個 Form.Item 元件代表一個表單項，使用 Form.Item 的 `rules` 屬性定義校驗規則。

> Form.Item 是基於 Field 和 [RcField](https://github.com/react-component/field-form#field) 的封裝

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
      <Form.Item name="username" label="用戶名">
        <Field />
      </Form.Item>
    </Form>
  );
};
```

### 校驗規則

通過 `rules` 定義表單校驗規則，`validateTrigger`修改校驗觸發時機，點擊此處查看文檔[rule](https://github.com/react-component/field-form#rule)。

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
            提交
          </Button>
        </div>
      }
    >
      <Form.Item
        name="text1"
        label="正則校驗"
        rules={[{ pattern: /\d{6}/, message: '請輸入6位數字' }]}
      >
        <Field placeholder="正則校驗" />
      </Form.Item>
      <Form.Item
        name="text2"
        label="函數校驗"
        rules={[
          {
            validator: (_, value) => {
              if (/1\d{10}/.test(value)) {
                return Promise.resolve(true);
              }
              return Promise.reject(new Error('請輸入正確的手機號碼'));
            },
          },
        ]}
      >
        <Field placeholder="函數校驗" />
      </Form.Item>
      <Form.Item
        label="異步函數校驗"
        name="text3"
        rules={[
          {
            validator: (_, value) => {
              return new Promise((resolve, reject) => {
                Toast.loading('驗證中...');

                setTimeout(() => {
                  if (/\d{6}/.test(value)) {
                    resolve(true);
                  } else {
                    reject(new Error('請輸入正確內容'));
                  }
                  Toast.clear();
                }, 1000);
              });
            },
          },
        ]}
      >
        <Field placeholder="異步函數校驗" />
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - 開關

在表單中使用 [Switch 元件](#/zh-CN/switch)。

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
      <Form.Item name="switch" label="開關" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - 複選框

在表單中使用 [Checkbox 元件](#/zh-CN/checkbox)。

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
      <Form.Item name="checkbox" label="複選框" valuePropName="checked">
        <Checkbox shape="square" />
      </Form.Item>
      <Form.Item name="checkbox_group" label="複選框組">
        <Checkbox.Group direction="horizontal">
          <Checkbox shape="square" name="c1">
            複選框1
          </Checkbox>
          <Checkbox shape="square" name="c2">
            複選框2
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - 單選框

在表單中使用 [Radio 元件](#/zh-CN/radio)。

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
      <Form.Item name="radio" label="單選框">
        <Radio.Group direction="horizontal">
          <Radio name="r1">單選框1</Radio>
          <Radio name="r2">單選框2</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - 評分

在表單中使用 [Rate 元件](#/zh-CN/rate)。

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
      <Form.Item name="rate" label="評分" initialValue={3}>
        <Rate />
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - 文件上傳

在表單中使用 [Uploader 元件](#/zh-CN/uploader)。

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
        label="文件上傳"
        initialValue={[
          {
            url: 'https://img.yzcdn.cn/vant/sand.jpg',
            status: 'done',
            name: '圖片名稱',
          },
        ]}
      >
        <Uploader />
      </Form.Item>
    </Form>
  );
};
```

### 表單項類型 - TeaxtArea

```js
<Form.Item name="textarea" label="詳細地址">
  <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
</Form.Item>
```

## API

### Form Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| layout | 表單佈局 | _horizontal \| vertical_ | `horizontal` |
| colon | 配置 Form.Item 的 colon 的默認值。表示是否顯示 label 後面的冒號 | _boolean_ | `false` |
| showValidateMessage | 是否顯示驗證錯誤信息 | _boolean_ | `true` |
| inset | 是否展示為圓角卡片風格 | _boolean_ | `false` |
| border | 是否顯示外邊框 | _boolean_ | `false` |
| footer | 表單底部內容 | _ReactNode_ | - |
| validateTrigger | 表單校驗觸發時機，可選值為 `onChange`、`onSubmit`，具體用法見下方表格 | _strting_ | `onChange` |

> 更多 Form API 參見：[rc-field-form](https://github.com/react-component/field-form#form)

### Form.Item Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| colon | 配合 label 屬性使用，表示是否顯示 label 後面的冒號 | _boolean_ | `false` |
| showValidateMessage | 是否顯示驗證信息 | _boolean_ | `true` |
| intro | 額外的提示信息 | _ReactNode_ | - |
| required | 必填樣式設置。如不設置，則會根據校驗規則自動生成 | _boolean_ | `false` |
| tooltip | 字段提示信息 | _ReactNode \|_ [DialogProps & { icon: ReactNode }](/#/zh-CN/dialog#props) |
| customField | 自定義 item，此時不會渲染內置的 field，通常用於自定義表單項 | _boolean_ | `false` |
| disabled | 是否禁用表單項 | _boolean_ | `false` |
| labelClass | 左側文本額外類名 | _any_ | - |
| labelWidth | 左側文本寬度，默認單位為`px` | _number \| string_ | `6.2em` |
| labelAlign | 左側文本對齊方式，可選值為 `center` `right` | _string_ | `left` |
| validateTrigger | 表單校驗觸發時機，優先級高於`Form`設置的值，可選值為 `onChange`、`onSubmit`，具體用法見下方表格 | _strting_ | `onChange` |

> 更多 Form.ItemAPI 參見：[rc-field-form](https://github.com/react-component/field-form#field)

### Form.List Props

| 參數 | 說明 | 類型 |
| --- | --- | --- |
| children | 渲染函數 | _(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode_ |
| initialValue | 設置子元素默認值，如果與 Form 的 initialValues 衝突則以 Form 為準 | _any[]_ |
| name | 字段名，支持數組 | _string \| number \| (string \| number)[]_ |

#### operation

| 參數   | 說明       | 類型                                                 |
| ------ | ---------- | ---------------------------------------------------- |
| add    | 新增表單項 | _(defaultValue?: any, insertIndex?: number) => void_ |
| move   | 移動表單項 | _(from: number, to: number) => void_                 |
| remove | 刪除表單項 | _(index: number \| number[]) => void_                |

### Rule 數據結構

使用 Field 的`rules`屬性可以定義校驗規則，可選屬性如下:

| 鍵名 | 說明 | 類型 |
| --- | --- | --- |
| type | 類型，常見有 `string` `number` `boolean` `url` `email`。更多請參考[此處](https://github.com/yiminghe/async-validator#type) | _string_ |
| enum | 是否匹配枚舉中的值（需要將 `type` 設置為 `enum`） | _any[]_ |
| len | string 類型時為字符串長度；number 類型時為確定數字； array 類型時為數組長度 | _number_ |
| max | 必須設置 type：string 類型為字符串最大長度；number 類型時為最大值；array 類型時為數組最大長度 | _number_ |
| min | 必須設置 type：string 類型為字符串最小長度；number 類型時為最小值；array 類型時為數組最小長度 | _number_ |
| transform | 將字段值轉換成目標值後進行校驗 | _(value) => any_ |
| whitespace | 如果字段僅包含空格則校驗不通過，只在 type: 'string' 時生效 | _boolean_ |
| required | 是否為必選字段 | _boolean_ |
| message | 錯誤提示文案 | _string_ |
| validator | 自定義校驗，接收 Promise 作為返回值 | _(rule, value, callback: (error?: string) => void, form) => Promise \| void_ |
| pattern | 正則表達式匹配 | _RegExp_ |
| validateTrigger | 設置觸發驗證時機，必須是 Form.Item 的 validateTrigger 的子集 | _string_ |

### validateTrigger 可選值

通過 `validateTrigger` 屬性可以自定義表單校驗的觸發時機。

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| onSubmit | 僅在提交表單時觸發校驗               |
| onBlur   | 在提交表單和輸入框失焦時觸發校驗     |
| onChange | 在提交表單和輸入框內容變化時觸發校驗 |

