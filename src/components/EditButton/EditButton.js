import React from 'react';
import ReactDOM from 'react-dom';
import deleteIcon from '../../images/delete_icon.svg'
import copyIcon from '../../images/copy_icon.svg'
import pasteIcon from '../../images/paste_icon.svg'
import { makeItemForRecycle, showPopupMessage } from '../../js/utilits'
import LocalStorage from '../../js/localStorage'
import './edit-button.scss'

const newLocalStorage = new LocalStorage();

class EditButton extends React.Component {

    constructor(props) {

        super(props);

        this.clearTextArea = this.clearTextArea.bind(this); //это требуется чтобы не потерять котекст
        this.pasteInTextArea = this.pasteInTextArea.bind(this); //это требуется чтобы не потерять котекст
        this.copyTextArea = this.copyTextArea.bind(this); //это требуется чтобы не потерять котекст
    
        this.state = {
            'delete' : {icon: deleteIcon, action: this.clearTextArea},
            'copy' : {icon: copyIcon, action: this.copyTextArea},
            'paste' : {icon: pasteIcon, action: this.pasteInTextArea},
        };
    }

    clearTextArea() {
        let textAreaContent = document.querySelector('.text__input').value
        let dataForRecycle = makeItemForRecycle(textAreaContent)
        newLocalStorage.addTo('recycle', dataForRecycle)
        document.querySelector('.text__input').value = ''
        this.props.onChangeText();
        this.props.onChangeInRecycle();
    }

    copyTextArea(event) {
        const text = document.querySelector('.text__input').value
        navigator.clipboard.writeText(text);
        showPopupMessage(event.clientX, event.clientY, 'Скопировано в буфер', 'green')
    }

    pasteInTextArea(event) {
        navigator.clipboard.readText()
        .then(text => {
            document.querySelector('.text__input').value = text
            this.props.onChangeText(text);
        }).then(() => {
            if (document.querySelector('.text__input').value.length === 0) {
                showPopupMessage(event.clientX, event.clientY, 'ошибка, возможно в буфере находится не текст', 'red')
            }
        })
    }

    render() {
        let className = 'edit-button'
        let functionToAction = null
        if (this.props.isActive === true) {
            className = 'edit-button edit-button_active'
            functionToAction = this.state[this.props.type].action
        } 

        return(
            <button className={className}>
                <img className='edit-button__icon'
                    onClick={functionToAction}
                    src={this.state[this.props.type].icon} 
                    alt={this.props.type}>
                </img>
            </button>
        )
    }
}

export default EditButton;