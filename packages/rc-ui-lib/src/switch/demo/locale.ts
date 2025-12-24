import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDisabled: '禁用状态',
    demoTitleLoading: '加载状态',
    demoTitleSize: '自定义大小',
    demoTitleColor: '自定义颜色',
    demoTitleAsync: '异步控制',
    demoTitleCell: '搭配单元格使用',

    dialogTitle: '提醒',
    dialogMessage: '是否切换开关？',

    cellTitle: '标题',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDisabled: '禁用狀態',
    demoTitleLoading: '加載狀態',
    demoTitleSize: '自定義大小',
    demoTitleColor: '自定義顏色',
    demoTitleAsync: '異步控制',
    demoTitleCell: '搭配單元格使用',

    dialogTitle: '提醒',
    dialogMessage: '是否切換開關？',

    cellTitle: '標題',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDisabled: 'Disabled',
    demoTitleLoading: 'Loading',
    demoTitleSize: 'Custom Size',
    demoTitleColor: 'Custom Color',
    demoTitleAsync: 'Async Control',
    demoTitleCell: 'With Cell',

    dialogTitle: 'Reminder',
    dialogMessage: 'Switch?',

    cellTitle: 'Title',
  },
};

export const useSwitchDemoI18n = createDemoI18n(messages);

