import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../constants/colors'

export default function EmptyCartSection() {
    return (
        <View style={styles.root}>
            <Image source={require(`../../../assets/images/empty_cart.png`)} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>You Cart is Empty</Text>
                <Text style={styles.subtitle}>You haven't added any products yet. Let's add product of your choise to the shopping cart!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: 400,
        objectFit: "contain"
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 700
    },
    subtitle: {
        textAlign: "center",
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    },
})