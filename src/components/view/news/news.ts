import './news.css';

export interface Article<T> {
    source: {
        id: number,
        name:T,
    };
    author: T;
    title: T;
    description: T;
    url: URL;
    urlToImage: URL;
    publishedAt: T;
    content: T;
}

class News {
    draw(data: Article<string>[]):void {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = <DocumentFragment>document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');
        const newsDiv = <HTMLDivElement>document.querySelector('.news');

        news.forEach((item: Article<string>, idx: number):void => {
            const newsClone = <HTMLDivElement>newsItemTemp.content.cloneNode(true);
            
            const nItem = <HTMLDivElement>newsClone.querySelector('.news__item');
            if (idx % 2) nItem.classList.add('alt');

            const metaPhoto = <HTMLDivElement>newsClone.querySelector('.news__meta-photo');
            metaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const metaAuthor = <HTMLLIElement>newsClone.querySelector('.news__meta-author');
            metaAuthor.textContent = item.author || item.source.name;

            const metaDate = <HTMLLIElement>newsClone.querySelector('.news__meta-date');
            metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const descrTitle = <HTMLHeadingElement>newsClone.querySelector('.news__description-title');
            descrTitle.textContent = item.title;

            const descrSource = <HTMLHeadingElement>newsClone.querySelector('.news__description-source');
            descrSource.textContent = item.source.name;

            const descrContent = <HTMLParagraphElement>newsClone.querySelector('.news__description-content');
            descrContent.textContent = item.description;

            const readMore = <HTMLParagraphElement>newsClone.querySelector('.news__read-more a');
            readMore.setAttribute('href', `${item.url}`);

            fragment.append(newsClone);
        });

        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
