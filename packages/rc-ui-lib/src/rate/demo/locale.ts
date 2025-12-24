// packages/rc-ui-lib/src/rate/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleCustomIcon: '自定义图标',
    demoTitleCustomStyle: '自定义样式',
    demoTitleHalf: '半星样式',
    demoTitleCount: '自定义数量',
    demoTitleDisabled: '禁用状态',
    demoTitleReadonlyDecimal: '只读状态显示小数',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleCustomIcon: '自定義圖標',
    demoTitleCustomStyle: '自定義樣式',
    demoTitleHalf: '半星樣式',
    demoTitleCount: '自定義數量',
    demoTitleDisabled: '禁用狀態',
    demoTitleReadonlyDecimal: '只讀狀態顯示小數',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleCustomIcon: 'Custom Icon',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleHalf: 'Half Star',
    demoTitleCount: 'Custom Count',
    demoTitleDisabled: 'Disabled',
    demoTitleReadonlyDecimal: 'Readonly Decimal',
  },
};

export const useRateDemoI18n = createDemoI18n(messages);


