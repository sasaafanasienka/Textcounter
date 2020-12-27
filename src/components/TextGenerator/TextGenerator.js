import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from '../../js/api';
import { alphabet } from '../../js/constants';
import { showPopupMessage } from '../../js/utilits'
import fishicon from '../../images/fish.svg'
import Button from '../Button/Button'
const api = (template) => new Api(template);


class TextGenerator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popupWasShown: false
        }

        this.statCount = this.statCount.bind(this); //это требуется чтобы не потерять котекст
        this.textGen = this.textGen.bind(this); //это требуется чтобы не потерять котекст
        this.editText = this.editText.bind(this); //это требуется чтобы не потерять котекст
        this.showPopup = this.showPopup.bind(this); //это требуется чтобы не потерять котекст
    }

    statCount() {
        this.props.onChangeText();
    }

    editText(text) {
        const textToReplace = /\\n\\n/g
        let editedText = text.replace(textToReplace, '\n')
        document.querySelector('.text__input').value = editedText
        this.statCount()
    }

    textGen(event) {
        api('standings').request()
            .then((result) => {
                this.editText(result.text)
            })
            .catch(() => {
                console.log('Error in server request')
                showPopupMessage(event.clientX, event.clientY, 'Ошибка запроса к серверу fish-text.ru', 'red')
            })
    }

    showPopup(event) {
        showPopupMessage(event.clientX, event.clientY, 'генерировать рыбный текст', 'black')
        this.setState({popupWasShown: true})
        setTimeout(() => {
            this.setState({popupWasShown: false})
        }, 60000)
    }

    render() {
        let showPopupFunc = this.showPopup
        if (this.state.popupWasShown === true) {
            showPopupFunc = null;
        }
        
        return(
            <Button 
                type='main' 
                color='red' 
                onClick={this.textGen} 
                icon={fishicon} 
                alt='fish text button'
            />

        )
    }
}

export default TextGenerator;