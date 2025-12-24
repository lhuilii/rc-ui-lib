// packages/rc-ui-lib/src/collapse/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleAccordion: '手风琴',
    demoTitleDisabled: '禁用状态',

    title1: '标题1',
    title2: '标题2',
    title3: '标题3',

    content: '代码是写出来给人看的，附带能在机器上运行',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleAccordion: '手風琴',
    demoTitleDisabled: '禁用狀態',

    title1: '標題1',
    title2: '標題2',
    title3: '標題3',

    content: '程式碼是寫給人看的，順便能在機器上執行',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleAccordion: 'Accordion',
    demoTitleDisabled: 'Disabled',

    title1: 'Title 1',
    title2: 'Title 2',
    title3: 'Title 3',

    content: 'Code is written for humans to read, and incidentally for machines to execute',
  },
};

export const useCollapseDemoI18n = createDemoI18n(messages);


