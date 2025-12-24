import React, { useState, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classnames from 'classnames';

import SearchInput from '../SearchInput';
import './index.less';

const Header = (props) => {
  const versionRef = useRef(null);
  const langRef = useRef(null);
  const { lang, config, versions, langConfigs } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showVersionPop, setShowVersionPop] = useState(false);
  const [showLangPop, setShowLangPop] = useState(false);

  const checkHideVersionPop = (event) => {
    if (!versionRef.current.contains(event.target)) {
      setShowVersionPop(false);
    }
  };

  const checkHideLangPop = (event) => {
    if (!langRef.current.contains(event.target)) {
      setShowLangPop(false);
    }
  };

  const currentLangConfig = useMemo(() => {
    return langConfigs.find((item) => item.lang === lang) || langConfigs[0];
  }, [lang, langConfigs]);

  const toggleLangPop = () => {
    const val = !showLangPop;
    const action = val ? 'add' : 'remove';
    document.body[`${action}EventListener`]('click', checkHideLangPop);
    setShowLangPop(val);
  };

  const onSwitchLang = (targetLang) => {
    if (targetLang !== lang) {
      // 替换路径中的语言部分
      let newPath = pathname;
      // 如果当前路径包含语言前缀，则替换
      if (pathname.startsWith(`/${lang}/`)) {
        newPath = pathname.replace(`/${lang}/`, `/${targetLang}/`);
      } else if (pathname === `/${lang}` || pathname === `/${lang}/`) {
        newPath = `/${targetLang}/`;
      } else if (pathname.startsWith('/')) {
        // 如果路径不包含语言，则添加语言前缀
        newPath = `/${targetLang}${pathname}`;
      } else {
        newPath = `/${targetLang}/${pathname}`;
      }
      navigate(newPath);
    }
    setShowLangPop(false);
  };

  const toggleVersionPop = () => {
    //@ts-ignore
    const val = !showVersionPop;
    const action = val ? 'add' : 'remove';
    document.body[`${action}EventListener`]('click', checkHideVersionPop);
    setShowVersionPop(val);
  };

  const onSwitchVersion = (version) => {
    if (version.link) {
      window.location.href = version.link;
    }
  };

  return (
    <div className="vant-doc-header">
      <div className="vant-doc-row">
        <div className="vant-doc-header__top">
          <a className="vant-doc-header__logo">
            <img alt="rc-ui-lib" src={config.logo} />
            <span>{config.title}</span>
          </a>
          {config.searchConfig && <SearchInput lang={lang} searchConfig={config.searchConfig} />}
          <ul className="vant-doc-header__top-nav">
            {config.links &&
              config.links.length &&
              config.links.map((item) => (
                <li key={item.url} className="vant-doc-header__top-nav-item">
                  <a
                    className="vant-doc-header__logo-link"
                    target="_blank"
                    href={item.url}
                    title={item.alt}
                    rel="noreferrer"
                  >
                    <img src={item.logo} alt={item.alt} />
                  </a>
                </li>
              ))}
            {versions && (
              <li ref={versionRef} className="vant-doc-header__top-nav-item">
                <span
                  className={classnames('vant-doc-header__cube vant-doc-header__version', {
                    'vant-doc-header__version-multiple': versions.length > 1,
                  })}
                  onClick={toggleVersionPop}
                >
                  v{versions[0].label}
                  {/* <transition name="vant-doc-dropdown">
                    {showVersionPop && (
                      <div className="vant-doc-header__version-pop">
                        {versions.map((item) => (
                          <div
                            key={item}
                            className="vant-doc-header__version-pop-item"
                            onClick={() => onSwitchVersion(item)}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </transition> */}
                </span>
              </li>
            )}
            {langConfigs && langConfigs.length > 1 && (
              <li ref={langRef} className="vant-doc-header__top-nav-item">
                <span
                  className={classnames('vant-doc-header__cube vant-doc-header__lang', {
                    'vant-doc-header__lang-multiple': langConfigs.length > 1,
                  })}
                  onClick={toggleLangPop}
                >
                  {currentLangConfig?.label || '中文'}
                  {showLangPop && (
                    <div className="vant-doc-header__lang-pop">
                      {langConfigs.map((item) => (
                        <div
                          key={item.lang}
                          className={classnames('vant-doc-header__lang-pop-item', {
                            'vant-doc-header__lang-pop-item--active': item.lang === lang,
                          })}
                          onClick={() => onSwitchLang(item.lang)}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
