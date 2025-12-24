import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Flex, Button } from '../..';
import Circle from '..';
import { useCircleDemoI18n } from './locale';

import './style.less';

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCircleDemoI18n();
  const [rate, setRate] = useState(70);

  const add = () => {
    setRate((r) => format(r + 20));
  };

  const reduce = () => {
    setRate((r) => format(r - 20));
  };

  return (
    <DemoSection className="demo-circle">
      <DemoBlock title={t.demoTitleBasic}>
        <Circle rate={rate} text={`${rate}%`} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleStyle}>
        <Circle strokeWidth={60} rate={rate} text={t.width} />
        <Circle color="#ee0a24" layerColor="#ebedf0" rate={rate} text={t.color} />
        <Circle
          color={{
            '0%': '#3fecff',
            '100%': '#6149f6',
          }}
          rate={rate}
          text={t.gradient}
        />
        <Circle
          color="#07c160"
          clockwise={false}
          rate={rate}
          text={t.counterclockwise}
          style={{ marginTop: 15 }}
        />
        <Circle
          color="#7232dd"
          clockwise={false}
          size={120}
          rate={rate}
          text={t.size}
          style={{ marginTop: 15 }}
        />

        <Flex style={{ marginTop: 15 }} align="center" justify="center">
          <Button.Group>
            <Button onClick={add} type="primary">
              {t.increase}
            </Button>
            <Button onClick={reduce} type="danger">
              {t.decrease}
            </Button>
          </Button.Group>
        </Flex>
      </DemoBlock>
      <DemoBlock title={t.demoTitleStartPosition}>
        <Circle startPosition="left" defaultRate={70} text={t.left} />
        <Circle startPosition="right" defaultRate={70} text={t.right} />
        <Circle startPosition="bottom" defaultRate={70} text={t.bottom} />
      </DemoBlock>
    </DemoSection>
  );
};
