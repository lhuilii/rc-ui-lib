// packages/rc-ui-lib/src/utils/lang.ts
export type DemoLang = 'zh-CN' | 'zh-TW' | 'en-US';

export function getDemoLangFromPath(): DemoLang {
  if (typeof window === 'undefined') return 'zh-CN';

  let maybeLang: string | undefined;

  // 1. 优先从 hash 中解析：例如 '#/zh-TW/action-bar'
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) {
    // 去掉开头的 "#/"，取第一个 path 段作为语言
    const path = hash.slice(2); // 'zh-TW/action-bar'
    const [langFromHash] = path.split('/'); // 'zh-TW'
    maybeLang = langFromHash;
  }

  // 2. 如果 hash 里没有，再退回 pathname：例如 '/zh-TW/action-bar'
  if (!maybeLang) {
    const pathname = window.location.pathname || '';
    const [, langFromPath] = pathname.split('/'); // ['', 'zh-TW', 'action-bar']
    maybeLang = langFromPath;
  }

  if (maybeLang === 'zh-CN' || maybeLang === 'zh-TW' || maybeLang === 'en-US') {
    return maybeLang as DemoLang;
  }

  return 'zh-CN';
}

export function createDemoI18n<T extends Record<DemoLang, any>>(messages: T) {
  return function useDemoI18n() {
    const lang = getDemoLangFromPath();
    console.log(
      '[demo lang]',
      lang,
      'pathname:',
      typeof window !== 'undefined' ? window.location.pathname : '',
      'hash:',
      typeof window !== 'undefined' ? window.location.hash : '',
    );
    return messages[lang] || messages['zh-CN'];
  };
}