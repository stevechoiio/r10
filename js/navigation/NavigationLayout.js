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
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#999",
      labelStyle: { fontSize: 10 },
      style: { backgroundColor: "black" }
    }
  }
);
// Dedicated stacks for Schedule and Faves will go here too!
