/* 
The KanjiData component reads the kanji database and stores its information in a Kanji object
*/

import * as SQLite from "expo-sqlite";
import { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import { KanjiProps } from "./Props/KanjiProps";

export const getKanjiData = async () => {
  //const [kanjiData, setData] = useState<KanjiProps[]>([]);
  //const db = SQLite.useSQLiteContext();

  const kanjiDb = await SQLite.openDatabaseAsync("decks.db");
  const kanjiData = async (jlpt_level?: number) => {
    let result = await kanjiDb.getAllAsync<KanjiProps>(
      "SELECT * FROM kanji_entries;"
    );
    result = result.map((item, index) => ({ ...item, id: index }));

    if (jlpt_level != null) {
      result = result.filter((k) => Number(k.jlpt) === jlpt_level);
    }

    return kanjiDb;
  };

  return { kanjiData };
};
