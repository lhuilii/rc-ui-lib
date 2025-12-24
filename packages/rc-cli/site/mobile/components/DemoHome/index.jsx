import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { config } from 'site-mobile-shared';
import { getLangFromRoute } from '../../routes';

import DemoHomeNav from '../DemoHomeNav';
import './index.less';

const DemoHome = () => {
  const { pathname } = useLocation();
  
  // 从路由路径中获取语言
  const lang = useMemo(() => {
    return getLangFromRoute(pathname);
  }, [pathname]);

  const siteConfig = useMemo(() => {
    const { locales, defaultLang } = config.site;
    if (locales && lang) {
      // 如果当前语言配置存在，使用当前语言；否则使用默认语言；最后 fallback 到 zh-CN
      return locales[lang] || locales[defaultLang] || locales['zh-CN'] || config.site;
    }
    return config.site;
  }, [lang]);

  const smallTitle = useMemo(() => {
    return siteConfig?.title?.length >= 8;
  }, [siteConfig]);

  if (!siteConfig) {
    return null;
  }

  return (
    <div className="demo-home">
      <h1
        className={classnames('demo-home__title', {
          'demo-home__title--small': smallTitle,
        })}
      >
        <img src={siteConfig.logo} alt="" />
        <span>{siteConfig.title}</span>
      </h1>
      {siteConfig.description && <h2 className="demo-home__desc">{siteConfig.description}</h2>}
      {siteConfig.nav && siteConfig.nav.length > 0 && siteConfig.nav.map((group) => (
        <DemoHomeNav key={group.title} lang={lang} group={group} />
      ))}
    </div>
  );
};

export default DemoHome;
