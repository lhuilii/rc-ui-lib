export default {
  name: 'rc-ui-lib',
  build: {
    packageManager: 'pnpm',
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: './',
    },
  },
  site: {
    defaultLang: 'zh-CN',
    locales: {
      'zh-CN': {
        title: 'RC-UI-LIB',
        description: '轻量、可靠的移动端组件库',
        logo: 'https://rancui.github.io/rc-ui-lib/rc-ui-lib.png',
        langLabel: '中文',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/rancui/rc-ui-lib',
          },
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'advanced-usage',
                title: '进阶用法',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'theme',
                title: '定制主题',
              },
              {
                path: 'contribution',
                title: '贡献指南',
              },
            ],
          },
          {
            title: '布局组件',
            items: [
              {
                path: 'flex',
                title: 'Flex 布局',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'cell',
                title: 'Cell 单元格',
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider 全局配置',
              },
              {
                path: 'typography',
                title: 'Typography 文本',
              },
              {
                path: 'styles',
                title: 'Style 内置样式',
              },
              {
                path: 'icon',
                title: 'Icon 图标',
              },
              {
                path: 'image',
                title: 'Image 图片',
              },
              {
                path: 'popup',
                title: 'Popup 弹出层',
              },
              {
                path: 'toast',
                title: 'Toast 轻提示',
              },
            ],
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'calendar',
                title: 'Calendar 日历',
              },
              {
                path: 'cascader',
                title: 'Cascader 级联选择',
              },
              {
                path: 'checkbox',
                title: 'Checkbox 复选框',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker 时间选择',
              },
              {
                path: 'field',
                title: 'Field 输入框',
              },
              {
                path: 'form',
                title: 'Form 表单',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 数字键盘',
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密码输入框',
              },
              {
                path: 'picker',
                title: 'Picker 选择器',
              },
              {
                path: 'radio',
                title: 'Radio 单选框',
              },
              {
                path: 'rate',
                title: 'Rate 评分',
              },
              // {
              //   path: 'search',
              //   title: 'Search 搜索',
              // },
              {
                path: 'slider',
                title: 'Slider 滑块',
              },
              // {
              //   path: 'stepper',
              //   title: 'Stepper 步进器',
              // },
              {
                path: 'switch',
                title: 'Switch 开关',
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上传',
              },
            ],
          },
          {
            title: '反馈组件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 动作面板',
              },
              {
                path: 'dialog',
                title: 'Dialog 弹出框',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu 下拉菜单',
              },
              {
                path: 'floating-bubble',
                title: 'FloatingBubble 浮动气泡',
              },
              {
                path: 'loading',
                title: 'Loading 加载',
              },
              {
                path: 'notify',
                title: 'Notify 消息通知',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet 分享面板',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell 滑动单元格',
              },
            ],
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'badge',
                title: 'Badge 徽标',
              },
              {
                path: 'circle',
                title: 'Circle 环形进度条',
              },
              {
                path: 'collapse',
                title: 'Collapse 折叠面板',
              },
              {
                path: 'count-down',
                title: 'CountDown 倒计时',
              },
              {
                path: 'divider',
                title: 'Divider 分割线',
              },
              {
                path: 'empty',
                title: 'Empty 空状态',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview 图片预览',
              },
              {
                path: 'lazyload',
                title: 'Lazyload 懒加载',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
              {
                path: 'skeleton',
                title: 'Skeleton 骨架屏',
              },
              {
                path: 'steps',
                title: 'Steps 步骤条',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知栏',
              },
              {
                path: 'popover',
                title: 'Popover 气泡弹出框',
              },
              {
                path: 'progress',
                title: 'Progress 进度条',
              },
              {
                path: 'rolling-text',
                title: 'RollingText 翻滚文本',
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性布局',
              },
              {
                path: 'swiper',
                title: 'Swiper 轮播',
              },
              {
                path: 'tag',
                title: 'Tag 标签',
              },
              {
                path: 'text-ellipsis',
                title: 'TextEllipsis 文本省略',
              },
              {
                path: 'watermark',
                title: 'Watermark 水印',
              },
            ],
          },
          {
            title: '导航组件',
            items: [
              {
                path: 'action-bar',
                title: 'ActionBar 动作栏',
              },
              {
                path: 'grid',
                title: 'Grid 宫格',
              },
              // {
              //   path: 'index-bar',
              //   title: 'IndexBar 索引栏',
              // },
              {
                path: 'nav-bar',
                title: 'NavBar 导航栏',
              },
              // {
              //   path: 'pagination',
              //   title: 'Pagination 分页',
              // },
              {
                path: 'sidebar',
                title: 'Sidebar 侧边导航',
              },
              {
                path: 'tabs',
                title: 'Tabs 标签页',
              },
              {
                path: 'tabbar',
                title: 'Tabbar 标签栏',
              },
            ],
          },
          {
            title: '业务组件',
            items: [],
          },
        ],
      },
      'zh-TW': {
        title: 'RC-UI-LIB',
        description: '輕量、可靠的移動端組件庫',
        logo: 'https://rancui.github.io/rc-ui-lib/rc-ui-lib.png',
        langLabel: '繁體中文',
        links: [
          {
            logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'https://github.com/rancui/rc-ui-lib',
          },
        ],
        nav: [
          {
            title: '開發指南',
            items: [
              {
                path: 'home',
                title: '介紹',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'advanced-usage',
                title: '進階用法',
              },
              {
                path: 'changelog',
                title: '更新日誌',
              },
              {
                path: 'theme',
                title: '定製主題',
              },
              {
                path: 'contribution',
                title: '貢獻指南',
              },
            ],
          },
          {
            title: '佈局組件',
            items: [
              {
                path: 'flex',
                title: 'Flex 佈局',
              },
            ],
          },
          {
            title: '基礎組件',
            items: [
              {
                path: 'button',
                title: 'Button 按鈕',
              },
              {
                path: 'cell',
                title: 'Cell 單元格',
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider 全局配置',
              },
              {
                path: 'typography',
                title: 'Typography 文本',
              },
              {
                path: 'styles',
                title: 'Style 內置樣式',
              },
              {
                path: 'icon',
                title: 'Icon 圖標',
              },
              {
                path: 'image',
                title: 'Image 圖片',
              },
              {
                path: 'popup',
                title: 'Popup 彈出層',
              },
              {
                path: 'toast',
                title: 'Toast 輕提示',
              },
            ],
          },
          {
            title: '表單組件',
            items: [
              {
                path: 'calendar',
                title: 'Calendar 日曆',
              },
              {
                path: 'cascader',
                title: 'Cascader 級聯選擇',
              },
              {
                path: 'checkbox',
                title: 'Checkbox 複選框',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker 時間選擇',
              },
              {
                path: 'field',
                title: 'Field 輸入框',
              },
              {
                path: 'form',
                title: 'Form 表單',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 數字鍵盤',
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密碼輸入框',
              },
              {
                path: 'picker',
                title: 'Picker 選擇器',
              },
              {
                path: 'radio',
                title: 'Radio 單選框',
              },
              {
                path: 'rate',
                title: 'Rate 評分',
              },
              {
                path: 'slider',
                title: 'Slider 滑塊',
              },
              {
                path: 'switch',
                title: 'Switch 開關',
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上傳',
              },
            ],
          },
          {
            title: '反饋組件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 動作面板',
              },
              {
                path: 'dialog',
                title: 'Dialog 彈出框',
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu 下拉菜單',
              },
              {
                path: 'floating-bubble',
                title: 'FloatingBubble 浮動氣泡',
              },
              {
                path: 'loading',
                title: 'Loading 加載',
              },
              {
                path: 'notify',
                title: 'Notify 消息通知',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩層',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新',
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet 分享面板',
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell 滑動單元格',
              },
            ],
          },
          {
            title: '展示組件',
            items: [
              {
                path: 'badge',
                title: 'Badge 徽標',
              },
              {
                path: 'circle',
                title: 'Circle 環形進度條',
              },
              {
                path: 'collapse',
                title: 'Collapse 折疊面板',
              },
              {
                path: 'count-down',
                title: 'CountDown 倒計時',
              },
              {
                path: 'divider',
                title: 'Divider 分割線',
              },
              {
                path: 'empty',
                title: 'Empty 空狀態',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview 圖片預覽',
              },
              {
                path: 'lazyload',
                title: 'Lazyload 懶加載',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
              {
                path: 'skeleton',
                title: 'Skeleton 骨架屏',
              },
              {
                path: 'steps',
                title: 'Steps 步驟條',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知欄',
              },
              {
                path: 'popover',
                title: 'Popover 氣泡彈出框',
              },
              {
                path: 'progress',
                title: 'Progress 進度條',
              },
              {
                path: 'rolling-text',
                title: 'RollingText 翻滾文本',
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性佈局',
              },
              {
                path: 'swiper',
                title: 'Swiper 輪播',
              },
              {
                path: 'tag',
                title: 'Tag 標籤',
              },
              {
                path: 'text-ellipsis',
                title: 'TextEllipsis 文本省略',
              },
              {
                path: 'watermark',
                title: 'Watermark 水印',
              },
            ],
          },
          {
            title: '導航組件',
            items: [
              {
                path: 'action-bar',
                title: 'ActionBar 動作欄',
              },
              {
                path: 'grid',
                title: 'Grid 宮格',
              },
              {
                path: 'nav-bar',
                title: 'NavBar 導航欄',
              },
              {
                path: 'sidebar',
                title: 'Sidebar 側邊導航',
              },
              {
                path: 'tabs',
                title: 'Tabs 標籤頁',
              },
              {
                path: 'tabbar',
                title: 'Tabbar 標籤欄',
              },
            ],
          },
          {
            title: '業務組件',
            items: [],
          },
        ],
      },
    },
  },
};
