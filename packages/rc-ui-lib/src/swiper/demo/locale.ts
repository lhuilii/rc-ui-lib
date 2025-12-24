import { createDemoI18n, DemoLang } from '../../utils/lang';

const messages: Record<DemoLang, any> = {
  'zh-CN': {
    demoTitleBasic: '基础用法',
    demoTitleLazy: '懒加载',
    demoTitleEvent: '监听onIndexChange事件',
    demoTitleVertical: '纵向滚动',
    demoTitleSlideSize: '自定义滑块大小',
    demoTitleCenter: '滑块居中',
    demoTitleVerticalCenter: '纵向滑块居中',
    demoTitleIndicator: '自定义指示器',
    demoTitlePopup: 'Popup中展示',

    toastClickCard: (index: number) => `你点击了卡片 ${index + 1}`,
    toastCurrentIndex: (i: number) => `当前索引${i}`,

    btnPopupSwiper: 'Popup中展示轮播图',
  },
  'zh-TW': {
    demoTitleBasic: '基礎用法',
    demoTitleLazy: '懶加載',
    demoTitleEvent: '監聽onIndexChange事件',
    demoTitleVertical: '縱向滾動',
    demoTitleSlideSize: '自定義滑塊大小',
    demoTitleCenter: '滑塊居中',
    demoTitleVerticalCenter: '縱向滑塊居中',
    demoTitleIndicator: '自定義指示器',
    demoTitlePopup: 'Popup中展示',

    toastClickCard: (index: number) => `你點擊了卡片 ${index + 1}`,
    toastCurrentIndex: (i: number) => `當前索引${i}`,

    btnPopupSwiper: 'Popup中展示輪播圖',
  },
  'en-US': {
    demoTitleBasic: 'Basic Usage',
    demoTitleLazy: 'Lazy Load',
    demoTitleEvent: 'Listen onIndexChange',
    demoTitleVertical: 'Vertical',
    demoTitleSlideSize: 'Custom Slide Size',
    demoTitleCenter: 'Center',
    demoTitleVerticalCenter: 'Vertical Center',
    demoTitleIndicator: 'Custom Indicator',
    demoTitlePopup: 'In Popup',

    toastClickCard: (index: number) => `You clicked card ${index + 1}`,
    toastCurrentIndex: (i: number) => `Current index ${i}`,

    btnPopupSwiper: 'Show Swiper in Popup',
  },
};

export const useSwiperDemoI18n = createDemoI18n(messages);

