import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast, Image, Button, Popup } from '../..';
import Swiper from '..';
import { useSwiperDemoI18n } from './locale';
import './style.less';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
  'https://img.yzcdn.cn/vant/apple-8.jpg',
];
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible, set] = useState(false);
  const t = useSwiperDemoI18n();

  const items = colors.map((color, index) => (
    <Swiper.Item key={color}>
      <div
        onClick={() => {
          Toast.info(t.toastClickCard(index));
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Swiper autoplayInterval={5000} defaultIndex={1}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleLazy}>
        <Swiper>
          {images.map((image) => (
            <Swiper.Item key={image}>
              <Image src={image} />
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleEvent}>
        <Swiper onIndexChange={(i) => Toast(t.toastCurrentIndex(i))}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleVertical}>
        <Swiper autoplayInterval={5000} direction="vertical" style={{ height: 150 }}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSlideSize}>
        <Swiper slideSize={80}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCenter}>
        <Swiper slideSize={80} trackOffset={10}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleVerticalCenter}>
        <Swiper style={{ height: 150 }} direction="vertical" slideSize={80} trackOffset={10}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title={t.demoTitleIndicator}>
        <Swiper
          indicator={(total, current) => (
            <div className="custom-indicator">
              {current + 1}/{total}
            </div>
          )}
        >
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title={t.demoTitlePopup}>
        <div className="p-default">
          <Button block round type="primary" onClick={() => set(true)}>
            {t.btnPopupSwiper}
          </Button>
        </div>
        <Popup
          className="demo-swipe-popup"
          visible={visible}
          onClose={() => set(false)}
          style={{ width: '100%' }}
        >
          <Swiper autoplayInterval={3000}>{items}</Swiper>
        </Popup>
      </DemoBlock>
    </DemoSection>
  );
};
