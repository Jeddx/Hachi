import React from "react";
import Deck from "./Deck";
import { View } from "./Themed";

const DeckList = () => {
  return (
    <View>
      <Deck name={"Sample Deck"} learn={1} review={1} />
    </View>
  );
};

export default DeckList;
