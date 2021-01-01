import React from 'react';
import ReactDOM from 'react-dom';

import './toolbar.scss'
import EditButton from '../ToolButton/ToolButton';
import PopupMessage from '../PopupMessage/PopupMessage';
import ToolPaste from '../ToolPaste/ToolPaste';
import ToolCopy from '../ToolCopy/ToolCopy';
import ToolClear from '../ToolClear/ToolClear';


class ToolBar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};
        this.onChangeText = this.onChangeText.bind(this); //это требуется чтобы не потерять котекст в onChangeText
        this.onChangeInRecycle = this.onChangeInRecycle.bind(this); //это требуется чтобы не потерять котекст в onChangeText
    }

    onChangeText() {
        this.props.onChangeText(); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    onChangeInRecycle() {
        console.log('toolbar on change in recycle')
        this.props.onChangeInRecycle(); //эта строка отправляет данные поля ввода в пропсы maincontent
    }

    render() {

        let isTextAreaHasContent = true
        let isClibBoardHasContent = true
        if (this.props.text.length === 0) {
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
                <ToolCopy isActive={isTextAreaHasContent} onChangeText={this.onChangeText}/>
                <ToolPaste isActive={isClibBoardHasContent} onChangeText={this.onChangeText}/>
                <ToolClear isActive={isTextAreaHasContent} onChangeText={this.onChangeText} onChangeInRecycle={this.onChangeInRecycle}/>
                <PopupMessage />
            </div>
        )
    }
}

export default ToolBar;