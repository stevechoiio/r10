import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Session } from "./Session";

export default class SessionContainer extends Component {
  render() {
    return <Session />;
  }
}
