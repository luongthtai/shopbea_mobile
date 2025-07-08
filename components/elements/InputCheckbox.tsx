import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

type Props = {
    isSelected?: boolean
}

export default function InputCheckbox({ isSelected }: Props) {
    return (
        <View style={[styles.root, { backgroundColor: isSelected ? '#1CB060' : '', borderColor: isSelected ? '#1CB060' : '#CACACA' }]}>
            {isSelected && <Ionicons name='checkmark-outline' size={12} color={COLORS["White-White-1"]} />}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        transform: [{ translateY: 10 }],
        justifyContent: "center",
        alignItems: "center"
    },
})
