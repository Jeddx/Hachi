import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

type searchProps = { id: string; title: string };

export default function SearchResult(item: searchProps) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 100,
  },
});
