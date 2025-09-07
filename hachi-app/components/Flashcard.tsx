/*
KanjiBox is a component that displays the Kanji and can be hovered over to display english meaning, 
It can be clicked to see more details
*/

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

type KanjiBoxProps = { kanji: string; english: string; id: number };

function getFirstWord(str: string): string {
  return str.replace(/[\[\]"']/g, "").split(",")[0];
}

const Flashcard = ({ kanji, english, id }: KanjiBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true);
  return (
    <Pressable onPress={onPress} style={styles.box}>
      <Text style={styles.kanji}>{kanji}</Text>

      {isPressed && (
        <View style={styles.box}>
          <View style={styles.separator} />
          <Text style={styles.english}>{getFirstWord(english)}</Text>
        </View>
      )}
    </Pressable>
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
