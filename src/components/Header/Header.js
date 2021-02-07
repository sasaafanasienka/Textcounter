import React from 'react';
import Stat from '../Stat/Stat';
import './header.scss'
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import headerLogo_dark from '../../images/logo_dark.svg';
import LocalStorage from '../../js/localStorage';

import { ThemeContext } from '../../contexts/ThemeContext'
import { themeClassName } from '../../js/utilits/themeClassName';

function Header(props) {

    const themeData = React.useContext(ThemeContext);
    const classNameByTheme = themeClassName(themeData, 'header')
    let logoImport
    themeData.id === 0 ? logoImport = headerLogo : logoImport = headerLogo_dark


    return(
        <header className={classNameByTheme}>
            <img className='header__logo' alt='app logo' src={logoImport} />
            <Stat textValue={props.textValue} />
            <TextGenerator onChangeText={props.onChangeText}/>
            {/* <RecycleButton itemsInRecycle='1' onChangeInRecycle={'this.onChangeInRecycle'}/> */}
        </header>
        )
}

export default Header;