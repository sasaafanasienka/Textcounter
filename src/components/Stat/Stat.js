import React from 'react';
import ReactDOM from 'react-dom';
import './stat.scss'
import '../../styles/main.scss'
import { rightWord } from '../../js/utilits/rightWord'

class Stat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

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
        return words.length      
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
                <p className='stat__number'>{rightWord(this.symbolsCount(), 'знак')}</p>
                <p className='stat__number'>{rightWord(this.wordsCount(), 'слово')}</p>
                <p className='stat__number'>{rightWord(this.paragraphsCount(), 'абзац')}</p>
            </div>
        )
    }

}

export default Stat;