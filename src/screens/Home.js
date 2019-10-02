import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Home Screen</Text>
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
