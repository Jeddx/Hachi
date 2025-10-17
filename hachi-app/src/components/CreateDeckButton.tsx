import {
  StyleSheet,
  Pressable,
  Text,
  Modal,
  Alert,
  View,
  TextInput,
} from "react-native";
import { getUserData } from "../services/getUserData";
import { useSQLiteContext } from "expo-sqlite";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { green } from "react-native-reanimated/lib/typescript/Colors";

export const CreateDeckButton = () => {
  const appDb = useSQLiteContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [deckTitle, setDeckTitle] = useState("");

  return (
    //Needs to create deck_entries if it does not exist
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
              <Pressable
                style={[styles.baseButton, { backgroundColor: "green" }]}
                onPress={async () => {
                  setModalVisible(!modalVisible);
                  //await appDb.execAsync("DROP TABLE IF EXISTS deck_entries;"); deletes deck_entries table
                  appDb.execAsync(`
                    CREATE TABLE IF NOT EXISTS decks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    deckType TEXT NOT NULL
                    );
                  `);
                  await appDb.runAsync(
                    //Creates A Deck, will change this later to be used with a create deck button
                    "INSERT INTO decks (name, deckType) VALUES (?, ?)",
                    [deckTitle, "anki"]
                  );
                  console.log("Added Sample Deck");
                }}
              >
                <Text>Create</Text>
              </Pressable>
              <Pressable
                style={[styles.baseButton, { backgroundColor: "red" }]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#3025ccff" : "#4032ffff",
            },
            styles.baseButton,
          ]}
        >
          <Text>Create Deck</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 8,
    padding: 6,
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
});
