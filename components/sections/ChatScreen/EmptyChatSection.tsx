import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../constants/colors'

export default function EmptyChatSection() {
    return (
        <View style={styles.root}>
            <View >
                <Image source={require(`../../../assets/images/empty_message.png`)} style={styles.emoji} />
            </View>
            <View style={styles.contents}>
                <Text style={styles.text}>Your Chat is Empty</Text>
                <Text style={styles.subText}>Let's try chatting with the seller!</Text>
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
        gap: 8,
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: 700
    },
    subText: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
})