import React from 'react';
import ReactDOM from 'react-dom';
import './popup-title.scss'

class PopupTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <p className='popup-title'>{this.props.title}</p>
        )
    }
}

export default PopupTitle;