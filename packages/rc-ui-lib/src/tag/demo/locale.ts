import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleStyle: '样式风格',
    demoTitleSize: '标签大小',
    demoTitleColor: '自定义颜色',

    cellTypePrimary: 'primary 类型',
    cellTypeSuccess: 'success 类型',
    cellTypeDanger: 'danger  类型',
    cellTypeWarning: 'warning  类型',
    cellStylePlain: '空心样式',
    cellStyleRound: '圆角样式',
    cellStyleMark: '标记样式',
    cellStyleCloseable: '可关闭标签',
    cellSizeSmall: '小号标签',
    cellSizeMedium: '中号标签',
    cellSizeLarge: '大号标签',
    cellColorBg: '背景颜色',
    cellColorText: '文字颜色',
    cellColorPlain: '空心颜色',

    tagLabel: '标签',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleStyle: '樣式風格',
    demoTitleSize: '標籤大小',
    demoTitleColor: '自定義顏色',

    cellTypePrimary: 'primary 類型',
    cellTypeSuccess: 'success 類型',
    cellTypeDanger: 'danger  類型',
    cellTypeWarning: 'warning  類型',
    cellStylePlain: '空心樣式',
    cellStyleRound: '圓角樣式',
    cellStyleMark: '標記樣式',
    cellStyleCloseable: '可關閉標籤',
    cellSizeSmall: '小號標籤',
    cellSizeMedium: '中號標籤',
    cellSizeLarge: '大號標籤',
    cellColorBg: '背景顏色',
    cellColorText: '文字顏色',
    cellColorPlain: '空心顏色',

    tagLabel: '標籤',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleStyle: 'Style',
    demoTitleSize: 'Tag Size',
    demoTitleColor: 'Custom Color',

    cellTypePrimary: 'Primary Type',
    cellTypeSuccess: 'Success Type',
    cellTypeDanger: 'Danger Type',
    cellTypeWarning: 'Warning Type',
    cellStylePlain: 'Plain Style',
    cellStyleRound: 'Round Style',
    cellStyleMark: 'Mark Style',
    cellStyleCloseable: 'Closeable Tag',
    cellSizeSmall: 'Small',
    cellSizeMedium: 'Medium',
    cellSizeLarge: 'Large',
    cellColorBg: 'Background Color',
    cellColorText: 'Text Color',
    cellColorPlain: 'Plain Color',

    tagLabel: 'Tag',
  },
};

export const useTagDemoI18n = createDemoI18n(messages);

