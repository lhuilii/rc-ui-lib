// packages/rc-ui-lib/src/dropdown-menu/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleCustomContent: '自定义菜单内容',
    demoTitleActiveColor: '自定义选中颜色',
    demoTitleDirection: '向上展开',
    demoTitleDisabled: '禁用菜单',
    demoTitleScroll: '滚动',

    optionAll: '全部商品',
    optionNew: '新款商品',
    optionActivity: '活动商品',

    optionDefaultOrder: '默认排序',
    optionHighRating: '好评排序',
    optionSales: '销量排序',

    filterTitle: '筛选',
    freeShipping: '包邮',
    groupBuy: '团购',

    confirm: '确定',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleCustomContent: '自定義選單內容',
    demoTitleActiveColor: '自定義選中顏色',
    demoTitleDirection: '向上展開',
    demoTitleDisabled: '禁用選單',
    demoTitleScroll: '滾動',

    optionAll: '全部商品',
    optionNew: '新款商品',
    optionActivity: '活動商品',

    optionDefaultOrder: '默認排序',
    optionHighRating: '好評排序',
    optionSales: '銷量排序',

    filterTitle: '篩選',
    freeShipping: '包郵',
    groupBuy: '團購',

    confirm: '確定',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleCustomContent: 'Custom Menu Content',
    demoTitleActiveColor: 'Custom Active Color',
    demoTitleDirection: 'Expand Upward',
    demoTitleDisabled: 'Disabled Menu',
    demoTitleScroll: 'Scroll',

    optionAll: 'All Products',
    optionNew: 'New Products',
    optionActivity: 'Activity Products',

    optionDefaultOrder: 'Default Order',
    optionHighRating: 'High Rating',
    optionSales: 'Sales Volume',

    filterTitle: 'Filter',
    freeShipping: 'Free Shipping',
    groupBuy: 'Group Buy',

    confirm: 'Confirm',
  },
};

export const useDropdownMenuDemoI18n = createDemoI18n(messages);

