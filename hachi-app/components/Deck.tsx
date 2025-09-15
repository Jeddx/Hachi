/*
Deck will display info on the Decks page and will transfer the study list to the study screen which will send it to the flashcard list
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Link } from "expo-router";

type DeckProps = { name: string; learn: number; review: number };

const Deck = ({ name, learn, review }: DeckProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true);
  return (
    <View style={styles.content}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.learnNumber}>{learn}</Text>
      <Text style={styles.reviewNumber}>{review}</Text>
      <Link
        href={{ pathname: "/Study/StudyScreen" }} //Maybe this needs to be changed to a string? params: { deckName: name }
        push
        asChild
      >
        <Button
          title="Study"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "row",
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
