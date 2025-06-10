/* 
The KanjiData component reads the kanji database and stores its information in a Kanji object
*/

import * as SQLite from "expo-sqlite";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";

type Kanji = {
  id: number;
  kanji: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt: number;
};
//examples: string;
//updated_at: string;

const KanjiData = () => {
  // const [id, setId] = useState("");
  // const [character, setCharacter] = useState("");
  // const [meanings, setmeanings] = useState("");
  const [kanjiDATA, setData] = useState<Kanji[]>([]);

  const db = SQLite.useSQLiteContext();

  const loadData = async () => {
    const result = await db.getAllAsync<Kanji>("SELECT * FROM kanji_entries;"); //getAllAsync
    setData(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return kanjiDATA;
};

export default KanjiData;
