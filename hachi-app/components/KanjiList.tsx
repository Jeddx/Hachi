//The KanjiList component takes KanjiBoxes and displays them in a flatlist

import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import KanjiBox from "./KanjiBox";
import KanjiData from "./KanjiData";

type KanjiListProps = { jlpt_level: number };

const KanjiList = ({ jlpt_level }: KanjiListProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>JLPT {jlpt_level}</Text>
        <FlatList
          numColumns={15}
          showsVerticalScrollIndicator={false}
          data={KanjiData(jlpt_level)}
          contentContainerStyle={{ alignItems: "stretch" }}
          renderItem={({ item }) => (
            <KanjiBox kanji={item.kanji} english={item.meanings} id={item.id} />
          )}
          //keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
//StatusBar.currentHeight
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KanjiList;
