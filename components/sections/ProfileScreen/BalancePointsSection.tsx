import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import COLORS from '../../../constants/colors'

export default function BalancePointsSection() {
    return (
        <View style={styles.root}>
            <TitleSection title='Balance & points' />

            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.box_number}>$175</Text>
                    <Text style={styles.box_name}>Balance</Text>
                </View>
                <View style={{ width: 1, height: "100%", backgroundColor: COLORS["Light-Grey-L-Grey-1"] }}></View>
                <View style={styles.box}>
                    <Text style={styles.box_number}>500</Text>
                    <Text style={styles.box_name}>My Coins</Text>
                </View>
                <View style={{ width: 1, height: "100%", backgroundColor: COLORS["Light-Grey-L-Grey-1"] }}></View>
                <View style={styles.box}>
                    <Text style={styles.box_number}>70</Text>
                    <Text style={styles.box_name}>My Points</Text>
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
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    box: {
        gap: 6,
        alignItems: "center",
        flex: 1
    },
    box_number: {
        color: COLORS['Primary-Green-1'],
        fontSize: 20,
        fontWeight: 700
    },
    box_name: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    },
})