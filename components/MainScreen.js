//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



import  HomeTab  from './AppTabNavigator/HomeTab'
import  LikesTab  from './AppTabNavigator/LikesTab'
import  SearchTab  from './AppTabNavigator/SearchTab'
import  AppMediaTab  from './AppTabNavigator/AppMediaTab'
import  ProfileTab  from './AppTabNavigator/ProfileTab'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'


// create a component
class MainScreen extends Component {
    static navigationOptions ={
        headerLeft:<Icon name="ios-camera-outline" style={{paddingLeft:10}}/>,
        title:"Challenge Instagram",
        headerRight:<Icon name="ios-send-outline" style={{paddingRight:10}}/>
    }
    render() {
        return (
           <AppTabNavigator/>
        );
    }
}


const AppTabNavigator = TabNavigator({
    HomeTab :  {
         screen :HomeTab
    },
    AppMediaTab :  {
        screen :AppMediaTab
    },
    LikesTab :  {
        screen :LikesTab
    },
    ProfileTab :  {
        screen :ProfileTab
    },
    SearchTab :  {
        screen :SearchTab
    }

})



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


//make this component available to the app
export default MainScreen;
