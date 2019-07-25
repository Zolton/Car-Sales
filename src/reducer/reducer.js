import React from "react";
import {
  buyItem,
  buyNewItem,
  removeNewItem,
  removeItem,
  ADD_FEATURE,
  REMOVE_FEATURE
} from "../action/action";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 0,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
//   console.log("what reducer sees as state");
//   console.log(state);
  //console.log(additionalPrice)
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        // An insane amount of drilling
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalPrice: state.additionalPrice + action.payload.price
      };

    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          // carFeature.name === action.payload.name is the same/true, so its left behind
          // ! inverts it, removes it if is the same/true
          // filter removes false, leaves behind true
          features: state.car.features.filter(
            carFeature => carFeature.name !== action.payload.name
          )
        },
        additionalPrice: state.additionalPrice - action.payload.price
      };

    default:
      return state;
  }
};
