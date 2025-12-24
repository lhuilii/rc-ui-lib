import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Button, Rate, Field, Slider } from '../..';
import ConfigProvider from '..';
import { useConfigProviderDemoI18n } from './locale';
import './style.less';
import './font.less';

const themeVars = {
  rateIconFullColor: '#ffcc56',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#951fff',
  buttonPrimaryBorderColor: '#951fff',
  buttonPrimaryBackgroundColor: '#951fff',
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useConfigProviderDemoI18n();
  const [rate, updateRate] = useState(4);
  const [slider, updateSlider] = useState(50);
  return (
    <DemoSection className="demo-config-prodiver">
      <DemoBlock title={t.demoTitleDefault}>
        <Field label={t.fieldRate}>
          <Rate value={rate} onChange={updateRate} />
        </Field>
        <Field label={t.fieldSlider}>
          <Slider value={slider} onChange={updateSlider} />
        </Field>
        <div style={{ margin: 16 }}>
          <Button block round type="primary">
            {t.submit}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomTheme}>
        <ConfigProvider themeVars={themeVars}>
          <Field label={t.fieldRate}>
            <Rate value={rate} onChange={updateRate} />
          </Field>
          <Field label={t.fieldSlider}>
            <Slider value={slider} onChange={updateSlider} />
          </Field>
          <div style={{ margin: 16 }}>
            <Button block round type="primary">
              {t.submit}
            </Button>
          </div>
        </ConfigProvider>
      </DemoBlock>
      <DemoBlock title={t.demoTitleIcon}>
        <ConfigProvider iconPrefix="iconfont">
          <Field label={t.fieldRate}>
            <Rate icon="emojifill" voidIcon="emojilight" />
          </Field>
          <div style={{ margin: 16 }}>
            <Button icon="1111" block round type="primary">
              {t.submit}
            </Button>
          </div>
        </ConfigProvider>
      </DemoBlock>
    </DemoSection>
  );
};
