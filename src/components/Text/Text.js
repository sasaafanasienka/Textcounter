import React from 'react';
import ReactDOM from 'react-dom';

import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';
import { changeText } from '../../redux/actions';
import './text.scss'

class Text extends React.Component {

    constructor(props) {
        super(props)

        this.sendTextToState = this.sendTextToState.bind(this)
    }
    
    sendTextToState(event) {
        this.props.changeText(event.target.value)
    }
    
    render() {
        const inputClassName = themeClassNameGen(this.props.theme, 'text__input')
        return(
            <div className='text'>
                <textarea onChange={this.sendTextToState}
                        className={inputClassName} 
                        type="text" 
                        placeholder="Ваш текст" 
                        value={this.props.text} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme,
        text: state.text.text
    }
}

const mapReduceToProps = {
    changeText: changeText
}

export default connect(mapStateToProps, mapReduceToProps)(Text);