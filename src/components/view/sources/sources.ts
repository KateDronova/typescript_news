import './sources.css';

export type Source = {
    id: number,
    name: string,
    description: string,
    url: URL,
    category: string,
    language: string,
    country: string
}

class Sources {
    draw(data = []) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourcesDiv = document.querySelector('.sources') as HTMLElement;

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            
            const itemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            itemName.textContent = item.name;

            const item1 = sourceClone.querySelector('.source__item') as HTMLElement;
            item1.setAttribute('data-source-id', `${item.id}`);

            fragment.append(sourceClone);
        });

        sourcesDiv.append(fragment);
    }
}

export default Sources;
