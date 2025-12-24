import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Flex, Typography, Switch } from '../..';
import Skeleton from '..';
import { useSkeletonDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [loading, setLoading] = useState(true);
  const t = useSkeletonDemoI18n();
  return (
    <DemoSection className="demo-skeleton">
      <DemoBlock title={t.demoTitleBasic}>
        <Skeleton title />
      </DemoBlock>
      <DemoBlock title={t.demoTitleAvatar}>
        <Skeleton avatar />
      </DemoBlock>
      <DemoBlock title={t.demoTitleHeight}>
        <Skeleton title rowHeight={10} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleChildren}>
        <Switch checked={loading} onChange={setLoading} size={24} />
        <Skeleton avatar loading={loading}>
          <Flex className="demo-preview">
            <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
            <div className="demo-content">
              <Typography.Title>{t.aboutTitle}</Typography.Title>
              <Typography.Text type="secondary">
                {t.aboutContent}
              </Typography.Text>
            </div>
          </Flex>
        </Skeleton>
      </DemoBlock>
    </DemoSection>
  );
};
