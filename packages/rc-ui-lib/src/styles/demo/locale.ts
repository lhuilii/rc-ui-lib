import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleEllipsis: '文字省略',
    demoTitleHairline: '1px 边框',
    demoTitleAnimation: '动画',

    ellipsisSingle: '这是一段最多显示一行的文字，后面的内容会省略',
    ellipsisDouble:
      '这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略',

    cellFade: 'Fade',
    cellSlideUp: 'Slide Up',
    cellSlideDown: 'Slide Down',
    cellSlideLeft: 'Slide Left',
    cellSlideRight: 'Slide Right',
  },
  'zh-TW': {
    demoTitleEllipsis: '文字省略',
    demoTitleHairline: '1px 邊框',
    demoTitleAnimation: '動畫',

    ellipsisSingle: '這是一段最多顯示一行的文字，後面的內容會省略',
    ellipsisDouble:
      '這是一段最多顯示兩行的文字，後面的內容會省略。這是一段最多顯示兩行的文字，後面的內容會省略',

    cellFade: 'Fade',
    cellSlideUp: 'Slide Up',
    cellSlideDown: 'Slide Down',
    cellSlideLeft: 'Slide Left',
    cellSlideRight: 'Slide Right',
  },
  'en-US': {
    demoTitleEllipsis: 'Ellipsis',
    demoTitleHairline: 'Hairline',
    demoTitleAnimation: 'Animation',

    ellipsisSingle: 'This is a text that will be truncated after one line',
    ellipsisDouble: 'This is a text that will be truncated after two lines. This is a text that will be truncated after two lines',
    cellFade: 'Fade',
    cellSlideUp: 'Slide Up',
    cellSlideDown: 'Slide Down',
    cellSlideLeft: 'Slide Left',
    cellSlideRight: 'Slide Right',
  },
};

export const useStylesDemoI18n = createDemoI18n(messages);

