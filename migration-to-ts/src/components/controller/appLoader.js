import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '05cb4bc4157d4c18b3ea67fbe736059f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
