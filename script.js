const todoForm = document.querySelector(".todo-form")
const inputBar = document.querySelector(".input-bar")
const todoContainer = document.querySelector(".todo-container")

const addBtn = document.getElementById("add-btn")
const inputText = document.getElementById("input-textbox")

let delBtn = document.querySelectorAll("#done-btn");

const insertTask = (todoTask) => {
    return `
    <div class="task-bar">
        <p id="task-content">${todoTask}</p>
        <button id="done-btn">Done</button>
    </div>
    `;
};

console.log("To-Do Form", todoForm)
console.log("Input Bar", inputBar)
console.log("Input Text Box", inputText)

console.log(delBtn);

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

deleteBtns();

const updateNewTodo = (inputString) => {
    if (inputString != "") {
        const taskNode = insertTask(inputString);
        todoContainer.insertAdjacentHTML("beforeend", taskNode);
    }
}

const updateDeleteBtns = () => {
    delBtn = document.querySelectorAll("#done-btn");
    deleteBtns();
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputContent = inputText.value;
    updateNewTodo(inputContent);
    
    inputText.value = "";
    updateDeleteBtns();
    console.log(delBtn);
})
