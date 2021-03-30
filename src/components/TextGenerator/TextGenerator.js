import React from 'react';
import ReactDOM from 'react-dom';
import fishicon from '../../images/fish.svg'
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { axiosText } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function TextGenerator(props) {
    
    const dispatch = useDispatch()
    const text = useSelector((state) => {
        return state.text.text
    })

    function textGen() {
        dispatch(axiosText(text))
    }

    return(
        <Button 
            type='main' 
            color='red' 
            onClick={textGen} 
            icon={fishicon} 
            alt='fish text button'
        />
    )
}

export default TextGenerator;