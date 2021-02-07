import React from 'react';
import ReactDOM from 'react-dom';
import ButtonClosePopup from '../ButtonClosePopup/ButtonClosePopup';

import './popup.scss'

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='popup'>
                <PopupTitle title={this.props.title}/>
                <ButtonClosePopup classToClose='popup' />
                {this.props.content}
            </div>
        )
    }
}

export default Popup;