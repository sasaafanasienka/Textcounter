import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text/Text';
import ToolBar from '../ToolBar/ToolBar';
import Footer from '../Footer/Footer'
import { themeClassName } from '../../js/utilits/themeClassName';
import { ThemeContext } from '../../contexts/ThemeContext'
import './main.scss'

function Main(props) {

    const themeData = React.useContext(ThemeContext);
    const mainClassName = themeClassName(themeData, 'main')

    return(
        <div className={mainClassName}>
            <Text onChangeText={props.onChangeText}/>
            <ToolBar textValue={props.textValue} onChangeText={props.onChangeText}/>
            <Footer />
        </div>
    )

}

export default Main;