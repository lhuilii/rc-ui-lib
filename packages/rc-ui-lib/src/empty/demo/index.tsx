import React from 'react';
import { components } from 'site-mobile-demo';
import { Empty, Tabs, Button } from '../..';
import { useEmptyDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useEmptyDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Empty image="default" description={t.description} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleImageType}>
        <Tabs>
          <Tabs.TabPane title={t.tabError}>
            <Empty image="error" description={t.description} />
          </Tabs.TabPane>
          <Tabs.TabPane title={t.tabError}>
            <Empty image="network" description={t.description} />
          </Tabs.TabPane>
          <Tabs.TabPane title={t.tabError}>
            <Empty image="search" description={t.description} />
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomImage}>
        <Empty
          className="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description={t.description}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleBottom}>
        <Empty description={t.description}>
          <Button round type="primary" className="bottom-button">
            {t.button}
          </Button>
        </Empty>
      </DemoBlock>
    </DemoSection>
  );
};
