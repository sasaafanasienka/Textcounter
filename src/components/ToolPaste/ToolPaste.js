import React from 'react';
import ReactDOM from 'react-dom';
import pasteIconLight from '../../images/paste_icon_light.svg'
import pasteIconDark from '../../images/paste_icon_dark.svg'
import { showPopupMessage } from '../../js/utilits'
import ToolButton from '../ToolButton/ToolButton';
import { popupColors } from '../../js/constants';
import { connect } from 'react-redux';
import { changeText } from '../../redux/actions';

function ToolPaste(props) {
   
    const pasteIcon = props.theme === 'light' ? pasteIconLight : pasteIconDark

    let isClibBoardHasContent = true
  
    navigator.clipboard.readText()
        .then(text => {
            if (text.length === 0) {
                isClibBoardHasContent = false
            }    
        })

    function pasteInTextArea(event) {
        navigator.clipboard.readText()
            .then(text => {
                document.querySelector('.text__input').value = text
                props.changeText(text)
            }).then(() => {
                if (document.querySelector('.text__input').value.length === 0) {
                    showPopupMessage(event.clientX, event.clientY, 'ошибка, возможно в буфере находится не текст', popupColors.red)
                }
            })
    }
    
    return (
        <ToolButton 
            type='paste'
            icon={pasteIcon}
            isActive={isClibBoardHasContent}
            onClick={pasteInTextArea}
        />
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

const mapReduceToProps = {
    changeText: changeText
}

export default connect(mapStateToProps, mapReduceToProps)(ToolPaste);