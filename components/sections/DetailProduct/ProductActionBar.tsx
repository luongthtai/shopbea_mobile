import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonPrimary from '../../elements/ButtonPrimary'
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/stackParams';
import COLORS from '../../../constants/colors';

export default function ProductActionBar() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToCheckout = () => navigation.navigate('checkout')

    return (
        <View style={styles.root}>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name='chatbox-outline' color={COLORS['Primary-Green-1']} size={24} />
                    <Text style={styles.buttonText}>Chat Now</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name='cart-outline' color={COLORS['Primary-Green-1']} size={24} />
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>

            <ButtonPrimary title='Buy Now' width={'50%'} onPress={onNavigateToCheckout} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        paddingTop: 11,
        paddingBottom: Platform.OS === "android" ? 25 : 'auto',
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: COLORS["White-White-1"],
        gap: 18,
    },
    actions: {
        flexDirection: "row",
        gap: 12,
        flexGrow: 1,
        flexShrink: 1
    },
    button: {
        alignItems: "center",
        gap: 4,
        flexGrow: 1
    },
    line: {
        height: 38,
        width: 1,
        backgroundColor: COLORS["Light-Grey-L-Grey-3"]
    },
    buttonText: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    }
})
