/*
Flashcard is a layout for how a (anki style) flashcard should look when studying
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import { CardProps } from "../types/CardProps";

//type FlashcardProps = { kanji: string; english: string; id: number };

function getWords(str: string): string {
  return str.replace(/[\[\]"']/g, "");
}

const Flashcard = (card: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true); //style={styles.box}
  return (
    // <Pressable onPress={onPress}>
    <View>
      <Text style={styles.kanji}>{card.front}</Text>

      {isPressed && (
        <View>
          <View style={styles.separator} />
          <Text style={styles.english}>{getWords(card.back)}</Text>
          {/* <Button
            title="Bad"
            onPress={() => Alert.alert("Bad")}
            color="#ff0000ff"
          />
          <Button
            title="Good"
            onPress={() => Alert.alert("Good")}
            color="#029600ff"
          /> */}
        </View>
      )}
    </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "100%",
    height: "100%",
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

export default Flashcard;
