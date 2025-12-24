import React, { useRef } from 'react';
import { components } from 'site-mobile-demo';
import { Button } from '../..';
import Sticky from '..';
import { useStickyDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const container = useRef<HTMLDivElement>(null);
  const t = useStickyDemoI18n();

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Sticky>
          <Button type="primary" style={{ marginLeft: '15px' }}>
            {t.btnBasic}
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title={t.demoTitleOffsetTop}>
        <Sticky offsetTop={50}>
          <Button type="info" style={{ marginLeft: '115px' }}>
            {t.btnOffsetTop}
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title={t.demoTitleContainer}>
        <div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
          <Sticky container={container}>
            <Button type="warning" style={{ marginLeft: '215px' }}>
              {t.btnContainer}
            </Button>
          </Sticky>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleOffsetBottom}>
        <div style={{ height: 200 }} />
        <Sticky position="bottom" offsetBottom={50}>
          <Button type="info" style={{ marginLeft: '15px' }}>
            {t.btnOffsetBottom}
          </Button>
        </Sticky>
      </DemoBlock>
    </DemoSection>
  );
};
