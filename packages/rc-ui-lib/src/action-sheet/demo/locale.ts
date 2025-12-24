// packages/rc-ui-lib/src/action-sheet/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleStatus: '选项状态',
    demoTitleCustomPanel: '自定义面板',

    basicUsage: '基础用法',
    showCancelButton: '展示取消按钮',
    showDescription: '展示描述信息',
    optionStatus: '选项状态',
    customPanel: '自定义面板',

    option1: '选项一',
    option2: '选项二',
    option3: '选项三',
    option3Subname: '描述信息',

    cancel: '取消',
    description: '这是一段描述信息',
    customTitle: '自定义内容',
    customContent: '内容',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleStatus: '選項狀態',
    demoTitleCustomPanel: '自定義面板',

    basicUsage: '基礎用法',
    showCancelButton: '展示取消按鈕',
    showDescription: '展示描述資訊',
    optionStatus: '選項狀態',
    customPanel: '自定義面板',

    option1: '選項一',
    option2: '選項二',
    option3: '選項三',
    option3Subname: '描述資訊',

    cancel: '取消',
    description: '這是一段描述資訊',
    customTitle: '自定義內容',
    customContent: '內容',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleStatus: 'Option Status',
    demoTitleCustomPanel: 'Custom Panel',

    basicUsage: 'Basic Usage',
    showCancelButton: 'Show Cancel Button',
    showDescription: 'Show Description',
    optionStatus: 'Option Status',
    customPanel: 'Custom Panel',

    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    option3Subname: 'Description',

    cancel: 'Cancel',
    description: 'This is a description',
    customTitle: 'Custom Content',
    customContent: 'Content',
  },
};

export const useActionSheetDemoI18n = createDemoI18n(messages);


