import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleText: '文本',
    demoTitleTypes: '不同类型',
    demoTitleEllipsis: '文本省略',
    demoTitleMultiEllipsis: '多行文本省略',
    demoTitleTitle: '标题',
    demoTitleLink: '链接',

    textSample: '这是一条文本',
    titleLevel1: '一级测试标题',
    titleLevel2: '二级测试标题',
    titleLevel3: '三级测试标题',
    titleLevel4: '四级测试标题',
    titleLevel5: '五级测试标题',
    linkText: '测试Link',
  },
  'zh-TW': {
    demoTitleText: '文本',
    demoTitleTypes: '不同類型',
    demoTitleEllipsis: '文本省略',
    demoTitleMultiEllipsis: '多行文本省略',
    demoTitleTitle: '標題',
    demoTitleLink: '連結',

    textSample: '這是一條文本',
    titleLevel1: '一級測試標題',
    titleLevel2: '二級測試標題',
    titleLevel3: '三級測試標題',
    titleLevel4: '四級測試標題',
    titleLevel5: '五級測試標題',
    linkText: '測試Link',
  },
  'en-US': {
    demoTitleText: 'Text',
    demoTitleTypes: 'Types',
    demoTitleEllipsis: 'Ellipsis',
    demoTitleMultiEllipsis: 'Multi-line Ellipsis',
    demoTitleTitle: 'Title',
    demoTitleLink: 'Link',

    textSample: 'This is a text',
    titleLevel1: 'Level 1 Title',
    titleLevel2: 'Level 2 Title',
    titleLevel3: 'Level 3 Title',
    titleLevel4: 'Level 4 Title',
    titleLevel5: 'Level 5 Title',
    linkText: 'Test Link',
  },
};

export const useTypographyDemoI18n = createDemoI18n(messages);

