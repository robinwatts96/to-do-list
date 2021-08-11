const listsContainer = document.querySelector('[data-lists]');

let lists = [{
    id: 1,
    name: 'Today'
}, {
    id: 2,
    name: 'Work'
}, {
    id: 3,
    name: 'Shopping List'
}];

function render() {
    clearElement(listsContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("list-name");
        listElement.innerText = list;
        listsContainer.appendChild(listElement);
    }) 
};

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();