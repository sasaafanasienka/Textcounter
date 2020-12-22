import React from 'react';
import ReactDOM from 'react-dom';
import './recycle-bin.scss'
import LocalStorage from '../../js/localStorage'
// import RecycleClearButton from '../RecycleClearButton/RecycleClearButton';
import RecycleItem from '../RecycleItem/RecycleItem';

const newLocalStorage = new LocalStorage();

class RecycleBin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recycleContent: this.props.itemsInRecycle,
            timerId: 0
        }

        this.closeAfterMouseLeaving = this.closeAfterMouseLeaving.bind(this)
        this.stopClosing = this.stopClosing.bind(this)
        this.renderAllItems = this.renderAllItems.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.refresh = this.refresh.bind(this)
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

    stopClosing() {
        clearTimeout(this.state.timerId)
    }

    closeAfterMouseLeaving() {
        const timerId = setTimeout(() => {
            document.querySelector('.recycle-bin').classList.remove('recycle-bin_active')
        }, 500)
        this.setState({timerId: timerId})
    }

    render() {
        let title = 'корзина'
        if (Object.keys(this.props.itemsInRecycle).length === 0) {
            title = 'корзина пуста'
        }

        return(
            <div className='recycle-bin' onMouseLeave={this.closeAfterMouseLeaving} onMouseEnter={this.stopClosing}>
                <p className='recycle-bin__title'>{title}</p>
                {this.renderAllItems()}
            </div>
        )
    }
}

export default RecycleBin;