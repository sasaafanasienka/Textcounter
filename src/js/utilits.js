export function showPopupMessage(x, y, message, messageColor) {
    const popup = document.querySelector('.popup-message')
    popup.classList.add('popup-message_active');
    const popupActive = document.querySelector('.popup-message_active')
    popupActive.style.right = x
    popupActive.style.top = y
    popupActive.style.color = messageColor
    popupActive.innerText = message
    popup.classList.remove('popup-message_unactive');
    setTimeout(() => {
        popup.classList.add('popup-message_unactive');
        popup.classList.remove('popup-message_active');
    }, 3000)
}