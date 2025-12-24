// packages/rc-ui-lib/src/radio/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleHorizontal: '水平排列',
    demoTitleDisabled: '禁用状态',
    demoTitleShape: '自定义形状',
    demoTitleColor: '自定义颜色',
    demoTitleSize: '自定义大小',
    demoTitleLabelDisabled: '禁止文本点击',
    demoTitleAsync: '异步更新',
    demoTitleCell: '搭配单元格组件使用',

    radio1: '单选框1',
    radio2: '单选框2',
    radio1WithSpace: '单选框 1',
    radio2WithSpace: '单选框 2',
    cellRadio1: '单选框1',
    cellRadio2: '单选框2',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleHorizontal: '水平排列',
    demoTitleDisabled: '禁用狀態',
    demoTitleShape: '自定義形狀',
    demoTitleColor: '自定義顏色',
    demoTitleSize: '自定義大小',
    demoTitleLabelDisabled: '禁止文本點擊',
    demoTitleAsync: '異步更新',
    demoTitleCell: '搭配單元格組件使用',

    radio1: '單選框1',
    radio2: '單選框2',
    radio1WithSpace: '單選框 1',
    radio2WithSpace: '單選框 2',
    cellRadio1: '單選框1',
    cellRadio2: '單選框2',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleHorizontal: 'Horizontal',
    demoTitleDisabled: 'Disabled',
    demoTitleShape: 'Custom Shape',
    demoTitleColor: 'Custom Color',
    demoTitleSize: 'Custom Size',
    demoTitleLabelDisabled: 'Disable Label Click',
    demoTitleAsync: 'Async Update',
    demoTitleCell: 'With Cell Component',

    radio1: 'Radio 1',
    radio2: 'Radio 2',
    radio1WithSpace: 'Radio 1',
    radio2WithSpace: 'Radio 2',
    cellRadio1: 'Radio 1',
    cellRadio2: 'Radio 2',
  },
};

export const useRadioDemoI18n = createDemoI18n(messages);


