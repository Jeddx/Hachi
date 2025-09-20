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
  const list = SampleStudyList.cards;
  const [flashcards, setFlashcards] = useState(list);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true);
  const id = Number(params.id);

  //Will give the next card and add cards you get wrong to the end
  const handleNext = (correct: boolean) => {
    if (!correct) {
      // Add the current flashcard to the end of the queue
      setFlashcards((prev) => [...prev, prev[currentItem]]);
    }

    // Move to next flashcard
    setCurrentItem((prev) => prev + 1);
    // if (currentItem < flashcards.length - 1) {

    // }
  };

  return (
    <Pressable
      onPress={onPress} //() => setCurrentItem((prev) => (prev + 1) % list.length)
      style={styles.box}
    >
      {(currentItem < flashcards.length && (
        <Flashcard {...flashcards[currentItem]} />
      )) || <Text style={styles.english}> Review Complete! </Text>}

      {isPressed && currentItem < flashcards.length && (
        <View style={styles.box}>
          <FlashcardBottom {...flashcards[currentItem]} />
          <Button
            title="Bad"
            onPress={() => {
              setIsPressed(false);
              handleNext(false);
            }}
            color="#ff0000ff"
          />
          <Button
            title="Good"
            onPress={() => {
              setIsPressed(false);
              handleNext(true);
            }}
            color="#029600ff"
          />
        </View>
      )}
    </Pressable>
  );
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
