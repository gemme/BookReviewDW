/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { BookList } from 'components/BookList';
import { BookInfo } from 'components/BookInfo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'Book Info',
          headerStyle: {
            backgroundColor: 'black',
            color: 'white'
          },
          headerTintColor: 'white',
          headerTitleColor: {
            color: 'white'
          }
        }}>
        <Stack.Screen name="Home" component={BookList} />
        <Stack.Screen name="Info" component={BookInfo} />
      </Stack.Navigator>
    </NavigationContainer>);
};

export default App;
