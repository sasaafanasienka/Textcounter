import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text/Text';
import Stat from '../Stat/Stat';
import './main.scss'
import ToolBar from '../ToolBar/ToolBar';
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import RecycleButton from '../RecycleButton/RecycleButton';
import RecycleBin from '../RecycleBin/RecycleBin';
import LocalStorage from '../../js/localStorage';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup';

const newLocalStorage = new LocalStorage()


function Main() {

    if (localStorage.recycle === undefined) { //создаем корзину если она еще не создана
        newLocalStorage.loadTo('recycle', {}) 
    }

    // function onChangeText() {
    //     let valueOfTextArea = document.querySelector('.text__input').value
    //     this.setState({
    //         text: valueOfTextArea,
    //     })
    // }

    // function onChangeInRecycle() {
    //     const newRecycleData = newLocalStorage.loadFrom('recycle');
    //     this.setState({
    //         recycle: newRecycleData
    //     })
    // }

    // function popupInit(popupContent) {
    //     console.log(popupContent)
    //     this.setState({
    //         contentOnPopup: popupContent
    //     })
    // }

    // console.log(`В корзине ${Object.keys(this.state.recycle).length} объектов`)
    // const recycleContent = this.state.recycle

    return(
        <div className='main'>
            {/* <RecycleBin itemsInRecycle={'recycleContent'} onChangeInRecycle={this.onChangeInRecycle} onChangeText={this.onChangeText}/> */}
            <Text />
            {/* <ToolBar onChangeText={this.onChangeText} onChangeInRecycle={this.onChangeInRecycle} text={this.state.text} onPopupInit={this.popupInit}/> */}
            <Footer />
        </div>
    )

}

export default Main;