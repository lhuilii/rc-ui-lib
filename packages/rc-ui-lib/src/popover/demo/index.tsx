/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast, Button, Grid, Popup, Cell, Picker } from '../..';
import { PopoverInstance, PopoverPlacement } from '../PropsType';
import Popover from '..';
import { usePopoverDemoI18n } from './locale';
import './style.less';

const placements = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as PopoverPlacement[];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = usePopoverDemoI18n();
  const actions = [{ text: t.action1 }, { text: t.action2 }, { text: t.action3 }];
  const popupActions = [{ text: t.action1 }, { text: t.action2 }];

  const iconActions = [
    { text: t.action1, icon: 'add-o' },
    { text: t.action2, icon: 'music-o' },
    { text: t.action3, icon: 'more-o' },
  ];

  const disabledActions = [
    { text: t.action1, disabled: true },
    { text: t.action2, disabled: true },
    { text: t.action3 },
  ];
  const popover = useRef<PopoverInstance>(null);
  const popover1 = useRef<PopoverInstance>(null);
  const popover2 = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = (option) => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <DemoSection className="demo-slider">
      <DemoBlock title={t.demoTitleBasic}>
        <Popover
          placement="bottom-start"
          actions={actions}
          onSelect={select}
          reference={<Button type="primary">{t.buttonLight}</Button>}
        />
        <Popover
          actions={actions}
          theme="dark"
          onSelect={select}
          reference={<Button type="primary">{t.buttonDark}</Button>}
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitlePlacement}>
        <Cell title={t.cellSelectPlacement} onClick={() => setVisible(true)} isLink />
        <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
          <div className="demo-popover-box">
            <Popover
              ref={popover}
              theme="dark"
              actions={popupActions}
              onSelect={select}
              placement={placement}
              reference={<div className="demo-popover-refer" />}
            />
          </div>
          <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
        </Popup>
      </DemoBlock>
      <DemoBlock title={t.demoTitleOptions}>
        <Popover
          placement="bottom-start"
          actions={iconActions}
          onSelect={select}
          reference={<Button type="primary">{t.buttonIcon}</Button>}
        />
        <Popover
          actions={disabledActions}
          onSelect={select}
          reference={<Button type="primary">{t.buttonDisabled}</Button>}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomContent}>
        <Popover
          ref={popover1}
          placement="top-start"
          reference={<Button type="primary">{t.buttonCustomContent}</Button>}
        >
          <Grid square border={false} columnNum={3} style={{ width: 240 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <Grid.Item
                onClick={() => popover1.current?.hide()}
                key={i}
                icon="photo-o"
              text={t.gridText}
              />
            ))}
          </Grid>
        </Popover>
      </DemoBlock>
      <DemoBlock title={t.demoTitleManual}>
        <Popover
          placement="bottom-start"
          trigger="manual"
          ref={popover2}
          actions={iconActions}
          onSelect={select}
          reference={<Button type="primary">{t.buttonIcon}</Button>}
        />
        <Button onClick={() => popover2.current?.show()}>{t.buttonShow}</Button>
        <Button onClick={() => popover2.current?.hide()}>{t.buttonHide}</Button>
      </DemoBlock>
    </DemoSection>
  );
};
