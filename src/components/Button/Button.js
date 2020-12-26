import React from 'react';
import ReactDOM from 'react-dom';
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

    iconRender() {
        const iconClassName = `button__icon_${this.props.type}`
        return (this.props.icon !== undefined ? 
            <img className={iconClassName} alt={this.props.icon} src={this.props.icon}></img> : null)
        }

    counterRender() {
        return (this.props.counter !== undefined && this.props.counter !== 0 ? 
            <div className='button__counter'>{this.props.counter}</div> : null)
        }

    textRender() {
        return (this.props.text !== undefined ? 
            this.props.text : null)
        }
    
    render() {
        const buttonClassName = `button button_${this.props.type}`
        const background = this.props.color

        return (
            <button onClick={this.props.onClick} className={buttonClassName} style={{background: background}}>
                {this.iconRender()}
                {this.counterRender()}
                {this.textRender()}
            </button>
        )
    }
}

export default Button;