import {
  StyleSheet,
  Pressable,
  Text,
  Modal,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { DeckProps } from "../types/DeckProps";

type CreateDeckProps = {
  setDecks: React.Dispatch<React.SetStateAction<DeckProps[]>>;
};

export const CreateDeckButton: React.FC<CreateDeckProps> = ({ setDecks }) => {
  const appDb = useSQLiteContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [deckTitle, setDeckTitle] = useState("");
  //const [deck, setDeck] = useState<DeckProps | null>(null);

  return (
    //Needs to create decks if it does not exist
    <SafeAreaProvider>
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create Deck Modal</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={setDeckTitle}
                value={deckTitle}
                placeholder="Insert Deck Name"
              />
              <View style={styles.rowView}>
                <TouchableOpacity
                  style={[styles.baseButton, { backgroundColor: "green" }]}
                  onPress={async () => {
                    setModalVisible(!modalVisible);
                    //await appDb.execAsync("DROP TABLE IF EXISTS decks;"); deletes decks table
                    appDb.execAsync(`
                    CREATE TABLE IF NOT EXISTS decks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    deckType TEXT NOT NULL
                    );
                  `);
                    const result = await appDb.runAsync(
                      //Insert type later
                      "INSERT INTO decks (name, deckType) VALUES (?, ?)",
                      [deckTitle, "anki"]
                    );
                    const newDeck = (await appDb.getFirstAsync(
                      "SELECT * FROM decks WHERE id = ?",
                      [result.lastInsertRowId]
                    )) as DeckProps;
                    if (newDeck) {
                      newDeck.onAdd?.(newDeck.id);
                      setDecks((prevDecks) => [...prevDecks, newDeck]);
                      console.log("Added Sample Deck");
                    }
                  }}
                >
                  <Text style={styles.infoText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.baseButton, { backgroundColor: "red" }]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.infoText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={async () => {
            setModalVisible(!modalVisible);
            //Update Deck list:
          }}
          style={[styles.baseButton, { backgroundColor: "#3025ccff" }]}
          // style={({ pressed }) => [
          //   {
          //     backgroundColor: pressed ? "#3025ccff" : "#4032ffff",
          //   },
          //   styles.baseButton,
          // ]}
        >
          <Text style={styles.infoText}>Create Deck</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 8,
    padding: 10,
    margin: 4,
  },
  rowView: {
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "#d9d9d9",
  },
});
