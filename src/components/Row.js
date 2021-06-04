import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export const Row = ({ index, title, author }) => {
    return (
        <View
            style={[styles.row, {
                backgroundColor: index % 2 ? '#CBC3E3' : 'white',
            }]}>
            <View style={styles.edges}>
                <Text>{index}</Text>
            </View>
            <View style={styles.titleBook}>
                <Text>{title}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
            <View style={styles.edges}>
                <Text>Info</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row'
    },
    edges: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleBook: {
      flex: 8,
      flexDirection: 'column'
    },
    author: {
      color: 'gray'
    }
  });