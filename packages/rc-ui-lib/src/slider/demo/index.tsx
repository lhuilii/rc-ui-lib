/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast } from '../..';
import Slider from '..';
import { useSliderDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState<[number, number]>([10, 50]);
  const [value3, setValue3] = useState(10);
  const [value4, setValue4] = useState(10);
  const [value5, setValue5] = useState(10);
  const [value6, setValue6] = useState(10);
  const [value7, setValue7] = useState(50);
  const [value8, setValue8] = useState<[number, number]>([20, 50]);
  const t = useSliderDemoI18n();

  const onChangeAfter = (v) => Toast.info(t.toastCurrentValue(v));
  return (
    <DemoSection className="demo-slider">
      <DemoBlock title={t.demoTitleBasic}>
        <Slider value={value1} onChange={setValue1} onChangeAfter={onChangeAfter} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleRange}>
        <Slider range value={value2} onChange={setValue2} onChangeAfter={onChangeAfter} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleMinMax}>
        <Slider
          value={value3}
          onChange={setValue3}
          onChangeAfter={onChangeAfter}
          min={-50}
          max={50}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Slider value={10} disabled />
      </DemoBlock>
      <DemoBlock title={t.demoTitleStep}>
        <Slider value={value4} onChange={setValue4} onChangeAfter={onChangeAfter} step={10} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomStyle}>
        <Slider
          value={value5}
          onChange={setValue5}
          onChangeAfter={onChangeAfter}
          barHeight={4}
          activeColor="#ee0a24"
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomButton}>
        <Slider
          value={value6}
          onChange={setValue6}
          onChangeAfter={onChangeAfter}
          activeColor="#ee0a24"
          button={<div className="custom-button">{value6}</div>}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleVertical}>
        <div style={{ height: 150, paddingLeft: 30 }}>
          <Slider
            vertical
            style={{ marginRight: 100 }}
            value={value7}
            onChange={setValue7}
            onChangeAfter={onChangeAfter}
            onDragStart={(_, v) => console.log('onDragStart', v)}
            onDragEnd={(_, v) => console.log('onDragEnd', v)}
          />
          <Slider
            range
            vertical
            value={value8}
            onChange={setValue8}
            onChangeAfter={onChangeAfter}
          />
        </div>
      </DemoBlock>
    </DemoSection>
  );
};
