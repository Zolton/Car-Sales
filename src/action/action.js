export const ADD_FEATURE = "ADD_ITEM";

export const addItem = (newFeature) => {
  console.log("from action.js");
  console.log(newFeature);
  console.log("from action.js newFeature.name");
  console.log(newFeature.name);
  console.log("from action.js newFeature.price");
  console.log(newFeature.price);
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
