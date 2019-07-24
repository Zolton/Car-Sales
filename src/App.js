import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

class App extends React.component {

  state = {
      additionalPrice: 0,
      car: {},
      store: []
    };
  

  removeFeature = item => {
    // dispatch an action here to remove an item
  };

  buyItem = item => {
    // dipsatch an action here to add an item
  };

  render() {
    console.log(this.props);
    return (
      <div className="boxes">
        <div className="box">
          <Header car={this.state.car} />
          <AddedFeatures car={this.state.car} />
        </div>
        <div className="box">
          <AdditionalFeatures store={this.state.store} />
          <Total
            car={this.state.car}
            additionalPrice={this.state.additionalPrice}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps)(App);
