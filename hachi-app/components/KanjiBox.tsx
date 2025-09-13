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

type Kanji = {
  id: number;
  kanji: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt: number;
};

type KanjiBoxProps = { kanji: Kanji };

function getFirstWord(str: string): string {
  return str.replace(/[\[\]"']/g, "").split(",")[0];
}

const KanjiBox = ({ kanji }: KanjiBoxProps) => {
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
          {isHovered && (
            <View>
              <Text style={styles.english}>{getFirstWord(kanji.meanings)}</Text>
            </View>
          )}
        </TouchableOpacity>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#212121",
    padding: 10,
    width: 100,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 12,
    color: "#d9d9d9",
    textAlign: "center",
  },
});

export default KanjiBox;
