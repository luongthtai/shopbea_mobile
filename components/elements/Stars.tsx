import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

export default function Stars() {
    return (
        <View style={style.root}>
            <Ionicons name='star' color={COLORS["Support-Color-Orange-1"]} size={14} />
            <Ionicons name='star' color={COLORS["Support-Color-Orange-1"]} size={14} />
            <Ionicons name='star' color={COLORS["Support-Color-Orange-1"]} size={14} />
            <Ionicons name='star' color={COLORS["Support-Color-Orange-1"]} size={14} />
            <Ionicons name='star' color={COLORS["Support-Color-Orange-1"]} size={14} />
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flexDirection: "row",
        gap: 3,
        alignItems: "center"
    }
})
