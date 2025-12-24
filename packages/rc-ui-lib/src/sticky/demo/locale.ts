import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleOffsetTop: '吸顶距离',
    demoTitleContainer: '指定容器',
    demoTitleOffsetBottom: '吸底距离',

    btnBasic: '基础用法',
    btnOffsetTop: '吸顶距离',
    btnContainer: '指定容器',
    btnOffsetBottom: '吸底距离',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleOffsetTop: '吸頂距離',
    demoTitleContainer: '指定容器',
    demoTitleOffsetBottom: '吸底距離',

    btnBasic: '基礎用法',
    btnOffsetTop: '吸頂距離',
    btnContainer: '指定容器',
    btnOffsetBottom: '吸底距離',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleOffsetTop: 'Offset Top',
    demoTitleContainer: 'Container',
    demoTitleOffsetBottom: 'Offset Bottom',

    btnBasic: 'Basic Usage',
    btnOffsetTop: 'Offset Top',
    btnContainer: 'Container',
    btnOffsetBottom: 'Offset Bottom',
  },
};

export const useStickyDemoI18n = createDemoI18n(messages);

