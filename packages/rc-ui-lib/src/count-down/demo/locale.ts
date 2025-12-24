// packages/rc-ui-lib/src/count-down/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleFormat: '自定义格式',
    demoTitleMillisecond: '毫秒级渲染',
    demoTitleCustom: '自定义样式',
    demoTitleControl: '手动控制',

    format: 'DD 天 HH 时 mm 分 ss 秒',
    millisecondFormat: 'HH:mm:ss:SS',
    controlFormat: 'ss:SSS',

    start: '开始',
    pause: '暂停',
    reset: '重置',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleFormat: '自定義格式',
    demoTitleMillisecond: '毫秒級渲染',
    demoTitleCustom: '自定義樣式',
    demoTitleControl: '手動控制',

    format: 'DD 天 HH 時 mm 分 ss 秒',
    millisecondFormat: 'HH:mm:ss:SS',
    controlFormat: 'ss:SSS',

    start: '開始',
    pause: '暫停',
    reset: '重置',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleFormat: 'Custom Format',
    demoTitleMillisecond: 'Millisecond Rendering',
    demoTitleCustom: 'Custom Style',
    demoTitleControl: 'Manual Control',

    format: 'DD days HH:mm:ss',
    millisecondFormat: 'HH:mm:ss:SS',
    controlFormat: 'ss:SSS',

    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
  },
};

export const useCountDownDemoI18n = createDemoI18n(messages);


