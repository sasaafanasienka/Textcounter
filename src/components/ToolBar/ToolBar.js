import React from 'react';
import ReactDOM from 'react-dom';

import './toolbar.scss'
import EditButton from '../ToolButton/ToolButton';
import PopupMessage from '../PopupMessage/PopupMessage';
import ToolPaste from '../ToolPaste/ToolPaste';
import ToolCopy from '../ToolCopy/ToolCopy';
import ToolClear from '../ToolClear/ToolClear';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { ThemeContext } from '../../contexts/ThemeContext'


function ToolBar(props) {

    const themeData = React.useContext(ThemeContext);
    let themeProp
    themeData.id === 0 ? themeProp = 'light' : themeProp = 'dark' 

    function onChangeText() {
        props.onChangeText(); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    function onChangeInRecycle() {
        console.log('toolbar on change in recycle')
        props.onChangeInRecycle(); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    function onPopupInit(popupContent) {
        props.onPopupInit(popupContent)
    }

    let isTextAreaHasContent = true

    // let isClibBoardHasContent = true
    if (props.textValue.length === 0) {
        isTextAreaHasContent = false
    }
    // navigator.clipboard.readText()
    // .then(text => {
    //     if (text.length === 0) {
    //         isClibBoardHasContent = false
    //     }    
    // })
    
    return(
        <div className='toolbar'>
            <ToggleTheme onChangeTheme={props.onChangeTheme}/>
            <ToolCopy theme={themeProp} isActive={isTextAreaHasContent} onChangeText={onChangeText}/>
            {/* <ToolPaste isActive={isClibBoardHasContent} onChangeText={this.onChangeText}/> */}
            {/* <ToolClear isActive={isTextAreaHasContent} onChangeText={this.onChangeText} onChangeInRecycle={this.onChangeInRecycle} onPopupInit={this.onPopupInit}/> */}
            <PopupMessage />
        </div>
    )
}

export default ToolBar;