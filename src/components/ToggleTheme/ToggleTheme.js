import React from 'react';
import ReactDOM from 'react-dom';
import ToolButton from '../ToolButton/ToolButton';
import darkThemeIcon from '../../images/darktheme_icon.svg'
import lightThemeIcon from '../../images/lighttheme_icon.svg'

import { ThemeContext } from '../../contexts/ThemeContext'

function ToggleTheme(props) {

    const themeData = React.useContext(ThemeContext)
    let icon
    themeData.id === 0 ? icon = darkThemeIcon : icon = lightThemeIcon

    function toggle() {
        themeData.id === 0 ? props.onChangeTheme('dark') : props.onChangeTheme('light')  
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

export default ToggleTheme;