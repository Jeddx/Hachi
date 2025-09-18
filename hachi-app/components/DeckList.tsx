import React from "react";
import Deck from "./Deck";
import { DeckProps } from "./Props/DeckProps";
import { View } from "./Themed";
import { StyleSheet, Text } from "react-native";
import SampleStudyList from "./Example/SampleStudyList";

//Will find all decks and list them their info
const DeckList = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Deck</Text>
        <Text style={styles.headingText}>New</Text>
        <Text style={styles.headingText}>Review</Text>
        <Text style={styles.headingText}></Text>
        {/* <View style={styles.separator} /> */}
      </View>

      <Deck {...SampleStudyList} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "40%",
    padding: 10,
    //height: "100%",
    //flexDirection: "row",
  },
  header: {
    backgroundColor: "#212121", //"#212121"
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9d9d9",
    textAlign: "left",
  },
  separator: {
    //marginBottom: 5,
    height: 5,
    //width: "95%",
    //justifyContent: "center",
    //alignContent: "center",
    backgroundColor: "#ffffffff",
  },
});

export default DeckList;
