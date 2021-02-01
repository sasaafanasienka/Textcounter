import React from 'react';
import ReactDOM from 'react-dom';
import './about-author.scss'
import avatar from '../../images/avatar.jpg';



function AboutAuthor() {

    return(
        <div className='about-author'>
            <img className='about-author__avatar' src={avatar} alt="Фото автора" />
            <h1 className='about-author__title'> Александр Афанасенко </h1>
            <h2 className='about-author__subtitle'> Junior Frontend-разработчик </h2>
            <a href="./"><p className='footer__text'>Главная</p></a>
        </div>
    )
}

export default AboutAuthor;