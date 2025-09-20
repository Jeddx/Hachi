/*
Flashcard list will take in a list of cards and display each flashcard one at a time
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Alert } from "react-native";
import Flashcard from "./Flashcard";
import FlashcardBottom from "./FlashcardBottom";
import { CardProps } from "./Props/CardProps";
import { useLocalSearchParams } from "expo-router";
import SampleStudyList from "./Example/SampleStudyList";

//type FlashcardListProps = {  };
//Should obtain study list id from url then reference that

const FlashcardList = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [currentItem, setCurrentItem] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true);
  const id = Number(params.id);
  const list = SampleStudyList.cards;

  return (
    <Pressable
      onPress={onPress} //() => setCurrentItem((prev) => (prev + 1) % list.length)
      style={styles.box}
    >
      <Flashcard {...list[currentItem]} />
      {isPressed && (
        <View style={styles.box}>
          <FlashcardBottom {...list[currentItem]} />
          <Button
            title="Bad"
            onPress={() => Alert.alert("Bad")}
            color="#ff0000ff"
          />
          <Button
            title="Good"
            onPress={() => {
              setIsPressed(false);
              setCurrentItem((prev) => (prev + 1) % list.length);
            }}
            color="#029600ff"
          />
        </View>
      )}

      {/* {list.map((card: CardProps) => (
        <Text key={card.id}>
          <Flashcard {...card[currentItem]} />
        </Text>
      ))} */}
      {/* <Flashcard japanese={list[0].japanese} english={list[0].english} id={list[0].id} proficiency={0} /> */}
      {/* <Text>List of Items:</Text>
      {items.map((item) => (
        <View key={item.id}>
          <Text>Name: {item.name}</Text>
          <Text>Value: {item.value}</Text>
        </View>
      ))} */}
    </Pressable>
  );
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
    flex: 1,
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
