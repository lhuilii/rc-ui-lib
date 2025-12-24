/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Dialog, Cell, Toast } from '../..';
import { useDialogDemoI18n } from './locale';

import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useDialogDemoI18n();
  const [show, setShow] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell
          title={t.cellAlert}
          isLink
          onClick={() =>
            Dialog.confirm({
              title: t.title,
              message: t.message,
              onConfirm: () => console.log('onConfirm'),
              onCancel: () => console.log('onCancel'),
              onClosed: () => console.log('onClosed'),
            })
          }
        />
        <Cell
          title={t.cellAlertNoTitle}
          isLink
          onClick={() =>
            Dialog.alert({
              message: t.message,
            })
          }
        />
        <Cell
          title={t.cellConfirm}
          isLink
          onClick={() =>
            Dialog.confirm({
              title: t.title,
              message: t.message,
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitlePromise}>
        <Cell
          title={t.cellAlertText}
          isLink
          onClick={async () => {
            await Dialog.alert({
              title: t.title,
              message: t.message,
            });
            console.log('confirm');
          }}
        />
        <Cell
          title={t.cellConfirmText}
          isLink
          onClick={async () => {
            try {
              await Dialog.confirm({
                title: t.title,
                message: t.message,
              });
              console.log('confirm');
            } catch (error) {
              console.log('cancel');
            }
          }}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleRoundButton}>
        <Cell
          title={t.cellRoundButton}
          isLink
          onClick={() =>
            Dialog.alert({
              title: t.title,
              theme: 'round-button',
              showCancelButton: true,
              message: t.message,
            })
          }
        />
        <Cell
          title={t.cellRoundButtonNoTitle}
          isLink
          onClick={() =>
            Dialog.alert({
              message: t.message,
              theme: 'round-button',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleOnClosed}>
        <Cell
          title={t.cellOnClosed}
          isLink
          onClick={() =>
            Dialog.alert({
              title: t.title,
              message: t.message,
              onClosed: () => console.log('onClosed'),
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCloseIcon}>
        <Cell
          title={t.cellCloseIcon}
          isLink
          onClick={() =>
            Dialog.alert({
              title: t.title,
              closeable: true,
              theme: 'round-button',
              message: t.message,
            })
          }
        />
        <Cell
          title={t.cellCustomCloseIcon}
          isLink
          onClick={() =>
            Dialog.alert({
              title: t.title,
              closeable: true,
              closeIcon: 'close',
              theme: 'round-button',
              message: t.message,
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustom}>
        <Cell
          title={t.cellCustomContent}
          isLink
          onClick={() =>
            Dialog.alert({
              title: t.title,
              closeable: true,
              theme: 'round-button',
              message: (
                <div style={{ textAlign: 'center', margin: '16px' }}>
                  {t.customMessagePrefix}
                  {t.message}
                </div>
              ),
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleAsync}>
        <Cell
          title={t.cellAsync}
          isLink
          onClick={() =>
            Dialog.show({
              title: t.title,
              message: t.asyncMessage,
              showCancelButton: true,
              onCancel: () => {
                return new Promise((res) => {
                  setTimeout(() => {
                    res(true);
                    Toast.success({ message: t.asyncCancelToast });
                  }, 3000);
                });
              },
              onConfirm: () => {
                return new Promise((res) => {
                  setTimeout(() => {
                    res(true);
                    Toast.success({ message: t.asyncConfirmToast });
                  }, 3000);
                });
              },
            })
          }
        />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleComponent}>
        <Cell title={t.cellComponent} isLink onClick={() => setShow(true)} />
      </DemoBlock>

      <Dialog
        visible={show}
        title={t.title}
        showCancelButton
        onConfirm={() => {
          Toast.info(t.confirmButtonToast);
          setShow(false);
        }}
        onCancel={() => setShow(false)}
      >
        <img className="demo-dialog-img" src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
      </Dialog>
    </DemoSection>
  );
};
