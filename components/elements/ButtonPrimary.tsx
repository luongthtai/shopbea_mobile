import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'

type Props = {
    title: string,
    width?: '50%' | "20%" | "100%" | number,
    onPress?: () => void,
    disabled?: boolean
}

export default function ButtonPrimary({ title, width, onPress, disabled }: Props) {
    return <Pressable disabled={disabled} onPress={onPress} style={[styles.root, { width: width, backgroundColor: disabled ? COLORS['Primary-Green-2'] : COLORS['Primary-Green-1'] }]} >
        {
            disabled ? <ActivityIndicator size="small" color={COLORS['Primary-Green-1']} /> : <Text style={styles.title}>{title}</Text>
        }
    </Pressable>
}

const styles = StyleSheet.create({
    root: {
        borderRadius: 100,
        paddingHorizontal: 53,
        paddingVertical: 15,
        alignItems: "center"
    },
    title: {
        color: COLORS["White-White-1"],
        fontWeight: 700
    }
})
