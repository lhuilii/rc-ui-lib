// packages/rc-ui-lib/src/icon/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    tabUsage: '用法示例',
    tabBasic: '基础图标',
    tabOutline: '线框风格',
    tabFilled: '实底风格',

    demoTitleBasic: '基础用法',
    demoTitleBadge: '徽标提示',
    demoTitleColor: '图标颜色',
    demoTitleSize: '图标大小',
    demoTitleCustom: '自定义图标',

    copySuccess: '复制成功：',
  },
  'zh-TW': {
    tabUsage: '用法示例',
    tabBasic: '基礎圖標',
    tabOutline: '線框風格',
    tabFilled: '實底風格',

    demoTitleBasic: '基礎用法',
    demoTitleBadge: '徽標提示',
    demoTitleColor: '圖標顏色',
    demoTitleSize: '圖標大小',
    demoTitleCustom: '自定義圖標',

    copySuccess: '複製成功：',
  },
  'en-US': {
    tabUsage: 'Usage Examples',
    tabBasic: 'Basic Icons',
    tabOutline: 'Outline Style',
    tabFilled: 'Filled Style',

    demoTitleBasic: 'Basic Usage',
    demoTitleBadge: 'Badge',
    demoTitleColor: 'Icon Color',
    demoTitleSize: 'Icon Size',
    demoTitleCustom: 'Custom Icon',

    copySuccess: 'Copied: ',
  },
};

export const useIconDemoI18n = createDemoI18n(messages);


