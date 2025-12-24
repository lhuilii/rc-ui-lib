// packages/rc-ui-lib/src/picker/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDefaultIndex: '默认选中',
    demoTitleMultiple: '多列选择',
    demoTitleCascade: '级联选择',
    demoTitleDisabled: '禁用选项',
    demoTitleDynamic: '动态选项设置',
    demoTitleLoading: '加载状态',
    demoTitleWithPopup: '搭配弹出层使用',
    demoTitleCustomColumns: '自定义Columns结构',

    title: '标题',

    toastCurrent: '当前值：',
    toastIndex: '当前索引：',
    toastCancel: '点击取消按钮',
    toastConfirm: '点击确认按钮',

    fieldLabelCity: '城市',
    fieldPlaceholderCity: '选择城市',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDefaultIndex: '默認選中',
    demoTitleMultiple: '多列選擇',
    demoTitleCascade: '級聯選擇',
    demoTitleDisabled: '禁用選項',
    demoTitleDynamic: '動態選項設置',
    demoTitleLoading: '加載狀態',
    demoTitleWithPopup: '搭配彈出層使用',
    demoTitleCustomColumns: '自定義 Columns 結構',

    title: '標題',

    toastCurrent: '當前值：',
    toastIndex: '當前索引：',
    toastCancel: '點擊取消按鈕',
    toastConfirm: '點擊確認按鈕',

    fieldLabelCity: '城市',
    fieldPlaceholderCity: '選擇城市',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDefaultIndex: 'Default Index',
    demoTitleMultiple: 'Multiple Columns',
    demoTitleCascade: 'Cascade',
    demoTitleDisabled: 'Disabled Option',
    demoTitleDynamic: 'Dynamic Options',
    demoTitleLoading: 'Loading',
    demoTitleWithPopup: 'With Popup',
    demoTitleCustomColumns: 'Custom Columns',

    title: 'Title',

    toastCurrent: 'Current value: ',
    toastIndex: 'Current index: ',
    toastCancel: 'Click cancel button',
    toastConfirm: 'Click confirm button',

    fieldLabelCity: 'City',
    fieldPlaceholderCity: 'Select city',
  },
};

export const usePickerDemoI18n = createDemoI18n(messages);


