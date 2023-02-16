import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data } from '../view/appView';
import ChangeColor from './changeColors';

class App {
    private controller = new AppController();
    private view = new AppView();
    private changeColor = new ChangeColor();

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

        const button1 = document.querySelector('button.light') as Element;
        button1.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Light');
        });
        const button2 = document.querySelector('button.grape') as Element;
        button2.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Grape');
        });
        const button3 = document.querySelector('button.blue') as Element;
        button3.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Blue');
        });
        const button4 = document.querySelector('button.dark') as Element;
        button4.addEventListener('click', () => {
            this.changeColor.changeBackgroundColor('Dark');
        });
    }
}

export default App;
