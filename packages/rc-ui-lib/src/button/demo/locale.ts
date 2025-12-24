// packages/rc-ui-lib/src/button/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitlePlain: '朴素按钮',
    demoTitleHairline: '细边框按钮',
    demoTitleDisabled: '禁用状态',
    demoTitleLoading: '加载状态',
    demoTitleShape: '按钮形状',
    demoTitleIcon: '图标按钮',
    demoTitleSize: '按钮尺寸',
    demoTitleBlock: '块级元素',
    demoTitleShadow: '阴影',
    demoTitleColor: '自定义颜色',
    demoTitleGroup: '按钮组',

    primary: '主要按钮',
    info: '信息按钮',
    default: '默认按钮',
    warning: '警告按钮',
    danger: '危险按钮',

    plainButton: '朴素按钮',
    hairlineButton: '细边框按钮',
    disabled: '禁用状态',

    loadingText: '加载中...',

    squareButton: '方形按钮',
    roundButton: '圆形按钮',

    button: '按钮',

    sizeLarge: '大号按钮',
    sizeNormal: '普通按钮',
    sizeSmall: '小型按钮',
    sizeMini: '迷你按钮',

    block: '块级元素',
    shadowButton: '阴影按钮',

    solidColorButton: '单色按钮',
    gradientButton: '渐变色按钮',

    prev: '上一步',
    refresh: '刷新',
    next: '下一步',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitlePlain: '樸素按鈕',
    demoTitleHairline: '細邊框按鈕',
    demoTitleDisabled: '禁用狀態',
    demoTitleLoading: '加載狀態',
    demoTitleShape: '按鈕形狀',
    demoTitleIcon: '圖標按鈕',
    demoTitleSize: '按鈕尺寸',
    demoTitleBlock: '塊級元素',
    demoTitleShadow: '陰影',
    demoTitleColor: '自定義顏色',
    demoTitleGroup: '按鈕組',

    primary: '主要按鈕',
    info: '資訊按鈕',
    default: '默認按鈕',
    warning: '警告按鈕',
    danger: '危險按鈕',

    plainButton: '樸素按鈕',
    hairlineButton: '細邊框按鈕',
    disabled: '禁用狀態',

    loadingText: '加載中...',

    squareButton: '方形按鈕',
    roundButton: '圓形按鈕',

    button: '按鈕',

    sizeLarge: '大號按鈕',
    sizeNormal: '普通按鈕',
    sizeSmall: '小型按鈕',
    sizeMini: '迷你按鈕',

    block: '塊級元素',
    shadowButton: '陰影按鈕',

    solidColorButton: '單色按鈕',
    gradientButton: '漸變色按鈕',

    prev: '上一步',
    refresh: '重新整理',
    next: '下一步',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitlePlain: 'Plain Button',
    demoTitleHairline: 'Hairline Button',
    demoTitleDisabled: 'Disabled',
    demoTitleLoading: 'Loading',
    demoTitleShape: 'Button Shape',
    demoTitleIcon: 'Icon Button',
    demoTitleSize: 'Button Size',
    demoTitleBlock: 'Block Element',
    demoTitleShadow: 'Shadow',
    demoTitleColor: 'Custom Color',
    demoTitleGroup: 'Button Group',

    primary: 'Primary Button',
    info: 'Info Button',
    default: 'Default Button',
    warning: 'Warning Button',
    danger: 'Danger Button',

    plainButton: 'Plain Button',
    hairlineButton: 'Hairline Button',
    disabled: 'Disabled',

    loadingText: 'Loading...',

    squareButton: 'Square Button',
    roundButton: 'Round Button',

    button: 'Button',

    sizeLarge: 'Large',
    sizeNormal: 'Normal',
    sizeSmall: 'Small',
    sizeMini: 'Mini',

    block: 'Block Element',
    shadowButton: 'Shadow Button',

    solidColorButton: 'Solid Color',
    gradientButton: 'Gradient Color',

    prev: 'Previous',
    refresh: 'Refresh',
    next: 'Next',
  },
};

export const useButtonDemoI18n = createDemoI18n(messages);


