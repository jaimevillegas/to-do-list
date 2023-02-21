import './style.css';

// ----- FONTAWESOME -----
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const tasksList = document.getElementById('tasks-list');

class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  static tasks = [];

  updateList() {
    tasksList.innerHTML = '';
    Task.tasks.forEach((task) => {
      console.log(task.completed);
      if (task.completed === true) {
        tasksList.insertAdjacentHTML('beforeend', `
        <div class='task-item'>
        <p><i class="fa-regular fa-square-check"></i></p>
        <input value='${task.description}'>
        <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>
        `);
      } else {
        tasksList.insertAdjacentHTML('beforeend', `
        <div class='task-item'>
        <p><i class="fa-regular fa-square"></i></p>
        <input value='${task.description}'>
        <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>
        `);
      }
    });
  }

  addTask() {
    Task.tasks.push(this);
    this.updateList();
  }
}

new Task().updateList();

// FOR TESTING DYNAMIC UPDATE OF THE LIST
// ADD FIVE TASKS TO THE LIST
// TRY CHANGING THE BOOLEAN PARAMETER! SEE THAT THE CHECK ICON UPDATES!

window.addEventListener('load', () => {
  console.log("Hello there!");

  new Task('Task number 1', false, 0).addTask();

  new Task('Task number 2', true, 1).addTask();

  new Task('Task number 3', false, 2).addTask();

  new Task('Task number 4', true, 3).addTask();

  new Task('Task number 5', true, 4).addTask();
});


