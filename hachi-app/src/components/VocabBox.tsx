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
  Image,
} from "react-native";
import { Link } from "expo-router";
//import AddCard from "../AddCard";
import useAddCard from "../hooks/useAddCards";
import { useSQLiteContext } from "expo-sqlite";

type KanjiBoxProps = { kanji: Kanji };

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
  const { addCard } = useAddCard();
  const [isHovered, setIsHovered] = useState(false);
  const appDb = useSQLiteContext();

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
        <TouchableOpacity style={styles.mainArea}>
          <Text style={styles.kanji}>{kanji.kanji}</Text>
          <Text style={styles.english}>{getFirstWord(kanji.meanings)}</Text>
          <View style={styles.separator} />
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        style={styles.button}
        onPress={() => addCard({ kanjiChar: kanji.kanji, deckID: 2 })}
      >
        {/* <Image //Have a parent component that figures out if Kanji exists in a deck or not
          style={styles.image}
          source={
            isAdded 
              ? require("@/assets/images/Check.png") // when true
              : require("@/assets/images/Plus.png") // when false
          }
        /> */}
        <Image
          style={styles.image}
          source={require("@/assets/images/Plus.png")}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#2a2a2a", //
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    maxHeight: 100,
    flexDirection: "row",
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
    //width: "95%",
    //justifyContent: "center",
    backgroundColor: "#212121",
  },
  button: {
    padding: 20,
    //margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    //backgroundColor: "#25aa00ff",
  },
  mainArea: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: { resizeMode: "contain", aspectRatio: 1, height: 40, width: 40 },
});

export default VocabBox;
