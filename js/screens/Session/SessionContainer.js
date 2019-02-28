import React, { Component } from "react";

import Session from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";
export default class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;

    const scheduleID = navigation.getParam("scheduleID");

    const speaker = navigation.getParam("speaker");

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

          return (
            <FavesContext.Consumer>
              {value => {
                return (
                  <Session
                    navigation={navigation}
                    scheduleID={scheduleID}
                    speaker={speaker}
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
