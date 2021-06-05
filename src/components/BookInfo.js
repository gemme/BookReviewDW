import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Star } from 'components/Star'; 
import { IMG_URL } from '../constants';

export const BookInfo = ({ route, navigation }) => {
    const { title, author, image, rating } = route.params.book;
    /* route.params.book.title;
    route.params.book.author; */

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri: `${IMG_URL}${image}`
                    }}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                />
            <View style={styles.titleBook}>
                <Text>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                <Star rating={rating} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('reviews');
                    }}
                    style={styles.button}
                >
                    <Text>Book Review</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
    },
    titleBook: {
        flex: 8,
        flexDirection: 'column'
    },
    author: {
        color: 'gray'
    },
    button: {
        borderWidth: .5,
        borderColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        margin: 20,
        width: 110
    }
});
