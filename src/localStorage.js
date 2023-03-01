export const Save = (array) => {
  localStorage.tasks = JSON.stringify(array);
  // return 1;
};

export const Load = () => JSON.parse(localStorage.tasks);
