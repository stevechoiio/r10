import React, { Component } from "react";
import Schedule from "./Schedule.ios";
import { ActivityIndicator, Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";

const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="small" color="black" />
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
