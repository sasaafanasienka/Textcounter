import { months } from './constants'

export function showPopupMessage(x, y, message, messageColor) {
    // console.log(window.innerWidth)
    // console.log(window.innerHeight)
    // console.log(x, y)
    const popup = document.querySelector('.popup-message')
    popup.classList.add('popup-message_active');

    if (window.innerWidth / 2 > x) {
        popup.style.left = `${x}px`
    } else {
        popup.style.right = `${window.innerWidth - x}px`
    }
    if (window.innerHeight / 2 > y) {
        popup.style.top = `${y}px`
    } else {
        popup.style.bottom = `${window.innerHeight - y}px`
    }
    popup.style.color = messageColor
    popup.innerText = message
    popup.classList.remove('popup-message_unactive');
    setTimeout(() => {
        popup.classList.add('popup-message_unactive');
        popup.classList.remove('popup-message_active');
    }, 3000)
}

export function makeItemForRecycle(deletedText) {
    const current = new Date();
    const currentDate = current.getDate();
    const currentMonth = months[current.getMonth()];
    const currentYear = current.getFullYear();
    const currentHours = current.getHours();
    const currentMinutes = current.getMinutes();
    const currentMiliSeconds = Date.parse(current);
    let textTitle = '';
    if (deletedText.length > 15) {
        textTitle = deletedText.slice(0, 15).concat('...')
    } else {
        textTitle = deletedText
    }
    return {
        deleteTime: currentMiliSeconds,
        deletedPhrase: `Удалено ${currentDate} ${currentMonth} ${currentYear}г. в ${currentHours}:${currentMinutes}`,       
        title: textTitle,
        text: deletedText,
        textLength: deletedText.length     
    }
}