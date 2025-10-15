//The KanjiScreen is the screen where Kanji details are displayed based on which Kanji was clicked

import { Text } from "@/src/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiDetails from "@/src/components/KanjiDetails";
import { StyleSheet } from "react-native";

export default function KanjiScreen() {
  // const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <KanjiDetails />

      {/* <Text>{kanji.kanji}</Text>
      <Text>{kanji.meanings}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
