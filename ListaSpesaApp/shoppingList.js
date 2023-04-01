const container = document.querySelector('#container');

const form = document.createElement('form');
const label = document.createElement('label');
label.setAttribute('for', 'item');
label.innerText = 'Aggiungi un elemento: ';
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Cosa manca?');
input.setAttribute('id', 'item');
input.setAttribute('name', 'item');
const addBtn = document.createElement('button');
addBtn.setAttribute('type', 'button');
addBtn.setAttribute('id', 'addBtn');
addBtn.innerText = 'Aggiungi';
form.appendChild(label);
form.appendChild(input);
form.appendChild(addBtn);


const ul = document.createElement('ul');
ul.setAttribute('id', 'list');


container.appendChild(form);
container.appendChild(ul);


let items = [];


function addItem(text) {
  
  const item = {
    text: text,
    completed: false
  };
  
  
  items.push(item);
  
  const li = document.createElement('li');
  li.innerText = item.text;
  
  if (item.completed) {
    li.classList.add('completed');
  }
  
  li.addEventListener('click', () => {
    item.completed = !item.completed;
    if (item.completed) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
  
  li.addEventListener('dblclick', () => {
    const index = items.indexOf(item);
    items.splice(index, 1);
    li.remove();
  });

  ul.appendChild(li);
}


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addItem(text);
    input.value = '';
}
});

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    input.value && addItem(input.value);
    input.value = '';
  }
});


addItem('Latte');
addItem('Pane');
addItem('Burro');