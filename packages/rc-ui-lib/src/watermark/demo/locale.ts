import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleText: '文字水印',
    demoTitleImage: '图片水印',
    demoTitleGap: '自定义间隔',
    demoTitleRotate: '自定义倾斜角度',
    demoTitleFullPage: '显示范围',
    demoTitleHTML: 'HTML 水印',

    btnToggle: '切换',
  },
  'zh-TW': {
    demoTitleText: '文字水印',
    demoTitleImage: '圖片水印',
    demoTitleGap: '自定義間隔',
    demoTitleRotate: '自定義傾斜角度',
    demoTitleFullPage: '顯示範圍',
    demoTitleHTML: 'HTML 水印',

    btnToggle: '切換',
  },
  'en-US': {
    demoTitleText: 'Text Watermark',
    demoTitleImage: 'Image Watermark',
    demoTitleGap: 'Custom Gap',
    demoTitleRotate: 'Custom Rotation',
    demoTitleFullPage: 'Display Range',
    demoTitleHTML: 'HTML Watermark',

    btnToggle: 'Toggle',
  },
};

export const useWatermarkDemoI18n = createDemoI18n(messages);

