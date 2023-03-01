import { Save } from './localStorage.js';

export const create = (tasks, addAllTasksToHTML, value) => {
  tasks.array.push({
    completed: false,
    description: value,
    index: tasks.array.length,
  });
  addAllTasksToHTML();
  Save(tasks.array);
};

export const update = (tasks, index, value) => {
  tasks.array[index].description = value;
  Save(tasks.array);
};

export const Delete = (tasks, taskIndex, addAllTasksToHTML) => {
  const tempTasks = [];
  let index = 0;
  for (let i = 0; i < tasks.array.length; i += 1) {
    if (i !== taskIndex) {
      tempTasks.push({ ...tasks.array[i], index });
      index += 1;
    }
  }

  tasks.array = tempTasks;
  Save(tasks.array);
  addAllTasksToHTML();
};
