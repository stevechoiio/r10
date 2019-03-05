import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import ScheduleItem from "../../components/ScheduleItem";
import moment from "moment";
import { styles } from "./styles";
export default class Favourites extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.data);
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
              You have not Favourited any events yet.
            </Text>
          </View>
        )}
      </View>
    );
  }
}
