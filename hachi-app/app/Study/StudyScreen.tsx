//This is the screen that your flashcards will appear on

import { View } from "react-native";
//import KanjiDetails from "@/components/KanjiDetails";
import FlashcardList from "@/src/components/FlashcardList";
import { StyleSheet } from "react-native";

export default function StudyScreen() {
  return <View style={styles.container}>{<FlashcardList />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
