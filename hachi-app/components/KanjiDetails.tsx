//KanjiDetails is used on the Kanji Screen to display the current Kanjis information

import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiData from "@/components/KanjiData";
import { StyleSheet } from "react-native";

function simplifyStr(str: string): string {
  return str.replace(/[\[\]"']/g, "");
}

const KanjiDetails = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const id = Number(params.id);
  // const kanji = KanjiData().find((k) => Kanji === params.id); //Find a better way to access the kanji data
  const kanji = KanjiData()[id];

  if (!kanji) {
    return (
      <View style={styles.container}>
        <Text style={styles.extraInfo}>Loading... </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.kanji}>{kanji.kanji}</Text>
      <Text style={styles.english}>{simplifyStr(kanji.meanings)}</Text>
      <Text style={styles.extraInfo}>
        {" "}
        kun-readings: {simplifyStr(kanji.kun_readings)}
      </Text>
      <Text style={styles.extraInfo}>
        {" "}
        on-readings: {simplifyStr(kanji.on_readings)}
      </Text>
      {kanji.jlpt && (
        <Text style={styles.extraInfo}> JLPT Level N{kanji.jlpt}</Text>
      )}
      <Text style={styles.extraInfo}> ID: {params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
  },
  kanji: {
    fontSize: 128,
    padding: 20,
    color: "#d9d9d9",
  },
  english: {
    fontSize: 24,
    padding: 10,
    //fontWeight: "bold",
    color: "#d9d9d9",
  },
  extraInfo: {
    fontSize: 18,
    padding: 5,
    color: "#d9d9d9",
  },
});

export default KanjiDetails;
