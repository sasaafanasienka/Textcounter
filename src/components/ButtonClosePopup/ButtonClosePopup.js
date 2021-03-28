import React from 'react';
import ReactDOM from 'react-dom';
import './button-close-popup.scss'
import closeIcon from '../../images/close.svg'

class ButtonClosePopup extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            type: this.props.type
        };

        this.close = this.close.bind(this)

    }

    close() {
        document.querySelector(`.${this.props.classToClose}`).classList.remove(`${this.props.classToClose}_active`)
    }

    render() {
        return (
            <button onClick={this.close} className='button-close-popup'>
                <img src={closeIcon} alt="close" />
            </button>
        )
    }
}

export default ButtonClosePopup;