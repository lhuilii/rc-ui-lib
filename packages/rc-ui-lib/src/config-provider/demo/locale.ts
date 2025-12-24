// packages/rc-ui-lib/src/config-provider/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleDefault: '默认主题',
    demoTitleCustomTheme: '定制主题',
    demoTitleIcon: 'Icon替换',

    fieldRate: '评分',
    fieldSlider: '滑块',

    submit: '提交',
  },
  'zh-TW': {
    demoTitleDefault: '默認主題',
    demoTitleCustomTheme: '定製主題',
    demoTitleIcon: 'Icon 替換',

    fieldRate: '評分',
    fieldSlider: '滑塊',

    submit: '提交',
  },
  'en-US': {
    demoTitleDefault: 'Default Theme',
    demoTitleCustomTheme: 'Custom Theme',
    demoTitleIcon: 'Icon Replacement',

    fieldRate: 'Rate',
    fieldSlider: 'Slider',

    submit: 'Submit',
  },
};

export const useConfigProviderDemoI18n = createDemoI18n(messages);


