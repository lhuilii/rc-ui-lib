// packages/rc-ui-lib/src/badge/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleMax: '最大值',
    demoTitleColor: '自定义颜色',
    demoTitleContent: '自定义徽标内容',
    demoTitlePosition: '自定义徽标位置',
    demoTitleStandalone: '独立展示',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleMax: '最大值',
    demoTitleColor: '自定義顏色',
    demoTitleContent: '自定義徽標內容',
    demoTitlePosition: '自定義徽標位置',
    demoTitleStandalone: '獨立展示',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleMax: 'Max Value',
    demoTitleColor: 'Custom Color',
    demoTitleContent: 'Custom Badge Content',
    demoTitlePosition: 'Custom Badge Position',
    demoTitleStandalone: 'Standalone',
  },
};

export const useBadgeDemoI18n = createDemoI18n(messages);


