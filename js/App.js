import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import { FavesProvider } from "./context";
import AppNavigator from "./navigation/RootStackNavigator";
import { StatusBar } from "react-native";
export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
