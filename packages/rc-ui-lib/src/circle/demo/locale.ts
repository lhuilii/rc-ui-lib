// packages/rc-ui-lib/src/circle/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleStyle: '样式定制',
    demoTitleStartPosition: '起始位置',

    width: '宽度定制',
    color: '颜色定制',
    gradient: '渐变色',
    counterclockwise: '逆时针',
    size: '大小定制',

    increase: '增加',
    decrease: '减少',

    left: '左侧',
    right: '右侧',
    bottom: '底部',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleStyle: '樣式定制',
    demoTitleStartPosition: '起始位置',

    width: '寬度定制',
    color: '顏色定制',
    gradient: '漸變色',
    counterclockwise: '逆時針',
    size: '大小定制',

    increase: '增加',
    decrease: '減少',

    left: '左側',
    right: '右側',
    bottom: '底部',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleStyle: 'Style Customization',
    demoTitleStartPosition: 'Start Position',

    width: 'Custom Width',
    color: 'Custom Color',
    gradient: 'Gradient',
    counterclockwise: 'Counterclockwise',
    size: 'Custom Size',

    increase: 'Increase',
    decrease: 'Decrease',

    left: 'Left',
    right: 'Right',
    bottom: 'Bottom',
  },
};

export const useCircleDemoI18n = createDemoI18n(messages);


