import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import PaymentItem from '../../elements/PaymentItem'
import COLORS from '../../../constants/colors'

export default function PaymentMethodSection() {
    return (
        <View style={styles.root}>
            <View style={styles.title}>
                <TitleSection title='Payment Method' />
                <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>

            <View style={styles.payments}>
                <PaymentItem />
                <PaymentItem isSelected />
                <PaymentItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    payments: {
        gap: 10
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    seeAll: {
        fontSize: 12,
        fontWeight: 700,
        color: COLORS['Primary-Green-1']
    },
})