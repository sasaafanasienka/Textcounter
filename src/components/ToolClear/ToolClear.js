import React from 'react';
import ReactDOM from 'react-dom';
import deleteIconLight from '../../images/delete_icon_light.svg'
import deleteIconDark from '../../images/delete_icon_dark.svg'
import ToolButton from '../ToolButton/ToolButton';

function ToolClear(props) {

    let deleteIcon
    props.theme === 'light' ? deleteIcon = deleteIconLight : deleteIcon = deleteIconDark

    function clearTextArea() {
        document.querySelector('.text__input').value = ''
        props.onChangeText('');
    }

    return (
        <ToolButton 
            type='clear text area'
            icon={deleteIcon}
            isActive={props.isActive}
            onClick={clearTextArea}
        />
    )
}

export default ToolClear;