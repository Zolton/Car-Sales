import React from "react";
import {
  buyItem,
  buyNewItem,
  removeNewItem,
  removeItem,
  ADD_FEATURE
} from "../action/action";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26000,
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
  console.log("reducer state");
  console.log(state);
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
        additionalPrice: action.payload.price

      };

    // case removeNewItem:
    //   return {
    //     ...state,
    //     price: state.price - action.payload
    //   };

    default:
      return state;
  }
};
