import React from 'react';
import { useNavigate } from 'react-router-dom';
import { components } from 'site-mobile-demo';
import NavBar from '..';
import { Toast, Icon } from '../..';
import { useNavBarDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const navigate = useNavigate();
  const { DemoBlock, DemoSection } = components;
  const t = useNavBarDemoI18n();
  const onClickLeft = () => navigate(-1);

  const onClickRight = () => Toast(t.toastButton);
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <NavBar title={t.title} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleBack}>
        <NavBar title={t.title} leftArea={t.back} leftArrow onClickLeft={onClickLeft} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleRight}>
        <NavBar
          title={t.title}
          leftArea={t.back}
          rightArea={t.button}
          left-arrow
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustom}>
        <NavBar
          title={t.title}
          left-text={t.back}
          leftArrow
          rightArea={<Icon name="search" size="18" />}
        />
      </DemoBlock>
    </DemoSection>
  );
};
