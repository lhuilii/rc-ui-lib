import React from 'react';
import { components } from 'site-mobile-demo';
import Flex from '..';
import { useFlexDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useFlexDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Flex justify="center" align="center">
          <Flex.Item span={12}>span: 12</Flex.Item>
          <Flex.Item span={12}>span: 12</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </DemoBlock>
      <DemoBlock title={t.demoTitleGutter}>
        <Flex gutter={16}>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDirection}>
        <Flex direction="row">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
        <Flex direction="row-reverse">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};
