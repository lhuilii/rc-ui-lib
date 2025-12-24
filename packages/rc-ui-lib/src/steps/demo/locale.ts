import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleCustomStyle: '自定义样式',
    demoTitleVertical: '竖向步骤条',

    stepBuyerOrder: '买家下单',
    stepSellerAccept: '商家接单',
    stepBuyerPickup: '买家提货',
    stepCompleted: '交易完成',

    btnNext: '下一步',

    logisticsStatus1: '【城市】物流状态1',
    logisticsStatus2: '【城市】物流状态2',
    logisticsShipped: '快件已发货',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleCustomStyle: '自定義樣式',
    demoTitleVertical: '豎向步驟條',

    stepBuyerOrder: '買家下單',
    stepSellerAccept: '商家接單',
    stepBuyerPickup: '買家提貨',
    stepCompleted: '交易完成',

    btnNext: '下一步',

    logisticsStatus1: '【城市】物流狀態1',
    logisticsStatus2: '【城市】物流狀態2',
    logisticsShipped: '快件已發貨',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleCustomStyle: 'Custom Style',
    demoTitleVertical: 'Vertical Steps',

    stepBuyerOrder: 'Buyer Order',
    stepSellerAccept: 'Seller Accept',
    stepBuyerPickup: 'Buyer Pickup',
    stepCompleted: 'Completed',

    btnNext: 'Next',

    logisticsStatus1: '[City] Logistics Status 1',
    logisticsStatus2: '[City] Logistics Status 2',
    logisticsShipped: 'Shipped',
  },
};

export const useStepsDemoI18n = createDemoI18n(messages);

