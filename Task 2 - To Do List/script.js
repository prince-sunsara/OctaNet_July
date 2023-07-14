// creating the localstorage array
const todoArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
// console.log(todoArray);

// functioning the enter button
document.getElementById("enter").addEventListener("click", () => {
    const todo = document.getElementById("item");
    createItem(todo);
});

// displaying the todos 
function displayTodo(){
    let todos = "";
    for (let i = 0; i < todoArray.length; i++) {
        todos += `<div class="item">
        <div class="inputTodo">
            <textarea disabled>${todoArray[i]}</textarea>
            <div class="editInput">
                <i class="fa-solid fa-check dltBtn"></i>
                <i class="fa-sharp fa-solid fa-pen-to-square editBtn"></i>
            </div>
        </div>
        <div class="updateInput">
            <button class="saveBtn">Save</button>
            <button class="cancleBtn">Cancle</button>
        </div>
    </div>`
    }
    document.querySelector(".todoList").innerHTML = todos;
    deleteButton();
    editButton();
    saveButton();
    cancleButton();
}

// deleting the Item
function deleteButton(){
    let dltBtn = document.querySelectorAll(".dltBtn");
    dltBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            deleteTodo(index);
        })
    })
}
function deleteTodo(index) {
    todoArray.splice(index, 1)
    localStorage.setItem("items", JSON.stringify(todoArray));
    location.reload();
}


// editing the Item
function editButton(){
    let editBtn = document.querySelectorAll(".editBtn");
    let updateInput = document.querySelectorAll(".updateInput");
    let inputTodo = document.querySelectorAll(".inputTodo textarea");
    editBtn.forEach((btn, i) => {
        btn.addEventListener("click" ,() =>  {
            updateInput[i].style.display = "block";
            inputTodo[i].disabled = false;
        })
    })
}
// saving the updated Item
function saveButton() {
    let saveBtn = document.querySelectorAll(".saveBtn");
    let inputTodo = document.querySelectorAll(".inputTodo textarea");
    saveBtn.forEach((btn, i) => {
        btn.addEventListener("click" ,() =>  {
            updateItem(inputTodo[i].value, i);
        })
    })
}
// updateing the item
function updateItem(text, i) {
    todoArray[i] = text;
    localStorage.setItem("items", JSON.stringify(todoArray));
    location.reload();
}

// cancle button activated
function cancleButton() {
    let cancleBtn = document.querySelectorAll(".cancleBtn");
    let updateInput = document.querySelectorAll(".updateInput");
    let inputTodo = document.querySelectorAll(".inputTodo textarea");
    cancleBtn.forEach((btn, i) => {
        btn.addEventListener("click" ,() =>  {
            updateInput[i].style.display = "none";
            inputTodo[i].disabled = true;
        })
    })
}

// creating items
function createItem(todo) {
    todoArray.push(todo.value);
    localStorage.setItem("items", JSON.stringify(todoArray));
    location.reload();
}

// displaying the date
function displayDate() {
    let date = new Date().toString().split(" ");
    document.getElementById("date").innerHTML = date[0] + ", " + date[1] + " " + date[2];
}


displayDate();
displayTodo();