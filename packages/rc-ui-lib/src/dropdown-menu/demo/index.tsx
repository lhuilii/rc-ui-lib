import React, { useState, useRef } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Switch, Button } from '../..';
import Toast, { DropdownMenu } from '..';
import { DropdownMenuInstance } from '../PropsType';
import { useDropdownMenuDemoI18n } from './locale';
import './style.less';

const scrollList = () => {
  const arr = new Array(30).fill(1);
  return arr.map((item, index) => {
    return {
      text: `scroll${index}`,
      value: `${index}`,
    };
  });
};

export default (): React.ReactNode => {
  const t = useDropdownMenuDemoI18n();
  const option1 = [
    { text: t.optionAll, value: 0 },
    { text: t.optionNew, value: 1, icon: 'location-o' },
    {
      text: t.optionActivity,
      value: 2,
    },
  ];
  const option2 = [
    { text: t.optionDefaultOrder, value: 'a' },
    { text: t.optionHighRating, value: 'b' },
    { text: t.optionSales, value: 'c' },
  ];
  const [value, setValue] = useState<Record<string, string | number>>({});
  // const [menuValue, setMenuValue] = useState<Record<string, string | number>>({});
  const dropdownMenuRef = useRef<DropdownMenuInstance>(null);

  const { DemoBlock, DemoSection } = components;

  const onConfirm = (e) => {
    Toast(e);
    dropdownMenuRef.current?.close();
  };

  return (
    <DemoSection className="demo-badge">
      <DemoBlock title={t.demoTitleBasic}>
        <DropdownMenu
          onChange={(v) => {
            console.log(v as any);
          }}
        >
          <DropdownMenu.Item
            name="item1"
            defaultValue={{ text: t.optionAll, value: 0 }}
            value={value}
            options={option1}
            onChange={(v) => setValue(v as any)}
          />
          <DropdownMenu.Item
            name="item2"
            defaultValue={{ text: t.optionDefaultOrder, value: 'a' }}
            value={value}
            options={option2}
            onChange={(v) => setValue(v as any)}
          />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomContent}>
        <DropdownMenu ref={dropdownMenuRef}>
          <DropdownMenu.Item name="item1" options={option1} />
          <DropdownMenu.Item title={t.filterTitle} name="item2">
            <Cell center title={t.freeShipping} rightIcon={<Switch size={24} />} />
            <Cell center title={t.groupBuy} rightIcon={<Switch size={24} />} />
            <div
              style={{
                height: '40px',
                paddingTop: '20px',
                paddingRight: '15px',
                paddingBottom: '20px',
                paddingLeft: '15px',
              }}
            >
              <Button type="danger" block round onClick={onConfirm}>
                {t.confirm}
              </Button>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title={t.demoTitleActiveColor}>
        <DropdownMenu activeColor="#1900ff" zIndex="3000">
          <DropdownMenu.Item name="item1" options={option1} teleport={document.body} />
          <DropdownMenu.Item name="item2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDirection}>
        <DropdownMenu direction="up" activeColor="#1900ff">
          <DropdownMenu.Item name="item1" options={option1} />
          <DropdownMenu.Item name="item2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <DropdownMenu>
          <DropdownMenu.Item disabled name="item1" options={option1} />
          <DropdownMenu.Item disabled name="item2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title={t.demoTitleScroll}>
        <DropdownMenu direction="up">
          <DropdownMenu.Item name="item1" options={scrollList()} />
        </DropdownMenu>
      </DemoBlock>
    </DemoSection>
  );
};
