import React from 'react';
import ReactDOM from 'react-dom';
import './text.scss'
import EditButton from '../EditButton/EditButton';
import PopupMessage from '../PopupMessage/PopupMessage';

class Text extends React.Component {


    constructor(props) {
        super(props);

        this.statCount = this.statCount.bind(this); //это требуется чтобы не потерять котекст в statcount
    }

    statCount() {
        this.props.onChangeText(document.querySelector('.text__input').value); //эта строка отправляет данные поля ввода в пропсы maincontent
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