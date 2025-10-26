/*
Flashcard list will take in a list of cards and display each flashcard one at a time
*/

import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import Flashcard from "./Flashcard";
import FlashcardBottom from "./FlashcardBottom";
import { CardProps } from "../types/CardProps";
import { getUserData } from "../services/getUserData";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";

//type FlashcardListProps = {  };
//Should obtain study list id from url then reference that

const FlashcardList = async () => {
  const params = useLocalSearchParams<{ id: string }>();
  const deckId = Number(params.id);
  const appDb = useSQLiteContext();

  const [currentItem, setCurrentItem] = useState(0);

  const [cards, setCards] = useState<CardProps[]>([]);
  console.log("If u didnt see the success thing after, it failed");

  useEffect(() => {
    const load = async () => {
      //const userDb = await getUserData();

      const cardList = await appDb.getAllAsync<{
        deck_id: number;
        card_id: number;
        proficiency: number;
        front: string;
        back: string;
      }>("SELECT card_id, front, back FROM card_entries WHERE deck_id = ?", [
        deckId,
      ]);
      setCards(cardList);
      console.log("Successfully created card list" + cardList);
    };
    load();
  }, []);

  // const userDb = await getUserData();
  // const cardList = await userDb.getAllAsync<{
  //   deck_id: number;
  //   card_id: number;
  //   proficiency: number;
  //   front: string;
  //   back: string;
  // }>("SELECT card_id, front, back FROM card_entries WHERE deck_id = ?", [
  //   deckId,
  // ]);

  //const [flashcards, setFlashcards] = useState(cardList);
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => setIsPressed(true);
  //const id = Number(params.id);
  const originalListLength = cards.length;
  const [correctCount, setCorrectCount] = useState(0);
  const [retryCount, setRetryCount] = useState(0);

  //Will give the next card and add cards you get wrong to the end
  const handleNext = (correct: boolean) => {
    if (!correct) {
      // Add the current flashcard to the end of the queue
      setCards((prev) => [...prev, prev[currentItem]]);
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
        {(currentItem < cards.length && (
          <Flashcard {...cards[currentItem]} />
        )) || <Text style={styles.english}> Review Complete! </Text>}

        {isPressed && currentItem < cards.length && (
          <View style={styles.box}>
            <FlashcardBottom {...cards[currentItem]} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.redButton}
                onPress={() => {
                  setIsPressed(false);
                  handleNext(false);
                }}
              >
                <Text style={styles.infoText}>BAD</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.greenButton}
                onPress={() => {
                  setIsPressed(false);
                  handleNext(true);
                  setCorrectCount((prev) => prev + 1);
                }}
              >
                <Text style={styles.infoText}>GOOD</Text>
              </TouchableOpacity>
            </View>
            {/* <Button
              title="Bad"
              onPress={() => {
                setIsPressed(false);
                handleNext(false);
                //setRetryCount((prev) => prev + 1);
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
            /> */}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  redButton: {
    backgroundColor: "#ff0000ff",
    width: "35%",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  greenButton: {
    backgroundColor: "#029600ff",
    width: "35%",
    borderRadius: 5,
    marginHorizontal: 20,
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
    textAlign: "center",
    color: "#d9d9d9",
    padding: 10,
  },
});

export default FlashcardList;
