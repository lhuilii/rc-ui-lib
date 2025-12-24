// packages/rc-ui-lib/src/overlay/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '显示遮罩层',
    demoTitleEmbedded: '嵌入内容',

    buttonShowOverlay: '显示遮罩层',
    buttonEmbedded: '嵌入内容',
  },
  'zh-TW': {
    demoTitleBasic: '顯示遮罩層',
    demoTitleEmbedded: '嵌入內容',

    buttonShowOverlay: '顯示遮罩層',
    buttonEmbedded: '嵌入內容',
  },
  'en-US': {
    demoTitleBasic: 'Show Overlay',
    demoTitleEmbedded: 'Embedded Content',

    buttonShowOverlay: 'Show Overlay',
    buttonEmbedded: 'Embedded Content',
  },
};

export const useOverlayDemoI18n = createDemoI18n(messages);