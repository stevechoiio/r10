import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";

export default class AboutContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" color="black" />;
          console.log(data);

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
