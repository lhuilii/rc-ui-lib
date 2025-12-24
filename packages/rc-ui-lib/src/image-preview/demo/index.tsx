import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Toast, ImagePreview } from '../..';
import { useImagePreviewDemoI18n } from './locale';
import './style.less';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useImagePreviewDemoI18n();
  const [visible, setVisible] = useState(false);
  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell title={t.cellPreviewImage} isLink onClick={() => ImagePreview.open({ images })} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleOptions}>
        <Cell
          title={t.cellStartPosition}
          isLink
          onClick={() => ImagePreview.open({ images, startPosition: 2 })}
        />
        <Cell
          title={t.cellShowClose}
          isLink
          onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
        />
        <Cell
          title={t.cellOnClose}
          isLink
          onClick={() =>
            ImagePreview.open({
              images,
              startPosition: 2,
              onClose: () => {
                Toast.info(t.toastClosePreview);
              },
            })
          }
        />
        <Cell
          title={t.cellIndicators}
          isLink
          onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleAsync}>
        <Cell
          title={t.cellPreviewImage}
          isLink
          onClick={() => {
            const destory = () => ImagePreview.open({ images });
            setTimeout(() => destory(), 2000);
          }}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleComponent}>
        <Cell title={t.cellComponent} isLink onClick={() => setVisible(true)} />
      </DemoBlock>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </DemoSection>
  );
};
