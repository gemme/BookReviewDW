import React from 'react';
import {
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const About = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>
                About Book Review
            </Text>
            <Icon
                name="book-open"
                color='black'
                size={100}
                style={styles.icon}
                />
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id velit a enim pellentesque dapibus id ut ipsum. Sed eget commodo lorem. Proin sit amet luctus sem, sollicitudin vehicula ex. Pellentesque augue nulla, molestie sed nunc ac, rhoncus faucibus nisi. In vulputate iaculis velit iaculis varius. Fusce et tortor nibh. Suspendisse in neque eleifend, lobortis dui vitae, auctor ligula. Nullam commodo diam mi, nec placerat enim volutpat a. Cras facilisis magna lacus, malesuada ornare dolor molestie id. In dignissim nunc ultrices enim convallis, id lobortis est molestie. Suspendisse finibus, massa gravida fringilla volutpat, felis tortor ultrices risus, eget placerat nisi odio vel est. Ut luctus dapibus ipsum non luctus. Proin sit amet urna lectus. Aenean scelerisque porta efficitur. Aliquam erat volutpat. Pellentesque dignissim facilisis nunc ac viverra.
            </Text>
            <Text style={styles.text}>
                Curabitur aliquet id est quis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras rhoncus lobortis fermentum. Etiam vel arcu non ex laoreet viverra vitae id risus. Fusce rutrum consequat consequat. Morbi commodo sem non accumsan sollicitudin. Donec luctus metus at libero laoreet tincidunt. Morbi est neque, sollicitudin quis facilisis sit amet, gravida eget ipsum. Praesent eleifend aliquam nunc at bibendum. Suspendisse ultrices placerat odio consequat facilisis. Pellentesque fermentum est placerat, aliquam dolor eget, volutpat risus. Sed eget iaculis risus. Sed ut ultrices sapien.
            </Text>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 40,
    },
    header: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    icon:{
        marginVertical: 20,
        alignSelf: 'center'
    },
    text:{
        fontSize: 14,
        color: '#444',
        marginTop: 20
    }
})