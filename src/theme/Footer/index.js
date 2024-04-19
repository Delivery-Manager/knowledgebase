import React, {useCallback} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import s from "./styles.module.css"
import Logo from "@site/static/img/logo.svg"
import UpIcon from "@site/static/img/up.svg"
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import Link from "@docusaurus/Link";
function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links, logo, style} = footer;

  const onClickUpButton = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return <footer className={s.footerWrapper}>
    <div className={s.footer}>
      <div className={s.footer__logo}>
        <Logo />
      </div>
      <div>
        <FooterLinks links={links} />
      </div>
      {/*<div>*/}
      {/*  <h3 className="footer__title">Соц. сети</h3>*/}
      {/*</div>*/}
      <div>
        <button onClick={onClickUpButton} className={s.footer__upButton}>
          <UpIcon />
        </button>
      </div>
    </div>

    <div className={s.footer__copyrights}>
      <div>
        {copyright}
      </div>
      <div>
        <ul className={s.footer__copyrightsList}>
          <li><Link className="footer__link-item" to={"/"}>Политика приватности</Link></li>
          <li><Link className="footer__link-item" to={"/"}>Условия использования</Link></li>
          <li><Link className="footer__link-item" to={"/"}>Cookies</Link></li>
        </ul>
      </div>
    </div>
  </footer>
  /*return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );*/
}
export default React.memo(Footer);
