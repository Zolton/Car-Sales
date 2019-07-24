import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import {
  addItem,
  ADD_FEATURE,
  removeItem,
  REMOVE_FEATURE
} from "./action/action";
import ReactDOM from "react-dom";

const App = props => {
  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const buyItem = item => {
    // dispatch an action here to remove an item
    props.addItem(item);
  };

  // console.log("props on app");
  // console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeItem={removeItem} car={props.car} />
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
  { addItem, ADD_FEATURE, removeItem, REMOVE_FEATURE }
)(App);
