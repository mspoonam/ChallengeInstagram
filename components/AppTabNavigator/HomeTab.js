//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base'

// create a component
class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name ="ios-home" style ={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
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
export default HomeTab;
