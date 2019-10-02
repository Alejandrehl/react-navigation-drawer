import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./src/navigations/DrawerNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
