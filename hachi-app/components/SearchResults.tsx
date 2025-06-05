import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

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

export default function SearchResults({ res }: { res: any }) {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.item}>{item.title}</Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 100,
  },
});
