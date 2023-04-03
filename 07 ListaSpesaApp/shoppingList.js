const container = document.getElementById('container');

const input = createAndAppend('input', container, {
  type: 'text',
  placeholder: 'Cosa comprare?'
});

const today = new Date().toLocaleDateString();
const label = createAndAppend('label', container, {
  textContent: today
});
container.insertBefore(label, input);

input.focus();


const list = createAndAppend('ul', container, {
  id: 'list'
});

const items = [
  { text: 'Latte', completed: false },
  { text: 'Pane', completed: false },
  { text: 'Burro', completed: false }
];
clearList();
items.forEach(item => {
  addItem(item.text, item.completed);
});

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    input.value && addItem(input.value, false);
    input.value = '';
  }
});

const addButton = createAndAppend('button', container, {
  textContent: 'Aggiungi',
  id: 'add-btn'
});

addButton.addEventListener('click', () => {
  const value = input.value.trim();
  value && (addItem(value, false), input.value = '');
  input.focus();
});

const autoFillButton = createAndAppend('button', container, {
  textContent: 'Auto-fill',
  id: 'fill-btn'
});

autoFillButton.addEventListener('click', () => {
  const fillItems = ['Uova', 'Formaggio', 'Pomodori', 'Cipolle', 'Insalata', 'Succo d\'arancia'];
  fillItems.forEach(item => {
    addItem(item, false);
    input.focus();
  });
});

const archiveButton = createAndAppend('button', container, {
  textContent: 'Archivia',
  id: 'archive-btn'
});

archiveButton.addEventListener('click', () => {
  const completedItems = items.filter(item => item.completed);
  items.splice(0, items.length, ...completedItems);
  clearList();
  completedItems.forEach(item => {
    addItem(item.text, false);
  });
});

const buttonsWrapper = createAndAppend('div', container, {
  id: 'buttons-wrapper'
});

buttonsWrapper.appendChild(autoFillButton);
buttonsWrapper.appendChild(archiveButton);

function addItem(text, completed) {
  const item = { text, completed };
  items.push(item);
  const listItem = createAndAppend('li', list, { textContent: item.text });

  listItem.addEventListener('click', () => {
    item.completed = !item.completed;
    listItem.classList.toggle('completed', item.completed);
  });

  listItem.addEventListener('dblclick', () => {
    const index = items.indexOf(item);
    items.splice(index, 1);
    listItem.remove();
  });

  item.completed ? listItem.classList.add('completed') : null;
}

function createAndAppend(tag, parent, attributes = {}) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  Object.entries(attributes).forEach(([key, value]) => {
    key === 'textContent' ? element.textContent = value : element.setAttribute(key, value);
  });
  return element;
}

function clearList() {
  list.innerHTML = '';
  input.focus();
}
