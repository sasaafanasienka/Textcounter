import React from 'react';
import ReactDOM from 'react-dom';
import ButtonClosePopup from '../ButtonClosePopup/ButtonClosePopup';
import PopupTitle from '../PopupTitle/PopupTitle';

import './popup.scss'

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='popup'>
                <PopupTitle title='Attention'/>
                <ButtonClosePopup classToClose='popup' />
                <p className='popup__text'>{this.props.text}</p>
            </div>
        )
    }
}

export default Popup;