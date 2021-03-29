import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ToolButton from '../ToolButton/ToolButton';
import darkThemeIcon from '../../images/darktheme_icon.svg'
import lightThemeIcon from '../../images/lighttheme_icon.svg'
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/actions';

function ToggleTheme(props) {

    const icon = props.theme === 'light' ? lightThemeIcon : darkThemeIcon

    function toggle() {
        props.toggleTheme()
    }

    return(
        <ToolButton 
            type='toggle theme'
            icon={icon}
            isActive = {true}
            onClick={toggle}
        />
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

const mapDispatchToProps = {
    toggleTheme: toggleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);