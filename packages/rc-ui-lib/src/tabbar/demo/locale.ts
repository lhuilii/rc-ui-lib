import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleName: '通过名称匹配',
    demoTitleBadge: '徽标提示',
    demoTitleCustomIcon: '自定义图标',
    demoTitleCustomColor: '自定义颜色',
    demoTitleEvent: '监听切换事件',

    tabLabel: '标签',
    toastLabel: (v: number) => `标签${v + 1}`,
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleName: '通過名稱匹配',
    demoTitleBadge: '徽標提示',
    demoTitleCustomIcon: '自定義圖標',
    demoTitleCustomColor: '自定義顏色',
    demoTitleEvent: '監聽切換事件',

    tabLabel: '標籤',
    toastLabel: (v: number) => `標籤${v + 1}`,
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleName: 'Match by Name',
    demoTitleBadge: 'Badge',
    demoTitleCustomIcon: 'Custom Icon',
    demoTitleCustomColor: 'Custom Color',
    demoTitleEvent: 'Listen Switch Event',

    tabLabel: 'Tab',
    toastLabel: (v: number) => `Tab ${v + 1}`,
  },
};

export const useTabbarDemoI18n = createDemoI18n(messages);

