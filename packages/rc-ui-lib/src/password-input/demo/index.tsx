import React, { useRef, useState, useEffect } from 'react';
import { components } from 'site-mobile-demo';
import PasswordInput from '..';
import Button from '../../button';
import { NumberKeyboard } from '../..';
import { usePasswordInputDemoI18n } from './locale';
import './style.less';

import type { PasswordInputInstance } from '..';

const initialValue = {
  nativeInput: '123',
  showInfo: '123',
  addGutter: '123',
  basicUsage: '123',
  removeMask: '123',
  customLength: '123',
  setValue: '123',
};

export default (): React.ReactNode => {
  const { DemoSection, DemoBlock } = components;
  const t = usePasswordInputDemoI18n();

  const [values, setValues] = useState(initialValue);
  const [current, setCurrent] = useState(null);

  const [errorInfo, setErrorInfo] = useState<string>('');

  const basicUsageRef = useRef(null);
  const nativeInputRef = useRef(null);
  const customLengthRef = useRef(null);
  const addGutterRef = useRef(null);
  const removeMaskRef = useRef(null);
  const showInfoRef = useRef(null);
  const setValueRef = useRef(null);

  const psdRef = useRef<PasswordInputInstance>(null);

  const refMap = {
    showInfo: showInfoRef,
    nativeInput: nativeInputRef,
    addGutter: addGutterRef,
    basicUsage: basicUsageRef,
    removeMask: removeMaskRef,
    customLength: customLengthRef,
    setValue: setValueRef,
  };

  useEffect(() => {
    if (current) {
      const el = refMap[current].current;
      const { top } = el.getBoundingClientRect();
      window.scrollTo(0, window.pageYOffset + top);
    }
  }, [current]);

  const handleFocus = (type) => {
    setCurrent(type);
  };

  const handleBlur = () => {
    setCurrent('');
  };

  const handleChange = (value, type) => {
    console.log(value, type);
  };

  const handleFill = () => {
    setErrorInfo(t.errorInfo);
  };

  return (
    <DemoSection>
      <DemoBlock ref={basicUsageRef} card title={t.demoTitleBasic}>
        <PasswordInput
          value={values.basicUsage}
          focused={current === 'basicUsage'}
          onFocus={() => handleFocus('basicUsage')}
          onBlur={handleBlur}
          onChange={(value) => handleChange(value, 'basicUsage')}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock ref={nativeInputRef} card title={t.demoTitleNative}>
        <PasswordInput
          value={values.nativeInput}
          focused={current === 'nativeInput'}
          onFocus={() => handleFocus('nativeInput')}
          onBlur={handleBlur}
          onChange={(value) => handleChange(value, 'nativeInput')}
        />
      </DemoBlock>
      <DemoBlock ref={customLengthRef} card title={t.demoTitleLength}>
        <PasswordInput
          value={values.customLength}
          length={4}
          focused={current === 'customLength'}
          onFocus={() => handleFocus('customLength')}
          onBlur={handleBlur}
          onChange={(value) => handleChange(value, 'customLength')}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock ref={addGutterRef} card title={t.demoTitleGutter}>
        <PasswordInput
          value={values.addGutter}
          gutter={10}
          focused={current === 'addGutter'}
          onFocus={() => handleFocus('addGutter')}
          onBlur={handleBlur}
          onChange={(value) => handleChange(value, 'addGutter')}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock ref={removeMaskRef} card title={t.demoTitlePlain}>
        <PasswordInput
          value={values.removeMask}
          mask={false}
          focused={current === 'removeMask'}
          onBlur={handleBlur}
          onFocus={() => handleFocus('removeMask')}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock ref={showInfoRef} card title={t.demoTitleInfo}>
        <PasswordInput
          value={values.showInfo}
          info={t.infoText}
          errorInfo={errorInfo}
          onFill={handleFill}
          focused={current === 'showInfo'}
          onFocus={() => handleFocus('showInfo')}
          onBlur={handleBlur}
          onChange={(value) => handleChange(value, 'showInfo')}
          keyboard={<NumberKeyboard />}
        />
      </DemoBlock>
      <DemoBlock ref={setValueRef} card title={t.demoTitleSetValue}>
        <Button
          type="primary"
          onClick={() => {
            psdRef.current?.resetValue();
          }}
          style={{
            margin: 'var(--rc-password-input-margin) var(--rc-padding-md)',
          }}
        >
          {t.clearButton}
        </Button>
        <PasswordInput
          ref={psdRef}
          value={values.setValue}
          mask={false}
          focused={current === 'setValue'}
          onBlur={handleBlur}
          onFocus={() => handleFocus('setValue')}
        />
      </DemoBlock>
    </DemoSection>
  );
};
