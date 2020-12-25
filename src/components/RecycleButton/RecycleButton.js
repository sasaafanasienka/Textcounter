import React from 'react';
import ReactDOM from 'react-dom';
import LocalStorage from '../../js/localStorage'
import RecoverButton from '../RecycleItem/RecycleItem';

import recycleicon from '../../images/recycle.svg'
import RecycleBin from '../RecycleBin/RecycleBin';

import Button from '../Button/Button'

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
            <Button 
            type='main' 
            color='black' 
            onClick={this.showRecycleBin} 
            icon={recycleicon} 
            alt='recycle bin button'
            counter={Object.keys(this.props.itemsInRecycle).length}
        />)
    }
}

export default RecycleButton;