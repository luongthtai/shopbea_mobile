import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../../constants/colors';

export default function InforCategorySection() {
    return (
        <View style={styles.container}>
            <View style={styles.container_infor}>
                <View style={styles.container_infor_logo}>
                    <Image source={require(`../../../assets/images/herobanner.jpg`)} style={styles.image} />
                </View>
                <View style={styles.container_infor_name}>
                    <Text style={styles.name} >H&M Official Store</Text>
                    <Text style={styles.status} >Active 2 hours ago</Text>
                </View>
            </View>

            <View style={styles.container_detail}>
                <View style={styles.container_detail_item}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                        <Ionicons name='star' size={12} color={COLORS["Support-Color-Orange-1"]} />
                        <Text>4.8</Text>
                    </View>
                    <Text style={{ color: COLORS['Grey-Grey-1'], fontSize: 12 }}>Rating & Reviews</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.container_detail_item}>
                    <Text style={{ fontSize: 12, fontWeight: "700" }}>08.00 - 17.00</Text>
                    <Text style={{ color: COLORS['Grey-Grey-1'], fontSize: 12 }}>Operational Hour</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.container_detail_item}>
                    <Text style={{ fontSize: 12, fontWeight: "700" }}>200k+</Text>
                    <Text style={{ color: COLORS['Grey-Grey-1'], fontSize: 12 }}>Selling Products</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
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
    line: {
        height: "100%",
        width: 1,
        backgroundColor: COLORS["Light-Grey-L-Grey-3"],
    },
    container_detail: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container_detail_item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
})