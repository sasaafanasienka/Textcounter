import React from 'react';
import Stat from '../Stat/Stat';
import './header.scss'
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import RecycleButton from '../RecycleButton/RecycleButton';
import LocalStorage from '../../js/localStorage';

const newLocalStorage = new LocalStorage()

function Header(props) {

    return(
        <div className='header'>
            <img className='header__logo' alt='app logo' src={headerLogo} />
            <Stat text={'this.state.text'} onChangeText={'this.onChangeText'}/>
            <TextGenerator onChangeText={'this.onChangeText'}/>
            <RecycleButton itemsInRecycle='1' onChangeInRecycle={'this.onChangeInRecycle'}/>
        </div>
        )
}

export default Header;