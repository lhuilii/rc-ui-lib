// packages/rc-ui-lib/src/popup/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitlePosition: '弹出位置',
    demoTitleCloseIcon: '关闭图标',
    demoTitleRoundCorner: '圆角弹窗',
    demoTitleWithTitle: '标题弹框',

    cellShowBasic: '展示弹出层',
    cellTop: '顶部弹出',
    cellBottom: '底部弹出',
    cellLeft: '左侧弹出',
    cellRight: '右侧弹出',
    cellCloseIcon: '关闭图标',
    cellCustomCloseIcon: '自定义关闭图标',
    cellIconPosition: '图标位置',
    cellRoundCorner: '圆角弹窗',
    cellTitleDialog: '标题弹框',

    popupContent: '内容',
    popupTitle: '标题',
    popupDescription:
      '这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitlePosition: '彈出位置',
    demoTitleCloseIcon: '關閉圖標',
    demoTitleRoundCorner: '圓角彈窗',
    demoTitleWithTitle: '標題彈框',

    cellShowBasic: '展示彈出層',
    cellTop: '頂部彈出',
    cellBottom: '底部彈出',
    cellLeft: '左側彈出',
    cellRight: '右側彈出',
    cellCloseIcon: '關閉圖標',
    cellCustomCloseIcon: '自定義關閉圖標',
    cellIconPosition: '圖標位置',
    cellRoundCorner: '圓角彈窗',
    cellTitleDialog: '標題彈框',

    popupContent: '內容',
    popupTitle: '標題',
    popupDescription:
      '這是一段很長很長的描述這是一段很長很長的描述這是一段很長很長的描述這是一段很長很長的描述',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitlePosition: 'Position',
    demoTitleCloseIcon: 'Close Icon',
    demoTitleRoundCorner: 'Round Corner',
    demoTitleWithTitle: 'With Title',

    cellShowBasic: 'Show Popup',
    cellTop: 'Top',
    cellBottom: 'Bottom',
    cellLeft: 'Left',
    cellRight: 'Right',
    cellCloseIcon: 'Close Icon',
    cellCustomCloseIcon: 'Custom Close Icon',
    cellIconPosition: 'Icon Position',
    cellRoundCorner: 'Round Corner',
    cellTitleDialog: 'Title Dialog',

    popupContent: 'Content',
    popupTitle: 'Title',
    popupDescription:
      'This is a very long description. This is a very long description. This is a very long description. This is a very long description.',
  },
};

export const usePopupDemoI18n = createDemoI18n(messages);


