import React from 'react';
import { components } from 'site-mobile-demo';
import { Swiper } from '../..';
import './style.less';
import NoticeBar from '..';
import { useNoticeBarDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useNoticeBarDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <NoticeBar leftIcon="volume-o" text={t.text} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleScrollable}>
        <NoticeBar scrollable text={t.text} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleWrapable}>
        <NoticeBar wrapable text={t.text} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleMode}>
        <NoticeBar mode="closeable">{t.textShort}</NoticeBar>
        <NoticeBar mode="link">{t.textShort}</NoticeBar>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustom}>
        <NoticeBar
          leftIcon="info-o"
          background="rgb(236, 249, 255)"
          color="rgb(25, 137, 250)"
          text={t.textShort}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleVertical}>
        <NoticeBar leftIcon="volume-o">
          <Swiper
            autoplayInterval={1000}
            indicator={false}
            direction="vertical"
            className="notice-swipe"
          >
            <Swiper.Item>{t.content1}</Swiper.Item>
            <Swiper.Item>{t.content2}</Swiper.Item>
            <Swiper.Item>{t.content3}</Swiper.Item>
          </Swiper>
        </NoticeBar>
      </DemoBlock>
    </DemoSection>
  );
};
