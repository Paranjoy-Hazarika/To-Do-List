const todoForm = document.querySelector(".todo-form");
const inputBar = document.querySelector(".input-bar");
const todoContainer = document.querySelector(".todo-container");

const addBtn = document.getElementById("add-btn");
const inputText = document.getElementById("input-textbox");

let delBtn = document.querySelectorAll("#done-btn");

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
            })
        })
    }
}

// Updating the Todo String
const updateInputString = (inputString) => {
    if (inputString.length > 30) {
        inputString = inputString.slice(0, 30) + "...";
        console.log(inputString);
        return inputString;
    }
    else {
        return inputString;
    }
}

const updateNewTodo = (inputString, inputTitle) => {
    if (inputString != "") {
        const taskNode = insertTask(inputString, inputTitle);
        todoContainer.insertAdjacentHTML("beforeend", taskNode);
    }
}

const updateDeleteBtns = () => {
    delBtn = document.querySelectorAll("#done-btn");
    deleteBtns();
}

// Modifying the Input String for clarity

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputContent = inputText.value;
    const newString = updateInputString(inputContent);
    updateNewTodo(newString, inputContent);
    
    inputText.value = "";
    updateDeleteBtns();
    console.log(delBtn);
})

deleteBtns();