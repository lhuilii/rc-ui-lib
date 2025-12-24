// packages/rc-ui-lib/src/lazyload/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleBackground: '背景图片懒加载',
    demoTitleModule: '懒加载模块',
    demoTitleObserverModule: '事件监听懒加载模块',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleBackground: '背景圖片懶加載',
    demoTitleModule: '懶加載模塊',
    demoTitleObserverModule: '事件監聽懶加載模塊',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleBackground: 'Background Image Lazy Load',
    demoTitleModule: 'Lazy Load Module',
    demoTitleObserverModule: 'Observer Lazy Load Module',
  },
};

export const useLazyloadDemoI18n = createDemoI18n(messages);