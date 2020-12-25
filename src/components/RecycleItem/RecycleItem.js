import React from 'react';
import ReactDOM from 'react-dom';
import './recycle-item.scss'
import LocalStorage from '../../js/localStorage'
import { rightWord } from '../../js/utilits/rightWord';

const newLocalStorage = new LocalStorage();

class RecycleItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            key: this.props.keyProp,
            title: this.props.title,
            time: this.props.time,
            length: this.props.length        
        }

        this.recover = this.recover.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    refresh() {
        this.props.onChangeInRecycle();
    }

    recover() {
        console.log(1)
        const recycle = JSON.parse(localStorage.recycle)
        document.querySelector('.text__input').value = recycle[this.state.key].text
        this.refresh();
    }

    render() {
        const key = this.props.keyProp
        const title = this.props.title
        const time = this.props.time
        const length = this.props.length

        return (
            <div className='recycle-item' key={key}>
                <button  className='recycle-item__button' onClick={this.recover}>
                    <p className='recycle-item__title'>{title}</p>
                    <p className='recycle-item__subtitle'>{rightWord(length, 'знак')}</p>
                    <p className='recycle-item__subtitle'>{time}</p>
                </button>
            </div>
        )
    }

}

export default RecycleItem;