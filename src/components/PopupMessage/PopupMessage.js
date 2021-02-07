import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from '../../contexts/ThemeContext'
import { themeClassName } from '../../js/utilits/themeClassName';

import './popup-message.scss'

function PopupMessage() {

    const themeData = React.useContext(ThemeContext);
    const messageClassName = themeClassName(themeData, 'popup-message')

    return(
    <p className={`${messageClassName} popup-message_unactive`}></p>
    )
}

export default PopupMessage;