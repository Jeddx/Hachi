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
import KanjiData from "./KanjiData";

type KanjiBoxProps = { kanji: string; english: string; id: number };

function getFirstWord(str: string): string {
  return str.replace(/[\[\]"']/g, "").split(",")[0];
}

const KanjiBox = ({ kanji, english, id }: KanjiBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [kanjiData, setKanjiData] = KanjiData();
  // const handleKanjiData = (KanjiData()[id]) => {
  //   setKanjiData(KanjiData()[id]);
  // }
  if(!kanjiData){ //Wont work, might just pass through parameter when using in kanjilist, although would be good to sort out
    return (<Text>Loading...</Text>);
  }
  //const kanjiData = KanjiData()[id]; //Trying to access kanji via ID, but is empty likely bc no use of SQLite
  //console.log("KanjiBox kanji", kanjiData);
  //const kanjitwo = arrayholder[id];
  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ hovered }) => [styles.box, hovered && styles.hovered]}
    >
      <Link
        href={{ pathname: "/Kanji/KanjiScreen", params: { id: id } }} //Maybe this needs to be changed to a string?
        push
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.kanji}>{kanji}</Text>
          {isHovered && (
            <View>
              <Text style={styles.english}>{getFirstWord(KanjiData()[id].meanings)}</Text>
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
