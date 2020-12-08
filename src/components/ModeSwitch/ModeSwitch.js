import React from 'react';
import ReactDOM from 'react-dom';
// import deleteIcon from '../../images/delete_icon.svg'
// import copyIcon from '../../images/copy_icon.svg'
// import pasteIcon from '../../images/paste_icon.svg'
// import { showPopupMessage } from '../../js/utilits'

import './mode-switch.scss'

class ModeSwitch extends React.Component {

    constructor(props) {

        super(props);

        // this.clearTextArea = this.clearTextArea.bind(this); //это требуется чтобы не потерять котекст в statcount
        // this.pasteInTextArea = this.pasteInTextArea.bind(this); //это требуется чтобы не потерять котекст в statcount
        this.switchDayNightMode = this.switchDayNightMode.bind(this); //это требуется чтобы не потерять котекст в statcount
    
        this.state = {
            mode: 'day'
        };
    }

    switchDayNightMode() {
        if (this.state.mode === 'day') {
            console.log('night mode switched')
            this.setState({
                mode: 'night'
            })
        } else {
            console.log('day mode switched')
            this.setState({
                mode: 'day'
            })
        }
    }

    render() {
        return(
            <button className='mode-switch' onClick={this.switchDayNightMode}>
                {/* <img className='edit-button__icon'
                    onClick={functionToAction}
                    src={this.state[this.props.type].icon} 
                    alt={this.props.type}>
                </img> */}
            </button>
        )
    }
}

export default ModeSwitch;