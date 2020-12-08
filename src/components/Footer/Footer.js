import React from 'react';
import './Footer.scss';
import belarusFlag from '../../images/belarus_flag.svg'
import facebookLogo from '../../images/logo_fb.svg'
import githubLogo from '../../images/logo_github.svg'
import linkedinLogo from '../../images/logo_linkedin.svg'
import telegramLogo from '../../images/logo_telegram.svg'

function Footer() {
  return (
    <div className="footer">
      <div className='footer__copyright'>
        <img className='footer__logo' src={belarusFlag} alt='belarusian flag'></img>
        <p className='footer__text'>Александр Афанасенко, 2020</p>
      </div>
      <div className='footer__social-links'>
        <p className='footer__text'>Написать автору:</p>
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