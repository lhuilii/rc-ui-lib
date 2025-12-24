import React from 'react';
import { components } from 'site-mobile-demo';
import { Loading } from '../..';
import { useLoadingDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useLoadingDemoI18n();

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleType}>
        <Loading />
        <Loading type="spinner" />
        <Loading type="ball" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <Loading color="#1989fa" />
        <Loading type="spinner" color="#2879ff" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <Loading size="24" />
        <Loading type="spinner" size="24" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleText}>
        <Loading size="24px">{t.loadingText}</Loading>
      </DemoBlock>
      <DemoBlock title={t.demoTitleVertical}>
        <Loading size="24px" vertical>
          {t.loadingText}
        </Loading>
      </DemoBlock>
      <DemoBlock title={t.demoTitleTextColor}>
        <Loading size="24px" vertical color="#f44336">
          {t.loadingText}
        </Loading>
        <Loading size="24px" vertical textColor="#f44336">
          {t.loadingText}
        </Loading>
      </DemoBlock>
    </DemoSection>
  );
};
