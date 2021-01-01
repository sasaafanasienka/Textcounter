import React from 'react';
import ReactDOM from 'react-dom';
import pasteIcon from '../../images/paste_icon.svg'
import { showPopupMessage } from '../../js/utilits'
import ToolButton from '../ToolButton/ToolButton';

class ToolPaste extends React.Component {

    constructor(props) {

        super(props);
        this.pasteInTextArea = this.pasteInTextArea.bind(this);
        this.state = {};
    }

    pasteInTextArea(event) {
        navigator.clipboard.readText()
        .then(text => {
            document.querySelector('.text__input').value = text
            this.props.onChangeText();
        }).then(() => {
            if (document.querySelector('.text__input').value.length === 0) {
                showPopupMessage(event.clientX, event.clientY, 'ошибка, возможно в буфере находится не текст', 'red')
            }
        })
    }

    render() {
        return (
            <ToolButton 
                type='paste'
                icon={pasteIcon}
                isActive={this.props.isActive}
                onClick={this.pasteInTextArea}
            />
        )
    }
}

export default ToolPaste;