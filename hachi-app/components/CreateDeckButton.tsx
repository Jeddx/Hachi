import { StyleSheet, Pressable, Text } from "react-native";
import { getUserData } from "./getUserData";

export const CreateDeckButton = async () => {
  //const userDb = await getUserData();

  return (
    <Pressable
      onPress={() => {
        // userDb.runAsync(
        //   //Creates A Deck, will change this later to be used with a create deck button
        //   "INSERT INTO deck_entries (id, name, deckType) VALUES (?, ?, ?)",
        //   [1, "Sample Deck 1", "anki"]
        // );
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#3025ccff" : "#4032ffff",
        },
        styles.wrapperCustom,
      ]}
    >
      <Text>Create Deck</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
