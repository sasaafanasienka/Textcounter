import React from 'react';
import ReactDOM from 'react-dom';
import deleteIcon from '../../images/delete_icon.svg'
import copyIcon from '../../images/copy_icon.svg'
import pasteIcon from '../../images/paste_icon.svg'
import { makeItemForRecycle, showPopupMessage } from '../../js/utilits'
import LocalStorage from '../../js/localStorage'
import './tool-button.scss'

const newLocalStorage = new LocalStorage();

class ToolButton extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        let className = 'tool-button'
        let functionToAction = null
        if (this.props.isActive === true) {
            className = 'tool-button tool-button_active'
            functionToAction = this.props.onClick
        } 

        return(
            <button className={className}>
                <img className='tool-button__icon'
                    onClick={functionToAction}
                    src={this.props.icon} 
                    alt={this.props.type}>
                </img>
            </button>
        )
    }
}

export default ToolButton;