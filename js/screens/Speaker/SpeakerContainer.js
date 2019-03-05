import React, { Component } from "react";
import { Speaker } from "./Speaker";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator, View } from "react-native";
import PropTypes from "prop-types";
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
          if (loading)
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <ActivityIndicator size="large" color="black" />
              </View>
            );
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

SpeakerContainer.propTypes = {
  navigation: PropTypes.object
};
