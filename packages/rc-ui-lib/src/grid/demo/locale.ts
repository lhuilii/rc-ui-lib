// packages/rc-ui-lib/src/grid/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleColumnNum: '自定义列数',
    demoTitleCustomContent: '自定义内容',
    demoTitleSquare: '正方形格子',
    demoTitleGutter: '格子间距',
    demoTitleDirection: '内容横排',
    demoTitleBadge: '徽标提示',

    text: '文字',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleColumnNum: '自定義列數',
    demoTitleCustomContent: '自定義內容',
    demoTitleSquare: '正方形格子',
    demoTitleGutter: '格子間距',
    demoTitleDirection: '內容橫排',
    demoTitleBadge: '徽標提示',

    text: '文字',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleColumnNum: 'Custom Column Number',
    demoTitleCustomContent: 'Custom Content',
    demoTitleSquare: 'Square Grid',
    demoTitleGutter: 'Gutter',
    demoTitleDirection: 'Horizontal',
    demoTitleBadge: 'Badge',

    text: 'Text',
  },
};

export const useGridDemoI18n = createDemoI18n(messages);


