import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../constants';


const addReviewToServer = (data) => {
  fetch(`${API_URL}/Reviews`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type m
  })
};

export const AddReview = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const { bookId } = route.params;
  return (
    <SafeAreaView
      style={styles.root}
    >
      <KeyboardAvoidingView>
        <TouchableOpacity
          onPress={
            () => navigation.goBack()
          }
          style={styles.button}
        >
          <Icon name="close" size={30} color='black' />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add a review</Text>
        <TextInput
          style={styles.input}
          placeholder={"Name (optional)"}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.rating}>Your rating:</Text>
        <View
          style={styles.stars}
        >
          {
            [1,2,3,4,5].map((star) => {
              return (
                <TouchableOpacity
                  style={styles.starButton}
                  onPress={() => {
                    // 4 
                    setRating(star);
                  }}
                >
                  <Icon name='star' size={50} color={rating >= star ?'yellow' : "#CCCC"}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <TextInput
          style={[styles.input, {
            height: 100
          }]}
          placeholder={'Review'}
          value={review}
          onChangeText={setReview}
          multiline={true}
          numberOfLines={5}
        />
        <Button title='Submit Review' onPress={() => {
            addReviewToServer({
              userName: name || 'anounymous',
              rating: rating,
              date: new Date(),
              description: review,
              bookId: bookId
            })
        }}/>
      </KeyboardAvoidingView>
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
  addReview: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    margin: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80
  },
  starButton: {
    padding: 5
  }
})
