import React, { Component } from "react";
import { Schedule } from "./Schedule";
import { ActivityIndicator, Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";
import { formatSessionData } from "../../lib/helpers";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              description
              id
              location
              startTime
              title
            }
          }
        `}
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
          let formattedData = formatSessionData(data.allSessions);

          return (
            <FavesContext.Consumer>
              {value => (
                <Schedule
                  data={formattedData}
                  navigation={this.props.navigation}
                  value={value}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
