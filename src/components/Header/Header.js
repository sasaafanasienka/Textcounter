import React from 'react';
import headerLogo from '../../images/logo.svg';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" alt='header logo' src={headerLogo} />
      <ModeSwitch />
    </div>
  );
}

export default Header;