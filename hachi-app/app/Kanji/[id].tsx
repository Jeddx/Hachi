import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const KanjiDATA = [
  {
    id: "1",
    symbol: "蜂",
    english: "Bee",
  },
  {
    id: "2",
    symbol: "優",
    english: "Superiority, tenderness",
  },
  {
    id: "3",
    symbol: "死",
    english: "Death",
  },
];

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
