import './sources.css';

export type Source<T> = {
    id: number,
    name: T,
    description: T,
    url: URL,
    category: T,
    language: T,
    country: T
}

class Sources {
    draw(data: Source<string>[]):void {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
        const sourcesDiv = <HTMLDivElement>document.querySelector('.sources');

        data.forEach((item: Source<string>):void => {
            const sourceClone = <HTMLDivElement>sourceItemTemp.content.cloneNode(true);
            
            const itemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            itemName.textContent = item.name;

            const item1 = <HTMLDivElement>sourceClone.querySelector('.source__item');
            item1.setAttribute('data-source-id', `${item.id}`);

            fragment.append(sourceClone);
        });

        sourcesDiv.append(fragment);
    }
}

export default Sources;
