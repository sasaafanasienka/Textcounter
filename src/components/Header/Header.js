import React from 'react';
import Stat from '../Stat/Stat';
import './header.scss'
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import headerLogo_dark from '../../images/logo_dark.svg';
import { ThemeContext } from '../../contexts/ThemeContext'
import { themeClassName } from '../../js/utilits/themeClassName';
import { Route, Link } from 'react-router-dom';

function Header(props) {

    const themeData = React.useContext(ThemeContext);
    const classNameByTheme = themeClassName(themeData, 'header')
    let logoImport
    themeData.id === 0 ? logoImport = headerLogo : logoImport = headerLogo_dark

    if (props.onlyLogo) { 
        return(
            <header className={classNameByTheme}>
                <Link to={`/Textcounter`}><img className='header__logo' alt='app logo' src={logoImport} /></Link>
            </header>
        )
    } else {
        return(
            <header className={classNameByTheme}>
                <Link to={`/Textcounter`}><img className='header__logo' alt='app logo' src={logoImport} /></Link>
                <Stat textValue={props.textValue} />
                <TextGenerator onChangeText={props.onChangeText}/>
            </header>
        )
    }
}

export default Header;