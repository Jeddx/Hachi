import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


type KanjiBoxProps = {kanji: string};

const KanjiBox = ({kanji}: KanjiBoxProps) => {
  const onPress = () => {
    <Link href="/two" push asChild />
  };

  return (
    <TouchableOpacity onPress={onPress}>
    <Link href="/KanjiInfo" push asChild>
      <View style={styles.item}>
        <Text style={styles.kanji}>{kanji}</Text>
        
      </View>
    </Link>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#212121',
    padding: 10,
    //borderColor: '#040F0F',
    //borderWidth: 1,
  },
  kanji: {
    fontSize: 64,
    color: '#d9d9d9' //FFD972 //d8dc6c //d9d9d9
  },
});

export default KanjiBox;