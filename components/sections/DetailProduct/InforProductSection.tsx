import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../../constants/colors';

export default function InforProductSection() {
    return (
        <View style={style.root}>
            <View style={style.infor}>
                <Text style={style.name_product}>Barbie T-Shirt in White</Text>
                <View style={style.infor_ratting}>
                    <Ionicons name='star' size={12} color={COLORS["Support-Color-Orange-1"]} />
                    <Text style={style.text}>4.8</Text>
                    <View style={style.dot}></View>
                    <Text style={style.text}>12.5k Sold</Text>
                </View>
            </View>
            <Text style={style.price}>$19</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    infor: {
        gap: 8
    },
    name_product: {
        fontSize: 16,
        color: COLORS["Black-Black-1"],
        fontWeight: 700
    },
    infor_ratting: {
        flexDirection: "row",
        gap: 4,
        alignItems: "center"
    },
    text: {
        color: COLORS['Grey-Grey-1']
    },
    dot: {
        backgroundColor: COLORS['Grey-Grey-1'],
        width: 6,
        aspectRatio: "1/1",
        borderRadius: 100
    },
    price: {
        color: COLORS['Primary-Green-1'],
        fontSize: 24,
        fontWeight: 700
    }
})