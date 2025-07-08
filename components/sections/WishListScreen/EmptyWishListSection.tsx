import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../constants/colors'

export default function EmptyWishListSection() {
    return (
        <View style={styles.root}>
            <View >
                <Image source={require(`../../../assets/images/empty_wishlist.png`)} style={styles.emoji} />
            </View>
            <View style={styles.contents}>
                <Text style={styles.title}>Your Wishlist is Empty</Text>
                <Text style={styles.subtitle}>You haven't added any products yet.Let's add the product of your choise to the wishlist!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        marginTop: 20
    },
    emoji: {
        width: 340,
        height: 340,
        aspectRatio: "1/1",
        objectFit: "contain"
    },
    contents: {
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