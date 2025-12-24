/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import ShareSheet from '..';
import './style.less';
import { useShareSheetDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useShareSheetDemoI18n();
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const show1 = () => setVisible1(true);
  const close1 = () => setVisible1(false);
  const show2 = () => setVisible2(true);
  const close2 = () => setVisible2(false);
  const show3 = () => setVisible3(true);
  const close3 = () => setVisible3(false);
  const show4 = () => setVisible4(true);
  const close4 = () => setVisible4(false);

  const options = [
    { name: t.optWechat, icon: 'wechat' },
    { name: t.optWeibo, icon: 'weibo' },
    { name: t.optCopyLink, icon: 'link' },
    { name: t.optPoster, icon: 'poster' },
    { name: t.optQrcode, icon: 'qrcode' },
  ];

  const optionsMuli = [
    [
      { name: t.optWechat, icon: 'wechat' },
      { name: t.optMoments, icon: 'wechat-moments' },
      { name: t.optWeibo, icon: 'weibo' },
      { name: t.optQQ, icon: 'qq' },
    ],
    [
      { name: t.optCopyLink, icon: 'link' },
      { name: t.optPoster, icon: 'poster' },
      { name: t.optQrcode, icon: 'qrcode' },
      { name: t.optMiniProgramCode, icon: 'weapp-qrcode' },
    ],
  ];

  const customOptions = [
    {
      name: t.optCustomName,
      icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
    },
    {
      name: t.optCustomName,
      icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
    },
    {
      name: t.optCustomName,
      icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
    },
  ];

  const descOptions = [
    { name: t.optWechat, icon: 'wechat' },
    { name: t.optWeibo, icon: 'weibo' },
    { name: t.optCopyLink, icon: 'link', description: t.sheetDesc },
    { name: t.optPoster, icon: 'poster' },
    { name: t.optQrcode, icon: 'qrcode' },
  ];
  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell isLink title={t.cellShowShareSheet} onClick={show1} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleMultiLine}>
        <Cell isLink title={t.cellShowShareSheet} onClick={show2} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustomIcon}>
        <Cell isLink title={t.cellShowShareSheet} onClick={show3} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleWithDesc}>
        <Cell isLink title={t.cellShowShareSheet} onClick={show4} />
      </DemoBlock>

      <ShareSheet
        visible={visible1}
        options={options}
        title={t.sheetTitle}
        onCancel={close1}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close1();
        }}
      />
      <ShareSheet
        visible={visible2}
        options={optionsMuli}
        title={t.sheetTitle}
        onCancel={close2}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close2();
        }}
      />
      <ShareSheet
        visible={visible3}
        options={customOptions}
        onCancel={close3}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close3();
        }}
      />

      <ShareSheet
        visible={visible4}
        options={descOptions}
        title={t.sheetTitle}
        description={t.sheetDesc}
        onCancel={close4}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close4();
        }}
      />
    </DemoSection>
  );
};
