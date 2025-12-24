// packages/rc-ui-lib/src/progress/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleStrokeWidth: '线条粗细',
    demoTitleInactive: '置灰',
    demoTitleCustomStyle: '样式定制',
    demoTitleTransition: '过渡效果',

    pivotOrange: '橙色',
    pivotRed: '红色',
    pivotPurple: '紫色',

    btnIncrease: '增加',
    btnDecrease: '减少',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleStrokeWidth: '線條粗細',
    demoTitleInactive: '置灰',
    demoTitleCustomStyle: '樣式定制',
    demoTitleTransition: '過渡效果',

    pivotOrange: '橙色',
    pivotRed: '紅色',
    pivotPurple: '紫色',

    btnIncrease: '增加',
    btnDecrease: '減少',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleStrokeWidth: 'Stroke Width',
    demoTitleInactive: 'Inactive',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleTransition: 'Transition',

    pivotOrange: 'Orange',
    pivotRed: 'Red',
    pivotPurple: 'Purple',

    btnIncrease: 'Increase',
    btnDecrease: 'Decrease',
  },
};

export const useProgressDemoI18n = createDemoI18n(messages);


