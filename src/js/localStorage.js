export class LocalStorage {

    remove(property) {
        localStorage.removeItem(property)
        localStorage.setItem([property], JSON.stringify({}))
    }

    checkLocalStorage() {
        // localStorage.clear()
        if (localStorage.recycle === undefined) {
            localStorage.setItem('recycle', JSON.stringify({}))
        } 
        // console.log(JSON.parse(localStorage.recycle))
        return JSON.parse(localStorage.recycle)
    }

    loadToLocalStorage(addToRecycle) {
        console.log(localStorage)
        const itemForRecycle = this.makeItemForRecycle(addToRecycle)
        let recycleContent = this.checkLocalStorage()
        const nameForDeletedItem = itemForRecycle.deleteTime.toString()
        recycleContent[nameForDeletedItem] = itemForRecycle
        localStorage.setItem('recycle', JSON.stringify(recycleContent));
        console.log(localStorage)
    }

    addTo(property, data) {
        let content = this.loadFrom(property)
        const nameForDeletedItem = data.deleteTime.toString()
        content[nameForDeletedItem] = data
        this.loadTo(property, content)
    }

    loadTo(property, content) {
        localStorage.setItem(property, JSON.stringify(content));
        console.log(`${property} changed`)
        console.log(JSON.parse(localStorage[property]))
    }

    loadFrom(property) {
                // localStorage.clear()
        // console.log(`try to load data from ${property}`)
        if (localStorage[property] === undefined) {
            localStorage.setItem([property], JSON.stringify({}))
        } 
        return JSON.parse(localStorage[property])
    }
};

export default LocalStorage

