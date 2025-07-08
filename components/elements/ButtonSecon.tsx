import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'

type Props = {
    title: string,
    paddingVertical?: number
}

export default function ButtonSecon({ title, paddingVertical = 9 }: Props) {
    return <TouchableOpacity style={[styles.root, { paddingVertical: paddingVertical }]}><Text style={styles.text}>{title}</Text></TouchableOpacity>
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: COLORS['Primary-Green-1'],
        paddingHorizontal: 12,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: COLORS['Primary-Green-1']
    }
})
