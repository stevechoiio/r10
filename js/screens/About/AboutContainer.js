import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

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
          console.log(data);

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
