/*
KanjiBox is a component that displays the Kanji and can be hovered over to display english meaning, 
It can be clicked to see more details
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import Flashcard from "./Flashcard";

//type FlashcardListProps = {  };

const FlashcardList = () => {
  const [list, setList] = useState([]);
  return;
  //   if (.length === 0) {
  //     return (
  //       <View style={styles.container}>
  //         <Text>Loading... </Text>
  //       </View>
  //     );
  //   }
  //   return (
  //     <Flashcard
  //       kanji={arrayholder[0].kanji}
  //       english={arrayholder[0].meanings}
  //       id={arrayholder[0].id}
  //     />
  //   );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#212121", //"#212121"
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 64,
    color: "#d9d9d9",
    textAlign: "center",
  },
  separator: {
    marginBottom: 5,
    height: 1,
    width: "95%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#d9d9d9",
  },
});

export default FlashcardList;
