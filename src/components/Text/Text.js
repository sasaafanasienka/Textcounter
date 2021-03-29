import React from 'react';
import ReactDOM from 'react-dom';

import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';
import { changeText } from '../../redux/actions';
import './text.scss'

function Text(props) {

    const inputClassName = themeClassNameGen(props.theme, 'text__input')

    function sendTextToStatCount() {
        props.changeText(document.querySelector('.text__input').value)
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

const mapStateToProps = state => {
    return {
        theme: state.theme.theme,
        text: state.text.text
    }
}

const mapReduceToProps = {
    changeText: changeText
}

export default connect(mapStateToProps, mapReduceToProps)(Text);