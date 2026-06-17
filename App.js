import Taquin from "./src/taquin";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Taquin",
  screenOptions: {
    headerStyle: { backgroundColor: "#7b84ff" },
    headerTitleStyle: { color: "#ffffff" },
  },
  screens: {
    Taquin: Taquin,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
