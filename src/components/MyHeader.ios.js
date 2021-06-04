import React from 'react';
import {Text} from 'react-native';

export const MyHeader = ({title}) => {
    return (
    <Text
      style={
        {
          textAlign: 'center',
          fontSize: 40,
          color: 'lightblue',
          padding: 50,
          fontWeight: '300',
        }
      }>
      {title + 'iOS'}
    </Text>);
  }