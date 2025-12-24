import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import Tag from '..';
import { useTagDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useTagDemoI18n();

  const [visible, setVisible] = useState(true);

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell title={t.cellTypePrimary}>
          <Tag type="primary">{t.tagLabel}</Tag>
        </Cell>
        <Cell title={t.cellTypeSuccess}>
          <Tag type="success">{t.tagLabel}</Tag>
        </Cell>
        <Cell title={t.cellTypeDanger}>
          <Tag type="danger">{t.tagLabel}</Tag>
        </Cell>
        <Cell title={t.cellTypeWarning}>
          <Tag type="warning">{t.tagLabel}</Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleStyle}>
        <Cell title={t.cellStylePlain}>
          <Tag plain type="primary">
            {t.tagLabel}
          </Tag>
        </Cell>
        <Cell title={t.cellStyleRound}>
          <Tag round type="primary">
            {t.tagLabel}
          </Tag>
        </Cell>
        <Cell title={t.cellStyleMark}>
          <Tag mark type="primary">
            {t.tagLabel}
          </Tag>
        </Cell>
        <Cell title={t.cellStyleCloseable}>
          <Tag
            visible={visible}
            plain
            closeable
            size="medium"
            type="primary"
            onClose={() => setVisible(false)}
          >
            {t.tagLabel}
          </Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleSize}>
        <Cell title={t.cellSizeSmall}>
          <Tag type="primary">{t.tagLabel}</Tag>
        </Cell>
        <Cell title={t.cellSizeMedium}>
          <Tag size="medium" type="primary">
            {t.tagLabel}
          </Tag>
        </Cell>
        <Cell title={t.cellSizeLarge}>
          <Tag size="large" type="primary">
            {t.tagLabel}
          </Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleColor}>
        <Cell title={t.cellColorBg}>
          <Tag color="#7232dd">{t.tagLabel}</Tag>
        </Cell>
        <Cell title={t.cellColorText}>
          <Tag color="#ffe1e1" textColor="#ad0000">
            {t.tagLabel}
          </Tag>
        </Cell>
        <Cell title={t.cellColorPlain}>
          <Tag color="#7232dd" plain>
            {t.tagLabel}
          </Tag>
        </Cell>
      </DemoBlock>
    </DemoSection>
  );
};
