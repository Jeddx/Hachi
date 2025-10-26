import { StyleSheet, Pressable } from "react-native";
import { CreateDeckButton } from "@/src/components/CreateDeckButton";
import { Text, View } from "@/src/Themed";
import KanjiData from "@/src/services/KanjiData";
import React from "react";
import DeckList from "@/src/components/DeckList";
import { useState } from "react";
import { DeckProps } from "@/src/types/DeckProps";

export default function TabTwoScreen() {
  const arrayholder = KanjiData();
  const [decks, setDecks] = useState<DeckProps[]>([]);
  //console.log("All Kanji in array:", arrayholder);

  if (arrayholder.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading... </Text>
      </View>
    );
  } //onPress={onPressFunction}
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Study</Text> */}
      {/* <View style={styles.separator} /> */}
      {/* <Pressable
        onPress={() => {
          await userDb.runAsync(
            //Creates A Deck, will change this later to be used with a create deck button
            "INSERT INTO decks (id, name, deckType) VALUES (?, ?, ?)",
            [1, "Sample Deck 1", "anki"]
          );
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#3025ccff" : "#4032ffff",
          },
          styles.wrapperCustom,
        ]}
      >
        <Text>Create Deck</Text>
      </Pressable> */}
      <CreateDeckButton setDecks={setDecks} />
      <DeckList decks={decks} setDecks={setDecks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4032ffff",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
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
