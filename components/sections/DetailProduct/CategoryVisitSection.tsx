import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonSecon from '../../elements/ButtonSecon'
import COLORS from '../../../constants/colors'

export default function CategoryVisitSection() {
    return (
        <View style={styles.root}>
            <View style={styles.container_infor}>
                <View style={styles.container_infor_logo}>
                    <Image source={require(`../../../assets/images/herobanner.jpg`)} style={styles.image} />
                </View>
                <View style={styles.container_infor_name}>
                    <Text style={styles.name} >H&M Official Store</Text>
                    <Text style={styles.status} >Active 2 hours ago</Text>
                </View>
            </View>

            <ButtonSecon title='Visit Store' />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30
    },
    container_infor: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    container_infor_logo: {
        width: 64,
        aspectRatio: "1/1",
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: COLORS["Light-Grey-L-Grey-1"]
    },
    image: {
        width: "100%",
        height: "100%",
    },
    container_infor_name: {
        gap: 8
    },
    name: {
        fontSize: 16,
        color: COLORS["Black-Black-1"],
        fontWeight: 700,
        textTransform: "capitalize"
    },
    status: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1'],
    },
})