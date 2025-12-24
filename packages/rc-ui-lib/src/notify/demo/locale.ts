// packages/rc-ui-lib/src/notify/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleType: '通知类型',
    demoTitleCustom: '自定义配置',
    demoTitleComponent: '组件调用',

    cellBasic: '基础用法',
    cellTypePrimary: '主要通知',
    cellTypeSuccess: '成功通知',
    cellTypeDanger: '危险通知',
    cellTypeWarning: '警告通知',

    cellCustomColor: '自定义颜色',
    cellCustomDuration: '自定义时长',

    cellComponent: '组件调用',

    message: '通知内容',
    customColor: '自定义颜色',
    customDuration: '自定义时长',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleType: '通知類型',
    demoTitleCustom: '自定義配置',
    demoTitleComponent: '組件調用',

    cellBasic: '基礎用法',
    cellTypePrimary: '主要通知',
    cellTypeSuccess: '成功通知',
    cellTypeDanger: '危險通知',
    cellTypeWarning: '警告通知',

    cellCustomColor: '自定義顏色',
    cellCustomDuration: '自定義時長',

    cellComponent: '組件調用',

    message: '通知內容',
    customColor: '自定義顏色',
    customDuration: '自定義時長',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleType: 'Notify Type',
    demoTitleCustom: 'Custom Config',
    demoTitleComponent: 'Component Call',

    cellBasic: 'Basic Usage',
    cellTypePrimary: 'Primary',
    cellTypeSuccess: 'Success',
    cellTypeDanger: 'Danger',
    cellTypeWarning: 'Warning',

    cellCustomColor: 'Custom Color',
    cellCustomDuration: 'Custom Duration',

    cellComponent: 'Component Call',

    message: 'Notify message',
    customColor: 'Custom Color',
    customDuration: 'Custom Duration',
  },
};

export const useNotifyDemoI18n = createDemoI18n(messages);