// packages/rc-ui-lib/src/action-bar/demo/locale.ts
import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleBadge: '徽标提示',
    demoTitleIconColor: '自定义图标颜色',
    demoTitleButtonColor: '自定义按钮颜色',

    service: '客服',
    cart: '购物车',
    shop: '店铺',
    buyNow: '立即购买',
    addToCart: '加入购物车',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleBadge: '徽標提示',
    demoTitleIconColor: '自定義圖標顏色',
    demoTitleButtonColor: '自定義按鈕顏色',

    service: '客服',
    cart: '購物車',
    shop: '店舖',
    buyNow: '立即購買',
    addToCart: '加入購物車',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleBadge: 'Badge',
    demoTitleIconColor: 'Custom Icon Color',
    demoTitleButtonColor: 'Custom Button Color',

    service: 'Service',
    cart: 'Cart',
    shop: 'Shop',
    buyNow: 'Buy Now',
    addToCart: 'Add to Cart',
  },
};

export const useActionBarDemoI18n = createDemoI18n(messages);