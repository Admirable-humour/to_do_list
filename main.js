const task_text = document.getElementById('task_text');
const task_list = document.getElementById('task_list');

function addTask() {
    const task = task_text.value;
    if (task) {
        task_list.innerHTML += `<li>${task}</li>`;
        task_text.value = '';
        textarea.style.height = "auto"; 
    }
    else {
        alert('Please enter a task');
    }
}
document.getElementById('add').onclick = addTask;

const textarea = document.getElementById("task_text");

textarea.addEventListener("input", function () {
    this.style.height = "auto"; // Reset height to recalculate
    this.style.height = this.scrollHeight + "px"; // Adjust height
});
