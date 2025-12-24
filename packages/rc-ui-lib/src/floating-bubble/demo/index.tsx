import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import FloatingBubble from '..';
import './style.less';
import { Tabs, Toast } from '../..';
import { useFloatingBubbleDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useFloatingBubbleDemoI18n();
  const [active, setActive] = useState(0);
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Tabs active={active} onChange={(name: number) => setActive(name)}>
          <Tabs.TabPane title={t.tabTitleBasic}>
            {active === 0 && (
              <FloatingBubble icon="chat-o" onClick={() => Toast(t.clickToast)} />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane title={t.tabTitleDrag}>
            {active === 1 && <FloatingBubble icon="chat-o" axis="xy" magnetic="x" />}
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
    </DemoSection>
  );
};
