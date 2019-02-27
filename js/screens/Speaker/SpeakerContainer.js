import React, { Component } from "react";
import Speaker from "./Speaker";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class AboutContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam("speaker");

    const speakerID = this.props.navigation.getParam("speakerID");

    <Query
      query={gql`
        {
          allSpeakers(filter:1){
            name
            bio
            session{
              title
            }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <ActivityIndicator size="large" color="black" />;
        console.log(data);
        return (
          <Speaker
            data={data}
            speaker={speaker}
            navigation={this.props.navigation}
          />
        );
      }}
    </Query>;
  }
}
