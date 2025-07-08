import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Stars from './Stars'
import COLORS from '../../constants/colors'

export default function CommentItem() {
    return (
        <View style={styles.root}>
            <View>
                <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.avatar} />
            </View>

            <View style={styles.comment}>
                <Text style={styles.content}>This trendy T-shirt is very comfortable for me to use. I like it very much!!!</Text>
                <View style={styles.rating}>
                    <Stars />
                    <Text style={styles.time}>1 hours ago</Text>
                </View>
                <View style={styles.images}>
                    <View style={styles.imageItem}></View>
                    <View style={styles.imageItem}></View>
                    <View style={styles.imageItem}></View>
                    <View style={styles.imageItem}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        gap: 16
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    comment: {
        gap: 5
    },
    rating: {
        gap: 13,
        flexDirection: "row",
        alignItems: "center"
    },
    content: {
        color: COLORS['Grey-Grey-1']
    },
    time: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    },
    images: {
        flexDirection: "row",
        gap: 10,
        marginTop: 5
    },
    imageItem: {
        width: 41,
        height: 37,
        borderRadius: 10,
        backgroundColor: "#CACACA"
    },
})
