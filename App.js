import Taquin from "./src/taquin";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Score from "./src/score";
import About from "./src/about";

const MyTabs = createMaterialTopTabNavigator({
  screens: {
    Score: Score,
    About: About,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: "MyTabs",
  screens: {
    Taquin: Taquin,
    MyTabs,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
