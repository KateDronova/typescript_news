import './news.css';

export interface Article {
    source: {
        id: number,
        name:string,
    };
    author: string;
    title: string;
    description: string;
    url: URL;
    urlToImage: URL;
    publishedAt: string;
    content: string;
}

class News {
    draw(data = []) {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsDiv = document.querySelector('.news') as Element;

        news.forEach((item: Article, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;
            
            const nItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) nItem.classList.add('alt');

            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            metaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            metaAuthor.textContent = item.author || item.source.name;

            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const descrTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            descrTitle.textContent = item.title;
            const descrSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            descrSource.textContent = item.source.name;
            const descrContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            descrContent.textContent = item.description;
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            readMore.setAttribute('href', `${item.url}`);

            fragment.append(newsClone);
        });

        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
