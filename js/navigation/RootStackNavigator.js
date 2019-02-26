import { createStackNavigator, createAppContainer } from "react-navigation";
import About from "../screens/About";
import TabNavigator from "./NavigationLayout";
import SpeakerModal from "../screens/Speaker";

export default createAppContainer(
  createStackNavigator(
    { layout: TabNavigator, Speaker: SpeakerModal },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
