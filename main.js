const task_text = document.getElementById('task_text');
const task_list = document.getElementById('task_list');

function addTask() {
    const task = task_text.value;
    if (task) {
        task_list.innerHTML += `<li>${task}</li>`;
        task_text.value = '';
    }
}
document.getElementById('add').onclick = addTask;

