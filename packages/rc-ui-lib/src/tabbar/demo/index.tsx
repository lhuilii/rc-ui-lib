import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast } from '../..';
import Tabbar from '..';
import { useTabbarDemoI18n } from './locale';
import './style.less';

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [name, setName] = useState('setting');
  const t = useTabbarDemoI18n();
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title={t.demoTitleBasic}>
        <Tabbar>
          <Tabbar.Item icon="home-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="search">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="friends-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="setting-o">{t.tabLabel}</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleName}>
        <Tabbar
          value={name}
          onChange={(v) => {
            setName(v as string);
          }}
        >
          <Tabbar.Item name="home" icon="home-o">
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item name="search" icon="search">
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item name="firends" icon="friends-o">
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item name="setting" icon="setting-o">
            {t.tabLabel}
          </Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleBadge}>
        <Tabbar>
          <Tabbar.Item icon="home-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item badge={{ dot: true }} icon="search">
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item badge={{ content: 5 }} icon="friends-o">
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item badge={{ content: 20 }} icon="setting-o">
            {t.tabLabel}
          </Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomIcon}>
        <Tabbar>
          <Tabbar.Item icon={(ac) => <img alt="" src={ac ? icon.active : icon.inactive} />}>
            {t.tabLabel}
          </Tabbar.Item>
          <Tabbar.Item icon="friends-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="setting-o">{t.tabLabel}</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomColor}>
        <Tabbar activeColor="#f44336" inactiveColor="#000">
          <Tabbar.Item icon="home-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="search">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="friends-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="setting-o">{t.tabLabel}</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleEvent}>
        <Tabbar onChange={(v) => Toast.info(t.toastLabel(+v))}>
          <Tabbar.Item icon="home-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="search">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="friends-o">{t.tabLabel}</Tabbar.Item>
          <Tabbar.Item icon="setting-o">{t.tabLabel}</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
    </DemoSection>
  );
};
