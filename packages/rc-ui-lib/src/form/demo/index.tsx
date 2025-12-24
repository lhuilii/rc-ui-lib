/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Field, Rate, Checkbox, Radio, Switch, Toast, Button, Uploader } from '../..';
import Form from '..';
import { useFormDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useFormDemoI18n();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Form
          showValidateMessage={false}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                {t.submit}
              </Button>
            </div>
          }
        >
          <Form.Item
            tooltip={{
              message:
                'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
            }}
            intro={t.introUsername}
            rules={[{ required: true, message: t.ruleRequiredUsername }]}
            name="username"
            label={t.labelUsername}
          >
            <Field placeholder={t.placeholderUsername} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: t.ruleRequiredPassword }]}
            name="password"
            label={t.labelPassword}
          >
            <Field placeholder={t.placeholderPassword} />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title={t.demoTitleValidateOnSubmit}>
        <Form
          onFinish={onFinish}
          validateTrigger="onSubmit"
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                {t.submit}
              </Button>
            </div>
          }
        >
          <Form.Item
            name="text1"
            label={t.labelPattern}
            rules={[{ pattern: /\d{6}/, message: t.rulePattern6Digits }]}
          >
            <Field placeholder={t.placeholderPattern} />
          </Form.Item>
          <Form.Item
            name="text2"
            label={t.labelFunction}
            rules={[
              {
                validator: (_, value) => {
                  if (/1\d{10}/.test(value)) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error(t.rulePhone));
                },
              },
            ]}
          >
            <Field placeholder={t.placeholderFunction} />
          </Form.Item>
          <Form.Item
            label={t.labelAsyncFunction}
            name="text3"
            rules={[
              {
                validator: (_, value) => {
                  return new Promise((resolve, reject) => {
                    Toast.loading(t.validating);

                    setTimeout(() => {
                      if (/\d{6}/.test(value)) {
                        resolve(true);
                      } else {
                        reject(new Error(t.ruleCorrectContent));
                      }
                      Toast.clear();
                    }, 1000);
                  });
                },
              },
            ]}
          >
            <Field placeholder={t.placeholderAsyncFunction} />
          </Form.Item>
        </Form>
      </DemoBlock>
      <DemoBlock title={t.demoTitleValidateOnChange}>
        <Form
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                {t.submit}
              </Button>
            </div>
          }
        >
          <Form.Item
            name="text1"
            label={t.labelPattern2}
            rules={[{ pattern: /\d{6}/, message: t.rulePattern6Digits }]}
          >
            <Field placeholder={t.placeholderPattern} />
          </Form.Item>
          <Form.Item
            name="text2"
            label={t.labelFunction}
            rules={[
              {
                validator: (_, value) => {
                  if (/1\d{10}/.test(value)) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error(t.rulePhone));
                },
              },
            ]}
          >
            <Field placeholder={t.placeholderFunction} />
          </Form.Item>
          <Form.Item
            label={t.labelAsyncFunction}
            name="text3"
            rules={[
              {
                validator: (_, value) => {
                  return new Promise((resolve, reject) => {
                    Toast.loading(t.validating);

                    setTimeout(() => {
                      if (/\d{6}/.test(value)) {
                        resolve(true);
                      } else {
                        reject(new Error(t.ruleCorrectContent));
                      }
                      Toast.clear();
                    }, 1000);
                  });
                },
              },
            ]}
          >
            <Field placeholder={t.placeholderAsyncFunction} />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title={t.demoTitleTypes}>
        <Form
          inset
          form={form}
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                {t.submit}
              </Button>
            </div>
          }
        >
          <Form.Item name="switch" label={t.labelSwitch} valuePropName="checked">
            <Switch size={20} />
          </Form.Item>
          <Form.Item name="checkbox" label={t.labelCheckbox} valuePropName="checked">
            <Checkbox shape="square" />
          </Form.Item>
          <Form.Item name="checkbox_group" label={t.labelCheckboxGroup}>
            <Checkbox.Group direction="horizontal">
              <Checkbox shape="square" name="c1">
                {t.checkbox1}
              </Checkbox>
              <Checkbox shape="square" name="c2">
                {t.checkbox2}
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="radio" label={t.labelRadio} initialValue="r1">
            <Radio.Group direction="horizontal">
              <Radio name="r1">{t.radio1}</Radio>
              <Radio name="r2">{t.radio2}</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="rate" label={t.labelRate} initialValue={3}>
            <Rate />
          </Form.Item>
          <Form.Item
            name="uploader"
            label={t.labelUploader}
            rules={[{ required: true, message: t.ruleSelectFile }]}
            initialValue={[
              {
                url: 'https://img.yzcdn.cn/vant/sand.jpg',
                status: 'done',
                name: t.uploaderFileName,
              },
            ]}
          >
            <Uploader />
          </Form.Item>
          <Form.Item name="textarea" label={t.labelTextarea}>
            <Field rows={3} autosize type="textarea" maxlength={140} showWordLimit />
          </Form.Item>
        </Form>
      </DemoBlock>
      {/* <DemoBlock title="动态增减表单项">
        <Form
          onFinish={onFinish}
          footer={
            <div style={{ margin: '16px 16px 0' }}>
              <Button round nativeType="submit" type="primary" block>
                提交
              </Button>
            </div>
          }
        >
          <Form.List name="users" initialValue={[{ name: 'rc-ui-lib', age: '1' }]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, idx) => (
                  <div className="form-list-item" key={field.key}>
                    <h6>用户{idx + 1}:</h6>
                    <div className="form-list-item__control">
                      <Form.Item
                        label="姓名"
                        name={[field.name, 'name']}
                        rules={[
                          { type: 'string', min: 2, max: 6, message: '姓名最少两个字，最多6个字' },
                        ]}
                      >
                        <Field placeholder="请输入用户姓名" />
                      </Form.Item>
                      <Form.Item
                        label="年龄"
                        name={[field.name, 'age']}
                        rules={[
                          { type: 'number', message: '请输入数字', transform: (v) => Number(v) },
                        ]}
                      >
                        <Field
                          placeholder="请输入用户年龄"
                          rightIcon={<Icon name="delete" onClick={() => remove(idx)} />}
                        />
                      </Form.Item>
                    </div>
                  </div>
                ))}
                <div style={{ padding: 10 }}>
                  <Button round block plain icon="add-o" size="small" onClick={() => add()}>
                    新增用户
                  </Button>
                </div>
              </>
            )}
          </Form.List>
        </Form>
      </DemoBlock> */}
    </DemoSection>
  );
};
