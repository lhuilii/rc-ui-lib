import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import Watermark from '..';
import { Button } from '../..';
import { useWatermarkDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [fullPage, setFullPage] = useState(false);
  const t = useWatermarkDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleText}>
        <div className="demo-watermark-wrapper">
          <Watermark content="rc-ui-lib" />
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleImage}>
        <div className="demo-watermark-wrapper">
          <Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" opacity={0.2} />
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleGap}>
        <div className="demo-watermark-wrapper">
          <Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" gapX={30} gapY={10} />
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleRotate}>
        <div className="demo-watermark-wrapper">
          <Watermark
            image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png"
            rotate="22"
            opacity={0.2}
          />
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleFullPage}>
        <Button type="primary" onClick={() => setFullPage((v) => !v)}>
          {t.btnToggle}
        </Button>
        <div className="demo-watermark-wrapper">
          <Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" fullPage={fullPage} />
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleHTML}>
        <div className="demo-watermark-wrapper">
          <Watermark width={150}>
            <div style={{ background: 'linear-gradient(45deg, #000 0, #000 50%, #fff 50%)' }}>
              <p style={{ mixBlendMode: 'difference', color: '#fff' }}>rc watermark</p>
            </div>
          </Watermark>
        </div>
      </DemoBlock>
    </DemoSection>
  );
};
