var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    //limpa o imput a cada laço
    listElement.innerHTML = '';
    for (todo of todos) {

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletTodo(' + pos + ')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    //push função para adicionar novo item ao final dele
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deletTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
    var n2;
    var n1;
    var resutado;

}



function saveToStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}