import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import Rate from '..';
import { useRateDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const [value, setValue] = useState(3);
  const [value1, setValue1] = useState(3.5);
  const onChange = (v) => {
    setValue(v);
  };
  const { DemoBlock, DemoSection } = components;
  const t = useRateDemoI18n();
  return (
    <DemoSection className="demo-rat">
      <DemoBlock title={t.demoTitleBasic}>
        <Rate value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomIcon}>
        <Rate icon="fire" voidIcon="fire-o" value={value} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomStyle}>
        <Rate
          icon="fire"
          voidIcon="fire-o"
          color="#ffd21e"
          voidColor="#000"
          value={value}
          onChange={onChange}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleHalf}>
        <Rate
          allowHalf
          value={value1}
          onChange={(v) => {
            setValue1(v);
          }}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCount}>
        <Rate allowHalf value={value} count={8} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Rate allowHalf value={value} disabled onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleReadonlyDecimal}>
        <Rate allowHalf defaultValue={3.6} readonly onChange={onChange} />
      </DemoBlock>
    </DemoSection>
  );
};
