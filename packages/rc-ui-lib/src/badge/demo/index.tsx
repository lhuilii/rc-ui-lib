import React from 'react';
import { components } from 'site-mobile-demo';
import { Badge, Icon } from '../..';
import { useBadgeDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useBadgeDemoI18n();
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title={t.demoTitleBasic}>
        <Badge content={5}>
          <div className="child" />
        </Badge>
        <Badge content={10}>
          <div className="child" />
        </Badge>
        <Badge content="hot">
          <div className="child" />
        </Badge>
        <Badge dot>
          <div className="child" />
        </Badge>
        <Badge content={10} offset={['2rem', -4]} position="bottom-right">
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title={t.demoTitleMax}>
        <Badge content={20} max={9}>
          <div className="child" />
        </Badge>
        <Badge content="99" max="20">
          <div className="child" />
        </Badge>
        <Badge content="9999" max="99">
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <Badge content={5} color="#1989fa">
          <div className="child" />
        </Badge>
        <Badge content={10} color="#1989fa">
          <div className="child" />
        </Badge>
        <Badge color="#1989fa" dot>
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title={t.demoTitleContent}>
        <Badge content={<Icon name="success" className="badge-icon" />}>
          <div className="child" />
        </Badge>
        <Badge content={<Icon name="cross" className="badge-icon" />}>
          <div className="child" />
        </Badge>
        <Badge content={<Icon name="down" className="badge-icon" />}>
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title={t.demoTitlePosition}>
        <Badge content={10} position="top-left">
          <div className="child" />
        </Badge>
        <Badge content={10} position="bottom-left">
          <div className="child" />
        </Badge>
        <Badge content={10} position="bottom-right">
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title={t.demoTitleStandalone}>
        <Badge content="20" style={{ marginRight: 16 }} />
        <Badge content="200" max="99" />
      </DemoBlock>
    </DemoSection>
  );
};
