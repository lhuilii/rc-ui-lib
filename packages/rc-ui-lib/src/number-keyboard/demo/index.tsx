import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Cell, Toast, Field } from '../..';
import { NumberKeyboard } from '..';
import { useNumberKeyboardDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoSection, DemoBlock } = components;
  const t = useNumberKeyboardDemoI18n();

  const [visible, setVisible] = useState<any>('');
  const [value, setValue] = useState('');
  const openKeyboard = (name: string) => {
    setVisible(name);
  };

  const onInput = (e: string) => {
    setValue((v) => v + e);
  };

  const onDelete = () => {
    setValue((v) => v.slice(0, v.length - 1));
  };

  const actions = {
    onClose: () => {
      Toast.info(t.toastClosed);
      setVisible('');
    },
    onInput: (key: string) => {
      Toast.info(key);
    },
    onDelete: () => {
      Toast.info(t.toastDelete);
    },
    onBlur: () => {
      setVisible('');
    },
  };

  const titleLeft = <span>titleLeft</span>;

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell onClick={() => openKeyboard('default')}>{t.cellDefault}</Cell>
        <Cell onClick={() => openKeyboard('custom')}>{t.cellCustom}</Cell>
        <Cell onClick={() => openKeyboard('extraKey')}>{t.cellId}</Cell>
        <Cell onClick={() => openKeyboard('title')}>{t.cellTitle}</Cell>
        <Cell onClick={() => openKeyboard('multiExtraKey')}>{t.cellMultiExtra}</Cell>
        <Cell onClick={() => openKeyboard('randomKeyOrder')}>{t.cellRandom}</Cell>
        <Field
          onClick={() => openKeyboard('bindValue')}
          label={t.fieldLabel}
          value={value}
          placeholder={t.fieldPlaceholder}
        />
      </DemoBlock>
      <NumberKeyboard
        visible={visible === 'default'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'custom'}
        closeButtonText={t.closeButtonText}
        theme="custom"
        extraKey="."
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'extraKey'}
        closeButtonText={t.closeButtonText}
        extraKey="X"
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'title'}
        title={t.title}
        closeButtonText={t.closeButtonText}
        titleLeft={titleLeft}
        extraKey="."
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'multiExtraKey'}
        closeButtonText={t.closeButtonText}
        theme="custom"
        extraKey={['00', '.']}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'randomKeyOrder'}
        randomKeyOrder
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        onBlur={actions.onBlur}
      />
      <NumberKeyboard
        visible={visible === 'bindValue'}
        onInput={onInput}
        onDelete={onDelete}
        onBlur={actions.onBlur}
      />
    </DemoSection>
  );
};
