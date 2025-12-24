import React from 'react';
import { components } from 'site-mobile-demo';
import SwipeCell from '..';
import { Dialog, Button, Cell } from '../..';
import { useSwipeCellDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoSection, DemoBlock } = components;
  const t = useSwipeCellDemoI18n();

  const beforeClose = ({ position, instance }) => {
    switch (position) {
      case 'right':
        Dialog.confirm({
          title: t.dialogTitle,
        }).then(() => {
          instance.close();
        });
        break;
      case 'left':
      case 'cell':
      case 'outside':
        instance.close();
        break;
      default:
        break;
    }
  };

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <SwipeCell
          left={<Button square type="primary" text={t.btnSelect} />}
          right={
            <>
              <Button square type="danger" text={t.btnDelete} />
              <Button square type="primary" text={t.btnCollect} />
            </>
          }
        >
          <Cell title={t.cellTitle} value={t.cellValue} />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <SwipeCell
          disabled
          left={<Button square type="primary" text={t.btnSelect} />}
          right={
            <>
              <Button square type="danger" text={t.btnDelete} />
              <Button square type="primary" text={t.btnCollect} />
            </>
          }
        >
          <Cell title={t.cellTitle} value={t.cellValue} />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title={t.demoTitleAsync}>
        <SwipeCell
          beforeClose={beforeClose}
          left={<Button square type="primary" text={t.btnSelect} />}
          right={<Button square type="danger" text={t.btnDelete} />}
        >
          <Cell title={t.cellTitle} value={t.cellValue} />
        </SwipeCell>
      </DemoBlock>
    </DemoSection>
  );
};
