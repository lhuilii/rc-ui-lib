// packages/rc-ui-lib/src/cascader/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleColor: '自定义颜色',
    demoTitleAsync: '异步加载选项',
    demoTitleCustomField: '自定义字段名',
    demoTitleControlled: '受控组件',

    areaLabel: '地区',
    areaPlaceholder: '请选择所在地区',
    selectAreaTitle: '请选择所在地区',

    loading: '加载中...',

    currentValue: '当前值:',
    externalSet: '外部设置',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleColor: '自定義顏色',
    demoTitleAsync: '異步加載選項',
    demoTitleCustomField: '自定義字段名',
    demoTitleControlled: '受控組件',

    areaLabel: '地區',
    areaPlaceholder: '請選擇所在地區',
    selectAreaTitle: '請選擇所在地區',

    loading: '加載中...',

    currentValue: '當前值:',
    externalSet: '外部設置',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleColor: 'Custom Color',
    demoTitleAsync: 'Async Loading',
    demoTitleCustomField: 'Custom Field Names',
    demoTitleControlled: 'Controlled Component',

    areaLabel: 'Area',
    areaPlaceholder: 'Please select area',
    selectAreaTitle: 'Please select area',

    loading: 'Loading...',

    currentValue: 'Current value:',
    externalSet: 'External Set',
  },
};

export const useCascaderDemoI18n = createDemoI18n(messages);


