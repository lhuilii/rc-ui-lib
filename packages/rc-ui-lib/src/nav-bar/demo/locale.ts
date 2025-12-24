// packages/rc-ui-lib/src/nav-bar/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleBack: '返回上级',
    demoTitleRight: '右侧按钮',
    demoTitleCustom: '自定义区域',

    title: '标题',
    back: '返回',
    button: '按钮',

    toastButton: '按钮',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleBack: '返回上級',
    demoTitleRight: '右側按鈕',
    demoTitleCustom: '自定義區域',

    title: '標題',
    back: '返回',
    button: '按鈕',

    toastButton: '按鈕',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleBack: 'Back',
    demoTitleRight: 'Right Button',
    demoTitleCustom: 'Custom Area',

    title: 'Title',
    back: 'Back',
    button: 'Button',

    toastButton: 'Button',
  },
};

export const useNavBarDemoI18n = createDemoI18n(messages);


