import { createStackNavigator, createAppContainer } from "react-navigation";
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
