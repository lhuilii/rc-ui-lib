// packages/rc-ui-lib/src/share-sheet/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleMultiLine: '展示多行选项',
    demoTitleCustomIcon: '自定义图标',
    demoTitleWithDesc: '展示描述信息',

    cellShowShareSheet: '显示分享面板',

    sheetTitle: '立即分享给好友',
    sheetDesc: '描述信息',

    optWechat: '微信',
    optWeibo: '微博',
    optCopyLink: '复制链接',
    optPoster: '分享海报',
    optQrcode: '二维码',
    optMoments: '朋友圈',
    optQQ: 'QQ',
    optMiniProgramCode: '小程序码',
    optCustomName: '名称',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleMultiLine: '展示多行選項',
    demoTitleCustomIcon: '自定義圖標',
    demoTitleWithDesc: '展示描述資訊',

    cellShowShareSheet: '顯示分享面板',

    sheetTitle: '立即分享給好友',
    sheetDesc: '描述資訊',

    optWechat: '微信',
    optWeibo: '微博',
    optCopyLink: '複製連結',
    optPoster: '分享海報',
    optQrcode: '二維碼',
    optMoments: '朋友圈',
    optQQ: 'QQ',
    optMiniProgramCode: '小程序碼',
    optCustomName: '名稱',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleMultiLine: 'Multiple Lines',
    demoTitleCustomIcon: 'Custom Icon',
    demoTitleWithDesc: 'With Description',

    cellShowShareSheet: 'Show Share Sheet',

    sheetTitle: 'Share to Friends',
    sheetDesc: 'Description',

    optWechat: 'WeChat',
    optWeibo: 'Weibo',
    optCopyLink: 'Copy Link',
    optPoster: 'Share Poster',
    optQrcode: 'QR Code',
    optMoments: 'Moments',
    optQQ: 'QQ',
    optMiniProgramCode: 'Mini Program Code',
    optCustomName: 'Name',
  },
};

export const useShareSheetDemoI18n = createDemoI18n(messages);


