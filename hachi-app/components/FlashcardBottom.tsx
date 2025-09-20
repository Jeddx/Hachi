/*
Flashcard is a layout for how a (anki style) flashcard should look when studying
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import { CardProps } from "./Props/CardProps";

//type FlashcardProps = { kanji: string; english: string; id: number };

function getWords(str: string): string {
  return str.replace(/[\[\]"']/g, "");
}

const FlashcardBottom = ({ japanese, english, id }: CardProps) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    // <Pressable onPress={onPress} style={styles.box}>
    <View style={styles.box}>
      <View style={styles.separator} />
      <Text style={styles.english}>{getWords(english)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "100%",
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 64,
    color: "#d9d9d9",
    textAlign: "center",
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

export default FlashcardBottom;
