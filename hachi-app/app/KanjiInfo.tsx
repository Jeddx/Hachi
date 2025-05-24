import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function KanjiInfoScreen() {
  return (
    <View>
      <Text style={styles.title}>Kanji</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D3A3A',
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