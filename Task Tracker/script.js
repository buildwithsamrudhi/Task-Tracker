let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    let taskText = inputBox.value.trim();
    let date = document.getElementById("due-date").value;
    let priority = document.getElementById("priority-select").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <small>(Due: ${date})</small>`;
    li.classList.add(priority.toLowerCase());

    listContainer.appendChild(li);
    saveData();
    inputBox.value = "";
    document.getElementById("due-date").value = "";
}

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showTask();

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

        // Remove the task if it's completed
        if (e.target.classList.contains("checked")) {
            setTimeout(() => {
                e.target.remove();
                saveData();
            }, 500); 
        }
    }
});

