import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/stackParams'

type Props = {
    name: string,
}

export default function NavbarItem({ name, }: Props) {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    // const onNavigateToScreen = () => navigation.navigate(path)

    return (
        <TouchableOpacity style={styles.root}>
            <Text numberOfLines={1} style={styles.screen}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        paddingVertical: 17,
        paddingHorizontal: 28,
        marginBottom: 33
    },
    screen: {

    }
})