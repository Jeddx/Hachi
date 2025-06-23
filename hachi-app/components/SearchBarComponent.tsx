import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

export default function SearchBarComponent() {
  return (
    // <TextInput
    //   style={styles.input}
    //   placeholder="Search"
    //   placeholderTextColor="#d9d9d9"
    // />
    <SearchBar
      platform="default"
      placeholder="Search"
      style={styles.input}
      //onChangeText={this.updateSearch}
      //value={search}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    width: "80%",
    justifyContent: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 15,
    backgroundColor: "#5e5e5e",
  },
});
