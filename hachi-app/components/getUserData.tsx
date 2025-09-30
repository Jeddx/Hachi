//Holds data for all decks stored by user
import * as SQLite from "expo-sqlite";
import { DeckProps } from "./Props/DeckProps";

//const db: SQLite.WebSQLDatabase = SQLite.openDatabase("flashcards.db");
//const db = SQLite.openDatabaseAsync("flashcards.db"); //It being async means that other operations can run at the same time

export const getUserData = async () => {
  const userDb = await SQLite.openDatabaseAsync("deck.db");
  //const cardDb = await SQLite.openDatabaseAsync("card.db");
  await userDb.execAsync(`
  CREATE TABLE IF NOT EXISTS deck_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    deckType TEXT NOT NULL
  );
`); //Maybe make cards and deck part of the same database?
  await userDb.execAsync(` 
  CREATE TABLE IF NOT EXISTS card_entries (
    deck_id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_id INTEGER,
    proficiency INTEGER,
    front TEXT,
    back TEXT
  );
`);

  await userDb.runAsync(
    //Creates A Deck, will change this later to be used with a create deck button
    "INSERT INTO deck_entries (id, name, deckType) VALUES (?, ?, ?)",
    [1, "Sample Deck 1", "anki"]
  );

  return userDb;
  // await deckDb.runAsync(
  //   "INSERT INTO deck_entries (name, deckType) VALUES (?, ?)",
  //   ["Sample Deck 2", "anki"]
  // );
  // let result = await deckDb.getAllAsync<DeckProps>(
  //   "SELECT * FROM kanji_entries;"
  // );

  //return result;

  // export const saveCard = (card: CardProps, callback?: () => void) => {
  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "INSERT INTO cards (deck_id, front, back) VALUES (?, ?, ?);",
  //     [card.deckId, card.front, card.back],
  //     () => callback?.(),
  //     (_, error) => {
  //       console.error("Insert error:", error);
  //       return false;
  //     }
  //   );
  // });
};
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
