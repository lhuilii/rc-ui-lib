import React from 'react';
import { components } from 'site-mobile-demo';
import { Divider } from '../..';
import { useDividerDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useDividerDemoI18n();
  return (
    <DemoSection className="demo-divider">
      <DemoBlock title={t.demoTitleBasic}>
        <Divider />
      </DemoBlock>
      <DemoBlock title={t.demoTitleText}>
        <Divider>{t.text}</Divider>
      </DemoBlock>
      <DemoBlock title={t.demoTitleContentPosition}>
        <Divider contentPosition="left">{t.text}</Divider>
        <Divider contentPosition="right">{t.text}</Divider>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDashed}>
        <Divider dashed>{t.text}</Divider>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustom}>
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>
          {t.text}
        </Divider>
      </DemoBlock>
    </DemoSection>
  );
};
