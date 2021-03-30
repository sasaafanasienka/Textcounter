import React from 'react';
import ReactDOM from 'react-dom';
import copyIconLight from '../../images/copy_icon_light.svg'
import copyIconDark from '../../images/copy_icon_dark.svg'
import { showPopupMessage } from '../../js/utilits'
import ToolButton from '../ToolButton/ToolButton';
import { popupColors } from '../../js/constants';
import { connect } from 'react-redux';

function ToolCopy(props) {

    const isTextAreaHasContent = props.text.length === 0 ? false : true
    const copyIcon = props.theme === 'light' ? copyIconLight : copyIconDark

    function copyTextArea(event) {
        const text = document.querySelector('.text__input').value
        navigator.clipboard.writeText(text);
        showPopupMessage(event.clientX, event.clientY, 'Скопировано в буфер', popupColors.green)
    }

    return (
        <ToolButton 
            type='copy'
            icon={copyIcon}
            isActive={isTextAreaHasContent}
            onClick={copyTextArea}
        />
    )
    
}
    
const mapStateToProps = state => {
    return {
        theme: state.theme.theme,
        text: state.text.text
    }
}

export default connect(mapStateToProps)(ToolCopy);