import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleExpand: '展开/收起',
    demoTitleRows: '自定义展示行数',

    expandText: '展开',
    collapseText: '收起',

    demoText:
      'rc-ui-lib 是一个轻量、可定制的移动端组件库，于2021年开源。TextEllipsis组件对长文本进行省略，支持展开/收起。请升级到 >= 2.0.0 版本来使用该组件。',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleExpand: '展開/收起',
    demoTitleRows: '自定義展示行數',

    expandText: '展開',
    collapseText: '收起',

    demoText:
      'rc-ui-lib 是一個輕量、可定製的移動端組件庫，於2021年開源。TextEllipsis組件對長文本進行省略，支持展開/收起。請升級到 >= 2.0.0 版本來使用該組件。',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleExpand: 'Expand/Collapse',
    demoTitleRows: 'Custom Rows',

    expandText: 'Expand',
    collapseText: 'Collapse',

    demoText:
      'rc-ui-lib is a lightweight and customizable mobile component library, open sourced in 2021. The TextEllipsis component ellipsizes long text and supports expand/collapse. Please upgrade to >= 2.0.0 to use this component.',
  },
};

export const useTextEllipsisDemoI18n = createDemoI18n(messages);

