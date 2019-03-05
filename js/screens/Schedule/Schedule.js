import React from "react";
import { Text, View, SectionList } from "react-native";
import moment from "moment";
import ScheduleItem from "../../components/ScheduleItem";
import { styles } from "./styles";

export const Schedule = props => {
  const { navigate } = props.navigation;

  return (
    <View>
      <SectionList
        renderItem={({ item, index, section }) => (
          <ScheduleItem fav={props.value} item={item} navigate={navigate} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{moment(title).format("LT")}</Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.emptyLine} />;
        }}
        sections={props.data}
        keyExtractor={(item, index) => "" + index}
      />
    </View>
  );
};
