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
import KanjiDATA from "@/app/Kanji/[id]";

const KanjiList = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={10}
        showsVerticalScrollIndicator={false}
        data={KanjiDATA}
        renderItem={({ item }) => (
          <KanjiBox symbol={item.symbol} english={item.english} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);
//StatusBar.currentHeight
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KanjiList;
