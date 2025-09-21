/*
KanjiBox is a component that displays the Kanji and can be hovered over to display english meaning, 
It can be clicked to see more details
*/

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { CardProps } from "./Props/CardProps";
import { DeckProps } from "./Props/DeckProps";
import { KanjiProps } from "./Props/KanjiProps";
import KanjiData from "./KanjiData";
import * as SQLite from "expo-sqlite";

type AddCardProps = { kanjiID: number; deckID: number };

const AddCard = ({ kanjiID, deckID }: AddCardProps) => {
  //Check to make see if Kanji is in Deck with DeckID
  //If so have a pop up asking if they want to remove it

  //Create a default cardProp
  let newCard: CardProps = {
    id: 0,
    proficiency: 0,
    japanese: "",
    english: "",
  };

  //Find the Kanji
  //const kanji = KanjiData()[kanjiID];

  //Create a flashcard with the Kanji
  //   newCard = {
  //     id: kanji.id,
  //     proficiency: 1,
  //     japanese: kanji.kanji,
  //     english: kanji.meanings,
  //   };

  //Add the Flashcard to the deck with the given ID
  console.log("Added Card to deck");

  //   return (
  //     <Pressable
  //       onHoverIn={() => setIsHovered(true)}
  //       onHoverOut={() => setIsHovered(false)}
  //       style={({ hovered }) => [styles.box, hovered && styles.hovered]}
  //     >
  //       <Link
  //         href={{ pathname: "/Kanji/KanjiScreen", params: { id: kanji.id } }} //Maybe this needs to be changed to a string?
  //         push
  //         asChild
  //       >
  //         <TouchableOpacity>
  //           <Text style={styles.kanji}>{kanji.kanji}</Text>
  //           {isHovered && (
  //             <View>
  //               <Text style={styles.english}>{getFirstWord(kanji.meanings)}</Text>
  //             </View>
  //           )}
  //         </TouchableOpacity>
  //       </Link>
  //     </Pressable>
  //   );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#212121",
    padding: 10,
    width: 100,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  hovered: {
    backgroundColor: "#171717",
  },
  kanji: {
    fontSize: 64,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 12,
    color: "#d9d9d9",
    textAlign: "center",
  },
});

export default AddCard;
