import { Save } from './localStorage.js';

// Function to add a task to the list. I will push to an array
export const addTask = (tasks, updateList, value) => {
  tasks.array.push({
    completed: false,
    description: value,
    index: tasks.array.length,
  });
  updateList(); // This will update the list of tasks on the DOM
  Save(tasks.array); // This will save the task to localStorage
};

export const update = (tasks, index, value) => {
  tasks.array[index].description = value; // This will update the description of the task
  Save(tasks.array);
};

export const removeTask = (tasks, taskIndex, updateList) => {
  const taskProcessed = []; // This will store a filtered task array
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (i !== taskIndex) {
      taskProcessed.push({ ...tasks.array[i], index });
      index += 1;
    }
  }

  tasks.array = taskProcessed;
  Save(tasks.array);
  updateList();
};
