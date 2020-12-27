import React from 'react';
import ReactDOM from 'react-dom';

import './toolbar.scss'
import EditButton from '../EditButton/EditButton';
import PopupMessage from '../PopupMessage/PopupMessage';


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
                <EditButton type='delete' isActive={isTextAreaHasContent} onChangeText={this.onChangeText} onChangeInRecycle={this.onChangeInRecycle}/>
                <EditButton type='copy' isActive={isTextAreaHasContent} onChangeText={this.onChangeText}/>
                <EditButton type='paste' isActive={isClibBoardHasContent} onChangeText={this.onChangeText}/>
                <PopupMessage />
            </div>
        )
    }
}

export default ToolBar;