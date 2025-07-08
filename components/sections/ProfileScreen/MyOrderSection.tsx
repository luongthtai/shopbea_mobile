import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../../constants/colors';

export default function MyOrderSection() {
    return (
        <View style={styles.root}>
            <View style={styles.title}>
                <TitleSection title='My Orders' />
                <TouchableOpacity style={styles.title_button}>
                    <Text style={styles.title_button_text}>View Order History</Text>
                    <AntDesign name='right' size={14} color={COLORS['Primary-Green-1']} />
                </TouchableOpacity>
            </View>

            <View style={styles.services}>
                <View style={styles.services_box}>
                    <Ionicons name='wallet-outline' size={36} color={COLORS['Primary-Green-1']} />
                    <Text style={styles.services_box_text}>Unpaid</Text>
                </View>
                <View style={styles.services_box}>
                    <Feather name='package' size={36} color={COLORS['Primary-Green-1']} />
                    <Text style={styles.services_box_text}>Packed</Text>
                </View>
                <View style={styles.services_box}>
                    <MaterialIcons name='local-shipping' size={36} color={COLORS['Primary-Green-1']} />
                    <Text style={styles.services_box_text}>Shipped</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        gap: 20
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title_button: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        color: COLORS['Primary-Green-1']
    },
    title_button_text: {
        color: COLORS['Primary-Green-1']
    },
    services: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 60,
        paddingVertical: 10
    },
    services_box: {
        alignItems: "center",
        gap: 6
    },
    services_box_text: {

    }
})