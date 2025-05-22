import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


type KanjiBoxProps = {kanji: string};

const KanjiBox = ({kanji}: KanjiBoxProps) => (

    <TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.kanji}>{kanji}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#808080',
    padding: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
  kanji: {
    fontSize: 64,
  },
});

export default KanjiBox;