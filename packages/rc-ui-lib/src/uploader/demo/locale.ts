import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitlePreview: '文件预览',
    demoTitleStatus: '上传状态',
    demoTitleMaxCount: '限制上传数量',
    demoTitleMaxSize: '限制文件大小',
    demoTitleCustomStyle: '自定义上传样式',
    demoTitleCustomPreview: '自定义预览样式',
    demoTitleBeforeRead: '上传前置处理',
    demoTitleDisabled: '禁用文件上传',

    imageName: '图片名称',
    uploading: '上传中...',
    uploadFailed: '上传失败',

    toastFormatError: (name: string) => `${name}格式错误，请上传 jpg 格式图片`,
    toastFormat: '请上传 jpg 格式图片',
    toastOversize: '文件大小不能超过 5kb',

    btnUpload: '上传文件',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitlePreview: '文件預覽',
    demoTitleStatus: '上傳狀態',
    demoTitleMaxCount: '限制上傳數量',
    demoTitleMaxSize: '限制文件大小',
    demoTitleCustomStyle: '自定義上傳樣式',
    demoTitleCustomPreview: '自定義預覽樣式',
    demoTitleBeforeRead: '上傳前置處理',
    demoTitleDisabled: '禁用文件上傳',

    imageName: '圖片名稱',
    uploading: '上傳中...',
    uploadFailed: '上傳失敗',

    toastFormatError: (name: string) => `${name}格式錯誤，請上傳 jpg 格式圖片`,
    toastFormat: '請上傳 jpg 格式圖片',
    toastOversize: '文件大小不能超過 5kb',

    btnUpload: '上傳文件',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitlePreview: 'Preview',
    demoTitleStatus: 'Upload Status',
    demoTitleMaxCount: 'Max Count',
    demoTitleMaxSize: 'Max Size',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleCustomPreview: 'Custom Preview',
    demoTitleBeforeRead: 'Before Read',
    demoTitleDisabled: 'Disabled',

    imageName: 'Image name',
    uploading: 'Uploading...',
    uploadFailed: 'Upload failed',

    toastFormatError: (name: string) => `${name} format error, please upload jpg format image`,
    toastFormat: 'Please upload jpg format image',
    toastOversize: 'File size cannot exceed 5kb',

    btnUpload: 'Upload File',
  },
};

export const useUploaderDemoI18n = createDemoI18n(messages);

