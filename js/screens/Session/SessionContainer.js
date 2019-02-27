import React, { Component } from "react";

import Session from "./Session";

export default class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;

    const description = navigation.getParam("description");
    const speaker = navigation.getParam("speaker");

    return (
      <Session
        navigation={navigation}
        description={description}
        speaker={speaker}
      />
    );
  }
}
