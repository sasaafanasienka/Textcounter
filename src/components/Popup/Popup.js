import React from 'react';
import ReactDOM from 'react-dom';

import './popup.scss'

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='popup'>
                {/* <PopupTitle title='Attention'/> */}
            </div>
        )
    }
}

export default Popup;