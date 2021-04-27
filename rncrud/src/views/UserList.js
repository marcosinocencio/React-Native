import React, { useContext } from 'react'
import { View, FlatList, Alert, StyleSheet } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const {state, dispatch } = useContext(UsersContext)
    

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            },
        ])

    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={25} color='orange' />} />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={25} color='red' />} />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar rounded size='medium' source={{ uri: user.avatarUrl }} />
                <ListItem.Content style={styles.container}>
                    <View style={styles.text}>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </View>
                    <View style={styles.buttons}>
                        {getActions(user)}
                    </View>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'space-between'
    },
    text: {
        flex: 3
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
    }
})