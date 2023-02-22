import * as dom from './getDomElements.js';

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.id = 0;
  }

  static tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  updateList() {
    // This method updates the web page
    this.foo = 'eslint use this';
    dom.tasksList.innerHTML = '';
    const orderedTasks = Task.tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
    localStorage.setItem('tasks', JSON.stringify(orderedTasks));
    orderedTasks.forEach((task) => {
      if (task.completed === true) {
        dom.tasksList.insertAdjacentHTML('beforeend', `
        <div class='task-item'>
        <p><i class="fa-regular fa-square-check"></i></p>
        <input class='input-task' input-id='${task.id}' value='${task.description}'>
        <p class="add-task-to-list" data-id='${task.id}'><i class="fa-solid fa-ellipsis-vertical add-task-to-list" data-id='${task.id}'></i></p>
        <p data-id='${task.id}'><i class="fa-regular fa-trash-can remove-task-from-list" data-id='${task.id}'></i></p>
        </div>
        `);
      } else {
        dom.tasksList.insertAdjacentHTML('beforeend', `
        <div class='task-item'>
        <p><i class="fa-regular fa-square"></i></p>
        <input class='input-task' id='${task.id}' value='${task.description}' disabled=true>
        <p class="add-task-to-list" data-id='${task.id}'><i class="fa-solid fa-ellipsis-vertical add-task-to-list" data-id='${task.id}'></i></p>
        <p data-id='${task.id}'><i class="fa-regular fa-trash-can remove-task-from-list" data-id='${task.id}'></i></p>
        </div>
        `);
      }
    });

    const addTaskToList = document.querySelectorAll('.add-task-to-list');
    const removeTaskFromList = document.querySelectorAll('.remove-task-from-list');
    const inputTask = document.querySelectorAll('.input-task');

    addTaskToList.forEach((inputAddTask) => inputAddTask.addEventListener('click', (e) => {
      inputTask[e.target.dataset.id].disabled = false;
      inputTask[e.target.dataset.id].focus();
      inputTask[e.target.dataset.id].select();
      inputTask[e.target.dataset.id].addEventListener('focusout', (e) => {
        this.editDescription(e.target.id, e.target.value);
      });
    }));

    removeTaskFromList.forEach((removedTask) => removedTask.addEventListener('click', (e) => {
      this.removeTask(e.target.dataset.id);
    }));
  }

  addTask() {
    // This method adds a task at the end of the array
    this.id = Task.tasks.length; // Assign incremental ID to tasks
    Task.tasks.push(this);
    this.updateList();
  }

  removeTask(id) {
    // This method removes a task with specific ID and reassigns de IDs of the array
    Task.tasks = Task.tasks.filter((task) => task.id !== +id);
    for (let i = 0; i < Task.tasks.length; i += 1) {
      Task.tasks[i].id = i;
    }
    this.updateList();
  }

  editDescription(id, description) {
    // This method edits a description of a specific ID
    Task.tasks.forEach((task) => {
      if (task.id === +id) {
        task.description = description;
      }
    });
    this.updateList();
  }

  setStatus(id, completed) {
    // This method set the check status of a task
    Task.tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = completed;
      }
    });
    this.updateList();
  }
}

export default Task;
