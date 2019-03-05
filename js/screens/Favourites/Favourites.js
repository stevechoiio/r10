import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import ScheduleItem from "../../components/ScheduleItem";
import moment from "moment";
import { styles } from "./styles";
import PropTypes from "prop-types";
export default class Favourites extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.props.data.length > 0 ? (
          <SectionList
            renderItem={({ item }) => (
              <ScheduleItem
                fav={this.props.value}
                item={item}
                navigate={navigate}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{moment(title).format("LT")}</Text>
            )}
            ItemSeparatorComponent={() => {
              return <View style={styles.emptyLine} />;
            }}
            sections={this.props.data}
            keyExtractor={(_, index) => "" + index}
          />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              You have not favourited any events yet.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

Favourites.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
  value: PropTypes.object
};
