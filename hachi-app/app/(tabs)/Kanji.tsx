/*
Page will store a grid of Kanji 
Would like a feature to sort them by: jlpt lvl, rarity, user proficiency
A search feature would be nice as well
The Kanji boxes will be difference colors depending on user proficiency
*/

import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import KanjiList from '@/components/KanjiList';
import { Link } from "expo-router";
import { Button } from 'react-native';

export default function KanjiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kanji</Text>
      <Link href="/two" push asChild>
        <Button title="Push to second page" />
      </Link>
      <KanjiList /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d9d9d9'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});