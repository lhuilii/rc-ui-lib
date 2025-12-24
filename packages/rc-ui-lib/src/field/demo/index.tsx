/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Button, Toast } from '../..';
import Field from '..';
import { useFieldDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useFieldDemoI18n();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [tel, setTel] = useState('');
  const [digit, setDigit] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPasswrod] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [sms, setSms] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');

  const formatter = (val) => val.replace(/\d/g, '');

  const fieldRef = useRef(null);
  useEffect(() => {
    console.log(fieldRef);
  }, [fieldRef]);

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Field
          value={value1}
          label={t.labelText}
          onChange={setValue1}
          name="123"
          placeholder={t.placeholderText}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleType}>
        <Field value={value2} label={t.labelText} onChange={setValue2} placeholder={t.placeholderText} />
        <Field value={tel} type="tel" label={t.labelTel} onChange={setTel} placeholder={t.placeholderTel} />
        <Field
          value={digit}
          type="digit"
          label={t.labelDigit}
          onChange={setDigit}
          placeholder={t.placeholderDigit}
        />
        <Field
          value={number}
          type="number"
          label={t.labelNumber}
          onChange={setNumber}
          placeholder={t.placeholderNumber}
        />
        <Field
          value={password}
          type="password"
          label={t.labelPassword}
          onChange={setPasswrod}
          placeholder={t.placeholderPassword}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleDisabled}>
        <Cell.Group>
          <Field label={t.labelText} value={t.readonlyValue} readonly />
          <Field label={t.labelText} value={t.disabledValue} disabled />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock card title={t.demoTitleIcon}>
        <Cell.Group>
          <Field
            value={value3}
            label={t.labelText}
            leftIcon="shop-o"
            rightIcon="warning-o"
            placeholder={t.iconPlaceholder}
            onClickLeftIcon={() => Toast.info('左侧图标点击')} // 文案用于调试输出，暂不做 i18n
            onClickRightIcon={() => Toast.info('右侧图标点击')}
            onChange={setValue3}
          />
          <Field
            value={value4}
            clearable
            label={t.labelText}
            leftIcon="shop-o"
            placeholder={t.clearPlaceholder}
            onBlur={() => {
              console.log('onBlur');
            }}
            onClear={() => {
              console.log('onClear');
            }}
            onChange={setValue4}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock card title={t.demoTitleTooltip}>
        <Field label={t.labelText} placeholder={t.tooltipPlaceholder} tooltip="success" />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleError}>
        <Cell.Group>
          <Field
            value={username}
            error
            required
            label={t.labelUsername}
            placeholder={t.placeholderUsername}
            onChange={setUsername}
          />
          <Field
            value={phone}
            required
            label={t.labelPhone}
            placeholder={t.placeholderPhone}
            errorMessage={t.phoneError}
            onChange={setPhone}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock card title={t.demoTitleButton}>
        <Field
          value={sms}
          center
          clearable
          label={t.labelSms}
          placeholder={t.placeholderSms}
          onChange={setSms}
          button={
            <Button size="small" type="primary">
              {t.send}
            </Button>
          }
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleFormatter}>
        <Field
          value={value5}
          label={t.labelText}
          formatter={formatter}
          placeholder={t.formatterPlaceholder}
          onChange={setValue5}
        />
        <Field
          value={value6}
          label={t.labelText}
          formatter={formatter}
          formatTrigger="onBlur"
          placeholder={t.formatterBlurPlaceholder}
          onChange={setValue6}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleAutosize}>
        <Field
          value={message}
          rows={1}
          autosize
          label={t.labelMessage}
          type="textarea"
          placeholder={t.placeholderMessage}
          onChange={setMessage}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleWordLimit}>
        <Field
          value={message2}
          rows={2}
          autosize
          label={t.labelMessage}
          type="textarea"
          maxlength={50}
          placeholder={t.placeholderMessage}
          showWordLimit
          onChange={setMessage2}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleAlign}>
        <Field
          value={value7}
          label={t.labelText}
          placeholder={t.placeholderRightAlign}
          inputAlign="right"
          onChange={setValue7}
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleMethod}>
        <Cell.Group>
          <Field
            center
            ref={fieldRef}
            value={value8}
            label={t.labelText}
            onChange={setValue8}
            button={
              <Button
                size="small"
                onClick={() => {
                  fieldRef?.current?.focus();
                }}
              >
                {t.focus}
              </Button>
            }
            placeholder={t.placeholderText}
          />
        </Cell.Group>
      </DemoBlock>
    </DemoSection>
  );
};
