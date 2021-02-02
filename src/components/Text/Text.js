import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'
import EditButton from '../ToolButton/ToolButton';
import PopupMessage from '../PopupMessage/PopupMessage';

import { TextContext } from '../../contexts/TextContext';

function Text() {

    // function statCount() {
    //     clearTimeout(this.state.timerId)
    //     document.querySelector('.stat').style.opacity = '0.3'
    //     const timerId = setTimeout(() => {
    //         this.props.onChangeText()
    //         document.querySelector('.stat').style.opacity = '1'
    //     }, 250)
    //     this.setState({timerId: timerId})    
    // }

    function statChanging() {
        console.log('text changed')
        // setNewContext()
    }

    return(
        <div className='text'>
            <textarea onChange={statChanging}
                    className='text__input' 
                    type="text" 
                    placeholder="Ваш текст" />
        </div>
    )
}

export default Text;