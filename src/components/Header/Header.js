import React from 'react';
import headerLogo from '../../images/logo.svg';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import './Header.scss';

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state={}

    }

    render() {
   
      return (
        <div className='header'>
          <img className='header__logo' alt='header logo' src={headerLogo} />
          {/* <p className='text'>ver. 1.0</p> */}
        </div>
      );
    }
}

export default Header;