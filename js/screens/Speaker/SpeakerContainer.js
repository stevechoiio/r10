import React, { Component } from "react";
import Speaker from "./Speaker";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";

export default class SpeakerContainer extends Component {
  render() {
    const speakerID = this.props.navigation.getParam("speakerID");
    return (
      <Query
        query={gql`
          query Speaker($speakerID: ID!) {
            allSpeakers(filter: { id: $speakerID }) {
              name
              bio
              image
              url
            }
          }
        `}
        variables={{ speakerID }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" color="black" />;
          return (
            <Speaker
              data={data.allSpeakers[0]}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}
