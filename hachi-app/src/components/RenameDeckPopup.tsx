import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";

type RenameDeckProps = {
  visibility: boolean;
  onClose: () => void;
  onSubmit: (newName: string) => void;
  oldDeckName: string;
};

const RenameDeckPopup = (props: RenameDeckProps) => {
  const [newName, setNewName] = useState("");

  // const refreshDeckList = async () => {
  //   // ...load decks from DB and setDecks(...)
  //   const appDb = useSQLiteContext();
  //   const result = await appDb.runAsync("");
  // };
  //Ok we want to run refreshDeckList inside of DeckList I think so we should put the modal in DeckList as well

  return (
    <Modal
      transparent={true}
      visible={props.visibility}
      animationType="slide"
      onRequestClose={() => {
        props.visibility = false;
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Rename Deck</Text>
          <TextInput
            style={styles.textInput}
            placeholder={props.oldDeckName}
            value={newName}
            onChangeText={setNewName}
          />
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.button} onPress={props.onClose}>
              <Text style={styles.modalText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.modalText}
                onPress={() => {
                  props.onSubmit(newName);
                  setNewName("");
                }}
              >
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    borderRadius: 2,
    padding: 8,
    margin: 3,
    backgroundColor: "#00b7ffff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowView: {
    flexDirection: "row",
  },
});

export default RenameDeckPopup;
