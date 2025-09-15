import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ExampleFlatList from "@/components/ExampleFlatlist";
import Flashcard from "@/components/Flashcard";
import KanjiData from "@/components/KanjiData";
import React from "react";
import DeckList from "@/components/DeckList";

export default function TabTwoScreen() {
  const arrayholder = KanjiData();
  console.log("All Kanji in array:", arrayholder);

  if (arrayholder.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading... </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Study</Text> */}
      {/* <View style={styles.separator} /> */}
      <DeckList />
      <Flashcard
        proficiency={1}
        japanese={arrayholder[0].kanji}
        english={arrayholder[0].meanings}
        id={arrayholder[0].id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginBottom: 5,
    height: 1,
    width: "95%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#212121",
  },
});
