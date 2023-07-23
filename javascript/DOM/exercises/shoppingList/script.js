var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li");
var removeButtons = document.querySelectorAll(".remove");

function inputLength() {
  return input.value.length;
}

// Função para criar um novo elemento da lista com o botão "Delete"
function createListElement() {
  if (inputLength() > 0) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    deleteButton.appendChild(document.createTextNode("Remove"));
    deleteButton.classList.add("remove");
    li.appendChild(deleteButton);
    ul.appendChild(li);
    addToggleDoneEvent(li);
    addButtonEvents(li);
    input.value = "";
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone() {
  this.classList.toggle("done");
}

function deleteListElement(event) {
  var liToRemove = event.target.parentElement;
  ul.removeChild(liToRemove);
}

function addToggleDoneEvent(li) {
  li.addEventListener("click", toggleDone);
}

function addButtonEvents(li) {
  var removeButton = li.querySelector(".remove");
  removeButton.addEventListener("click", deleteListElement);
}

// Adiciona o evento de clique a cada botão "Remove"
removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtém o elemento <li> pai do botão clicado e remove-o do DOM
    button.parentElement.remove();
  });
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Adiciona eventos para os elementos <li> e botões "Delete" existentes
liItems.forEach(addToggleDoneEvent);
removeButtons.forEach(addButtonEvents);
