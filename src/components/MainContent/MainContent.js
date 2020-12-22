import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text/Text';
import Stat from '../Stat/Stat';
import './main-content.scss'
import ToolBar from '../ToolBar/ToolBar';
import TextGenerator from '../TextGenerator/TextGenerator';
import headerLogo from '../../images/logo.svg';
import RecycleButton from '../RecycleButton/RecycleButton';
import RecycleBin from '../RecycleBin/RecycleBin';
import LocalStorage from '../../js/localStorage';

const newLocalStorage = new LocalStorage()

class MainContent extends React.Component {

    constructor(props){
        super(props);
        
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeInRecycle = this.onChangeInRecycle.bind(this);
        
        if (localStorage.recycle === undefined) { //создаем корзину если она еще не создана
            newLocalStorage.loadTo('recycle', {}) 
        }
        
        this.state = {
            text: '',
            recycle: newLocalStorage.loadFrom('recycle')            
        };
      }

    onChangeText(valueOfTextArea) {
        this.setState({
            text: valueOfTextArea
        })
    }

    onChangeInRecycle() {
        const newRecycleData = newLocalStorage.loadFrom('recycle');
        this.setState({
            recycle: newRecycleData
        })
    }

    render() {

        console.log('MainContent render')
        console.log(`В корзине ${Object.keys(this.state.recycle).length} объектов`)
        const recycleContent = this.state.recycle

        return(
            <div className='main-content'>
                <div className='main-content__toolbar'>
                    <img className='main-content__logo' alt='app logo' src={headerLogo} />
                    <Stat text={this.state.text} onChangeText={this.onChangeText}/>
                    <TextGenerator onChangeText={this.onChangeText}/>
                    <RecycleButton itemsInRecycle={recycleContent} onChangeInRecycle={this.onChangeInRecycle}/>
                </div>
                <RecycleBin itemsInRecycle={recycleContent} onChangeInRecycle={this.onChangeInRecycle}/>
                <Text onChangeText={this.onChangeText} text={this.state.text}/>
                <ToolBar onChangeText={this.onChangeText} onChangeInRecycle={this.onChangeInRecycle} text={this.state.text}/>
            </div>
        )
    }

}

export default MainContent;