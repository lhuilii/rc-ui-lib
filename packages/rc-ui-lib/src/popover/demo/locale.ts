// packages/rc-ui-lib/src/popover/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitlePlacement: '弹出位置',
    demoTitleOptions: '选项配置',
    demoTitleCustomContent: '自定义内容',
    demoTitleManual: '手动控制',

    action1: '选项一',
    action2: '选项二',
    action3: '选项三',

    cellSelectPlacement: '选择弹出位置',

    buttonLight: '浅色风格',
    buttonDark: '深色风格',
    buttonIcon: '展示图标',
    buttonDisabled: '禁用选项',
    buttonCustomContent: '自定义内容',
    buttonShow: '显示',
    buttonHide: '关闭',

    gridText: '文字',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitlePlacement: '彈出位置',
    demoTitleOptions: '選項配置',
    demoTitleCustomContent: '自定義內容',
    demoTitleManual: '手動控制',

    action1: '選項一',
    action2: '選項二',
    action3: '選項三',

    cellSelectPlacement: '選擇彈出位置',

    buttonLight: '淺色風格',
    buttonDark: '深色風格',
    buttonIcon: '展示圖標',
    buttonDisabled: '禁用選項',
    buttonCustomContent: '自定義內容',
    buttonShow: '顯示',
    buttonHide: '關閉',

    gridText: '文字',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitlePlacement: 'Placement',
    demoTitleOptions: 'Options',
    demoTitleCustomContent: 'Custom Content',
    demoTitleManual: 'Manual Control',

    action1: 'Option 1',
    action2: 'Option 2',
    action3: 'Option 3',

    cellSelectPlacement: 'Select Placement',

    buttonLight: 'Light Style',
    buttonDark: 'Dark Style',
    buttonIcon: 'Show Icon',
    buttonDisabled: 'Disabled Option',
    buttonCustomContent: 'Custom Content',
    buttonShow: 'Show',
    buttonHide: 'Hide',

    gridText: 'Text',
  },
};

export const usePopoverDemoI18n = createDemoI18n(messages);


