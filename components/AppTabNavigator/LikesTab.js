//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base'

// create a component
class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name ="ios-leaf" style ={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hey Amit </Text>
                <Text>You are looking at my Favourite Likes Tab </Text>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
    },
});

//make this component available to the app
export default LikesTab;
