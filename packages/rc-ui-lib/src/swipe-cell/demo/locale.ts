import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDisabled: '禁止滑动',
    demoTitleAsync: '异步关闭',

    btnSelect: '选择',
    btnDelete: '删除',
    btnCollect: '收藏',

    cellTitle: '单元格',
    cellValue: '内容',

    dialogTitle: 'confirm',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDisabled: '禁止滑動',
    demoTitleAsync: '異步關閉',

    btnSelect: '選擇',
    btnDelete: '刪除',
    btnCollect: '收藏',

    cellTitle: '單元格',
    cellValue: '內容',

    dialogTitle: 'confirm',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDisabled: 'Disabled',
    demoTitleAsync: 'Async Close',

    btnSelect: 'Select',
    btnDelete: 'Delete',
    btnCollect: 'Collect',

    cellTitle: 'Cell',
    cellValue: 'Content',

    dialogTitle: 'confirm',
  },
};

export const useSwipeCellDemoI18n = createDemoI18n(messages);

