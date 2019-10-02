import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.viewBody}>
      <Text>Home Screen</Text>
      <Button title="Toggle" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
