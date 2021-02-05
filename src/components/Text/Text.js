import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'
import EditButton from '../ToolButton/ToolButton';
import PopupMessage from '../PopupMessage/PopupMessage';

import { ThemeContext } from '../../contexts/ThemeContext';
import { themeClassName } from '../../js/utilits/themeClassName';

function Text() {

    
    const themeData = React.useContext(ThemeContext);

    const inputClassName = themeClassName(themeData, 'text__input')
    // function statCount() {
    //     clearTimeout(this.state.timerId)
    //     document.querySelector('.stat').style.opacity = '0.3'
    //     const timerId = setTimeout(() => {
    //         this.props.onChangeText()
    //         document.querySelector('.stat').style.opacity = '1'
    //     }, 250)
    //     this.setState({timerId: timerId})    
    // }

    // function statChanging() {
    //     // setText('Жопа')
    //     setText(document.querySelector('.text__input').value)
    // }

    return(
        <div className='text'>
            <textarea // onChange={}
                    className={inputClassName} 
                    type="text" 
                    placeholder="Ваш текст" />
        </div>
    )
}

export default Text;