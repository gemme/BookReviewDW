import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Star = ({rating}) => {

    const stars = [1,2,3,4,5];
    // 1 -> 5
    // rating 4
    console.log('rating', rating)
    return (
        <View
            style={styles.star}
        >
            { stars.map(v => {
                return <Icon name="star" color={ v <= rating ? 'yellow' : 'gray'  }/>
            }) }
        </View>
    );
}

const styles = StyleSheet.create({
    star:{
        flexDirection: 'row'
    }
})