import React from 'react';
import { components } from 'site-mobile-demo';
import { Button } from '..';
import { useButtonDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useButtonDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <div className="demo-button-row">
          <Button type="primary">{t.primary}</Button>
          <Button type="info">{t.info}</Button>
          <Button type="default">{t.default}</Button>
        </div>
        <Button type="warning">{t.warning}</Button>
        <Button type="danger">{t.danger}</Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitlePlain}>
        <Button plain type="primary">
          {t.plainButton}
        </Button>
        <Button plain type="info">
          {t.plainButton}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleHairline}>
        <Button plain hairline type="primary">
          {t.hairlineButton}
        </Button>
        <Button plain hairline type="info">
          {t.hairlineButton}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Button disabled type="primary">
          {t.disabled}
        </Button>
        <Button disabled type="info">
          {t.disabled}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleLoading}>
        <Button loading type="primary" />
        <Button loading type="primary" loadingType="spinner" />
        <Button loading loadingText={t.loadingText} type="info" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleShape}>
        <Button square type="primary">
          {t.squareButton}
        </Button>
        <Button round type="info">
          {t.roundButton}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleIcon}>
        <Button icon="plus" type="primary" />
        <Button icon="plus" iconPosition="left" type="primary">
          {t.button}
        </Button>
        <Button icon="https://img.yzcdn.cn/vant/user-active.png" plain type="primary">
          {t.button}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <Button type="primary" size="large">
          {t.sizeLarge}
        </Button>
        <Button type="primary" size="normal">
          {t.sizeNormal}
        </Button>
        <Button type="primary" size="small">
          {t.sizeSmall}
        </Button>
        <Button type="primary" size="mini">
          {t.sizeMini}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleBlock}>
        <Button type="primary" block round>
          {t.block}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleShadow}>
        <Button type="primary" block shadow>
          {t.shadowButton}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <Button color="#7232dd">{t.solidColorButton}</Button>
        <Button color="#7232dd" plain>
          {t.solidColorButton}
        </Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
          {t.gradientButton}
        </Button>
      </DemoBlock>
      <DemoBlock title={t.demoTitleGroup}>
        <Button.Group>
          <Button icon="arrow-left" block>
            {t.prev}
          </Button>
          <Button icon="replay" block>
            {t.refresh}
          </Button>
          <Button icon="arrow" block>
            {t.next}
          </Button>
        </Button.Group>
      </DemoBlock>
    </DemoSection>
  );
};
