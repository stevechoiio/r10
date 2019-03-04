import React, { Component } from "react";

import Maps from "./Maps";
export default class MapsContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };
  render() {
    return <Maps />;
  }
}
