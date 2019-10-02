import React from "react";
import { createAppContainer, DrawerItems } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import MyAccountScreen from "../screens/MyAccount";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const MyAccountStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen
  }
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-home"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    },
    MyAccount: {
      screen: MyAccountStack,
      navigationOptions: ({ navigation }) => ({
        title: "My Account",
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-home"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MyDrawerNavigator);
