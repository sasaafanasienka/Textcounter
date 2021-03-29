import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text/Text';
import ToolBar from '../ToolBar/ToolBar';
import Footer from '../Footer/Footer'
import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';
import './main.scss'

function Main(props) {

    const mainClassName = themeClassNameGen(props.theme, 'main')

    return(
        <div className={mainClassName}>
            <Text onChangeText={props.onChangeText}/>
            <ToolBar textValue={props.textValue} onChangeText={props.onChangeText}/>
            <Footer />
        </div>
    )

}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
  }
  
export default connect(mapStateToProps)(Main);