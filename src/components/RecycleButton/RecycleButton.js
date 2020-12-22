import React from 'react';
import ReactDOM from 'react-dom';
import './recycle-button.scss'
import LocalStorage from '../../js/localStorage'
import RecoverButton from '../RecycleItem/RecycleItem';

import recycleicon from '../../images/recycle.svg'
import RecycleBin from '../RecycleBin/RecycleBin';

const newLocalStorage = new LocalStorage();

class RecycleButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recycleContent: this.props.itemsInRecycle
        }

        this.showRecycleBin = this.showRecycleBin.bind(this)
    }

    showRecycleBin() {
        document.querySelector('.recycle-bin').classList.add('recycle-bin_active')
    }

    render() {
            return(
                <button className='recycle-button' onClick={this.showRecycleBin}>
                    <img className='button__icon' src={recycleicon} alt='recycle icon'></img>
                    <div className='recycle-button__items-counter'>{Object.keys(this.props.itemsInRecycle).length}</div>
                </button>
            )
    }
}

export default RecycleButton;