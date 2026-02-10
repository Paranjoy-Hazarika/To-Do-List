const todoForm = document.querySelector(".todo-form");
const inputBar = document.querySelector(".input-bar");
const todoContainer = document.querySelector(".todo-container");

const overlayWindow = document.getElementById("overlay-window");
const overlayCloseBtn = document.getElementById("overlay-closeBtn");
const addBtn= document.getElementById("add-btn");
const inputText = document.getElementById("input-textbox");

let delBtn = document.querySelectorAll("#done-btn");
let todoPara = document.querySelectorAll("#task-content");

const maxTasks = 7;

const insertTask = (todoTask,  todoTitle) => {
    return `
    <div class="task-bar">
        <p id="task-content" title="${todoTitle}">${todoTask}</p>
        <button id="done-btn">Done</button>
    </div>
    `;
}

// console.log("To-Do Form", todoForm)
// console.log("Input Bar", inputBar)
// console.log("Input Text Box", inputText)

// console.log(delBtn);

// Deleting Tasks

const deleteBtns = () => {
    if (delBtn != undefined) {
        delBtn.forEach( (item,) => {
            // console.log(delBtn);
            item.addEventListener("click", (e) => {
                e.preventDefault();
                
                const parentElem = item.parentElement;
                parentElem.remove();
                updateTodoList();
            })
        })
    }
}

// Updating the Todo String
const updateInputString = (inputString) => {
    if (inputString.length > 30) {
        inputString = inputString.slice(0, 30) + "...";
        // console.log(inputString);
        return inputString;
    }
    else {
        return inputString;
    }
}


const updateNewTodo = (inputString, inputTitle) => {
    const taskNode = insertTask(inputString, inputTitle);
    todoContainer.insertAdjacentHTML("beforeend", taskNode);
}

const updateDeleteBtns = () => {
    delBtn = document.querySelectorAll("#done-btn");
    // updateTodoList();
    deleteBtns();
}

const updateTodoList = () => {
    todoPara = document.querySelectorAll("#task-content");
    console.log(todoPara);
}

const todoNumbers = (todoList) => {
    const todoLength = todoList.length;
    if (todoLength < maxTasks) {
        return true;
    }
    return false;
}

const showOverlay = () => {
    overlayWindow.showModal();
}

// Check if the 

const checkListValidity = (valid, inputContent) => {
    if (inputContent != "") {
        if (valid) {
            const newString = updateInputString(inputContent);
            updateNewTodo(newString, inputContent);
        } else {
            showOverlay();
        }
    }
}

// Modifying the Input String for clarity

// console.log(todoPara);

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputContent = inputText.value;
    const todoLength = todoNumbers(todoPara);
    checkListValidity(todoLength, inputContent);

    inputText.value = "";

    updateDeleteBtns();
    updateTodoList();

    // console.log(delBtn);
})

deleteBtns();

// The todoPara Handling is just for making the default cases work - not needed at all - maybe if i add these in storage

todoPara.forEach(item => {
    item.setAttribute("title", item.textContent);
    item.textContent = updateInputString(item.textContent);
    // console.log(item);
})

overlayCloseBtn.addEventListener("click", (e) => {
    overlayWindow.close();
})