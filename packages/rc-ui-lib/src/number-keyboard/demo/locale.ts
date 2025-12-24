// packages/rc-ui-lib/src/number-keyboard/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',

    cellDefault: '弹出默认键盘',
    cellCustom: '弹出带右侧栏的键盘',
    cellId: '弹出身份证号键盘',
    cellTitle: '弹出带标题的键盘',
    cellMultiExtra: '弹出配置多个按键的键盘',
    cellRandom: '弹出配置随机数字的键盘',

    fieldLabel: '绑定值',
    fieldPlaceholder: '点此输入',

    closeButtonText: '完成',
    title: '自定义标题',

    toastClosed: 'closed',
    toastDelete: 'delete',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',

    cellDefault: '彈出默認鍵盤',
    cellCustom: '彈出帶右側欄的鍵盤',
    cellId: '彈出身份證號鍵盤',
    cellTitle: '彈出帶標題的鍵盤',
    cellMultiExtra: '彈出配置多個按鍵的鍵盤',
    cellRandom: '彈出配置隨機數字的鍵盤',

    fieldLabel: '綁定值',
    fieldPlaceholder: '點此輸入',

    closeButtonText: '完成',
    title: '自定義標題',

    toastClosed: 'closed',
    toastDelete: 'delete',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',

    cellDefault: 'Default Keyboard',
    cellCustom: 'Keyboard with Sidebar',
    cellId: 'ID Card Keyboard',
    cellTitle: 'Keyboard with Title',
    cellMultiExtra: 'Keyboard with Multiple Keys',
    cellRandom: 'Random Number Keyboard',

    fieldLabel: 'Bound Value',
    fieldPlaceholder: 'Click to input',

    closeButtonText: 'Done',
    title: 'Custom Title',

    toastClosed: 'closed',
    toastDelete: 'delete',
  },
};

export const useNumberKeyboardDemoI18n = createDemoI18n(messages);