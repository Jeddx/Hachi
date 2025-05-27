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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "一",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "二",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "三",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
  {
    id: "BEESSSSSS",
    title: "蜂",
  },
];

const KanjiList = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={10}
        showsVerticalScrollIndicator={false}
        data={DATA} //KanjiDATA
        renderItem={({ item }) => <KanjiBox kanji={item.title} />}
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
