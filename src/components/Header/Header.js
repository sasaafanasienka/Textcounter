import React from 'react';
import Stat from '../Stat/Stat';
import './header.scss'
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import headerLogo_dark from '../../images/logo_dark.svg';
import { Link } from 'react-router-dom';
import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';

function Header(props) {

    const logoImport = props.theme === 'light' ? headerLogo : headerLogo_dark
    const classNameByTheme = themeClassNameGen(props.theme, 'header')

    if (props.onlyLogo) { 
        return(
            <header className={classNameByTheme}>
                <Link to={`/`}><img className='header__logo' alt='app logo' src={logoImport} /></Link>
            </header>
        )
    } else {
        return(
            <header className={classNameByTheme}>
                <Link to={`/`}><img className='header__logo' alt='app logo' src={logoImport} /></Link>
                <Stat />
                <TextGenerator onChangeText={props.onChangeText}/>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(Header)