
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    Image
} from 'react-native';
import { MyHeader } from 'components/MyHeader';
import { Row } from 'components/Row';
import { API_URL } from '../constants';
import BookIcon from 'assets/book.png';

async function fetchData() {
    try {
        const response = await fetch(`${API_URL}/Books`);
        const books = await response.json();
        return books;
    } catch (error) {
        console.log(error);
    }
}

export const BookList = (props) => {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        /* fetch(`${API_URL}/Books`)
          .then(response => response.json())
          .then(v => setBooks(v))
          .catch(error => console.log(error)) */
        const asyncFetchData = async () => {
            const data = await fetchData();
            setBooks(data);
        };
        asyncFetchData();
    }, []);
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={
                styles.image
            }>
                <Image
                    source={BookIcon}
                    style={{
                        height: 50,
                        width: 50
                    }} />
            </View>
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
                renderItem={({ item, index }) => {
                    return (
                        <Row
                            index={index + 1}
                            title={item.title}
                            author={item.author}
                            image={item.image}
                            rating={item.rating}
                            id={item.id}
                            navigation={props.navigation}
                        />
                    );
                }}
                keyExtractor={v => v.title}
                refreshing={refreshing}
                onRefresh={() => {
                    const asyncFetchData = async () => {
                        setRefreshing(true);
                        const data = await fetchData();
                        setBooks(data);
                       setRefreshing(false); 
                    };
                    asyncFetchData();
                }}
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
    },
    image: {
        alignItems: 'center',
        marginTop: 30,
    }
});
