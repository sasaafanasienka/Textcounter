import React from 'react';
import ReactDOM from 'react-dom';
import deleteIcon from '../../images/delete_icon.svg'
import LocalStorage from '../../js/localStorage'
import ToolButton from '../ToolButton/ToolButton';
import { months } from '../../js/constants'
import Button from '../Button/Button';
import Popup from '../Popup/Popup';

const newLocalStorage = new LocalStorage();

class ToolClear extends React.Component {

    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this); //это требуется чтобы не потерять котекст
        this.clearTextArea = this.clearTextArea.bind(this); //это требуется чтобы не потерять котекст
        this.loadItemToRecycle = this.loadItemToRecycle.bind(this); //это требуется чтобы не потерять котекст
        this.createPopupContent = this.createPopupContent.bind(this); //это требуется чтобы не потерять котекст
        this.isFreeSpaceInRecycle = this.isFreeSpaceInRecycle.bind(this); //это требуется чтобы не потерять котекст
        this.closePopup = this.closePopup.bind(this); //это требуется чтобы не потерять котекст

        this.state = {
            isClearRecycle: undefined,
        };
    }
    
    clear() {
        if (this.isFreeSpaceInRecycle() === true) {
            this.loadItemToRecycle()
            this.clearTextArea()
        } else {
            this.props.onPopupInit(this.createPopupContent())
            document.querySelector('.popup').classList.add('popup_active')
        }
    }
    
    clearTextArea() {
        document.querySelector('.text__input').value = ''
        this.props.onChangeText();
        this.props.onChangeInRecycle();
    }

    isFreeSpaceInRecycle() {
        return(Object.keys(newLocalStorage.loadFrom('recycle')).length < 3 ? true : false)
    }

    closePopup() {
        document.querySelector('.popup').classList.remove('popup_active')
    }

    createPopupContent() {
        return (
            <>
                <p className='popup__text'>В корзине слишком много элементов. Очистить корзину?</p>
                <Button type='text' color='red' text='Очистить корзину' onClick={() => {
                                                                            newLocalStorage.loadTo('recycle', {})
                                                                            this.loadItemToRecycle()
                                                                            this.clearTextArea()
                                                                            this.closePopup()
                                                                        }} />
                <Button type='text' color='red' text='Удалить и не помещать в корзину' onClick={() => {
                                                                                            this.clearTextArea()
                                                                                            this.closePopup()
                                                                                        }} />
                <Button type='text' color='grey' text='Отмена' onClick={this.closePopup} />
            </>
        )
    }

    loadItemToRecycle() {
        const deletedText = document.querySelector('.text__input').value
        const current = new Date();
        const currentDate = current.getDate();
        const currentMonth = months[current.getMonth()];
        const currentYear = current.getFullYear();
        const currentHours = current.getHours();
        let currentMinutes = current.getMinutes().toString();
        console.log(currentMinutes.length)
        currentMinutes.length === 1 ? currentMinutes = `0${currentMinutes}` : currentMinutes = currentMinutes
        const currentMiliSeconds = Date.parse(current);
        let textTitle = '';
        (deletedText.length > 18) ? textTitle = deletedText.slice(0, 18).concat('...') : textTitle = deletedText
        const item = {
            deleteTime: currentMiliSeconds,
            deletedPhrase: `Удалено ${currentDate} ${currentMonth} ${currentYear}г. в ${currentHours}:${currentMinutes}`,       
            title: textTitle,
            text: deletedText,
            textLength: deletedText.length     
        }
        newLocalStorage.addTo('recycle', item)
    }

    render() {
        return (
            <>
                <ToolButton 
                    type='clear text area'
                    icon={deleteIcon}
                    isActive={this.props.isActive}
                    onClick={this.clear}
                />
                <Popup title='Ошибка' content={this.createPopupContent()}/>
            </>
        )
    }
}

export default ToolClear;