// packages/rc-ui-lib/src/image-preview/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleOptions: '传入配置项',
    demoTitleAsync: '异步关闭',
    demoTitleComponent: '组件调用',

    cellPreviewImage: '预览图片',
    cellStartPosition: '指定初始位置',
    cellShowClose: '展示关闭按钮',
    cellOnClose: '监听关闭事件',
    cellIndicators: '展示指示点',
    cellComponent: '组件调用',

    toastClosePreview: '关闭预览',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleOptions: '傳入配置項',
    demoTitleAsync: '異步關閉',
    demoTitleComponent: '組件調用',

    cellPreviewImage: '預覽圖片',
    cellStartPosition: '指定初始位置',
    cellShowClose: '展示關閉按鈕',
    cellOnClose: '監聽關閉事件',
    cellIndicators: '展示指示點',
    cellComponent: '組件調用',

    toastClosePreview: '關閉預覽',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleOptions: 'Options',
    demoTitleAsync: 'Async Close',
    demoTitleComponent: 'Component Call',

    cellPreviewImage: 'Preview Image',
    cellStartPosition: 'Start Position',
    cellShowClose: 'Show Close Button',
    cellOnClose: 'Listen Close Event',
    cellIndicators: 'Show Indicators',
    cellComponent: 'Component Call',

    toastClosePreview: 'Close Preview',
  },
};

export const useImagePreviewDemoI18n = createDemoI18n(messages);