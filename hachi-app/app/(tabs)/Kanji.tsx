/*
Page will store a grid of Kanji 
Would like a feature to sort them by: jlpt lvl, rarity, user proficiency
A search feature would be nice as well
The Kanji boxes will be difference colors depending on user proficiency
*/

import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import KanjiList from "@/components/KanjiList";
import * as SQLite from "expo-sqlite";

export default function KanjiScreen() {
  // const createDbIfNeeded = async (db: SQLite.SQLiteDatabase) => {
  //   await db.execAsync(
  //     "CREATE TABLE IF NOT EXISTS kanji_entries (id INTEGER PRIMARY KEY, character TEXT NOT NULL, on_readings TEXT, kun_readings TEXT, meanings TEXT, jlpt_level INTEGER, examples TEXT, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)"
  //   );
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kanji</Text>
      <KanjiList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d9d9d9",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
