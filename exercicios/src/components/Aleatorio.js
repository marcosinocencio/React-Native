import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({n1, n2}) => {    
    const randomNumber = Math.floor(Math.random() * n2) + n1 ;
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {randomNumber}
        </Text>
    )
}