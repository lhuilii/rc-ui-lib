// packages/rc-ui-lib/src/notice-bar/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleScrollable: '滚动播放',
    demoTitleWrapable: '多行展示',
    demoTitleMode: '通知栏状态',
    demoTitleCustom: '自定义样式',
    demoTitleVertical: '垂直滚动',

    text:
      '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
    textShort: '技术是开发它的人的共同灵魂。',

    content1: '内容 1',
    content2: '内容 2',
    content3: '内容 3',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleScrollable: '滾動播放',
    demoTitleWrapable: '多行展示',
    demoTitleMode: '通知欄狀態',
    demoTitleCustom: '自定義樣式',
    demoTitleVertical: '垂直滾動',

    text:
      '在程式碼閱讀過程中人們說髒話的頻率是衡量程式碼品質的唯一標準。',
    textShort: '技術是開發它的人的共同靈魂。',

    content1: '內容 1',
    content2: '內容 2',
    content3: '內容 3',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleScrollable: 'Scrollable',
    demoTitleWrapable: 'Wrapable',
    demoTitleMode: 'Mode',
    demoTitleCustom: 'Custom Style',
    demoTitleVertical: 'Vertical Scroll',

    text:
      'The frequency of people swearing during code reading is the only standard to measure code quality.',
    textShort: 'Technology is the common soul of the people who develop it.',

    content1: 'Content 1',
    content2: 'Content 2',
    content3: 'Content 3',
  },
};

export const useNoticeBarDemoI18n = createDemoI18n(messages);


