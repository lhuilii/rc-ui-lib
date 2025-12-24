// packages/rc-ui-lib/src/empty/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基本用法',
    demoTitleImageType: '图片类型',
    demoTitleCustomImage: '自定义图片',
    demoTitleBottom: '底部内容',

    description: '描述文字',
    tabError: '通用错误',
    button: '按钮',
  },
  'zh-TW': {
    demoTitleBasic: '基本用法',
    demoTitleImageType: '圖片類型',
    demoTitleCustomImage: '自定義圖片',
    demoTitleBottom: '底部內容',

    description: '描述文字',
    tabError: '通用錯誤',
    button: '按鈕',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleImageType: 'Image Type',
    demoTitleCustomImage: 'Custom Image',
    demoTitleBottom: 'Bottom Content',

    description: 'Description',
    tabError: 'General Error',
    button: 'Button',
  },
};

export const useEmptyDemoI18n = createDemoI18n(messages);

