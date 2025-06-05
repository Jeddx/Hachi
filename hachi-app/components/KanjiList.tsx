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
import * as SQLite from "expo-sqlite";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

type Kanji = {
  id: number;
  character: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt_level: number;
  examples: string;
  updated_at: string;
};

const KanjiList = () => {
  // const [id, setId] = useState("");
  // const [character, setCharacter] = useState("");
  // const [meanings, setmeanings] = useState("");
  const [kanjiDATA, setData] = useState<Kanji[]>([]);

  const db = SQLite.useSQLiteContext();

  const loadData = async () => {
    const result = await db.getAllAsync<Kanji>("SELECT * FROM kanji_entries;"); //getAllAsync
    setData(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={10}
          showsVerticalScrollIndicator={false}
          data={kanjiDATA}
          renderItem={({ item }) => (
            <KanjiBox
              symbol={item.kun_readings} //Supposed to be kanji but they are currently invisible
              english={item.meanings}
              id={item.id}
            />
          )}
          //keyExtractor={(item) => item.id}
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
