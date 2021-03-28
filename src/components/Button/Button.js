import React from 'react';
import ReactDOM from 'react-dom';
import './button.scss'

function Button(props) {

    function iconRender() {
        const iconClassName = `button__icon_${props.type}`
        return (props.icon ? 
            <img className={iconClassName} alt={props.icon} src={props.icon}></img> : null)
        }

    function counterRender() {
        return (props.counter && props.counter !== 0 ? 
            <div className='button__counter'>{props.counter}</div> : null)
        }

    function textRender() {
        return (props.text ? props.text : null)
        }
    
    const buttonClassName = `button button_${props.type}`
    const background = props.color

    return (
        <button onClick={props.onClick} className={buttonClassName} style={{background: background}}>
            {iconRender()}
            {counterRender()}
            {textRender()}
        </button>
    )
}

export default Button;