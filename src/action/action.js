export const ADD_FEATURE = "ADD_ITEM";

export const addItem = (newFeature) => {
  console.log("from action.js");
  console.log(newFeature);
  return {
    type: ADD_FEATURE,
    payload: newFeature
  };
}

// export const removeNewItem = "REMOVE_ITEM";

// export function removeItem(item) {
//   console.log("from action.js");
//   console.log(item);
//   return {
//     type: buyNewItem,
//     payload: item
//   };
// }

// export const addNewTask = "ADD_NEW_TASK";

// export function addTask(newTask) {
//   return {
//     type: addNewTask,
//     payload: newTask
//   };
// }
