import { StyleSheet, FlatList, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import SearchBarComponent from "@/components/SearchBarComponent";
import SearchResult from "@/components/SearchResult";
import KanjiData from "@/components/KanjiData";
import VocabBox from "@/components/Dictionary/VocabBox";

export default function TabOneScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "一",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "二",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "三",
    },
    {
      id: "BEESSSSSS",
      title: "蜂",
    },
  ];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* <Text style={styles.title}>Dictionary</Text> */}
      <SearchBarComponent />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <SearchResult {...item}></SearchResult>}
      /> */}
      <FlatList
        //style={styles.list}
        numColumns={1}
        scrollEnabled={false}
        data={KanjiData().slice(0, 200)}
        contentContainerStyle={{ alignItems: "stretch" }}
        renderItem={({ item }) => (
          <VocabBox kanji={item.kanji} english={item.meanings} id={item.id} />
        )}
        keyExtractor={(item) => item.kanji}
      />
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
});
