// This file will get and set data to localStorage
export const Save = (array) => {
  localStorage.tasks = JSON.stringify(array);
};

export const Load = () => JSON.parse(localStorage.tasks);
