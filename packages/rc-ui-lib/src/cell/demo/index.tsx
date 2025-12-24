import React from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import { useCellDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCellDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Cell.Group>
          <Cell title={t.cell} value={t.content} />
          <Cell title={t.cell} value={t.content} label={t.label} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <Cell title={t.cell} value={t.content} size="large" />
        <Cell title={t.cell} value={t.content} label={t.label} size="large" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleIcon}>
        <Cell title={t.cell} icon="location-o" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleOnlyValue}>
        <Cell value={t.content} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleArrow}>
        <Cell title={t.cell} isLink />
        <Cell title={t.cell} isLink value={t.content} />
        <Cell title={t.cell} isLink arrowDirection="down" value={t.content} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleGroup}>
        <Cell.Group title={t.group1}>
          <Cell title={t.cell} value={t.content} />
        </Cell.Group>
        <Cell.Group title={t.group2}>
          <Cell title={t.cell} value={t.content} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCard}>
        <Cell.Group inset>
          <Cell title={t.cell} value={t.content} />
          <Cell title={t.cell} value={t.content} />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustom}>
        <Cell title={t.cell} icon="shop-o">
          <div>{t.customContent}</div>
        </Cell>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCenter}>
        <Cell center title={t.cell} value={t.content} label={t.label} />
      </DemoBlock>
    </DemoSection>
  );
};
