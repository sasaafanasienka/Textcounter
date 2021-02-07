import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'

import { ThemeContext } from '../../contexts/ThemeContext';
import { themeClassName } from '../../js/utilits/themeClassName';

function Text(props) {

    const themeData = React.useContext(ThemeContext);
    const inputClassName = themeClassName(themeData, 'text__input')

    function sendTextToStatCount() {
        props.onChangeText(document.querySelector('.text__input').value)
    }

    return(
        <div className='text'>
            <textarea onChange={sendTextToStatCount}
                    className={inputClassName} 
                    type="text" 
                    placeholder="Ваш текст" />
        </div>
    )
}

export default Text;