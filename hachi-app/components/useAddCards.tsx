//Custom hook that successfully adds the same kanji to a deck

import { useState, useEffect } from "react";
import { DeckProps } from "./Props/DeckProps";
import KanjiData from "./KanjiData";
import { getUserData } from "./getUserData";
import { CardProps } from "./Props/CardProps";

type AddCardProps = { kanjiID: number; deckID: number };

export default function useAddCard() {
  //const [cards, setCards] = useState<DeckProps[]>([]); //useState([])
  const [deckDb, setDeckDb] = useState<DeckProps[]>([]);
  const addCard = async ({ kanjiID, deckID }: AddCardProps) => {
    //setCards([...cards, { kanjiID, deckID }]);
    //const kanji = KanjiData()[kanjiID]; TODO Need to refactor kanjiData to be a custom hook
    const userDb = await getUserData();
    console.log("userDb value:", userDb);
    console.log("userDb type:", typeof userDb);
    console.log(
      "userDb keys:",
      userDb ? Object.keys(userDb) : "not initialized"
    );
    console.log(
      "Has runAsync:",
      userDb && typeof userDb.runAsync === "function"
    );
    if (!userDb || typeof userDb.runAsync !== "function") {
      console.error("❌ userDb not initialized properly:", userDb);
      return;
    }

    const card: CardProps = {
      deck_id: 1,
      card_id: 1,
      proficiency: 1,
      front: "雨",
      back: "rain",
    };

    try {
      const result = await userDb.runAsync(
        "INSERT INTO card_entries (deck_id, card_id, proficiency, front, back) VALUES (?, ?, ?, ?, ?)",
        [card.deck_id, card.card_id, card.proficiency, card.front, card.back]
      );
      console.log("✅ Card inserted:", result.lastInsertRowId, result.changes);
    } catch (err) {
      console.error("❌ SQLite insert failed:", (err as Error).message);
    }

    //Add the Flashcard to the deck with the given ID
    //const db = await SQLite.openDatabaseAsync("deck_entries");
    // await userDb.runAsync(
    //   //const result =
    //   //Creates A Deck, will change this later to be used with a create deck button
    //   "INSERT INTO deck_entries (id, name, deckType) VALUES (?, ?, ?)",
    //   [2, "Sample Deck 2", "anki"]
    // );
  };

  return { addCard };
}
