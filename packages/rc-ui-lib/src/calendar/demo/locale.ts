// packages/rc-ui-lib/src/calendar/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleQuickSelect: '快捷选择',
    demoTitleCustom: '自定义日历',
    demoTitlePoppable: '平铺模式',

    selectSingle: '选择单个日期',
    selectMultiple: '选择多个日期',
    selectRange: '选择日期区间',

    customColor: '自定义颜色',
    customRange: '自定义日期范围',
    customConfirm: '自定义按钮文字',
    customDayText: '自定义日期文案',
    customPosition: '自定义弹出位置',
    maxRange: '日期区间最大范围',
    firstDayOfWeek: '自定义周起始日',

    today: '今天',
    checkIn: '入店',
    checkOut: '离店',

    laborDay: '劳动节',
    youthDay: '青年节',

    confirmText: '完成',
    confirmDisabledText: '请选择结束时间',

    selectedCount: '选择了 {count} 个日期',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleQuickSelect: '快捷選擇',
    demoTitleCustom: '自定義日曆',
    demoTitlePoppable: '平鋪模式',

    selectSingle: '選擇單個日期',
    selectMultiple: '選擇多個日期',
    selectRange: '選擇日期區間',

    customColor: '自定義顏色',
    customRange: '自定義日期範圍',
    customConfirm: '自定義按鈕文字',
    customDayText: '自定義日期文案',
    customPosition: '自定義彈出位置',
    maxRange: '日期區間最大範圍',
    firstDayOfWeek: '自定義週起始日',

    today: '今天',
    checkIn: '入店',
    checkOut: '離店',

    laborDay: '勞動節',
    youthDay: '青年節',

    confirmText: '完成',
    confirmDisabledText: '請選擇結束時間',

    selectedCount: '選擇了 {count} 個日期',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleQuickSelect: 'Quick Select',
    demoTitleCustom: 'Custom Calendar',
    demoTitlePoppable: 'Tiled Mode',

    selectSingle: 'Select Single Date',
    selectMultiple: 'Select Multiple Dates',
    selectRange: 'Select Date Range',

    customColor: 'Custom Color',
    customRange: 'Custom Date Range',
    customConfirm: 'Custom Button Text',
    customDayText: 'Custom Day Text',
    customPosition: 'Custom Popup Position',
    maxRange: 'Max Date Range',
    firstDayOfWeek: 'Custom First Day of Week',

    today: 'Today',
    checkIn: 'Check In',
    checkOut: 'Check Out',

    laborDay: 'Labor Day',
    youthDay: 'Youth Day',

    confirmText: 'Confirm',
    confirmDisabledText: 'Please select end time',

    selectedCount: 'Selected {count} dates',
  },
};

export const useCalendarDemoI18n = createDemoI18n(messages);


