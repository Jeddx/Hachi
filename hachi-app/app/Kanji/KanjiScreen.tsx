import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiDATA from "./[id]";

export default function KanjiScreen() {
  const params = useLocalSearchParams<{ id: string }>();

  const kanji = KanjiDATA.find((k) => k.id === params.id); //Since we are no longer using KanjiDATA need to read from db

  if (!kanji) {
    return (
      <View>
        <Text>Not Found</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>{kanji.symbol}</Text>
      <Text>{kanji.english}</Text>
    </View>
  );
}
