// packages/rc-ui-lib/src/cell/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleSize: '单元格大小',
    demoTitleIcon: '展示图标',
    demoTitleOnlyValue: '只设置value',
    demoTitleArrow: '展示箭头',
    demoTitleGroup: '分组标题',
    demoTitleCard: '卡片类型',
    demoTitleCustom: '自定义内容',
    demoTitleCenter: '垂直居中',

    cell: '单元格',
    content: '内容',
    label: '描述信息',
    group1: '分组1',
    group2: '分组2',
    customContent: '自定义内容',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleSize: '單元格大小',
    demoTitleIcon: '展示圖標',
    demoTitleOnlyValue: '只設置 value',
    demoTitleArrow: '展示箭頭',
    demoTitleGroup: '分組標題',
    demoTitleCard: '卡片類型',
    demoTitleCustom: '自定義內容',
    demoTitleCenter: '垂直居中',

    cell: '單元格',
    content: '內容',
    label: '描述資訊',
    group1: '分組1',
    group2: '分組2',
    customContent: '自定義內容',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleSize: 'Cell Size',
    demoTitleIcon: 'Show Icon',
    demoTitleOnlyValue: 'Only Set Value',
    demoTitleArrow: 'Show Arrow',
    demoTitleGroup: 'Group Title',
    demoTitleCard: 'Card Type',
    demoTitleCustom: 'Custom Content',
    demoTitleCenter: 'Vertical Center',

    cell: 'Cell',
    content: 'Content',
    label: 'Description',
    group1: 'Group 1',
    group2: 'Group 2',
    customContent: 'Custom Content',
  },
};

export const useCellDemoI18n = createDemoI18n(messages);


