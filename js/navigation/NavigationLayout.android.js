import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Button } from "react-native";
import About from "../screens/About";
import Favourites from "../screens/Favourites";
import Maps from "../screens/Maps";
import Schedule from "../screens/Schedule";
import Session from "../screens/Session";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config.ios";

const AboutStack = createStackNavigator(
  {
    About
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule,
    Session
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapsStack = createStackNavigator(
  {
    Maps
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Favourites
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
export default createDrawerNavigator({
  Schedule: ScheduleStack,
  Maps: MapsStack,
  Faves: FavesStack,
  About: AboutStack
});
