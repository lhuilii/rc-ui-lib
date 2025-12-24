import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDisabled: '禁用选项',
    demoTitleBadge: '徽标提示',
    demoTitleEvent: '监听切换事件',

    labelName: '标签名',
    toastClickLabel: (value: number) => `点击了标签${value + 1}`,
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDisabled: '禁用選項',
    demoTitleBadge: '徽標提示',
    demoTitleEvent: '監聽切換事件',

    labelName: '標籤名',
    toastClickLabel: (value: number) => `點擊了標籤${value + 1}`,
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDisabled: 'Disabled Option',
    demoTitleBadge: 'Badge',
    demoTitleEvent: 'Listen Switch Event',

    labelName: 'Label',
    toastClickLabel: (value: number) => `Clicked label ${value + 1}`,
  },
};

export const useSidebarDemoI18n = createDemoI18n(messages);

