import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import Progress from '..';
import { Button } from '../..';
import { useProgressDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value, setValue] = useState(50);
  const t = useProgressDemoI18n();

  const format = (rate) => Math.min(Math.max(rate, 0), 100);

  const add = () => {
    setValue((e) => format(e + 20));
  };

  const reduce = () => {
    setValue((e) => format(e - 20));
  };

  return (
    <DemoSection className="demo-slider">
      <DemoBlock title={t.demoTitleBasic}>
        <Progress percentage={50} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleStrokeWidth}>
        <Progress percentage={50} strokeWidth="8" />
      </DemoBlock>
      <DemoBlock title={t.demoTitleInactive}>
        <Progress inactive percentage={50} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomStyle}>
        <Progress pivotText={t.pivotOrange} color="#f2826a" percentage={25} />
        <Progress pivotText={t.pivotRed} color="#ee0a24" percentage={50} />
        <Progress
          percentage="75"
          pivotText={t.pivotPurple}
          pivotColor="#7232dd"
          color="linear-gradient(to right, #be99ff, #7232dd)"
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleTransition}>
        <Progress percentage={value} />
        <Button type="primary" size="small" onClick={add} text={t.btnIncrease} />
        <Button type="danger" size="small" onClick={reduce} text={t.btnDecrease} />
      </DemoBlock>
    </DemoSection>
  );
};
