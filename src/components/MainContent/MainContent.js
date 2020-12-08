import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text/Text';
import Stat from '../Stat/Stat';
import './main-content.scss'
import ToolBar from '../ToolBar/ToolBar';
import TextGenerator from '../TextGenerator/TextGenerator';


class MainContent extends React.Component {

    constructor(props){
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        
        this.state = {
            text: ''
        };
      }

    onChangeText(valueOfTextArea) {
        this.setState({
            text: valueOfTextArea
        })
    }

    render() {

        const textToCountStat = this.state.text

        return(
            <div className='main-content'>
                <Text onChangeText={this.onChangeText} text={this.state.text}/>
                <ToolBar onChangeText={this.onChangeText} text={this.state.text}/>
                <TextGenerator onChangeText={this.onChangeText}/>
                <Stat text={textToCountStat} onChangeText={this.onChangeText}/>
            </div>
        )
    }

}

export default MainContent;