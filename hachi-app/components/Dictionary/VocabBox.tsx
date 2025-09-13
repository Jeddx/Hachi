/*
The Vocab box will be used to display the vocab when searched up. I'm hoping for a style similar to shirabe jisho
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

type KanjiBoxProps = { kanji: Kanji }; //kanji: string; english: string; id: number

type Kanji = {
  id: number;
  kanji: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt: number;
};

function getFirstWord(str: string): string {
  return str.replace(/[\[\]"']/g, "").split(",")[0];
}

const VocabBox = ({ kanji }: KanjiBoxProps) => {
  //kanji, english,
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ hovered }) => [styles.box, hovered && styles.hovered]}
    >
      <Link
        href={{ pathname: "/Kanji/KanjiScreen", params: { id: kanji.id } }} //Maybe this needs to be changed to a string?
        push
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.kanji}>{kanji.kanji}</Text>
          <Text style={styles.english}>{getFirstWord(kanji.meanings)}</Text>
        </TouchableOpacity>
      </Link>
      <View style={styles.separator} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#2a2a2a", //
    //padding: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  hovered: {
    backgroundColor: "#212121",
  },
  kanji: {
    fontSize: 42,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 12,
    color: "#d9d9d9",
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: "95%",
    //justifyContent: "center",
    backgroundColor: "#212121",
  },
});

export default VocabBox;
