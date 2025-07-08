import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constants/colors';

export default function HeaderCategory() {
    const navigate = useNavigation()

    const onNavigateBack = () => navigate.goBack()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onNavigateBack}>
                <Ionicons name='arrow-back' size={24} />
            </TouchableOpacity>

            <View style={styles.input}>
                <Ionicons name='search' size={20} color={COLORS['Grey-Grey-1']} />
                <TextInput placeholder='Search in H&M Official Store' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 17
    },
    input: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderRadius: 100,
        backgroundColor: COLORS["Light-Grey-L-Grey-2"],
    },
})
