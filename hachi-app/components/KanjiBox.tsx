import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



type KanjiBoxProps = {kanji: string};

const KanjiBox = ({kanji}: KanjiBoxProps) => {
  const onPress = () => {
    //navigation.navigate('Profile', {name: 'Jane'});
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