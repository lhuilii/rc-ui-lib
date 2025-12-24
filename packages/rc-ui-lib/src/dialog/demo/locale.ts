// packages/rc-ui-lib/src/dialog/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitlePromise: 'Promise调用',
    demoTitleRoundButton: '圆角按钮样式',
    demoTitleOnClosed: '完全关闭后的回调',
    demoTitleCloseIcon: '关闭图标',
    demoTitleCustom: '自定义内容',
    demoTitleAsync: '异步关闭',
    demoTitleComponent: '组件调用',

    cellAlert: '弹窗提示',
    cellAlertNoTitle: '弹窗提示（无标题）',
    cellConfirm: '确认弹框',
    cellAlertText: 'Dialog.alert',
    cellConfirmText: 'Dialog.confirm',
    cellRoundButton: '圆角按钮弹窗',
    cellRoundButtonNoTitle: '圆角按钮弹窗（无标题）',
    cellOnClosed: '弹窗提示',
    cellCloseIcon: '关闭图标',
    cellCustomCloseIcon: '自定义关闭图标',
    cellCustomContent: '自定义内容',
    cellAsync: '异步关闭',
    cellComponent: '组件调用',

    title: '标题',
    message: '代码是写出来给人看的，附带能在机器上运行',
    customMessagePrefix: '自定义内容：',
    asyncMessage: '弹窗内容',

    asyncCancelToast: '取消按钮异步',
    asyncConfirmToast: '确认按钮异步',

    confirmButtonToast: '点击确认按钮',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitlePromise: 'Promise 調用',
    demoTitleRoundButton: '圓角按鈕樣式',
    demoTitleOnClosed: '完全關閉後的回調',
    demoTitleCloseIcon: '關閉圖標',
    demoTitleCustom: '自定義內容',
    demoTitleAsync: '異步關閉',
    demoTitleComponent: '組件調用',

    cellAlert: '彈窗提示',
    cellAlertNoTitle: '彈窗提示（無標題）',
    cellConfirm: '確認彈框',
    cellAlertText: 'Dialog.alert',
    cellConfirmText: 'Dialog.confirm',
    cellRoundButton: '圓角按鈕彈窗',
    cellRoundButtonNoTitle: '圓角按鈕彈窗（無標題）',
    cellOnClosed: '彈窗提示',
    cellCloseIcon: '關閉圖標',
    cellCustomCloseIcon: '自定義關閉圖標',
    cellCustomContent: '自定義內容',
    cellAsync: '異步關閉',
    cellComponent: '組件調用',

    title: '標題',
    message: '程式碼是寫給人看的，順便能在機器上執行',
    customMessagePrefix: '自定義內容：',
    asyncMessage: '彈窗內容',

    asyncCancelToast: '取消按鈕異步',
    asyncConfirmToast: '確認按鈕異步',

    confirmButtonToast: '點擊確認按鈕',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitlePromise: 'Promise Call',
    demoTitleRoundButton: 'Round Button Style',
    demoTitleOnClosed: 'Callback After Closed',
    demoTitleCloseIcon: 'Close Icon',
    demoTitleCustom: 'Custom Content',
    demoTitleAsync: 'Async Close',
    demoTitleComponent: 'Component Call',

    cellAlert: 'Alert',
    cellAlertNoTitle: 'Alert (No Title)',
    cellConfirm: 'Confirm',
    cellAlertText: 'Dialog.alert',
    cellConfirmText: 'Dialog.confirm',
    cellRoundButton: 'Round Button Dialog',
    cellRoundButtonNoTitle: 'Round Button Dialog (No Title)',
    cellOnClosed: 'Alert',
    cellCloseIcon: 'Close Icon',
    cellCustomCloseIcon: 'Custom Close Icon',
    cellCustomContent: 'Custom Content',
    cellAsync: 'Async Close',
    cellComponent: 'Component Call',

    title: 'Title',
    message: 'Code is written for humans to read, and incidentally for machines to execute',
    customMessagePrefix: 'Custom content: ',
    asyncMessage: 'Dialog content',

    asyncCancelToast: 'Cancel button async',
    asyncConfirmToast: 'Confirm button async',

    confirmButtonToast: 'Click confirm button',
  },
};

export const useDialogDemoI18n = createDemoI18n(messages);


