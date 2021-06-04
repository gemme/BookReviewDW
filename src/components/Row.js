import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { IMG_URL } from '../constants';

export const Row = ({ index, title, author, image }) => {
    const [info, showInfo] = useState(false);

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
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        showInfo(v => !v);
                    }}
                >
                    <View style={styles.edges}>
                        <Text>Info</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {info && (
                <View>
                    <Text>Book Info</Text>
                </View>)
            }
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
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
    }
});