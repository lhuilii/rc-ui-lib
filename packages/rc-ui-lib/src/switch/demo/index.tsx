/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Dialog, Cell } from '../..';
import Switch from '..';
import { useSwitchDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useSwitchDemoI18n();

  const [value, setValue] = useState(false);

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Switch defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Switch disabled defaultChecked />
      </DemoBlock>
      <DemoBlock title={t.demoTitleLoading}>
        <Switch loading defaultChecked />
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <Switch size="24px" defaultChecked />
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
      </DemoBlock>
      <DemoBlock title={t.demoTitleAsync}>
        <Switch
          checked={value}
          onChange={(checked) => {
            Dialog.confirm({
              title: t.dialogTitle,
              message: t.dialogMessage,
            }).then(() => {
              setValue(checked);
            });
          }}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCell}>
        <Cell
          center
          title={t.cellTitle}
          rightIcon={
            <Switch
              size={24}
              defaultChecked
              onChange={(checked) => console.log(`switch to ${checked}`)}
            />
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};
