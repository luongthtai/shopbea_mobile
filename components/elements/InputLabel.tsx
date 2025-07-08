import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    title: string
}

export default function InputLabel({ title }: Props) {
    return <Text style={styles.root}>{title}</Text>
}

const styles = StyleSheet.create({
    root: {
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 10
    }
})
