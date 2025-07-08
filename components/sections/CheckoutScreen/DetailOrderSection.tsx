import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import COLORS from '../../../constants/colors'

export default function DetailOrderSection() {
    const [totalProduct, setTotalProduct] = useState<number>(1)

    const handleTotalProduct = (value: number) => {
        if (totalProduct + value < 1) return
        else setTotalProduct(pre => pre + value)
    }

    return (
        <View style={styles.root} >
            <TitleSection title='Order Details' />

            <View style={styles.container}>
                <Image source={require(`../../../assets/images/herobanner.jpg`)} style={styles.image} />

                <View style={styles.infor}>
                    <Text style={styles.name}>Barbie T-Shirt in White</Text>
                    <Text style={styles.infor_cate}>Size S, H&M Official Store</Text>

                    <View style={styles.buttonActions}>
                        <TouchableOpacity style={styles.button} onPress={() => handleTotalProduct(-1)}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: 600 }}>{totalProduct}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleTotalProduct(1)}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    container: {
        flexDirection: "row",
        gap: 16
    },
    image: {
        width: 123,
        height: 113,
        borderRadius: 10,
        objectFit: "cover"
    },
    infor: {
        gap: 8,
        paddingTop: 16
    },
    name: {
        color: COLORS["Black-Black-1"],
        fontSize: 14,
        fontWeight: 700
    },
    infor_cate: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    },
    buttonActions: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
    },
    button: {
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        width: 20,
        aspectRatio: "1/1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    buttonText: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12,
        textAlign: "center"
    },
})
