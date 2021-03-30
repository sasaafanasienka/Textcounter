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

    return(
        <div className='toolbar'>
            <ToggleTheme />
            <ToolCopy />
            <ToolPaste />
            <ToolClear />
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