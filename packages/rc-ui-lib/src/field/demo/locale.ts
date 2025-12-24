// packages/rc-ui-lib/src/field/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleType: '自定义类型',
    demoTitleDisabled: '禁用输入框',
    demoTitleIcon: '显示图标',
    demoTitleTooltip: '提示信息',
    demoTitleError: '错误提示',
    demoTitleButton: '插入按钮',
    demoTitleFormatter: '格式化输入内容',
    demoTitleAutosize: '高度自适应',
    demoTitleWordLimit: '显示字数统计',
    demoTitleAlign: '输入框内容对齐',
    demoTitleMethod: '调用方法',

    labelText: '文本',
    placeholderText: '请输入文本',

    labelTel: '手机号',
    placeholderTel: '请输入手机号',

    labelDigit: '整数',
    placeholderDigit: '请输入整数',

    labelNumber: '数字',
    placeholderNumber: '请输入数字',

    labelPassword: '密码',
    placeholderPassword: '请输入密码',

    readonlyValue: '输入框只读',
    disabledValue: '输入框已禁用',

    iconPlaceholder: '显示图标',
    clearPlaceholder: '显示清除图标',

    tooltipPlaceholder: '请输入文本',

    labelUsername: '用户名',
    placeholderUsername: '请输入用户名',

    labelPhone: '手机号',
    placeholderPhone: '请输入手机号',
    phoneError: '手机号格式错误',

    labelSms: '短信验证码',
    placeholderSms: '请输入短信验证码',
    send: '发送',

    formatterPlaceholder: '在输入时执行格式化',
    formatterBlurPlaceholder: '在失焦时执行格式化',

    labelMessage: '留言',
    placeholderMessage: '请输入留言',

    placeholderRightAlign: '输入框内容右对齐',

    focus: '聚焦',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleType: '自定義類型',
    demoTitleDisabled: '禁用輸入框',
    demoTitleIcon: '顯示圖標',
    demoTitleTooltip: '提示資訊',
    demoTitleError: '錯誤提示',
    demoTitleButton: '插入按鈕',
    demoTitleFormatter: '格式化輸入內容',
    demoTitleAutosize: '高度自適應',
    demoTitleWordLimit: '顯示字數統計',
    demoTitleAlign: '輸入框內容對齊',
    demoTitleMethod: '調用方法',

    labelText: '文本',
    placeholderText: '請輸入文本',

    labelTel: '手機號',
    placeholderTel: '請輸入手機號',

    labelDigit: '整數',
    placeholderDigit: '請輸入整數',

    labelNumber: '數字',
    placeholderNumber: '請輸入數字',

    labelPassword: '密碼',
    placeholderPassword: '請輸入密碼',

    readonlyValue: '輸入框只讀',
    disabledValue: '輸入框已禁用',

    iconPlaceholder: '顯示圖標',
    clearPlaceholder: '顯示清除圖標',

    tooltipPlaceholder: '請輸入文本',

    labelUsername: '用戶名',
    placeholderUsername: '請輸入用戶名',

    labelPhone: '手機號',
    placeholderPhone: '請輸入手機號',
    phoneError: '手機號格式錯誤',

    labelSms: '簡訊驗證碼',
    placeholderSms: '請輸入簡訊驗證碼',
    send: '發送',

    formatterPlaceholder: '在輸入時執行格式化',
    formatterBlurPlaceholder: '在失焦時執行格式化',

    labelMessage: '留言',
    placeholderMessage: '請輸入留言',

    placeholderRightAlign: '輸入框內容右對齊',

    focus: '聚焦',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleType: 'Custom Type',
    demoTitleDisabled: 'Disabled',
    demoTitleIcon: 'Show Icon',
    demoTitleTooltip: 'Tooltip',
    demoTitleError: 'Error Message',
    demoTitleButton: 'Insert Button',
    demoTitleFormatter: 'Format Input',
    demoTitleAutosize: 'Auto Resize',
    demoTitleWordLimit: 'Word Limit',
    demoTitleAlign: 'Text Align',
    demoTitleMethod: 'Methods',

    labelText: 'Text',
    placeholderText: 'Please enter text',

    labelTel: 'Phone',
    placeholderTel: 'Please enter phone number',

    labelDigit: 'Integer',
    placeholderDigit: 'Please enter integer',

    labelNumber: 'Number',
    placeholderNumber: 'Please enter number',

    labelPassword: 'Password',
    placeholderPassword: 'Please enter password',

    readonlyValue: 'Readonly',
    disabledValue: 'Disabled',

    iconPlaceholder: 'Show icon',
    clearPlaceholder: 'Show clear icon',

    tooltipPlaceholder: 'Please enter text',

    labelUsername: 'Username',
    placeholderUsername: 'Please enter username',

    labelPhone: 'Phone',
    placeholderPhone: 'Please enter phone number',
    phoneError: 'Invalid phone number format',

    labelSms: 'SMS Code',
    placeholderSms: 'Please enter SMS code',
    send: 'Send',

    formatterPlaceholder: 'Format on input',
    formatterBlurPlaceholder: 'Format on blur',

    labelMessage: 'Message',
    placeholderMessage: 'Please enter message',

    placeholderRightAlign: 'Right align',

    focus: 'Focus',
  },
};

export const useFieldDemoI18n = createDemoI18n(messages);

