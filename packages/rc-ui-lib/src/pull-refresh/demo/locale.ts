// packages/rc-ui-lib/src/pull-refresh/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    tabBasic: '基础用法',
    tabSuccess: '成功提示',
    tabCustom: '自定义内容',

    tipsWithCount: (count: number) => `刷新次数: ${count}`,
    tipsDefault: '下拉试试',

    toastSuccess: '刷新成功',
    successText: '刷新成功',
  },
  'zh-TW': {
    tabBasic: '基礎用法',
    tabSuccess: '成功提示',
    tabCustom: '自定義內容',

    tipsWithCount: (count: number) => `刷新次數: ${count}`,
    tipsDefault: '下拉試試',

    toastSuccess: '刷新成功',
    successText: '刷新成功',
  },
  'en-US': {
    tabBasic: 'Basic Usage',
    tabSuccess: 'Success',
    tabCustom: 'Custom Content',

    tipsWithCount: (count: number) => `Refresh count: ${count}`,
    tipsDefault: 'Pull to refresh',

    toastSuccess: 'Refresh success',
    successText: 'Refresh success',
  },
};

export const usePullRefreshDemoI18n = createDemoI18n(messages);


