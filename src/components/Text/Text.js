import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'
import EditButton from '../EditButton/EditButton';
import PopupMessage from '../PopupMessage/PopupMessage';

class Text extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            timerId: 0
        }

        this.statCount = this.statCount.bind(this); //это требуется чтобы не потерять котекст в statcount
    }

    statCount() {
        clearTimeout(this.state.timerId)
        document.querySelector('.stat').style.opacity = '0.3'
        const timerId = setTimeout(() => {
            this.props.onChangeText(document.querySelector('.text__input').value)
            document.querySelector('.stat').style.opacity = '1'
        }, 500)
        this.setState({timerId: timerId})    
    }

    render() {

        return(
            <div className='text'>
                <textarea onChange={this.statCount} 
                        className='text__input' 
                        type="text" 
                        placeholder="Ваш текст" />
            </div>
        )
    }
}

export default Text;