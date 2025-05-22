import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import ImageBG from '@/components/imageBG';
import KanjiList from '@/components/KanjiList';
import TouchableExample from '@/components/TouchableExample';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kanji</Text>
      <KanjiList /> 
      <TouchableExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF00',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
