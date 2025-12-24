import React from 'react';
import { components } from 'site-mobile-demo';
import TextEllipsis from '..';
import { useTextEllipsisDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useTextEllipsisDemoI18n();

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <TextEllipsis content={t.demoText} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleExpand}>
        <TextEllipsis content={t.demoText} expandText={t.expandText} collapseText={t.collapseText} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleRows}>
        <TextEllipsis
          content={t.demoText}
          rows="3"
          expandText={t.expandText}
          collapseText={t.collapseText}
        />
      </DemoBlock>
    </DemoSection>
  );
};
