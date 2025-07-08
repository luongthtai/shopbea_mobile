import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

export default function HeaderDetailProduct() {
    const navigate = useNavigation()

    const onNavigateBack = () => navigate.goBack()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onNavigateBack} style={styles.button}>
                <Ionicons name='arrow-back' size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>Detail Product</Text>
            <View style={styles.actions}>
                <TouchableOpacity><Ionicons name='heart' size={24} color={COLORS['Support-Color-Red']} /></TouchableOpacity>
                <TouchableOpacity><Ionicons name='share-social' size={24} color={COLORS['Grey-Grey-1']} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: COLORS["White-White-1"]
    },
    button: {
        width: 65,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: COLORS["Black-Black-1"],
    },
    actions: {
        width: 65,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        justifyContent: "flex-end"
    }
})