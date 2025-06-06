import { StyleSheet, FlatList } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import ImageBG from "@/components/imageBG";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";

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
    <View style={styles.container}>
      <Text style={styles.title}>Dictionary</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SearchBar></SearchBar>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <SearchResult {...item}></SearchResult>}
      ></FlatList>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
