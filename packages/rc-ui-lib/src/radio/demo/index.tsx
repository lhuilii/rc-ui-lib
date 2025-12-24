import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Toast } from '../..';
import { Radio } from '..';
import { useRadioDemoI18n } from './locale';
import './style.less';

let timer;

export default (): React.ReactNode => {
  const [value, setValue] = useState('1');
  const [cellValue, setCellValue] = useState('');

  const { DemoBlock, DemoSection } = components;
  const t = useRadioDemoI18n();

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1">
            <Radio name="1">{t.radio1}</Radio>
            <Radio name="2">{t.radio2}</Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleHorizontal}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1" direction="horizontal">
            <Radio name="1">{t.radio1}</Radio>
            <Radio name="2">{t.radio2}</Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1" disabled>
            <Radio name="1">{t.radio1}</Radio>
            <Radio name="2">{t.radio2}</Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleShape}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1">
            <Radio name="1" shape="square">
              {t.radio1}
            </Radio>
            <Radio name="2" shape="square">
              {t.radio2}
            </Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1">
            <Radio name="1" checkedColor="#ee0a24">
              {t.radio1}
            </Radio>
            <Radio name="2" checkedColor="#ee0a24">
              {t.radio2}
            </Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1">
            <Radio name="1" iconSize="24px">
              {t.radio1}
            </Radio>
            <Radio name="2" iconSize="24px">
              {t.radio2}
            </Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleLabelDisabled}>
        <div className="demo-radio-group">
          <Radio.Group defaultValue="1">
            <Radio name="1" labelDisabled>
              {t.radio1}
            </Radio>
            <Radio name="2" labelDisabled>
              {t.radio2}
            </Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleAsync}>
        <div className="demo-radio-group">
          <Radio.Group
            value={value}
            onChange={(val) => {
              Toast.loading({ forbidClick: true });
              clearTimeout(timer);
              timer = setTimeout(() => {
                Toast.clear();
                setValue(val as string);
              }, 500);
            }}
          >
            <Radio name="1" labelDisabled>
              {t.radio1WithSpace}
            </Radio>
            <Radio name="2" labelDisabled>
              {t.radio2WithSpace}
            </Radio>
          </Radio.Group>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCell}>
        <Radio.Group value={cellValue}>
          <Cell.Group>
            <Cell
              clickable
              title={t.cellRadio1}
              icon="shop-o"
              onClick={() => setCellValue('1')}
              rightIcon={<Radio name="1" />}
            />
            <Cell
              clickable
              title={t.cellRadio2}
              icon="shop-o"
              onClick={() => setCellValue('2')}
              rightIcon={<Radio name="2" />}
            />
          </Cell.Group>
        </Radio.Group>
      </DemoBlock>
    </DemoSection>
  );
};
