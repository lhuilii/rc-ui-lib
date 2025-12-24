// packages/rc-ui-lib/src/form/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleValidateOnSubmit: '校验规则-触发时机onSubmit',
    demoTitleValidateOnChange: '校验规则-触发时机onChange',
    demoTitleTypes: '表单类型',

    submit: '提交',

    introUsername: '确保这是唯一的用户名',
    ruleRequiredUsername: '请填写用户名',
    ruleRequiredPassword: '请填写密码',

    labelUsername: '用户名',
    placeholderUsername: '请输入用户名',
    labelPassword: '密码',
    placeholderPassword: '请输入密码',

    labelPattern: '正则校验',
    placeholderPattern: '正则校验',
    rulePattern6Digits: '请输入6位数字',

    labelFunction: '函数校验',
    placeholderFunction: '函数校验',
    rulePhone: '请输入正确的手机号码',

    labelAsyncFunction: '异步函数校验',
    placeholderAsyncFunction: '异步函数校验',
    validating: '验证中...',
    ruleCorrectContent: '请输入正确内容',

    labelPattern2: '正则校验2',

    labelSwitch: '开关',
    labelCheckbox: '复选框',
    labelCheckboxGroup: '复选框组',
    checkbox1: '复选框1',
    checkbox2: '复选框2',

    labelRadio: '单选框',
    radio1: '单选框1',
    radio2: '单选框2',

    labelRate: '评分',

    labelUploader: '上传文件',
    ruleSelectFile: '请选择文件',
    uploaderFileName: '图片名称',

    labelTextarea: '详细地址',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleValidateOnSubmit: '校驗規則-觸發時機 onSubmit',
    demoTitleValidateOnChange: '校驗規則-觸發時機 onChange',
    demoTitleTypes: '表單類型',

    submit: '提交',

    introUsername: '確保這是唯一的用戶名',
    ruleRequiredUsername: '請填寫用戶名',
    ruleRequiredPassword: '請填寫密碼',

    labelUsername: '用戶名',
    placeholderUsername: '請輸入用戶名',
    labelPassword: '密碼',
    placeholderPassword: '請輸入密碼',

    labelPattern: '正則校驗',
    placeholderPattern: '正則校驗',
    rulePattern6Digits: '請輸入 6 位數字',

    labelFunction: '函數校驗',
    placeholderFunction: '函數校驗',
    rulePhone: '請輸入正確的手機號碼',

    labelAsyncFunction: '異步函數校驗',
    placeholderAsyncFunction: '異步函數校驗',
    validating: '驗證中...',
    ruleCorrectContent: '請輸入正確內容',

    labelPattern2: '正則校驗2',

    labelSwitch: '開關',
    labelCheckbox: '複選框',
    labelCheckboxGroup: '複選框組',
    checkbox1: '複選框1',
    checkbox2: '複選框2',

    labelRadio: '單選框',
    radio1: '單選框1',
    radio2: '單選框2',

    labelRate: '評分',

    labelUploader: '上傳文件',
    ruleSelectFile: '請選擇文件',
    uploaderFileName: '圖片名稱',

    labelTextarea: '詳細地址',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleValidateOnSubmit: 'Validation - onSubmit',
    demoTitleValidateOnChange: 'Validation - onChange',
    demoTitleTypes: 'Form Types',

    submit: 'Submit',

    introUsername: 'Make sure this is a unique username',
    ruleRequiredUsername: 'Please enter username',
    ruleRequiredPassword: 'Please enter password',

    labelUsername: 'Username',
    placeholderUsername: 'Please enter username',
    labelPassword: 'Password',
    placeholderPassword: 'Please enter password',

    labelPattern: 'Pattern Validation',
    placeholderPattern: 'Pattern validation',
    rulePattern6Digits: 'Please enter 6 digits',

    labelFunction: 'Function Validation',
    placeholderFunction: 'Function validation',
    rulePhone: 'Please enter a valid phone number',

    labelAsyncFunction: 'Async Function Validation',
    placeholderAsyncFunction: 'Async function validation',
    validating: 'Validating...',
    ruleCorrectContent: 'Please enter correct content',

    labelPattern2: 'Pattern Validation 2',

    labelSwitch: 'Switch',
    labelCheckbox: 'Checkbox',
    labelCheckboxGroup: 'Checkbox Group',
    checkbox1: 'Checkbox 1',
    checkbox2: 'Checkbox 2',

    labelRadio: 'Radio',
    radio1: 'Radio 1',
    radio2: 'Radio 2',

    labelRate: 'Rate',

    labelUploader: 'Upload File',
    ruleSelectFile: 'Please select file',
    uploaderFileName: 'Image name',

    labelTextarea: 'Detailed Address',
  },
};

export const useFormDemoI18n = createDemoI18n(messages);

