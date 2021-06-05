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
import { AddReview } from 'components/AddReview';
import { About } from 'components/About';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';


const RootNavigator = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      title: 'Book Info',
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: 'white',
      headerTitleColor: {
        color: 'white'
      }
    }}>
    <Stack.Screen name="Home" component={BookList} />
    <Stack.Screen name="Info" component={BookInfo} />
  </Stack.Navigator>);
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            /* const iconName = {
              'Home': 'home',
              'About': 'info-circle',
            }[route.name]; */

            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'About') {
              iconName = 'info-circle';
            }

            return <Icon name={iconName} size={23} color={color} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: 'lightgray',
          activeTintColor: 'black',
          inactiveTintColor: 'lightgray',
        }}>
        <Tab.Screen name="Home" component={AppNavigator} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator mode="modal" headerMode='none'>
        <RootNavigator.Screen
          name='root'
          component={TabNavigator}
          options={{ headerShown: false }}/>
        <RootNavigator.Screen name='reviews' component={AddReview} />
      </RootNavigator.Navigator>
    </NavigationContainer>);
};

export default App;
