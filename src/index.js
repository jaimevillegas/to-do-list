import './style.css';

const tasksList = document.getElementById('tasks-list');

class Task {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

  // static tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  static tasks = [];

  updateList() {
    tasksList.innerHTML = '';
    Task.tasks.forEach((task) => {
      tasksList.insertAdjacentHTML('beforeend', `
        <div class='task-item'>
        <p>check</p>
        <input value='${task.description}'>
        <p>more-options</p>
        </div>
        `);
    });
  }

  addTask() {
    Task.tasks.push(this);
    // localStorage.setItem('tasks', JSON.stringify(Task.tasks));
    this.updateList();
  }
}

new Task().updateList();

// FOR TESTING DYNAMIC UPDATE OF THE LIST
// ADD FIVE TASKS TO THE LIST

window.addEventListener('load', () => {
  console.log("Hello there!");

  new Task('Task number 1', false, 0).addTask();

  new Task('Task number 2', true, 1).addTask();

  new Task('Task number 3', true, 2).addTask();

  new Task('Task number 4', true, 3).addTask();

  new Task('Task number 5', true, 4).addTask();
});

// ----- FONTAWESOME -----
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

// import "@fortawesome/fontawesome-free/js/all.js";
// import "@fortawesome/fontawesome-free/css/all.css";
// import '@fortawesome/fontawesome-free/js/solid'

//
// require("font-awesome-webpack");
// import { library, dom } from "@fortawesome/fontawesome-free/js/all.js";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
//
//
// library.add(faCheck);
// dom.watch();
// import './app';
// import './sass/app.sass';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
