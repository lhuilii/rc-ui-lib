/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useMemo } from 'react';
import { components } from 'site-mobile-demo';
import { Tabs, Toast } from '../..';
import './style.less';
import PullRefresh from '../index';
import { usePullRefreshDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoSection } = components;
  const [count, setCount] = useState<number>(0);
  const t = usePullRefreshDemoI18n();
  const tips = useMemo(() => {
    if (count) {
      return t.tipsWithCount(count);
    }
    return t.tipsDefault;
  }, [count, t]);

  const onRefresh = (showToast) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info(t.toastSuccess);
        }
        setCount(count + 1);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <DemoSection>
      <Tabs>
        <Tabs.TabPane title={t.tabBasic}>
          <PullRefresh onRefresh={() => onRefresh(true)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabSuccess}>
          <PullRefresh successText={t.successText} onRefresh={() => onRefresh(false)}>
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabCustom}>
          <PullRefresh
            headHeight={80}
            pullingText={({ distance }) => (
              <img
                className="doge"
                src="https://img.yzcdn.cn/vant/doge.png"
                style={{ transform: `scale(${distance / 80})` }}
              />
            )}
            loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
            loadingText={() => (
              <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
            )}
            onRefresh={() => onRefresh(true)}
          >
            <p>{tips}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
