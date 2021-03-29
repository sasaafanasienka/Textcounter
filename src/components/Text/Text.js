import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'

import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';

function Text(props) {

    const inputClassName = themeClassNameGen(props.theme, 'text__input')

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

const mapStateToData = state => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToData)(Text);