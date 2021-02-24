import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#235'/>
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around', 
        backgroundColor: '#000'
    }
})