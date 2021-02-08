import React from 'react';
import './Footer.scss';
import facebookLogoLight from '../../images/logo_fb_light.svg'
import githubLogoLight from '../../images/logo_github_light.svg'
import linkedinLogoLight from '../../images/logo_linkedin_light.svg'
import telegramLogoLight from '../../images/logo_telegram_light.svg'
import facebookLogoDark from '../../images/logo_fb_dark.svg'
import githubLogoDark from '../../images/logo_github_dark.svg'
import linkedinLogoDark from '../../images/logo_linkedin_dark.svg'
import telegramLogoDark from '../../images/logo_telegram_dark.svg'

import { ThemeContext } from '../../contexts/ThemeContext';
import { themeClassName } from '../../js/utilits/themeClassName';

function Footer() {
  const themeData = React.useContext(ThemeContext);

  const textClassName = themeClassName(themeData, 'footer__text')
  let facebookLogo, githubLogo, linkedinLogo, telegramLogo
  if (themeData.id === 0) {
    facebookLogo = facebookLogoLight
    githubLogo = githubLogoLight
    linkedinLogo = linkedinLogoLight
    telegramLogo = telegramLogoLight
  } else {
    facebookLogo = facebookLogoDark
    githubLogo = githubLogoDark
    linkedinLogo = linkedinLogoDark
    telegramLogo = telegramLogoDark
  }


  return (
    <div className="footer">
      <a className='footer__link' href="./Textcounter/about"><p className={textClassName}>&copy; Александр Афанасенко, 2021 | Об авторе</p></a>
      <div className='footer__social-links'>
        <a className='footer__icon-link' href="https://www.facebook.com/sasaafanasienka">
            <img src={facebookLogo} alt="Facebook logo" />
        </a>
        <a className='footer__icon-link' href="https://github.com/sasaafanasienka">
            <img src={githubLogo} alt="Facebook logo" />
        </a>
        <a className='footer__icon-link' href="https://www.linkedin.com/in/александр-афанасенко-bb672b15a/">
            <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a className='footer__icon-link' href="https://t.me/sanya2020327">
            <img src={telegramLogo} alt="telegram logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;