import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Button } from '../..';
import Steps from '..';
import { useStepsDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [active, setActive] = useState(1);
  const t = useStepsDemoI18n();

  const nextStep = () => setActive((prev) => (prev >= 3 ? 0 : prev + 1));
  return (
    <DemoSection className="demo-steps">
      <DemoBlock title={t.demoTitleBasic}>
        <Steps active={active}>
          <Steps.Item>{t.stepBuyerOrder}</Steps.Item>
          <Steps.Item>{t.stepSellerAccept}</Steps.Item>
          <Steps.Item>{t.stepBuyerPickup}</Steps.Item>
          <Steps.Item>{t.stepCompleted}</Steps.Item>
        </Steps>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomStyle}>
        <Steps active={active} activeIcon="success" activeColor="#38f">
          <Steps.Item>{t.stepBuyerOrder}</Steps.Item>
          <Steps.Item>{t.stepSellerAccept}</Steps.Item>
          <Steps.Item>{t.stepBuyerPickup}</Steps.Item>
          <Steps.Item>{t.stepCompleted}</Steps.Item>
        </Steps>
      </DemoBlock>
      <div className="demo-button">
        <Button round block onClick={nextStep}>
          {t.btnNext}
        </Button>
      </div>
      <DemoBlock title={t.demoTitleVertical}>
        <Steps direction="vertical" active={0}>
          <Steps.Item>
            <h3>{t.logisticsStatus1}</h3>
            <p>2016-07-12 12:40</p>
          </Steps.Item>
          <Steps.Item>
            <h3>{t.logisticsStatus2}</h3>
            <p>2016-07-11 10:00</p>
          </Steps.Item>
          <Steps.Item>
            <h3>{t.logisticsShipped}</h3>
            <p>2016-07-10 09:30</p>
          </Steps.Item>
        </Steps>
      </DemoBlock>
    </DemoSection>
  );
};
