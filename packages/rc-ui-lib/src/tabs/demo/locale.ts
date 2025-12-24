import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleName: '通过名称匹配',
    demoTitleScroll: '标签栏滚动',
    demoTitleDisabled: '禁用标签',
    demoTitleStyle: '样式风格',
    demoTitleClick: '点击事件',
    demoTitleSticky: '粘性布局',
    demoTitleScrollspy: '滚动导航',

    tabLabel: (item: number) => `标签${item}`,
    tabContent: (item: number) => `内容 ${item}`,
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleName: '通過名稱匹配',
    demoTitleScroll: '標籤欄滾動',
    demoTitleDisabled: '禁用標籤',
    demoTitleStyle: '樣式風格',
    demoTitleClick: '點擊事件',
    demoTitleSticky: '粘性佈局',
    demoTitleScrollspy: '滾動導航',

    tabLabel: (item: number) => `標籤${item}`,
    tabContent: (item: number) => `內容 ${item}`,
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleName: 'Match by Name',
    demoTitleScroll: 'Scrollable',
    demoTitleDisabled: 'Disabled Tab',
    demoTitleStyle: 'Style',
    demoTitleClick: 'Click Event',
    demoTitleSticky: 'Sticky',
    demoTitleScrollspy: 'Scrollspy',

    tabLabel: (item: number) => `Tab ${item}`,
    tabContent: (item: number) => `Content ${item}`,
  },
};

export const useTabsDemoI18n = createDemoI18n(messages);

