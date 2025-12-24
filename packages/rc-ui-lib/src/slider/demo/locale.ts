import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleRange: '双滑块',
    demoTitleMinMax: '指定选择范围',
    demoTitleDisabled: '禁用',
    demoTitleStep: '指定步长',
    demoTitleCustomStyle: '自定义样式',
    demoTitleCustomButton: '自定义按钮',
    demoTitleVertical: '垂直方向',

    toastCurrentValue: (v: number | [number, number]) => `当前值：${v}`,
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleRange: '雙滑塊',
    demoTitleMinMax: '指定選擇範圍',
    demoTitleDisabled: '禁用',
    demoTitleStep: '指定步長',
    demoTitleCustomStyle: '自定義樣式',
    demoTitleCustomButton: '自定義按鈕',
    demoTitleVertical: '垂直方向',

    toastCurrentValue: (v: number | [number, number]) => `當前值：${v}`,
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleRange: 'Range',
    demoTitleMinMax: 'Min & Max',
    demoTitleDisabled: 'Disabled',
    demoTitleStep: 'Step',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleCustomButton: 'Custom Button',
    demoTitleVertical: 'Vertical',

    toastCurrentValue: (v: number | [number, number]) => `Current value: ${v}`,
  },
};

export const useSliderDemoI18n = createDemoI18n(messages);

