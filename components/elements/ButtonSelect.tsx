import React from 'react'
import { StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'

type Props = {
    isActive?: boolean
}

export default function ButtonSelect({ isActive }: Props) {
    return (
        <View style={styles.root}>
            {isActive && <View style={styles.dot}></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: 24,
        height: 24,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS['Primary-Green-1'],
        padding: 5
    },
    dot: {
        height: "100%",
        aspectRatio: "1/1",
        backgroundColor: COLORS['Primary-Green-1'],
        borderRadius: 100
    }
})
