import React from 'react';
import ReactDOM from 'react-dom';
import PopupMessage from '../PopupMessage/PopupMessage';
import ToolPaste from '../ToolPaste/ToolPaste';
import ToolCopy from '../ToolCopy/ToolCopy';
import ToolClear from '../ToolClear/ToolClear';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import './toolbar.scss'

function ToolBar(props) {

    function onChangeText(text) {
        props.onChangeText(text); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    function onChangeInRecycle() {
        console.log('toolbar on change in recycle')
        props.onChangeInRecycle(); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    function onPopupInit(popupContent) {
        props.onPopupInit(popupContent)
    }

    let isTextAreaHasContent = true

    let isClibBoardHasContent = true
    if (props.textValue.length === 0) {
        isTextAreaHasContent = false
    }
    navigator.clipboard.readText()
    .then(text => {
        if (text.length === 0) {
            isClibBoardHasContent = false
        }    
    })
    
    return(
        <div className='toolbar'>
            <ToggleTheme />
            <ToolCopy isActive={isTextAreaHasContent} onChangeText={onChangeText}/>
            <ToolPaste isActive={isClibBoardHasContent} onChangeText={onChangeText}/>
            <ToolClear isActive={isTextAreaHasContent} onChangeText={onChangeText} onChangeInRecycle={onChangeInRecycle} onPopupInit={onPopupInit}/>
            <PopupMessage />
        </div>
    )
}

export default ToolBar;