import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import { FavesProvider } from "./context";
import AppNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
