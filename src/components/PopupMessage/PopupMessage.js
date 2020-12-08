import React from 'react';
import ReactDOM from 'react-dom';

import './popup-message.scss'

class PopupMessage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {
        return(
        <p className='popup-message popup-message_unactive'></p>
        )
    }
}

export default PopupMessage;