import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { themeClassName } from '../../js/utilits/themeClassName';

import './popup-message.scss'

function PopupMessage(props) {

    const messageClassName = themeClassName(props.theme, 'popup-message')

    return(
        <p className={`${messageClassName} popup-message_unactive`}></p>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(PopupMessage);