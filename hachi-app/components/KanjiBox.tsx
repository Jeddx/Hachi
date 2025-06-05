import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

type KanjiBoxProps = { symbol: string; english: string; id: number };

const KanjiBox = ({ symbol, english, id }: KanjiBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ hovered }) => [styles.box, hovered && styles.hovered]}
    >
      <TouchableOpacity>
        <Link
          href={{ pathname: "/Kanji/KanjiScreen", params: { id: id } }} //Maybe this needs to be changed to a string?
          push
          asChild
        >
          <Text style={styles.kanji}>{symbol}</Text>
        </Link>
        {isHovered && (
          <View>
            <Text style={styles.english}>{english}</Text>
          </View>
        )}
      </TouchableOpacity>
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
    //borderColor: '#040F0F',
    //borderWidth: 1,
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 12, //64
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 12,
    color: "#d9d9d9",
    textAlign: "center",
  },
});

export default KanjiBox;
