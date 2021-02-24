import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{ 
        flexGrow: 1,       
        width: 100,      
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#294',
        height: 300,        
    },
    V1: {
        backgroundColor: '#543',
        flexGrow: 9
    },
    V2: {
        backgroundColor: '#754',
        flexGrow: 1
    },
})