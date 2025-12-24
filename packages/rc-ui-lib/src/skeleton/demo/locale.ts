import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleAvatar: '显示头像',
    demoTitleHeight: '自定义高度',
    demoTitleChildren: '显示子组件',

    aboutTitle: '关于 rc-ui-lib',
    aboutContent:
      'rc-ui-lib 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleAvatar: '顯示頭像',
    demoTitleHeight: '自定義高度',
    demoTitleChildren: '顯示子組件',

    aboutTitle: '關於 rc-ui-lib',
    aboutContent:
      'rc-ui-lib 是一套輕量、可靠的移動端 React 組件庫，提供了豐富的基礎組件和業務組件，幫助開發者快速搭建移動應用。',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleAvatar: 'Show Avatar',
    demoTitleHeight: 'Custom Height',
    demoTitleChildren: 'Show Children',

    aboutTitle: 'About rc-ui-lib',
    aboutContent:
      'rc-ui-lib is a lightweight and reliable mobile React component library that provides rich basic components and business components to help developers quickly build mobile applications.',
  },
};

export const useSkeletonDemoI18n = createDemoI18n(messages);

