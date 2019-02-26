import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import About from "../screens/About";
import Favourites from "../screens/Favourites";
import Maps from "../screens/Maps";
import Schedule from "../screens/Schedule";
import Session from "../screens/Session";
import Icon from "react-native-vector-icons/Ionicons";
const AboutStack = createStackNavigator({
  About
});

const ScheduleStack = createStackNavigator({
  Schedule,
  Session
});

const MapsStack = createStackNavigator({
  Maps
});
const FavesStack = createStackNavigator({
  Favourites
});
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Maps: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Schedule") {
          iconName = `ios-options`;
        } else if (routeName === "Maps") {
          iconName = "ios-map";
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#999",
      labelStyle: { fontSize: 10 },
      style: { backgroundColor: "black" }
    }
  }
);
// Dedicated stacks for Schedule and Faves will go here too!
