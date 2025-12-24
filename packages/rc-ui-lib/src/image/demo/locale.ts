// packages/rc-ui-lib/src/image/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleFit: '填充模式',
    demoTitleRound: '圆形图片',
    demoTitleLoading: '加载中提示',
    demoTitleError: '加载失败提示',

    textDefaultLoading: '默认提示',
    textCustomLoading: '自定义提示',
    textDefaultError: '默认提示',
    textCustomError: '自定义提示',
    textErrorDesc: '加载失败',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleFit: '填充模式',
    demoTitleRound: '圓形圖片',
    demoTitleLoading: '加載中提示',
    demoTitleError: '加載失敗提示',

    textDefaultLoading: '默認提示',
    textCustomLoading: '自定義提示',
    textDefaultError: '默認提示',
    textCustomError: '自定義提示',
    textErrorDesc: '加載失敗',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleFit: 'Fit Mode',
    demoTitleRound: 'Round Image',
    demoTitleLoading: 'Loading',
    demoTitleError: 'Error',

    textDefaultLoading: 'Default',
    textCustomLoading: 'Custom',
    textDefaultError: 'Default',
    textCustomError: 'Custom',
    textErrorDesc: 'Failed to load',
  },
};

export const useImageDemoI18n = createDemoI18n(messages);


