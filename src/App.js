import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addItem, ADD_FEATURE} from "./action/action";
import ReactDOM from "react-dom";


const App = props => {

  // removeItem = item => {
  //   // dispatch an action here to remove an item

  // };

   const buyItem = item => {
    // dispatch an action here to remove an item
    props.addItem(item)
  }

  // buyItem = item => {
  //   console.log("from app.js")
  //   console.log(item)
  //   dispatch({ type: "ADD_ITEM", payload: item });
  //   return {
  //     type: "ADD_ITEM",
  //     payload: item
  // }
  // };

  console.log("props on app");
  console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeItem={props.removeItem} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
};



export default connect(
  mapStateToProps,
  { addItem, ADD_FEATURE }
)(App);
