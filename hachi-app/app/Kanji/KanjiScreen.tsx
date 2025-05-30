import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiDATA from "./[id]";

export default function KanjiScreen() {
  const params = useLocalSearchParams<{ id: string }>();

  const kanji = KanjiDATA.find((k) => k.id === params.id);

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
