import React from 'react';
import ReactDOM from 'react-dom';
import deleteIconLight from '../../images/delete_icon_light.svg'
import deleteIconDark from '../../images/delete_icon_dark.svg'
import ToolButton from '../ToolButton/ToolButton';
import { connect } from 'react-redux';
import { changeText } from '../../redux/actions';

function ToolClear(props) {

    const deleteIcon = props.theme === 'light' ? deleteIconLight : deleteIconDark
    const isTextAreaHasContent = props.text.length === 0 ? false : true

    function clearTextArea() {
        document.querySelector('.text__input').value = ''
        props.changeText('');
    }

    return (
        <ToolButton 
            type='clear text area'
            icon={deleteIcon}
            isActive={isTextAreaHasContent}
            onClick={clearTextArea}
        />
    )
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

export default connect(mapStateToProps, mapReduceToProps)(ToolClear);