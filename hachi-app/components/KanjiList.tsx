import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '一',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '二',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '三',
  },
  {
    id: 'BEESSSSSS',
    title: '蜂',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const KanjiList = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList numColumns={10}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#808080',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 1,
    borderColor: '#000000',
    borderRadius: 4,
    borderWidth: 3,
  },
  title: {
    fontSize: 64,
    
  },
});

export default KanjiList;