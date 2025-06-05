import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

// const db = SQLite.openDatabase(
//   {
//     name: "kanji_entries.db",
//     location: "default",
//   },
//   () => {},
//   (error) => {
//     console.error(error);
//     throw Error("Could not connect to database");
//   }
// );

// const createTable = () => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXISTS " +
//         "Kanji " +
//         "(id INTEGER PRIMARY KEY AUTOINCREMENT, Character TEXT NOT NULL, on_readings TEXT, kun_readings TEXT, meanings TEXT, jlpt_level INTEGER, examples TEXT, update_at TEXT DEFAULT CURRENT_TIMESTAMP)"
//     );
//   });
// };

export default function KanjiInfoScreen() {
  //createTable();
  return (
    <View>
      <Text style={styles.title}>Kanji</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D3A3A",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
