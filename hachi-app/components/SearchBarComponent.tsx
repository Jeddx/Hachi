import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import KanjiData from "./KanjiData";
import VocabBox from "./Dictionary/VocabBox";

export default function SearchBarComponent() {
  // State to manage the filtered data and search input
  const [data, setData] = React.useState(KanjiData());

  // State to manage the search input value
  const [searchValue, setSearchValue] = React.useState("");

  // Ref to hold the original data
  const arrayholder = React.useRef(KanjiData());

  const searchFunction = (text = "") => {
    const updatedData = arrayholder.current.filter((item) => {
      const kanji = item.kanji?.toUpperCase() || "";
      const meaning = item.meanings?.toUpperCase() || "";
      const onyomi = item.on_readings?.toUpperCase() || "";
      const kunyomi = item.kun_readings?.toUpperCase() || "";
      const textData = text.toUpperCase(); // Convert search text to uppercase
      return (
        kanji.includes(textData) ||
        meaning.includes(textData) ||
        onyomi.includes(textData) ||
        kunyomi.includes(textData)
      ); // Check if item title includes the search text
    });
    setData(updatedData); // Update the filtered data
    setSearchValue(text); // Update the search value
  };

  return (
    <View>
      <SearchBar
        platform="default"
        placeholder="Search"
        style={styles.input}
        onChangeText={searchFunction}
        value={searchValue}
        autoCorrect={false}
      />
      <FlatList
        //style={styles.list}
        numColumns={1}
        scrollEnabled={false}
        data={data} //KanjiData().slice(0, 200)
        contentContainerStyle={{ alignItems: "stretch" }}
        renderItem={({ item }) => <VocabBox kanji={item} />}
        keyExtractor={(item) => item.kanji}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    width: "80%",
    justifyContent: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 15,
    backgroundColor: "#5e5e5e",
  },
});
