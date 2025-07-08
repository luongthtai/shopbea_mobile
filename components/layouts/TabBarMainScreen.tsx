import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import NavbarItem from '../elements/NavbarItem'

export default function TabBarMainScreen(props: BottomTabBarProps) {
    const { state, descriptors, navigation } = props
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                state.routes.map(router => <NavbarItem key={router.key} name={router.name} />)
            }
        </View>
    )
}