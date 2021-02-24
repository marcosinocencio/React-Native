import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#235'/>
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',      
        backgroundColor: '#000'
    }
})