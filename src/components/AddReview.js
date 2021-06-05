import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const AddReview = ({ navigation }) => {
  return (
    <SafeAreaView
      style={styles.root}
      >
      <TouchableOpacity
        onPress={
          () => navigation.goBack()
        }
        style={styles.button}
      >
        <Icon name="close" size={30} color='black' />
      </TouchableOpacity>
      <Text style={styles.addReview}>I am modal</Text>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  button: {
    paddingHorizontal: 10
  },
  addReview:{
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20
  }
})
