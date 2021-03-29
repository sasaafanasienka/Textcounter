import React from 'react';
import ReactDOM from 'react-dom';
import PopupMessage from '../PopupMessage/PopupMessage';
import ToolPaste from '../ToolPaste/ToolPaste';
import ToolCopy from '../ToolCopy/ToolCopy';
import ToolClear from '../ToolClear/ToolClear';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import './toolbar.scss'
import { connect } from 'react-redux';

function ToolBar(props) {

    function onPopupInit(popupContent) {
        props.onPopupInit(popupContent)
    }

    return(
        <div className='toolbar'>
            <ToggleTheme />
            <ToolCopy />
            <ToolPaste />
            <ToolClear onPopupInit={onPopupInit}/>
            <PopupMessage />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.text.text
    }
}

export default connect(mapStateToProps)(ToolBar);