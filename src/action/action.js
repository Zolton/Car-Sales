export const buyNewItem = "ADD_ITEM";

export function buyItem(item) {
  console.log("from action.js");
  console.log(item);
  return {
    type: buyNewItem,
    payload: item
  };
}

// export const addNewTask = "ADD_NEW_TASK";

// export function addTask(newTask) {
//   return {
//     type: addNewTask,
//     payload: newTask
//   };
// }
