import React from 'react';
import ReactDOM from 'react-dom';
import LocalStorage from '../../js/localStorage'

import './recycle-clear-button.scss'

const newLocalStorage = new LocalStorage();

class RecycleClearButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.clearRecycle = this.clearRecycle.bind(this)

    }
    
    clearRecycle() {
        newLocalStorage.clearLocalStorage();
        this.props.onClearAll();
    }

    render() {
        return(
            <button onClick={this.clearRecycle} className='button recycle-clear-button'>Очистить корзину</button>
            )

    }

}

export default RecycleClearButton;