//Takes in all user decks and displays them

import React from "react";
import Deck from "./Deck";
import { DeckProps } from "../types/DeckProps";
import { getUserData } from "../services/getUserData";
import { View } from "../Themed";
import { StyleSheet, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

//Will find all decks and list their info
const DeckList = () => {
  const [decks, setDecks] = useState<DeckProps[]>([]);
  const appDb = useSQLiteContext();

  useEffect(() => {
    const load = async () => {
      const deckList = await appDb.getAllAsync<{
        id: number;
        name: string;
        deckType: string;
      }>("SELECT * FROM decks");
      setDecks(deckList);
    };
    load();
    console.log("Successfully obtained user data");
  }, []);
  // const userDb = await getUserData();

  // const deckList = await userDb.getAllAsync<{
  //   id: number;
  //   name: string;
  //   deckType: string;
  // }>("SELECT * FROM deck_entries");
  const handleDelete = (id: number) => {
    //Run when onDelete is called
    setDecks((prev) => prev.filter((deck) => deck.id !== id));
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Deck</Text>
        <Text style={styles.headingText}>New</Text>
        <Text style={styles.headingText}>Review</Text>
        <Text style={styles.headingText}></Text>
        {/* <View style={styles.separator} /> */}
      </View>
      {/* <FlatList
        //numColumns={1}
        //scrollEnabled={false}
        data={deckList}
        //contentContainerStyle={{ alignItems: "stretch" }}
        renderItem={({ index }) => <Deck {...deckList[index]} />}
      /> */}
      <FlatList
        style={styles.list}
        //numColumns={Platform.OS === "ios" ? 5 : 12}
        scrollEnabled={false}
        data={decks}
        contentContainerStyle={{
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => <Deck {...item} onDelete={handleDelete} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <Deck {...decks[0]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "40%",
    padding: 10,
    //height: "100%",
    //flexDirection: "row",
  },
  list: {
    //flex: 1,
    //justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#212121", //"#212121"
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9d9d9",
    textAlign: "left",
  },
  separator: {
    //marginBottom: 5,
    height: 5,
    //width: "95%",
    //justifyContent: "center",
    //alignContent: "center",
    backgroundColor: "#ffffffff",
  },
});

export default DeckList;
