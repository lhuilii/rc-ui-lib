// packages/rc-ui-lib/src/flex/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleGutter: '区域间隔',
    demoTitleDirection: '方向',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleGutter: '區域間隔',
    demoTitleDirection: '方向',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleGutter: 'Gutter',
    demoTitleDirection: 'Direction',
  },
};

export const useFlexDemoI18n = createDemoI18n(messages);