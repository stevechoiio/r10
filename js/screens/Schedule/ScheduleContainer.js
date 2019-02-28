import React, { Component } from "react";
import Schedule from "./Schedule";
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
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              description
              id
              location
              speaker {
                id
              }

              startTime
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <ActivityIndicator
                style={{ alignItems: "center" }}
                size="large"
                color="black"
              />
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
