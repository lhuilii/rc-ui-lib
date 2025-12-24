// packages/rc-ui-lib/src/rolling-text/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleDirection: '设置翻滚方向',
    demoTitleStopOrder: '设置各数位停止顺序',
    demoTitleText: '翻转非数字内容',
    demoTitleCustomStyle: '自定义样式',
    demoTitleManual: '手动控制',

    btnDown: '向下翻滚',
    btnUp: '向上翻滚',
    btnRoll: '翻滚',
    gridStart: '开始',
    gridReset: '重置',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleDirection: '設置翻滾方向',
    demoTitleStopOrder: '設置各數位停止順序',
    demoTitleText: '翻轉非數字內容',
    demoTitleCustomStyle: '自定義樣式',
    demoTitleManual: '手動控制',

    btnDown: '向下翻滾',
    btnUp: '向上翻滾',
    btnRoll: '翻滾',
    gridStart: '開始',
    gridReset: '重置',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleDirection: 'Direction',
    demoTitleStopOrder: 'Stop Order',
    demoTitleText: 'Non-numeric Content',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleManual: 'Manual Control',

    btnDown: 'Roll Down',
    btnUp: 'Roll Up',
    btnRoll: 'Roll',
    gridStart: 'Start',
    gridReset: 'Reset',
  },
};

export const useRollingTextDemoI18n = createDemoI18n(messages);


