// packages/rc-ui-lib/src/floating-bubble/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDrag: '自由拖拽和磁吸',

    tabTitleBasic: '基础用法',
    tabTitleDrag: '自由拖拽和磁吸',

    clickToast: '点击气泡',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDrag: '自由拖拽和磁吸',

    tabTitleBasic: '基礎用法',
    tabTitleDrag: '自由拖拽和磁吸',

    clickToast: '點擊氣泡',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDrag: 'Drag & Magnetic',

    tabTitleBasic: 'Basic Usage',
    tabTitleDrag: 'Drag & Magnetic',

    clickToast: 'Click bubble',
  },
};

export const useFloatingBubbleDemoI18n = createDemoI18n(messages);

