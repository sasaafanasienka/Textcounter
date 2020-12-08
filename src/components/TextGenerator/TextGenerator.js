import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from '../../js/api';
import { alphabet } from '../../js/constants';
import { showPopupMessage } from '../../js/utilits'
const api = (template) => new Api(template);


class TextGenerator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.statCount = this.statCount.bind(this); //это требуется чтобы не потерять котекст в statcount
        this.textGen = this.textGen.bind(this); //это требуется чтобы не потерять котекст в statcount
        this.editText = this.editText.bind(this); //это требуется чтобы не потерять котекст в statcount
    }

    statCount() {
        this.props.onChangeText(document.querySelector('.text__input').value); //эта строка отправляет данные поля ввода в пропсы maincontent
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

    render() {
        return(
                <button onClick={this.textGen} className='button'>Генерировать рыбу</button>
        )
    }
}

export default TextGenerator;