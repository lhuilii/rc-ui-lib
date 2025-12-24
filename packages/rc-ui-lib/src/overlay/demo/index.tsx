import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Button, Overlay } from '../..';
import { useOverlayDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useOverlayDemoI18n();
  const [show, setShow] = useState<boolean>(false);
  const [showEmbedded, setShowEmbedded] = useState<boolean>(false);

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Button type="primary" onClick={() => setShow(true)}>
          {t.buttonShowOverlay}
        </Button>
        <Overlay visible={show} onClick={() => setShow(false)} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleEmbedded}>
        <Button type="primary" onClick={() => setShowEmbedded(true)}>
          {t.buttonEmbedded}
        </Button>
        <Overlay visible={showEmbedded} onClick={() => setShowEmbedded(false)}>
          <div className="wrapper">
            <div className="block" />
          </div>
        </Overlay>
      </DemoBlock>
    </DemoSection>
  );
};
