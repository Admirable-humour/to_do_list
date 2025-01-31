const task_text = document.getElementById('task_text');
const task_list = document.getElementById('task_list');
const textarea = document.getElementById("task_text");

function addTask() {
    const task = task_text.value;
    if (task) {
        task_list.innerHTML += `<li>${task}<button type="button" name="deleteTask" class="delete"></button></li>`;
        task_text.value = '';
        textarea.style.height = "auto"; 
    }
    else {
        alert('Please enter a task');
    }
}
document.getElementById('add').onclick = addTask;
document.addEventListener("keypress", function(event) {
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
