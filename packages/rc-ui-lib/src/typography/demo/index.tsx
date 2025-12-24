import React from 'react';
import { components } from 'site-mobile-demo';
import Typography from '..';
import { useTypographyDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useTypographyDemoI18n();
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title={t.demoTitleText}>
        <Typography.Text>
          In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
          <Typography.Text delete>desktop</Typography.Text>applications development,
          <Typography.Text type="primary"> many different</Typography.Text> design specs and{' '}
          <Typography.Text underline>implementations</Typography.Text>would be{' '}
          <Typography.Text type="warning">involved</Typography.Text>
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title={t.demoTitleTypes}>
        <Typography.Text type="danger">{t.textSample}</Typography.Text>
        <Typography.Text type="primary">{t.textSample}</Typography.Text>
        <Typography.Text type="warning">{t.textSample}</Typography.Text>
        <Typography.Text type="secondary">{t.textSample}</Typography.Text>
      </DemoBlock>
      <DemoBlock title={t.demoTitleEllipsis}>
        <Typography.Text ellipsis>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title={t.demoTitleMultiEllipsis}>
        <Typography.Text ellipsis={2}>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title={t.demoTitleTitle}>
        <Typography.Title level={1}>{t.titleLevel1}</Typography.Title>
        <Typography.Title level={2}>{t.titleLevel2}</Typography.Title>
        <Typography.Title level={3}>{t.titleLevel3}</Typography.Title>
        <Typography.Title level={4}>{t.titleLevel4}</Typography.Title>
        <Typography.Title level={5}>{t.titleLevel5}</Typography.Title>
      </DemoBlock>
      <DemoBlock title={t.demoTitleLink}>
        <Typography.Link>{t.linkText}</Typography.Link>
      </DemoBlock>
    </DemoSection>
  );
};
