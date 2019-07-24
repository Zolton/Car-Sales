export const ADD_FEATURE = "ADD_ITEM";

export const addItem = (newFeature) => {
  console.log("from action.js - newFeature");
  console.log(newFeature);
  return {
    type: ADD_FEATURE,
    payload: newFeature
  };
}

export const REMOVE_FEATURE = "REMOVE_ITEM";

export const removeItem = (removeFeature) => {
  console.log("from action.js - removeFeature");
  console.log(removeFeature);
  return {
    type: REMOVE_FEATURE,
    payload: removeFeature
  };
}