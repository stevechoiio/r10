import React, { Component } from "react";
import Favourites from "./Favourites";
import { ActivityIndicator, Text, View } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";
import PropTypes from "prop-types";
import { formatSessionData } from "../../lib/helpers";

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

FavouritesContainer.propTypes = {
  navigation: PropTypes.object
};
