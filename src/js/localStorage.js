export class LocalStorage {

    check() {
        const defaultTheme = JSON.parse(localStorage.getItem('defaultTheme'))
        if (defaultTheme) {
            return defaultTheme
        } else { //если такого свойства не сущетсвует
            localStorage.setItem('defaultTheme', JSON.stringify('light')) //то его надо создать и присвоить значение по умолчанию
            return localStorage.getItem('defaultTheme')
        } 
    }

    set(theme) {
        localStorage.setItem('defaultTheme', JSON.stringify(theme))
    }
    
};

export default LocalStorage

