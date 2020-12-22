import React from 'react';
import ReactDOM from 'react-dom';
// import deleteIcon from '../../images/delete_icon.svg'
// import copyIcon from '../../images/copy_icon.svg'
// import pasteIcon from '../../images/paste_icon.svg'
// import { showPopupMessage } from '../../js/utilits'
import LocalStorage from '../../js/localStorage'
import './mode-switch.scss'

const newLocalStorage = new LocalStorage();

class ModeSwitch extends React.Component {

    constructor(props) {

        super(props);

        // this.clearTextArea = this.clearTextArea.bind(this); //это требуется чтобы не потерять котекст в statcount
        // this.pasteInTextArea = this.pasteInTextArea.bind(this); //это требуется чтобы не потерять котекст в statcount
        this.switchDayNightMode = this.switchDayNightMode.bind(this); //это требуется чтобы не потерять котекст в statcount
    
        this.state = {
            mode: localStorage.mode
        };
    }

    switchDayNightMode() {
        if (this.state.mode === 'day') {
            newLocalStorage.setDayNightMode('night')
            console.log('night mode switched')
            document.querySelector('.header').style.background = 'black'
            this.setState({
                mode: 'night'
            })
        } else {
            console.log('day mode switched')
            document.querySelector('.header').style.background = 'white'
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