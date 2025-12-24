// packages/rc-ui-lib/src/password-input/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleNative: '原生键盘用法',
    demoTitleLength: '自定义长度',
    demoTitleGutter: '格子间距',
    demoTitlePlain: '明文展示',
    demoTitleInfo: '提示信息',
    demoTitleSetValue: '手动清空密码',

    infoText: '密码为 6 位数字',
    errorInfo: '密码错误',
    clearButton: '清空密码',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleNative: '原生鍵盤用法',
    demoTitleLength: '自定義長度',
    demoTitleGutter: '格子間距',
    demoTitlePlain: '明文展示',
    demoTitleInfo: '提示資訊',
    demoTitleSetValue: '手動清空密碼',

    infoText: '密碼為 6 位數字',
    errorInfo: '密碼錯誤',
    clearButton: '清空密碼',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleNative: 'Native Keyboard',
    demoTitleLength: 'Custom Length',
    demoTitleGutter: 'Gutter',
    demoTitlePlain: 'Plain Text',
    demoTitleInfo: 'Info',
    demoTitleSetValue: 'Clear Password',

    infoText: 'Password is 6 digits',
    errorInfo: 'Password error',
    clearButton: 'Clear Password',
  },
};

export const usePasswordInputDemoI18n = createDemoI18n(messages);


