import News from './news/news';
import Sources from './sources/sources';

export interface Data {
    articles: [];
    sources: []
}

export class AppView{
    private news = new News();
    private sources = new Sources();

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
