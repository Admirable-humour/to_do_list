//Draft JS File

const task_text = document.getElementById('task_text');
const task_list = document.getElementById('task_list');
const textarea = document.getElementById("task_text");

let taskNo = 0;

function loadTasks() {
    let storedTasks = Object.keys(localStorage)
        .filter(key => key.startsWith("Task")) // Get only "TaskX" keys
        .map(key => Number(key.replace("Task", ""))) // Extract numbers
        .sort((a, b) => a - b); // Sort numerically

    if (storedTasks.length > 0) {
        taskNo = Math.max(...storedTasks, 0) + 1; // Ensure next task number is correct
        storedTasks.forEach(num => {
            const taskText = localStorage.getItem("Task" + num);
            if (taskText && taskText.trim() !== "") {
                addTasktoDOM(taskText);
            }
        });
    }
}
function addTasktoDOM(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <img src="delete_icon.svg" alt="Delete task" class="delete-btn">`;
    li.setAttribute("data-keyname", "Task" + String(taskNo));
    task_list.appendChild(li);
}

loadTasks();

function addTask() {
    const task = task_text.value;
    if (task) {
        localStorage.setItem("Task" + String(taskNo), task);
        const li = document.createElement("li");
        li.innerHTML += `${task}<img src="delete_icon.svg" alt="Delete task" class="delete-btn">`;
        li.setAttribute("data-keyname", "Task" + String(taskNo));
        task_list.appendChild(li);
        task_text.value = '';
        textarea.style.height = "auto";
        taskNo++;
    }
    else {
        alert('Please enter a task!');
    }
}

document.getElementById('task_list').addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) { // Check if delete button was clicked
        const taskElement = event.target.parentElement; // Get the task element (li)
        const keyname = taskElement.getAttribute("data-keyname"); // Get the stored keyname
        if (keyname) {
            localStorage.removeItem(keyname); // Remove the task from localStorage
        }
        taskElement.remove(); // Remove the task from the list

        // Remove the task from localStorage using the keyname
    }
});


document.getElementById('add').onclick = addTask;

document.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('add').click();
    }
})

textarea.addEventListener("input", function () {
    this.style.height = "auto"; // Reset height to recalculate
    this.style.height = this.scrollHeight + "px"; // Adjust height
});
