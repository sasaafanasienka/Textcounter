import React from 'react';
import ReactDOM from 'react-dom';
import pasteIconLight from '../../images/paste_icon_light.svg'
import pasteIconDark from '../../images/paste_icon_dark.svg'
import { showPopupMessage } from '../../js/utilits'
import ToolButton from '../ToolButton/ToolButton';
import { popupColors } from '../../js/constants';

function ToolPaste(props) {
   
    let pasteIcon
    props.theme === 'light' ? pasteIcon = pasteIconLight : pasteIcon = pasteIconDark

    function pasteInTextArea(event) {

        navigator.clipboard.readText()
        .then(text => {
            document.querySelector('.text__input').value = text
            sendTextToStatCount(text)
        }).then(() => {
            if (document.querySelector('.text__input').value.length === 0) {
                console.log(popupColors.red)
                showPopupMessage(event.clientX, event.clientY, 'ошибка, возможно в буфере находится не текст', popupColors.red)
            }
        })
    }
    
    function sendTextToStatCount(text) {
        props.onChangeText(text)
    }

    return (
    <ToolButton 
        type='paste'
        icon={pasteIcon}
        isActive={props.isActive}
        onClick={pasteInTextArea}
    />
    )
}

export default ToolPaste;