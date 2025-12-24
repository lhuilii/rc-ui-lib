// packages/rc-ui-lib/src/loading/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleType: '加载类型',
    demoTitleColor: '自定义颜色',
    demoTitleSize: '自定义大小',
    demoTitleText: '加载文案',
    demoTitleVertical: '垂直排列',
    demoTitleTextColor: '自定义文本颜色',

    loadingText: '加载中...',
  },
  'zh-TW': {
    demoTitleType: '加載類型',
    demoTitleColor: '自定義顏色',
    demoTitleSize: '自定義大小',
    demoTitleText: '加載文案',
    demoTitleVertical: '垂直排列',
    demoTitleTextColor: '自定義文本顏色',

    loadingText: '加載中...',
  },
  'en-US': {
    demoTitleType: 'Loading Type',
    demoTitleColor: 'Custom Color',
    demoTitleSize: 'Custom Size',
    demoTitleText: 'Loading Text',
    demoTitleVertical: 'Vertical',
    demoTitleTextColor: 'Custom Text Color',

    loadingText: 'Loading...',
  },
};

export const useLoadingDemoI18n = createDemoI18n(messages);


