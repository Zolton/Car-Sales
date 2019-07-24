import React from 'react';

const AddedFeature = props => {
  // console.log("remove item props")
  // console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button  className="button">XXXXXXX</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
