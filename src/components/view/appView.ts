import News from './news/news';
import Sources from './sources/sources';
// import { Source } from './sources/sources';
// import { Article } from './news/news';

export interface Data {
    articles: [];
    sources: []
    // articles: Array<Article>;
    // sources: Array<Source>
}

export class AppView{
    private news = new News();
    private sources = new Sources();

    // constructor() {
    //     this.news = new News();
    //     this.sources = new Sources();
    // }

    drawNews(data: Partial<Data>) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Partial<Data>) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
