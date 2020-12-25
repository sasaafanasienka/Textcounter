import React from 'react';
import ReactDOM from 'react-dom';
import deleteIcon from '../../images/delete_icon.svg'
import copyIcon from '../../images/copy_icon.svg'
import pasteIcon from '../../images/paste_icon.svg'
import LocalStorage from '../../js/localStorage'
import './button.scss'

const newLocalStorage = new LocalStorage();

class Button extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            type: this.props.type
        };
    }

    render() {
        const buttonClassName = `button button_${this.props.type}`
        const iconClassName = `button__icon_${this.props.type}`
        const background = this.props.color

        if (this.props.counter !== '' && this.props.counter !== 0) {
            return(
                <button onClick={this.props.onClick} className={buttonClassName} style={{background: background}}>
                    <img className={iconClassName} alt={this.props.icon} src={this.props.icon}></img>
                    <div className='button__counter'>{this.props.counter}</div>
                </button>
            )
        } else {
            return(
                <button onClick={this.props.onClick} className={buttonClassName} style={{background: background}}>
                    <img className={iconClassName} alt={this.props.icon} src={this.props.icon}></img>
                </button>
            ) 
        }
    }
}

export default Button;