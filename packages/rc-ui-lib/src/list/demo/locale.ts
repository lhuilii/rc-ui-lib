// packages/rc-ui-lib/src/list/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    tabTitleBasic: '基本用法',
    tabTitleError: '错误提示',
    tabTitleRefresh: '下拉刷新',

    errorText: '请求失败，点击重新加载',
  },
  'zh-TW': {
    tabTitleBasic: '基本用法',
    tabTitleError: '錯誤提示',
    tabTitleRefresh: '下拉刷新',

    errorText: '請求失敗，點擊重新加載',
  },
  'en-US': {
    tabTitleBasic: 'Basic Usage',
    tabTitleError: 'Error',
    tabTitleRefresh: 'Pull Refresh',

    errorText: 'Request failed. Click to reload',
  },
};

export const useListDemoI18n = createDemoI18n(messages);