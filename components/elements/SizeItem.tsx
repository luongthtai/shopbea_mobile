import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

type Props = {
    isActive: boolean,
    size: string
}

export default function SizeItem({ isActive = false, size }: Props) {
    return <View style={[styles.root, { borderColor: isActive ? '#1CB060' : COLORS["Light-Grey-L-Grey-3"], backgroundColor: isActive ? COLORS['Primary-Green-2'] : COLORS["White-White-1"] }]}><Text style={[styles.name, { color: isActive ? COLORS['Primary-Green-1'] : COLORS['Grey-Grey-1'] }]}>{size}</Text></View>
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 21,
        paddingVertical: 11,
        borderWidth: 1,
        borderRadius: 100,
    },
    name: {
        textTransform: "uppercase",
        fontWeight: 700
    }
})