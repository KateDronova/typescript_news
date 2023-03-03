import { Data } from '../view/appView';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data?: Data) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback,
        );
    }

    getNews(e: MouseEvent, callback: (data?: Data) => void) {
        let target: HTMLButtonElement | null = <HTMLButtonElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (newsContainer && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId === null) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLButtonElement>target.parentNode;
        }
    }
}

export default AppController;
