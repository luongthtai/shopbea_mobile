import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

type Props = {
    title: string,
    isActive: boolean
}

export default function CategoryItem({ title, isActive = false }: Props) {
    return <Text
        style={[styles.category, { fontWeight: isActive ? '700' : '400', color: isActive ? '#1CB060' : COLORS['Grey-Grey-1'] }]}>
        {title}
    </Text>
}

const styles = StyleSheet.create({
    category: {
        fontSize: 14
    },
})
