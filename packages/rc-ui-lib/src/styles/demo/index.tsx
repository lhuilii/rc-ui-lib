import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { CSSTransition } from 'react-transition-group';
import { Cell } from '../..';
import { useStylesDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useStylesDemoI18n();

  const [show, setShow] = useState(false);
  const [transition, setTransition] = useState('');

  const animate = (transitionName: string) => {
    setShow(true);
    setTransition(transitionName);

    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleEllipsis}>
        <div className="rc-ellipsis">{t.ellipsisSingle}</div>
        <div className="rc-multi-ellipsis--l2">{t.ellipsisDouble}</div>
      </DemoBlock>
      <DemoBlock card title={t.demoTitleHairline}>
        <div className="rc-hairline--top" />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleAnimation}>
        <Cell isLink title={t.cellFade} onClick={() => animate('rc-fade')} />
        <Cell isLink title={t.cellSlideUp} onClick={() => animate('rc-slide-up')} />
        <Cell isLink title={t.cellSlideDown} onClick={() => animate('rc-slide-down')} />
        <Cell isLink title={t.cellSlideLeft} onClick={() => animate('rc-slide-left')} />
        <Cell isLink title={t.cellSlideRight} onClick={() => animate('rc-slide-right')} />
      </DemoBlock>

      <CSSTransition in={show} timeout={300} classNames={transition} unmountOnExit>
        <div className="demo-animate-block" />
      </CSSTransition>
    </DemoSection>
  );
};
