import React from 'react';
import ReactDOM from 'react-dom';
import { showPopupMessage } from '../../js/utilits'
import fishicon from '../../images/fish.svg'
import Button from '../Button/Button'
import axios from 'axios'
// import { ThemeContext } from '../../contexts/ThemeContext'

// const api = (template) => new Api(template);
const API = 'https://fish-text.ru/get?type=paragraph&number=10'

class TextGenerator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        this.textGen = this.textGen.bind(this)
        this.editText = this.editText.bind(this)
        this.sendTextToStatCount = this.sendTextToStatCount.bind(this)
    }

    sendTextToStatCount(text) {
        this.props.onChangeText(text)
    }
    
    editText(text) {
        const textToReplace = /\\n\\n/g
        let editedText = text.replace(textToReplace, '\n')
        return editedText
    }
    
    textGen() {
        axios.get(API)
            .then((res) => {
                const editedText = this.editText(res.data.text)
                document.querySelector('.text__input').value = document.querySelector('.text__input').value + editedText
                this.sendTextToStatCount(document.querySelector('.text__input').value)
            })
            .catch(() => {
                console.log('Error in server request')
                // showPopupMessage(event.clientX, event.clientY, 'Ошибка запроса к серверу fish-text.ru', 'red')
            })

    }

    render() {
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

    // const themeData = React.useContext(ThemeContext);
    // let buttonColor
    // themeData.id === 0 ? buttonColor = 'red' : buttonColor = '#b10000'


    // textGen(event) {
    //     api('standings').request()
    //         .then((result) => {
    //             editText(result.text)
    //         })
    //         .catch(() => {
    //             console.log('Error in server request')
    //             // showPopupMessage(event.clientX, event.clientY, 'Ошибка запроса к серверу fish-text.ru', 'red')
    //         })
    // }



    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         popupWasShown: false
    //     }

    // }

    // statCount() {
    //     this.props.onChangeText();
    // }


    // showPopup(event) {
    //     showPopupMessage(event.clientX, event.clientY, 'генерировать рыбный текст', 'black')
    //     this.setState({popupWasShown: true})
    //     setTimeout(() => {
    //         this.setState({popupWasShown: false})
    //     }, 60000)
    // }

    // let showPopupFunc = this.showPopup
    // if (this.state.popupWasShown === true) {
    //     showPopupFunc = null;
    // }
    
}

export default TextGenerator;