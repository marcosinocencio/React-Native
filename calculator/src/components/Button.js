import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2

    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3

    },
})

export default props => {
    const stylesButtton = [styles.button]
    if(props.double) stylesButtton.push(styles.buttonDouble)
    if(props.triple) stylesButtton.push(styles.buttonTriple)
    if(props.operation) stylesButtton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButtton}>{props.label}</Text>
        </TouchableHighlight>
    )
}