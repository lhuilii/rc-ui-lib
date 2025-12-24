/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Toast } from '../..';
import Tabs from '..';
import { useTabsDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useTabsDemoI18n();

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Tabs onClickTab={(tab) => console.log(tab)}>
          {[1, 2, 3, 4].map((item) => (
            <Tabs.TabPane key={item} title={t.tabLabel(item)}>
              {t.tabContent(item)}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleName}>
        <Tabs active="c" onClickTab={(tab) => console.log(tab)}>
          {['a', 'b', 'c'].map((item, index) => (
            <Tabs.TabPane key={item} title={t.tabLabel(index + 1)} name={item}>
              {t.tabContent(index + 1)}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleScroll}>
        <Tabs onClickTab={(tab) => console.log(tab)}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Tabs.TabPane key={item} title={t.tabLabel(item)}>
              {t.tabContent(item)}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Tabs onClickTab={(tab) => console.log(tab)}>
          <Tabs.TabPane title={t.tabLabel(1)}>{t.tabContent(1)}</Tabs.TabPane>
          <Tabs.TabPane title={t.tabLabel(2)} disabled>
            {t.tabContent(2)}
          </Tabs.TabPane>
          <Tabs.TabPane title={t.tabLabel(3)}>{t.tabContent(3)}</Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleStyle}>
        <Tabs type="card" onClickTab={(tab) => console.log(tab)}>
          {[1, 2, 3].map((item) => (
            <Tabs.TabPane key={item} title={t.tabLabel(item)}>
              {t.tabContent(item)}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleClick} onClickTab={(tab) => console.log(tab)}>
        <Tabs onClick={(name, title) => Toast(title)}>
          <Tabs.TabPane title={t.tabLabel(1)}>{t.tabContent(1)}</Tabs.TabPane>
          <Tabs.TabPane title={t.tabLabel(2)}>{t.tabContent(2)}</Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSticky}>
        <Tabs active={2} sticky onClickTab={(tab) => console.log(tab)}>
          {[1, 2, 3, 4].map((item) => (
            <Tabs.TabPane key={item} title={t.tabLabel(item)}>
              <div style={{ height: '50vh' }}>{t.tabContent(item)}</div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={t.demoTitleScrollspy}>
        <Tabs
          sticky
          scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}
          onChange={(name) => console.log('change', name)}
          onClickTab={(tab) => console.log(tab)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Tabs.TabPane key={item} title={t.tabLabel(item)}>
              <div style={{ height: '50vh' }}>{t.tabContent(item)}</div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </DemoBlock>
    </DemoSection>
  );
};
