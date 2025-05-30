import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type KanjiBoxProps = { symbol: string; id: string };

const KanjiBox = ({ symbol, id }: KanjiBoxProps) => {
  //
  return (
    <TouchableOpacity>
      <Link
        href={{ pathname: "/Kanji/KanjiScreen", params: { id: id } }}
        push
        asChild
      >
        <View style={styles.item}>
          <Text style={styles.kanji}>{symbol}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#212121",
    padding: 10,
    //borderColor: '#040F0F',
    //borderWidth: 1,
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
});

export default KanjiBox;
