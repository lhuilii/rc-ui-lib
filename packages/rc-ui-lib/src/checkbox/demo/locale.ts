// packages/rc-ui-lib/src/checkbox/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDisabled: '禁用状态',
    demoTitleShape: '自定义形状',
    demoTitleColor: '自定义颜色',
    demoTitleSize: '自定义大小',
    demoTitleIcon: '自定义图标',
    demoTitleLabelDisabled: '禁止文本点击',
    demoTitleDynamic: '动态更新',
    demoTitleGroup: '复选框组',
    demoTitleHorizontal: '水平排列',
    demoTitleMax: '限制最大可选数',
    demoTitleCheckAll: '全选与反选',
    demoTitleWithCell: '搭配单元格组件使用',

    checkbox: '复选框',
    checkboxShape: '自定义形状',
    checkboxColor: '自定义颜色',
    checkboxSize: '自定义大小',
    checkboxIcon: '自定义图标',

    checkboxA: '复选框a',
    checkboxB: '复选框b',
    checkboxC: '复选框c',

    radio1: '单选框1',
    radio2: '单选框2',

    selectAll: '全选',
    reverseSelect: '反选',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDisabled: '禁用狀態',
    demoTitleShape: '自定義形狀',
    demoTitleColor: '自定義顏色',
    demoTitleSize: '自定義大小',
    demoTitleIcon: '自定義圖標',
    demoTitleLabelDisabled: '禁止文字點擊',
    demoTitleDynamic: '動態更新',
    demoTitleGroup: '複選框組',
    demoTitleHorizontal: '水平排列',
    demoTitleMax: '限制最大可選數',
    demoTitleCheckAll: '全選與反選',
    demoTitleWithCell: '搭配單元格組件使用',

    checkbox: '複選框',
    checkboxShape: '自定義形狀',
    checkboxColor: '自定義顏色',
    checkboxSize: '自定義大小',
    checkboxIcon: '自定義圖標',

    checkboxA: '複選框a',
    checkboxB: '複選框b',
    checkboxC: '複選框c',

    radio1: '單選框1',
    radio2: '單選框2',

    selectAll: '全選',
    reverseSelect: '反選',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDisabled: 'Disabled',
    demoTitleShape: 'Custom Shape',
    demoTitleColor: 'Custom Color',
    demoTitleSize: 'Custom Size',
    demoTitleIcon: 'Custom Icon',
    demoTitleLabelDisabled: 'Disable Label Click',
    demoTitleDynamic: 'Dynamic Update',
    demoTitleGroup: 'Checkbox Group',
    demoTitleHorizontal: 'Horizontal',
    demoTitleMax: 'Max Selection',
    demoTitleCheckAll: 'Select All & Reverse',
    demoTitleWithCell: 'With Cell Component',

    checkbox: 'Checkbox',
    checkboxShape: 'Custom Shape',
    checkboxColor: 'Custom Color',
    checkboxSize: 'Custom Size',
    checkboxIcon: 'Custom Icon',

    checkboxA: 'Checkbox a',
    checkboxB: 'Checkbox b',
    checkboxC: 'Checkbox c',

    radio1: 'Radio 1',
    radio2: 'Radio 2',

    selectAll: 'Select All',
    reverseSelect: 'Reverse',
  },
};

export const useCheckboxDemoI18n = createDemoI18n(messages);


