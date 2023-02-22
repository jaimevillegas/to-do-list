import './style.css';
import Task from './task.js';
import * as dom from './getDomElements.js';

new Task().updateList();

// FOR TESTING DYNAMIC UPDATE OF THE LIST
// ADD FIVE TASKS TO THE LIST
// REMOVE 2 TASKS BY GIVING THE ID
// EDIT THE DESCRIPTION OF A TASK BY GIVING THE ID AND THE MODIFIED STRING
// SET THE STATUS OF A TASK BY GIVING THE ID AND THE BOOLEAN VALUE

window.addEventListener('load', () => {
  new Task('Task number 0').addTask();

  new Task('Task number 1').addTask();

  new Task('Task number 2').addTask();

  new Task('Task number 3').addTask();

  new Task('Task number 4').addTask();

  new Task().removeTask(0); // Remove 'Task number 0'

  new Task().removeTask(1); // Remove 'Task number 2' because 'Task number 1' is now id=0

  new Task().editDescription(1, 'Task ID=1 edited');

  new Task().setStatus(2, true);

  // If you refresh the page, you will see that localStorage works
  // and the array will be bigger
});

dom.buttonAddTask.addEventListener('click', () => {
  new Task(dom.inputAddTask.value).addTask();
  dom.inputAddTask.value = '';
  dom.inputAddTask.focus();
});
