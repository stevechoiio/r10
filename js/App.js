import React, { Component } from "react";
import { View, Text } from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";

import AppNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
        {/* <View style={{ backgroundColor: "grey", paddingTop: 50 }}>
          <Text>Welcome to React Native!</Text>
          
        </View> */}
      </ApolloProvider>
    );
  }
}
