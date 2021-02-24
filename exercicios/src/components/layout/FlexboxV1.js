import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#235'/>
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-around', 
        backgroundColor: '#000'
    }
})