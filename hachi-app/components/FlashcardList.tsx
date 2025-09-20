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
  const originalListLength = list.length;
  const [correctCount, setCorrectCount] = useState(0);
  const [retryCount, setRetryCount] = useState(0);

  //Will give the next card and add cards you get wrong to the end
  const handleNext = (correct: boolean) => {
    if (!correct) {
      // Add the current flashcard to the end of the queue
      setFlashcards((prev) => [...prev, prev[currentItem]]);
    }

    // Move to next flashcard
    setCurrentItem((prev) => prev + 1);
  };

  return (
    <View style={styles.box}>
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
                setRetryCount((prev) => prev + 1);
              }}
              color="#ff0000ff"
            />
            <Button
              title="Good"
              onPress={() => {
                setIsPressed(false);
                handleNext(true);
                setCorrectCount((prev) => prev + 1);
              }}
              color="#029600ff"
            />
          </View>
        )}
      </Pressable>

      {/* Bottom info bar */}
      <View style={styles.bottomTab}>
        <Text style={styles.infoText}>
          Review: {originalListLength - currentItem + retryCount}
        </Text>
        {/* <Text style={styles.infoText}>
          Retry: {list.length - currentItem - originalListLength}
        </Text> */}
        <Text style={styles.infoText}>Correct: {correctCount}</Text>
      </View>
    </View>
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
  bottomTab: {
    height: 60,
    width: "100%",
    backgroundColor: "#171717",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    flexDirection: "row",
  },
  infoText: {
    fontSize: 16,
    color: "#d9d9d9",
    padding: 10,
  },
});

export default FlashcardList;
