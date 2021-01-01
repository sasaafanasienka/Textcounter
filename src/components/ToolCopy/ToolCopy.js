import React from 'react';
import ReactDOM from 'react-dom';
import copyIcon from '../../images/copy_icon.svg'
import { showPopupMessage } from '../../js/utilits'
import ToolButton from '../ToolButton/ToolButton';

class ToolCopy extends React.Component {

    constructor(props) {
        super(props);
        this.copyTextArea = this.copyTextArea.bind(this); //это требуется чтобы не потерять котекст
        this.state = {};
    }

    copyTextArea(event) {
        const text = document.querySelector('.text__input').value
        navigator.clipboard.writeText(text);
        showPopupMessage(event.clientX, event.clientY, 'Скопировано в буфер', 'green')
    }

    render() {
        return (
            <ToolButton 
                type='copy'
                icon={copyIcon}
                isActive={this.props.isActive}
                onClick={this.copyTextArea}
            />
        )
    }
}

export default ToolCopy;