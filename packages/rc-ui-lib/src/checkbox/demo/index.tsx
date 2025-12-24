/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { components } from 'site-mobile-demo';
import { Button, Cell, Toast } from '../..';
import { CheckboxGroupInstance } from '../PropsType';
import { Checkbox } from '..';
import { useCheckboxDemoI18n } from './locale';
import './style.less';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCheckboxDemoI18n();

  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(['a']);
  const [cellCheck, setCellCheck] = useState([]);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(false);

  const toggle = (name) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter((el) => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Checkbox checked={checked} onChange={setChecked}>
          {t.checkbox}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Checkbox defaultChecked disabled>
          {t.checkbox}
        </Checkbox>
        <Checkbox disabled>{t.checkbox}</Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleShape}>
        <Checkbox defaultChecked shape="square">
          {t.checkboxShape}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleColor}>
        <Checkbox defaultChecked checkedColor="#ee0a24">
          {t.checkboxColor}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSize}>
        <Checkbox defaultChecked iconSize="24px">
          {t.checkboxSize}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleIcon}>
        <Checkbox
          defaultChecked
          iconRender={({ checked: isActive }) => (
            <img alt="" src={isActive ? activeIcon : inactiveIcon} />
          )}
        >
          {t.checkboxIcon}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleLabelDisabled}>
        <Checkbox defaultChecked labelDisabled>
          {t.checkbox}
        </Checkbox>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDynamic}>
        <Checkbox
          checked={value}
          onChange={(val) => {
            Toast.loading({ forbidClick: true, duration: 0 });

            setTimeout(() => {
              Toast.clear();
              setValue(val);
            }, 500);
          }}
        >
          {t.checkbox}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={t.demoTitleGroup}>
        <Checkbox.Group onChange={(v) => console.log(v)} defaultValue={['a', 'b']}>
          <Checkbox name="a">{t.checkboxA}</Checkbox>
          <Checkbox name="b">{t.checkboxB}</Checkbox>
          <Checkbox name="c">{t.checkboxC}</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleHorizontal}>
        <Checkbox.Group defaultValue={[]} direction="horizontal">
          <Checkbox name="a">{t.checkboxA}</Checkbox>
          <Checkbox name="b">{t.checkboxB}</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleMax}>
        <Checkbox.Group defaultValue={[]} max={2}>
          <Checkbox name="a">{t.checkboxA}</Checkbox>
          <Checkbox name="b">{t.checkboxB}</Checkbox>
          <Checkbox name="c">{t.checkboxC}</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCheckAll}>
        <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
          <Checkbox name="a">{t.checkboxA}</Checkbox>
          <Checkbox name="b">{t.checkboxB}</Checkbox>
          <Checkbox name="c">{t.checkboxC}</Checkbox>
        </Checkbox.Group>
        <div className="demo-checkbox-buttons">
          <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
            {t.selectAll}
          </Button>
          <Button type="primary" onClick={() => ref.current?.toggleAll()}>
            {t.reverseSelect}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock title={t.demoTitleWithCell}>
        <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
          <Cell.Group>
            <Cell
              clickable
              title={t.radio1}
              icon="shop-o"
              onClick={() => toggle('a')}
              rightIcon={<Checkbox name="a" />}
            />
            <Cell
              clickable
              title={t.radio2}
              icon="shop-o"
              onClick={() => toggle('b')}
              rightIcon={<Checkbox name="b" />}
            />
          </Cell.Group>
        </Checkbox.Group>
      </DemoBlock>
    </DemoSection>
  );
};
