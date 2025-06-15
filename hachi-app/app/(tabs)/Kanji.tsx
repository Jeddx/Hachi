/*
Page will store a grid of Kanji 
Would like a feature to sort them by: jlpt lvl, rarity, user proficiency
A search feature would be nice as well
The Kanji boxes will be difference colors depending on user proficiency
*/

import { StyleSheet, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import KanjiList from "@/components/KanjiList";

export default function KanjiScreen() {
  // const createDbIfNeeded = async (db: SQLite.SQLiteDatabase) => {
  //   await db.execAsync(
  //     "CREATE TABLE IF NOT EXISTS kanji_entries (id INTEGER PRIMARY KEY, character TEXT NOT NULL, on_readings TEXT, kun_readings TEXT, meanings TEXT, jlpt_level INTEGER, examples TEXT, updated_at TEXT DEFAULT CURRENT_TIMESTAMP)"
  //   );
  // };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Kanji</Text>
      <KanjiList jlpt_level={5} />
      <KanjiList jlpt_level={4} />
      <KanjiList jlpt_level={3} />
      <KanjiList jlpt_level={2} />
      <KanjiList jlpt_level={1} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
  },
  kanjiList: {
    padding: 50,
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
