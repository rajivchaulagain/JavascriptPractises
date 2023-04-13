let todoLists = document.getElementById("todo-lists");
let todoInput = document.getElementById("todo-input");

function randomNumber() {
  return Math.floor(Math.random() * 100);
}
let todoListArray = [];

function generateItem() {
    const listItems = todoListArray
    .map(
      (todo) =>
        `<li>${todo.title} <button onclick="handleRemove(${todo.id})">X</button><button onclick="handleEdit(${todo.id})">edit</button></li>`
    )
    .join("");
    todoLists.innerHTML = listItems;
}

function handleRemove(id) {
  const filteredItems = todoListArray.filter((item) => item.id !== Number(id));
  todoListArray = filteredItems;
  generateItem()
}

function handleEdit(id) {
  let value = prompt('Enter your title');
  const index = todoListArray.findIndex(item => item.id === id);
  if (index !== -1) {
    todoListArray[index].title = value;
  }
  generateItem()
}

function handleSubmit() {
  let todoValue = todoInput.value;
  if (todoValue === "") {
    alert("Please add todo!!!!!");
    return true;
  }
  todoListArray.push({ title: todoValue, id: randomNumber() });
  console.log(todoListArray);
  todoInput.value = "";
  generateItem()
}

generateItem()
