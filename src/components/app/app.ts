import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data } from '../view/appView';

class App {
    private controller = new AppController();
    private view = new AppView();

    // constructor() {
    //     this.controller = new AppController();
    //     this.view = new AppView();
    // }

    start() {
        const sources1 = document.querySelector('.sources') as HTMLElement;
        sources1.addEventListener('click', (e) => this.controller.getNews(e, (data?: Data) => {
            if (data) {
                this.view.drawNews(data)
            }
        }));
        this.controller.getSources((data?: Data) => {
            if (data) {
                this.view.drawSources(data)
            }
        });
    }
}

export default App;
