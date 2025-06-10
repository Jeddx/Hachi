import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiDetails from "@/components/KanjiDetails";
import * as SQLite from "expo-sqlite";

export default function KanjiScreen() {
  // const params = useLocalSearchParams<{ id: string }>();

  // const kanji = KanjiData().find((k) => k.id.toString() === params.id); //Since we are no longer using KanjiDATA need to read from db
  return (
    <View>
      <SQLite.SQLiteProvider
        databaseName="kanji_entries.db"
        assetSource={{
          assetId: require("./../../assets/local_db_tables/kanji_entries.db"),
        }}
      >
        <KanjiDetails />
      </SQLite.SQLiteProvider>
      {/* <Text>{kanji.kanji}</Text>
      <Text>{kanji.meanings}</Text> */}
    </View>
  );
}
