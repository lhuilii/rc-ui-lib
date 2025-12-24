import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import ActionSheet from '..';
import { useActionSheetDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useActionSheetDemoI18n();
  const actions = [{ name: t.option1 }, { name: t.option2 }, { name: t.option3 }];
  const actions1 = [
    { name: t.option1 },
    { name: t.option2 },
    { name: t.option3, subname: t.option3Subname },
  ];
  const actions2 = [
    { name: t.option1, color: '#ee0a24' },
    { name: t.option2, disabled: true },
    { loading: true },
  ];

  const [visible, setVisible] = useState(-1);
  const onCancel = () => setVisible(-1);
  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell title={t.basicUsage} isLink onClick={() => setVisible(1)} />
        <Cell title={t.showCancelButton} isLink onClick={() => setVisible(2)} />
        <Cell title={t.showDescription} isLink onClick={() => setVisible(3)} />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleStatus}>
        <Cell title={t.optionStatus} isLink onClick={() => setVisible(4)} />
      </DemoBlock>

      <DemoBlock card title={t.demoTitleCustomPanel}>
        <Cell title={t.customPanel} isLink onClick={() => setVisible(5)} />
      </DemoBlock>

      <ActionSheet visible={visible === 1} onCancel={onCancel} actions={actions} />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText={t.cancel}
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description={t.description}
        actions={actions1}
        cancelText={t.cancel}
      />
      <ActionSheet
        visible={visible === 4}
        onCancel={onCancel}
        actions={actions2}
        cancelText={t.cancel}
      />
      <ActionSheet
        title={t.customTitle}
        visible={visible === 5}
        onCancel={onCancel}
        cancelText={false}
      >
        <div className="demo-action-sheet-content">{t.customContent}</div>
      </ActionSheet>
    </DemoSection>
  );
};
