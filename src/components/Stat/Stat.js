import React from 'react';
import ReactDOM from 'react-dom';
import './stat.scss'
import '../../styles/main.scss'
import { rightWord } from '../../js/utilits/rightWord'
import { themeClassNameGen } from '../../js/utilits/themeClassNameGen';
import { connect } from 'react-redux';

function Stat(props) {

    const numbersClassName = themeClassNameGen(props.theme, 'stat__number')

    function symbolsCount() {
        const text = props.textValue
        return text.length
    }

    function wordsCount() {
        const paragraphSymbol = /\n/g
        const text = props.textValue.toLowerCase().replace(paragraphSymbol, ' ')
        const words = text.split(' ').filter((item) => { //split делает массив из строк разделенных ' '
            return item !== ''  //filter создает новый массив убирая из старого пустые строки
        })
        return words.length      
    }

    function paragraphsCount() {
        const text = props.textValue
        const paragraphs = text.split('\n').filter((item) => { //split делает массив из строк разделенных ' '
            return item !== ''  //filter создает новый массив убирая из старого пустые строки
        })
        return paragraphs.length      
    }

    return(
        <div className='stat'>
            <p className={numbersClassName}>{rightWord(symbolsCount(), 'знак')}</p>
            <p className={numbersClassName}>{rightWord(wordsCount(), 'слово')}</p>
            <p className={numbersClassName}>{rightWord(paragraphsCount(), 'абзац')}</p>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        theme: state.theme.theme
    }
}

export default connect(mapStateToProps)(Stat);