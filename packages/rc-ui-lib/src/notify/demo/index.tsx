/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Icon, Flex } from '../..';
import Notify from '..';
import { useNotifyDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useNotifyDemoI18n();

  const [visible, setVisible] = useState(false);
  return (
    <DemoSection className="demo-notify">
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell title={t.cellBasic} isLink onClick={() => Notify.show(t.message)} />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleType}>
        <Cell
          title={t.cellTypePrimary}
          isLink
          onClick={() => Notify.show({ type: 'primary', message: t.message })}
        />
        <Cell
          title={t.cellTypeSuccess}
          isLink
          onClick={() => Notify.show({ type: 'success', message: t.message })}
        />
        <Cell
          title={t.cellTypeDanger}
          isLink
          onClick={() => Notify.show({ type: 'danger', message: t.message })}
        />
        <Cell
          title={t.cellTypeWarning}
          isLink
          onClick={() => Notify.show({ type: 'warning', message: t.message })}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustom}>
        <Cell
          title={t.cellCustomColor}
          isLink
          onClick={() =>
            Notify.show({ message: t.customColor, color: '#ad0000', background: '#ffe1e1' })
          }
        />
        <Cell
          title={t.cellCustomDuration}
          isLink
          onClick={() => Notify.show({ message: t.customDuration, duration: 1000 })}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleComponent}>
        <Cell title={t.cellComponent} isLink onClick={() => setVisible(true)} />
        <Notify visible={visible} type="success">
          <Flex style={{ width: '100%' }} align="center" justify="between">
            <div />
            <div>
              <Icon name="bell" style={{ marginRight: 4 }} />
              <span>{t.message}</span>
            </div>
            <Icon name="close" onClick={() => setVisible(false)} />
          </Flex>
        </Notify>
      </DemoBlock>
    </DemoSection>
  );
};
