import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    screen: string,
    isScreen?: boolean
}

export default function NavBarScreen({ screen, isScreen }: Props) {
    const navigate = useNavigation()

    const onNavigateBack = () => navigate.goBack()

    return (
        <View style={styles.root}>
            {
                !isScreen
                &&
                <TouchableOpacity onPress={onNavigateBack} style={styles.arrowBack}>
                    <Ionicons name='arrow-back' size={24} />
                </TouchableOpacity>
            }

            <Text style={styles.title}>{screen}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        position: "relative",
        paddingVertical: 20,
    },
    arrowBack: {
        position: "absolute",
        left: 20,
        top: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 700
    }
})