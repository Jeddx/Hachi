import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ExampleFlatList from "@/components/ExampleFlatlist";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Study</Text> */}
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
