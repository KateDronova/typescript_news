import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data } from '../view/appView';
import ChangeColor from './changeColors';

class App {
    private controller = new AppController();
    private view = new AppView();
    private changeColor = new ChangeColor();

    start() {
        const sources1 = <HTMLDivElement>document.querySelector('.sources');
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

        const button1 = <HTMLButtonElement>document.querySelector('button.light');
        button1.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Light');
        });
        const button2 = <HTMLButtonElement>document.querySelector('button.grape');
        button2.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Grape');
        });
        const button3 = <HTMLButtonElement>document.querySelector('button.blue');
        button3.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Blue');
        });
        const button4 = <HTMLButtonElement>document.querySelector('button.dark');
        button4.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Dark');
        });
    }
}

export default App;
