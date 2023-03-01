// Import modules to manipulate DOM, access LocalStorage and access functions
import { JSDOM } from 'jsdom';
import { addTask, removeTask } from './tasks_forTesting.js';
import 'jest-localstorage-mock';


const tasks = { array: [] };
// This function will update the list of tasks on the DOM
const updateList = () => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 0; i < tasks.array.length; i += 1) {
    const task = tasks.array.find((task) => task.index === i);

    // Creating a text input
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;

    // create a completed task
    const span = document.createElement('span');
    if (task.completed) {
      span.className = 'completed';
      input.className = 'completedInput';
    }


    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;

    // Create the icon to delete the task
    const img = document.createElement('img');
    img.className = 'trash';
    img.addEventListener('click', () => {
      removeTask(tasks, task.index, updateList);
    });

    // Append content to `li` and append it to `list`
    const li = document.createElement('li');
    li.append(checkbox, input, span, img);
    list.appendChild(li);
  }
};

// ---- Running Tests


describe('Tests for Part 1', () => {
  test('Test: Adding a task to the list', () => {
    const dom = new JSDOM('<ul class="list" id="list"></ul>');
    global.document = dom.window.document;
    addTask(tasks, updateList, 'task number 1');
    const li = document.querySelectorAll('#list li');
    expect(li).toHaveLength(1);
  });


  test('Test: Removing a task from the list', () => {
    removeTask(tasks, 0, updateList);
    const li = document.querySelectorAll('#list li');
    expect(li).toHaveLength(0);
  });
});

