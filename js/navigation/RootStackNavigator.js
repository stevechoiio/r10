import { createStackNavigator, createAppContainer } from "react-navigation";
import About from "../screens/About";
import TabNavigator from "./NavigationLayout";
import Speaker from "../screens/Speaker";

export default createAppContainer(
  createStackNavigator(
    { layout: TabNavigator, Speaker },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
