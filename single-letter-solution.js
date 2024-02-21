const rootElement = document.querySelector('#root');
const columnElement = document.createElement('div');
columnElement.style.width = '30px'
const column2Element = document.createElement('div');
column2Element.style.width = '30px';

const createColumn = () => {
    const columnElement = document.createElement('div');
    columnElement.style.width = '30px';
    columnElement.style.paddingRight = '20px';
    rootElement.appendChild(columnElement);
    return columnElement;
}
let currentDelay = 0;
const fillColumn = (columnElement) => {
    const elements = [];
    const dropDuration = Math.max(Math.random() * 4, 1);
    const columnDelay = Math.random() * 5;
    for (let i = 0; i < 35; i++) {
        const element = document.createElement('p');
        element.style.width = 'min-content';
        element.style.animation = 'letter-color';
        element.style.animationDelay = columnDelay + i + 's';
        element.style.animationDuration = dropDuration + 's';
        element.style.animationIterationCount = 'infinite';
        element.textContent = String.fromCharCode(56 + (Math.random() * 80));
        columnElement.appendChild(element);
        elements.push(element);
    }
    return elements;
}

const colors = ['#9bfa9d', '#7ae67c', '#36b539', '#066608'];


for (let i = 0; i < 45; i++) {
    const column = createColumn();
    fillColumn(column);
}
