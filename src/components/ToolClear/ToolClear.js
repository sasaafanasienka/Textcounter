import React from 'react';
import ReactDOM from 'react-dom';
import deleteIcon from '../../images/delete_icon.svg'
import { showPopupMessage } from '../../js/utilits'
import LocalStorage from '../../js/localStorage'
import ToolButton from '../ToolButton/ToolButton';
import { months } from '../../js/constants'

const newLocalStorage = new LocalStorage();

class ToolClear extends React.Component {

    constructor(props) {
        super(props);
        this.clearTextArea = this.clearTextArea.bind(this); //это требуется чтобы не потерять котекст
        this.state = {};
    }

    clearTextArea() {
        let textAreaContent = document.querySelector('.text__input').value
        let dataForRecycle = this.makeItemForRecycle(textAreaContent)
        newLocalStorage.addTo('recycle', dataForRecycle)
        document.querySelector('.text__input').value = ''
        this.props.onChangeText();
        this.props.onChangeInRecycle();
    }

    makeItemForRecycle(deletedText) {
        const current = new Date();
        const currentDate = current.getDate();
        const currentMonth = months[current.getMonth()];
        const currentYear = current.getFullYear();
        const currentHours = current.getHours();
        const currentMinutes = current.getMinutes();
        if (currentMinutes.length === 1) {currentMinutes = `0${currentMinutes}`}
        const currentMiliSeconds = Date.parse(current);
        let textTitle = '';
        (deletedText.length > 18) ? textTitle = deletedText.slice(0, 18).concat('...') : textTitle = deletedText
        return {
            deleteTime: currentMiliSeconds,
            deletedPhrase: `Удалено ${currentDate} ${currentMonth} ${currentYear}г. в ${currentHours}:${currentMinutes}`,       
            title: textTitle,
            text: deletedText,
            textLength: deletedText.length     
        }
    }

    render() {
        return (
            <ToolButton 
                type='clear text area'
                icon={deleteIcon}
                isActive={this.props.isActive}
                onClick={this.clearTextArea}
            />
        )
    }
}

export default ToolClear;