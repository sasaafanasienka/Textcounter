import React from 'react';
import ReactDOM from 'react-dom';
import './recycle-bin.scss'
import LocalStorage from '../../js/localStorage'
import RecycleItem from '../RecycleItem/RecycleItem';
import Button from '../Button/Button'
import ButtonClosePopup from '../ButtonClosePopup/ButtonClosePopup';

const newLocalStorage = new LocalStorage();

class RecycleBin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recycleContent: this.props.itemsInRecycle,
        }

        this.renderAllItems = this.renderAllItems.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.refresh = this.refresh.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    refresh() {
        this.props.onChangeInRecycle();
    }

    renderAllItems() {
        const recycle = this.props.itemsInRecycle

        let itemsDOM = [];
        for (let item in recycle) {
            itemsDOM.push(this.renderItem(recycle[item].deleteTime, recycle[item].title, recycle[item].deletedPhrase, recycle[item].textLength))
        }
        return itemsDOM
    }

    renderItem(key, title, time, length) {
        return (
            <RecycleItem keyProp={key} title={title} time={time} length={length} onChangeInRecycle={this.refresh}/>
        )
    }

    renderClearAllButton() {
        return (Object.keys(this.props.itemsInRecycle).length !== 0 ?
        <Button type='text' color='red' onClick={this.clearAll} text='очистить корзину' alt='fish text button'/> : null)
    }

    clearAll() {
        newLocalStorage.loadTo('recycle', {})
        this.refresh()
    }

    render() {
        let title = 'Корзина'
        if (Object.keys(this.props.itemsInRecycle).length === 0) {
            title = title.concat(' пуста')
        }

        return(
            <div className='recycle-bin' onMouseLeave={this.closeAfterMouseLeaving} onMouseEnter={this.stopClosing}>
                <p className='recycle-bin__title'>{title}</p>
                <ButtonClosePopup classToClose='recycle-bin'/>
                {this.renderAllItems()}
                {this.renderClearAllButton()}
            </div>
        )
    }
}

export default RecycleBin;