import { Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import KanjiData from "@/components/KanjiData";

const KanjiDetails = () => {
  const params = useLocalSearchParams<{ kanji: string }>();

  const kanji = KanjiData().find((k) => k.kanji === params.kanji); //Since we are no longer using KanjiDATA need to read from db

  if (!kanji) {
    return (
      <View>
        <Text>Not Found</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>{kanji.kanji}</Text>
      <Text>{kanji.meanings}</Text>
    </View>
  );
};

export default KanjiDetails;
