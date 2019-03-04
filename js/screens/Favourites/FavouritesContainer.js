import React, { Component } from "react";
import Favourites from "./Favourites";
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

export default class FavouritesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
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
              <ActivityIndicator
                style={{ alignItems: "center" }}
                size="large"
                color="black"
              />
            );

          return (
            <FavesContext.Consumer>
              {value => {
                let filteredData = data.allSessions.filter(data => {
                  return value.faveIDs.includes(data.id);
                });
                let formattedData = formatSessionData(filteredData);
                return (
                  <Favourites
                    data={formattedData}
                    navigation={this.props.navigation}
                    value={value}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
