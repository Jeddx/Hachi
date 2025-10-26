/*
Deck will display info on the Decks page and will transfer the study list to the study screen which will send it to the flashcard list
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Pressable } from "react-native";
import { Link } from "expo-router";
import { DeckProps } from "../types/DeckProps";
import { useSQLiteContext } from "expo-sqlite";
import RenameDeckPopup from "./RenameDeckPopup";

//type DeckProps = { name: string; learn: number; review: number };

const Deck = (deck: DeckProps) => {
  //{ name, learn, review }: DeckProps
  //const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  //const [deletedDeck, setDeletedDeck] = useState(false);
  const appDb = useSQLiteContext();
  const [showRename, setShowRename] = useState(false);
  //const onPress = () => setIsPressed(true);
  return (
    <View style={styles.content}>
      <Text style={styles.nameText}>{deck.name}</Text>
      <Link
        href={{ pathname: "/Study/StudyScreen", params: { id: deck.id } }}
        push
        asChild
      >
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>STUDY</Text>
        </Pressable>
      </Link>
      <Pressable
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={async () => {
          //Alert.alert("Simple Button pressed");
          try {
            const result = await appDb.runAsync(
              "DELETE FROM decks WHERE id = ?",
              [deck.id]
            );
            deck.onDelete?.(deck.id); //removes deck from UI immediately
            console.log("✅ Deck deleted:");
            //setDeletedDeck(true);
          } catch (err) {
            console.error("❌ SQLite delete failed:", (err as Error).message);
          }
        }}
      >
        <Text style={styles.buttonText}>DELETE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setShowRename(true)}>
        <Text style={styles.buttonText}>RENAME</Text>
      </Pressable>
      <RenameDeckPopup
        visibility={showRename}
        oldDeckName={deck.name}
        onClose={() => setShowRename(false)}
        onSubmit={async (newName) => {
          await appDb.runAsync("UPDATE decks SET name = ? WHERE id = ?", [
            newName,
            deck.id,
          ]);
          setShowRename(false);
          //Refresh deck list
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 2,
    padding: 8,
    margin: 3,
    backgroundColor: "#00b7ffff",
  },
  buttonText: {
    color: "white",
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9d9d9",
    textAlign: "left",
  },
  learnNumber: {
    color: "#00eeffff",
    fontSize: 16,
  },
  reviewNumber: {
    color: "#00ff04ff",
    fontSize: 16,
  },
  separator: {
    marginBottom: 5,
    height: 1,
    width: "95%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#d9d9d9",
  },
});

export default Deck;
