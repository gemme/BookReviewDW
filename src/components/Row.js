import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { IMG_URL } from '../constants';
import { Star } from 'components/Star';

export const Row = ({ index, title, author, image, rating, navigation }) => {

    return (
        <View>
            <View
                style={[styles.row, {
                    backgroundColor: index % 2 ? '#CBC3E3' : 'white',
                }]}>
                <View style={styles.edges}>
                    <Image
                        source={{
                            uri: `${IMG_URL}${image}`
                        }}
                        style={{
                            width: 50,
                            height: 50
                        }}
                        />
                </View>
                <View style={styles.titleBook}>
                    <Text>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                    <Star rating={rating}/>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Info', {
                            book: { title, author, image, rating }
                        });
                    }}
                >
                    <View style={styles.edges}>
                        <Text>Info</Text>
                    </View>
                </TouchableOpacity>
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
        margin: 20
    }
});