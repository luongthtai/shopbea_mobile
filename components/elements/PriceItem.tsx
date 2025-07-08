import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    title: string,
    price: string
}

export default function PriceItem({ price, title }: Props) {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {

    },
    price: {

    },
})
