import React, { useRef, useState } from 'react';
import { components } from 'site-mobile-demo';
import { CurrentTime } from '../../hooks/use-count-down';
import { CountDown, Grid } from '../..';
import { CountDownInstance } from '../PropsType';
import { useCountDownDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCountDownDemoI18n();
  const [time] = useState(30 * 60 * 60 * 1000);
  const CountDownRef = useRef<CountDownInstance>(null);

  const renderChildren = (timeData: CurrentTime) => {
    return (
      <>
        <span className="block">{timeData.hours}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.minutes}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.seconds}</span>
      </>
    );
  };
  const start = () => {
    CountDownRef.current?.start();
  };
  const pause = () => {
    CountDownRef.current?.pause();
  };
  const reset = () => {
    CountDownRef.current?.reset();
  };

  return (
    <DemoSection className="demo-count-down">
      <DemoBlock title={t.demoTitleBasic}>
        <CountDown time={time} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleFormat}>
        <CountDown time={time} format={t.format} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleMillisecond}>
        <CountDown millisecond time={time} format={t.millisecondFormat} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustom}>
        <CountDown time={time} renderChildren={renderChildren} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleControl}>
        <CountDown
          autoStart={false}
          millisecond
          format={t.controlFormat}
          time="3000"
          ref={CountDownRef}
        />
        <Grid columnNum={3}>
          <Grid.Item icon="play-circle-o" text={t.start} onClick={start} />
          <Grid.Item icon="pause-circle-o" text={t.pause} onClick={pause} />
          <Grid.Item icon="replay" text={t.reset} onClick={reset} />
        </Grid>
      </DemoBlock>
    </DemoSection>
  );
};
