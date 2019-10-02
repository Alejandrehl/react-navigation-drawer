import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MyAccount = () => {
  return (
    <View style={styles.viewBody}>
      <Text>MyAccount Screen</Text>
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

export default MyAccount;
