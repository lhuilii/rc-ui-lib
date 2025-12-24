// packages/rc-ui-lib/src/divider/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleText: '展示文字',
    demoTitleContentPosition: '内容位置',
    demoTitleDashed: '虚线',
    demoTitleCustom: '自定义样式',

    text: '文字',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleText: '展示文字',
    demoTitleContentPosition: '內容位置',
    demoTitleDashed: '虛線',
    demoTitleCustom: '自定義樣式',

    text: '文字',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleText: 'Show Text',
    demoTitleContentPosition: 'Content Position',
    demoTitleDashed: 'Dashed',
    demoTitleCustom: 'Custom Style',

    text: 'Text',
  },
};

export const useDividerDemoI18n = createDemoI18n(messages);


