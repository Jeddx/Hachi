import React from "react";
import Deck from "./Deck";
import { DeckProps } from "./Props/DeckProps";
import { View } from "./Themed";
import SampleStudyList from "./Example/SampleStudyList";

//Will find all decks and list them their info
const DeckList = () => {
  return (
    <View>
      <Deck {...SampleStudyList}/>
    </View>
  );
};

export default DeckList;
