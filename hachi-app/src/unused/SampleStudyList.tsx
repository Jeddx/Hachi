import { CardProps } from "../types/CardProps";
import { DeckProps } from "../types/DeckProps";

const SampleStudyList: DeckProps = {
  id: 1,
  name: "Sample Deck",
  cards: [
    {
      id: 1,
      proficiency: 1,
      japanese: "蜂",
      english: "Bee",
    },
    {
      id: 2,
      proficiency: 1,
      japanese: "優",
      english: "Superiority, tenderness",
    },
    {
      id: 4,
      proficiency: 1,
      japanese: "八",
      english: "Eight",
    },
    {
      id: 3,
      proficiency: 1,
      japanese: "死",
      english: "Death",
    },
  ],
  learnCount: 3,
  reviewCount: 0,
  deckType: "Click",
};

export default SampleStudyList;
