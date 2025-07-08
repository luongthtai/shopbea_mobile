import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import AddressItem from '../../elements/AddressItem'
import COLORS from '../../../constants/colors'

export default function ShippingAddressSection() {
    return (
        <View style={styles.root}>
            <View style={styles.title}>
                <TitleSection title='Shipping Address' />
                <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
            </View>
            <View style={styles.address}>
                <AddressItem isMain />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    address: {
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