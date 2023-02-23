import './style.css';
import Task from './task.js';
import * as dom from './getDomElements.js';

new Task().updateList();

dom.buttonAddTask.addEventListener('click', () => {
  new Task(dom.inputAddTask.value).addTask();
  dom.inputAddTask.value = '';
  dom.inputAddTask.focus();
});

dom.clearAllCompleted.addEventListener('click', () => {
  new Task().clearComplete();
});
