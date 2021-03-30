import React from 'react';
import ReactDOM from 'react-dom';
// import './about.scss'
import errorImage from '../../images/error_avatar.svg';
import { themeClassName } from '../../js/utilits/themeClassName';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Error(props) {

    return(
        <div className={themeClassName(props.theme, 'about')}>
            <img className='about__avatar' src={errorImage} alt="404" />
            <div className='about__text-container'>
                <h1 className={themeClassName(props.theme, 'about__title')}>Такой страницы не существует</h1>
                <Link to="/" className='footer__link'>
                    <p className={themeClassName(props.theme, 'footer__text')}>на главную</p>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(Error);