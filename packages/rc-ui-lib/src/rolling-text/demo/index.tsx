import React, { useRef, useState } from 'react';
import { components } from 'site-mobile-demo';
import { RollingText, Button, Grid } from '../..';
import './style.less';
import type { RollingTextInstance } from '../PropsType';
import { useRollingTextDemoI18n } from './locale';

const textList = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff', 'ggggg'];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [isStart, setIsStart] = useState(false);
  const [isStart2, setIsStart2] = useState(false);
  const [isStart3, setIsStart3] = useState(false);
  const [isStart4, setIsStart4] = useState(false);

  const rollingTextRef = useRef<RollingTextInstance>();
  const t = useRollingTextDemoI18n();

  const start = () => {
    rollingTextRef.current.start();
  };

  const reset = () => {
    rollingTextRef.current.reset();
  };

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <RollingText startNum={0} targetNum={123} autoStart={isStart} />
        <div style={{ marginTop: '10px' }}>
          <Button onClick={() => setIsStart(true)} type="primary">
            {t.btnDown}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleDirection}>
        <RollingText startNum={0} targetNum={432} direction="up" autoStart={isStart2} />
        <div style={{ marginTop: '10px' }}>
          <Button onClick={() => setIsStart2(true)} type="primary">
            {t.btnUp}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleStopOrder}>
        <RollingText startNum={0} targetNum={54321} autoStart={isStart3} stopOrder="rtl" />
        <div style={{ marginTop: '10px' }}>
          <Button onClick={() => setIsStart3(true)} type="primary">
            {t.btnRoll}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleText}>
        <RollingText textList={textList} autoStart={isStart4} stopOrder="rtl" />
        <div style={{ marginTop: '10px' }}>
          <Button onClick={() => setIsStart4(true)} type="primary">
            {t.btnRoll}
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCustomStyle}>
        <RollingText
          className="my-rolling-text"
          startNum={12345}
          targetNum={54321}
          // autoStart={isStart5}
          height={54}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleManual}>
        <RollingText
          ref={rollingTextRef}
          className="my-rolling-text"
          startNum={12345}
          targetNum={54321}
          autoStart={false}
          height={54}
        />
        <Grid columnNum={2} style={{ marginTop: '10px' }}>
          <Grid.Item icon="play-circle-o" text={t.gridStart} onClick={start} />
          <Grid.Item icon="replay" text={t.gridReset} onClick={reset} />
        </Grid>
      </DemoBlock>
    </DemoSection>
  );
};
