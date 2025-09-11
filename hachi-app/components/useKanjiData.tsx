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

function useKanjiData(jlpt_level?: number) {
  const [kanjiData, setData] = useState<Kanji[]>([]);
  const [loading, setLoading] = useState(true);

  const db = SQLite.useSQLiteContext();

  const loadData = async () => {
    let result = await db.getAllAsync<Kanji>("SELECT * FROM kanji_entries;"); //getAllAsync SELECT kanji, meanings FROM Kanji WHERE jlpt = 5;
    result = result.map((item, index) => ({ ...item, id: index }));
    setLoading(false);
    //console.log("Rows:", result);

    if (jlpt_level != null) {
      const filteredResult = result.filter(
        (k) => Number(k.jlpt) === jlpt_level
      );
      //console.log("Rows filtered:", filteredResult);
      setData(filteredResult);
    } else {
      setData(result);
      //console.log("Rows Unfiltered");
    }

    try {
      const tables = await db.getAllAsync<any>(
        "SELECT name FROM sqlite_master WHERE type='table';"
      );
      //console.log("Existing tables:", tables);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [jlpt_level])
  );

  return { kanjiData, loading };
}

export default useKanjiData;
