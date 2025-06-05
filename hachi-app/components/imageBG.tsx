import React from "react";
import { Image, StyleSheet } from "react-native";
//const image = "@/assets/images/honey-bee.jpg";

export default function ImageBG() {
  return <Image size={5} source={require("@/assets/images/honey-bee.jpg")} />;
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
