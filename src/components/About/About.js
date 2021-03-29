import React from 'react';
import ReactDOM from 'react-dom';
import './about.scss'
import avatarAuthor from '../../images/avatar.jpg';
import avatarProject from '../../images/logo_avatar.svg';
import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { aboutData } from '../../js/aboutData';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function About(props) {

    const data = aboutData[props.content]
    let avatar
    props.content === 'about-author' ? avatar = avatarAuthor : avatar = avatarProject

    return(
        <div className={themeClassNameGen(props.theme, 'about')}>
            <img className='about__avatar' src={avatar} alt="Фото автора" />
            <div className='about__text-container'>
                <h1 className={themeClassNameGen(props.theme, 'about__title')}>{data.title}</h1>
                <h2 className={themeClassNameGen(props.theme, 'about__subtitle')}>{data.subtitle}</h2>
                <h2 className={themeClassNameGen(props.theme, 'about__mini-subtitle')}>{data.minisubtitle1}</h2>
                <p className={themeClassNameGen(props.theme, 'about__text')}>{data.text1}</p>
                <h2 className={themeClassNameGen(props.theme, 'about__mini-subtitle')}>{data.minisubtitle2}</h2>
                <p className={themeClassNameGen(props.theme, 'about__text')}>{data.text2}</p>
                <h2 className={themeClassNameGen(props.theme, 'about__mini-subtitle')}>{data.minisubtitle3}</h2>
                <p className={themeClassNameGen(props.theme, 'about__text')}>{data.text3}</p>
                <h2 className={themeClassNameGen(props.theme, 'about__mini-subtitle')}>{data.minisubtitle4}</h2>
                <p className={themeClassNameGen(props.theme, 'about__text')}>{data.text4}</p>
                <h2 className={themeClassNameGen(props.theme, 'about__mini-subtitle')}>{data.minisubtitle5}</h2>
                <p className={themeClassNameGen(props.theme, 'about__text')}>{data.text5}</p>
                <Link to="/" className='footer__link'>
                    <p className={themeClassNameGen(props.theme, 'footer__text')}>назад</p>
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

export default connect(mapStateToProps)(About);