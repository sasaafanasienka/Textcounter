export class Api {

    constructor() {
        this.state = {
            template: 'https://fish-text.ru/get?type=paragraph&number=50' 
        }
    };

    request() {

        return fetch(this.state.template)
            .then((res) => {
                console.log(`Status of API request ${res.status}`)
                return res.json()
            })
            .then((result) => {
                return result;
            })
    };

}