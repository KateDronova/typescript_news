import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '90228118be09467ea9e989ebd5db5c7b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
