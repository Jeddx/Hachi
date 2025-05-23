import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


type KanjiBoxProps = {kanji: string};

const KanjiBox = ({kanji}: KanjiBoxProps) => {
  const onPress = () => {
    console.log('Pressed:', kanji);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.kanji}>{kanji}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFD972',
    padding: 10,
    borderColor: '#040F0F',
    borderWidth: 1,
  },
  kanji: {
    fontSize: 64,
  },
});

export default KanjiBox;