import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import KanjiData from "@/components/KanjiData";
import VocabBox from "@/components/Dictionary/VocabBox";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
//Changing this from the ios one makes it go bonkers so cant remove cancel button

export default function TabOneScreen() {
  // State to manage the filtered data and search input
  const [kanjiData, setKanjiData] = React.useState(KanjiData());

  // State to manage the search input value
  const [searchValue, setSearchValue] = React.useState("");

  // Ref to hold the original data
  const arrayholder = KanjiData();
  console.log("Array holder", arrayholder);

  const searchFunction = (text = "") => {
    const updatedData = arrayholder.filter((item) => {
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
    setKanjiData(updatedData.slice(0, 100)); // Update the filtered data
    setSearchValue(text); // Update the search value
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* <Text style={styles.title}>Dictionary</Text> */}
      <SearchBar
        platform="default"
        placeholder="Search"
        style={styles.input}
        onChangeText={searchFunction}
        value={searchValue}
        autoCorrect={false}
        showCancel={false}
      />
      <FlatList
        //style={styles.list}
        numColumns={1}
        scrollEnabled={false}
        data={kanjiData}
        contentContainerStyle={{ alignItems: "stretch" }}
        renderItem={({ item }) => <VocabBox kanji={item} />}
        keyExtractor={(item) => item.kanji}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <SearchResult {...item}></SearchResult>}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
  },
  contentContainer: {
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d9d9d9",
  },
  separator: {
    marginBottom: 5,
    height: 1,
    width: "95%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#212121",
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
