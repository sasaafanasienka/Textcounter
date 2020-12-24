import React from 'react';
import ReactDOM from 'react-dom';
import './stat.scss'
import '../../styles/main.scss'
import { alphabet } from '../../js/constants'
import TextGenerator from '../TextGenerator/TextGenerator'

class Stat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    // statCount(valueOfTextAtea) {
    //     this.setState ({text: valueOfTextAtea})
    // }

    symbolsCount() {
        const text = this.props.text
        return text.length
    }

    wordsCount() {
        const paragraphSymbol = /\n/g
        const text = this.props.text.toLowerCase().replace(paragraphSymbol, ' ')
        const words = text.split(' ').filter((item) => { //split делает массив из строк разделенных ' '
            return item !== ''  //filter создает новый массив убирая из старого пустые строки
        })
        return words      
    }

    paragraphsCount() {
        const text = this.props.text
        const paragraphs = text.split('\n').filter((item) => { //split делает массив из строк разделенных ' '
            return item !== ''  //filter создает новый массив убирая из старого пустые строки
        })
        return paragraphs.length      
    }

    render() {

        return(
            <div className='stat'>
                <p className='stat__number'>{this.symbolsCount()} знаков</p>
                <p className='stat__number'>{this.wordsCount().length} слов</p>
                <p className='stat__number'>{this.paragraphsCount()} абзацев</p>
            </div>
        )
    }

}

export default Stat;