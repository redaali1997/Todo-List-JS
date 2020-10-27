const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const searchForm = document.querySelector('.search input');


// Add Todo
const addTodo = todo => {
  const html = `
      <li class="list-group-item d-flex justify-content-between">
          <span>${todo}</span>
          <i class="fa fa-trash delete" aria-hidden="true"></i>
      </li>
    `

  todos.innerHTML += html;
  addForm.reset();
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = e.target.add.value.trim();
  if (todo) {
    addTodo(todo);
  }
});

// Delete Todo
todos.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});


// Search
searchForm.addEventListener('keyup', e => {
  const search = e.target.value.trim().toLowerCase();

  Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(search))
    .map(todo => {
      todo.classList.add('d-none');
      todo.classList.remove('d-flex');
    });
  
  Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(search))
    .map(todo => {
      todo.classList.add('d-flex');
      todo.classList.remove('d-none');
    });
});