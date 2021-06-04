/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MyHeader } from 'components/MyHeader';
import { Row } from 'components/Row';
import { API_URL } from './src/constants';


const App = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  useEffect(() => {
    /* fetch(`${API_URL}/Books`)
      .then(response => response.json())
      .then(v => setBooks(v))
      .catch(error => console.log(error)) */

      async function fetchData() {
        try {
          const response = await fetch(`${API_URL}/Books`);
          const books = await response.json();
          setBooks(books);
        }catch(error) {
          console.log(error);
        }
      }
      fetchData();
    
  }, []);
  return (
    <SafeAreaView style={[styles.container]}>
      <MyHeader title={'Book Review'} />
      <TextInput
        style={styles.txtInput}
        placeholder='Search'
        onChangeText={(text) => {
          setSearch(text);
        }}
      ></TextInput>
      <Text>{search}</Text>
      <FlatList
        data={
          books
          .filter((v) => {
            return v.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1;
          })}
        renderItem={({item, index}) => {
          return (
            <Row index={index + 1} title={item.title} author={item.author} />
          );
        } }
        keyExtractor={v => v.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtInput: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5'
  }
});

export default App;
