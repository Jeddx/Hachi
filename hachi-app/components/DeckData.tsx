//Holds data for all decks stored by user
import * as SQLite from "expo-sqlite";

//const db: SQLite.WebSQLDatabase = SQLite.openDatabase("flashcards.db");
//const db = SQLite.openDatabaseAsync("flashcards.db"); //It being async means that other operations can run at the same time

const DeckData = () => {
  //export const saveCard = (card: CardProps, callback?: () => void) => {
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
export default DeckData;
