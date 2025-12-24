// packages/rc-ui-lib/src/datetime-picker/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleDate: '选择年月日',
    demoTitleYearMonth: '选择年月',
    demoTitleMonthDay: '选择月日',
    demoTitleTime: '选择时间',
    demoTitleDatetime: '选择完整时间',
    demoTitleDateHour: '选择年月日小时',
    demoTitleFilter: '选择过滤器',
    demoTitleColumnsOrder: '自定义列排序',
    demoTitleConfirm: '确认按钮',
    demoTitleWithPopup: '搭配弹出层使用',

    pickerTitleDate: '选择年月日',

    yearSuffix: '年',
    monthSuffix: '月',
    daySuffix: '日',

    fieldLabel: '日期',
    fieldPlaceholder: '选择选择日期',

    popupTitle: '请选择日期',

    confirmToast: '确认的日期：',
  },
  'zh-TW': {
    demoTitleDate: '選擇年月日',
    demoTitleYearMonth: '選擇年月',
    demoTitleMonthDay: '選擇月日',
    demoTitleTime: '選擇時間',
    demoTitleDatetime: '選擇完整時間',
    demoTitleDateHour: '選擇年月日小時',
    demoTitleFilter: '選擇過濾器',
    demoTitleColumnsOrder: '自定義列排序',
    demoTitleConfirm: '確認按鈕',
    demoTitleWithPopup: '搭配彈出層使用',

    pickerTitleDate: '選擇年月日',

    yearSuffix: '年',
    monthSuffix: '月',
    daySuffix: '日',

    fieldLabel: '日期',
    fieldPlaceholder: '選擇選擇日期',

    popupTitle: '請選擇日期',

    confirmToast: '確認的日期：',
  },
  'en-US': {
    demoTitleDate: 'Select Date',
    demoTitleYearMonth: 'Select Year & Month',
    demoTitleMonthDay: 'Select Month & Day',
    demoTitleTime: 'Select Time',
    demoTitleDatetime: 'Select Date & Time',
    demoTitleDateHour: 'Select Date & Hour',
    demoTitleFilter: 'Filter Options',
    demoTitleColumnsOrder: 'Custom Column Order',
    demoTitleConfirm: 'Confirm Button',
    demoTitleWithPopup: 'With Popup',

    pickerTitleDate: 'Select Date',

    yearSuffix: '',
    monthSuffix: '',
    daySuffix: '',

    fieldLabel: 'Date',
    fieldPlaceholder: 'Please select date',

    popupTitle: 'Please select date',

    confirmToast: 'Confirmed date: ',
  },
};

export const useDatetimePickerDemoI18n = createDemoI18n(messages);


