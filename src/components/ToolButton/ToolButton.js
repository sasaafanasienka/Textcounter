import React from 'react';
import ReactDOM from 'react-dom';
import './tool-button.scss'

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