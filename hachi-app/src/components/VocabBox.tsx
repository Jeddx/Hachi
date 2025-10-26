/*
The Vocab box will be used to display the vocab when searched up. I'm hoping for a style similar to shirabe jisho
*/

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import useAddCard from "../hooks/useAddCards";
import { useSQLiteContext } from "expo-sqlite";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DeckProps } from "../types/DeckProps";
import { useEffect } from "react";

type KanjiBoxProps = { kanji: Kanji };

type Kanji = {
  id: number;
  kanji: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt: number;
};

function getFirstWord(str: string): string {
  return str.replace(/[\[\]"']/g, "").split(",")[0];
}

const VocabBox = ({ kanji }: KanjiBoxProps) => {
  const { addCard } = useAddCard();
  const [isHovered, setIsHovered] = useState(false);
  const [firstDeckId, setFirstDeckId] = useState(0);
  const appDb = useSQLiteContext();
  //Find way to add kanji to specific deck
  //SELECT * FROM decks LIMIT 1;
  //const firstDeck = appDb.getAllAsync("SELECT * FROM decks LIMIT 1") as DeckProps;
  useEffect(() => {
    (async () => {
      const deck = await appDb.getFirstAsync<DeckProps>(
        "SELECT * FROM decks ORDER BY id ASC"
      );
      if (deck) {
        setFirstDeckId(deck.id);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.separator} />
        <Pressable
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          style={
            Platform.OS === "web"
              ? ({ hovered }) => [styles.box, hovered && styles.hovered]
              : styles.box
          }
        >
          <Link
            href={{ pathname: "/Kanji/KanjiScreen", params: { id: kanji.id } }} //Maybe this needs to be changed to a string?
            push
            asChild
          >
            <TouchableOpacity style={styles.mainArea}>
              <View style={styles.row}>
                <View>
                  <Text
                    style={
                      Platform.OS === "web" ? styles.kanji : styles.kanjiMobile
                    }
                  >
                    {kanji.kanji}
                  </Text>
                  <Text style={styles.english}>
                    {getFirstWord(kanji.meanings)}
                  </Text>
                </View>
                <Text style={styles.category}>Kanji</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              addCard({ kanjiChar: kanji.kanji, deckID: firstDeckId })
            }
          >
            {/* <Image //Have a parent component that figures out if Kanji exists in a deck or not
          style={styles.image}
          source={
            isAdded 
              ? require("@/assets/images/Check.png") // when true
              : require("@/assets/images/Plus.png") // when false
          }
        /> */}

            <Image
              style={Platform.OS === "web" ? styles.image : styles.imageMobile}
              source={require("@/assets/images/Plus.png")}
            />
          </TouchableOpacity>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#2a2a2a", //
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    maxHeight: 100,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    backgroundColor: "yellow",
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  hovered: {
    backgroundColor: "#212121",
  },
  kanji: {
    fontSize: 42,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  kanjiMobile: {
    fontSize: 24,
    color: "#d9d9d9", //FFD972 //d8dc6c //d9d9d9
  },
  english: {
    fontSize: 12,
    color: "#d9d9d9",
  },
  separator: {
    //marginVertical: 5,
    height: 1,
    //width: "95%",
    //justifyContent: "center",
    backgroundColor: "#212121",
  },
  button: {
    //padding: 20,
    paddingRight: 10,
    //margin: 5,
    justifyContent: "center",
    alignItems: "center",
    //height: "100%",
    //backgroundColor: "#25aa00ff",
  },
  mainArea: {
    flex: 1,
  },
  image: {
    //resizeMode: "contain",
    aspectRatio: 1,
    height: 40,
    width: 40,
    alignSelf: "flex-end",
  },
  imageMobile: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default VocabBox;
