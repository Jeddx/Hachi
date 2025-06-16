/* 
The KanjiData component reads the kanji database and stores its information in a Kanji object
*/

import * as SQLite from "expo-sqlite";
import { useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "expo-router";

type Kanji = {
  id: number;
  kanji: string;
  on_readings: string;
  kun_readings: string;
  meanings: string;
  jlpt: number;
};

const KanjiData = (jlpt_level?: number) => {
  const [kanjiDATA, setData] = useState<Kanji[]>([]);

  const db = SQLite.useSQLiteContext();

  const loadData = async () => {
    const result = await db.getAllAsync<Kanji>("SELECT * FROM kanji_entries;"); //getAllAsync
    console.log("Rows:", result);

    if (jlpt_level != null) {
      const filteredResult = result.filter(
        (k) => Number(k.jlpt) === jlpt_level
      );
      console.log("Rows filtered:", filteredResult);
      setData(filteredResult);
    } else {
      setData(result);
      console.log("Rows Unfiltered");
    }

    try {
      const tables = await db.getAllAsync<any>(
        "SELECT name FROM sqlite_master WHERE type='table';"
      );
      console.log("Existing tables:", tables);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [jlpt_level])
  );

  return kanjiDATA;
};

export default KanjiData;
