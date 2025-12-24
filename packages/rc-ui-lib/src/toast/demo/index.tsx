/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../../cell';
import Toast from '..';
import { useToastDemoI18n } from './locale';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useToastDemoI18n();

  const onDynicUpdate = () => {
    let remain = 4;
    let timer;
    const update = Toast({
      message: t.toastRemain(remain + 1),
      duration: 5000,
      onClose: () => clearInterval(timer),
    });
    timer = setInterval(() => {
      update.config({ message: t.toastRemain(remain--) });
    }, 1000);
  };

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell title={t.cellText} isLink onClick={() => Toast.info(t.toastInfo)} />
        <Cell
          title={t.cellLoading}
          isLink
          onClick={() => {
            Toast.loading({
              message: t.toastLoading,
              forbidClick: false,
              duration: 2000,
            });
          }}
        />
        <Cell title={t.cellSuccess} isLink onClick={() => Toast.success(t.toastSuccess)} />
        <Cell title={t.cellFail} isLink onClick={() => Toast.fail(t.toastFail)} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDynamic}>
        <Cell title={t.cellDynamic} isLink onClick={onDynicUpdate} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustomIcon}>
        <Cell
          title={t.cellCustomIcon}
          isLink
          onClick={() =>
            Toast({
              message: t.toastCustomIcon,
              icon: 'fire-o',
            })
          }
        />

        <Cell
          title={t.cellCustomImage}
          isLink
          onClick={() =>
            Toast({
              message: t.toastCustomImage,
              icon: 'https://rancui.github.io/rc-ui-lib/rc-ui-lib.png',
            })
          }
        />
        <Cell
          title={t.cellCustomLoading}
          isLink
          onClick={() =>
            Toast.loading({
              message: t.toastLoading,
              forbidClick: true,
              loadingType: 'spinner',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustomPosition}>
        <Cell
          title={t.cellTop}
          isLink
          onClick={() =>
            Toast({
              message: t.toastTop,
              position: 'top',
            })
          }
        />
        <Cell
          title={t.cellBottom}
          isLink
          onClick={() =>
            Toast({
              message: t.toastBottom,
              position: 'bottom',
            })
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};
