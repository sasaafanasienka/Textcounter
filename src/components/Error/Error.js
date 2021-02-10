import React from 'react';
import ReactDOM from 'react-dom';
// import './about.scss'
import errorImage from '../../images/error_avatar.svg';
import { ThemeContext } from '../../contexts/ThemeContext'
import { themeClassName } from '../../js/utilits/themeClassName';
import { Link } from 'react-router-dom';

function Error() {

    const themeData = React.useContext(ThemeContext);

    return(
        <div className={themeClassName(themeData, 'about')}>
            <img className='about__avatar' src={errorImage} alt="404" />
            <div className='about__text-container'>
                <h1 className={themeClassName(themeData, 'about__title')}>Такой страницы не существует</h1>
                <Link to="/" className='footer__link'>
                    <p className={themeClassName(themeData, 'footer__text')}>на главную</p>
                </Link>
            </div>
        </div>
    )
}

export default Error;