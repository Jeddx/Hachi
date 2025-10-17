//Lists all the deck properties
import { CardProps } from "./CardProps";

export interface DeckProps {
  id: number;
  name: string;
  //cards: CardProps[];
  //learnCount: number;
  //reviewCount: number;
  deckType: string;
  onDelete?: (id: number) => void; //? makes it optional, not necessary to provide; (id: number) => void, takes parameter id, returns void
}
