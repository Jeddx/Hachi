//The KanjiList component takes KanjiBoxes and displays them in a flatlist

import React from "react";
import { Platform, View, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import KanjiBox from "./KanjiBox";
import KanjiData from "../services/KanjiData";

type KanjiListProps = { jlpt_level: number };

const KanjiList = ({ jlpt_level }: KanjiListProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.jlpt}>JLPT {jlpt_level}</Text>
      <FlatList
        style={styles.list}
        numColumns={Platform.OS === "ios" ? 5 : 12}
        scrollEnabled={false}
        data={KanjiData(jlpt_level)}
        contentContainerStyle={{ alignItems: "stretch" }}
        renderItem={({ item }) => <KanjiBox kanji={item} />}
        keyExtractor={(item) => item.kanji}
      />
    </SafeAreaView>
  );
};
//StatusBar.currentHeight
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
  jlpt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9d9d9",
    textAlign: "center",
  },
  list: {},
});

export default KanjiList;
