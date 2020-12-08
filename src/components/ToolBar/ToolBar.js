import React from 'react';
import ReactDOM from 'react-dom';

import './toolbar.scss'
import EditButton from '../EditButton/EditButton';
import PopupMessage from '../PopupMessage/PopupMessage';


class ToolBar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};
        this.statCount = this.statCount.bind(this); //это требуется чтобы не потерять котекст в statcount
    }

    statCount() {
        this.props.onChangeText(document.querySelector('.text__input').value); //эта строка отправляет данные поля ввода в пропсы maincontent
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
                <EditButton type='delete' isActive={isTextAreaHasContent} onChangeText={this.statCount}/>
                <EditButton type='copy' isActive={isTextAreaHasContent} onChangeText={this.statCount}/>
                <EditButton type='paste' isActive={isClibBoardHasContent} onChangeText={this.statCount}/>
                <PopupMessage />
            </div>
        )
    }
}

export default ToolBar;