import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import InputCheckbox from './InputCheckbox';
import COLORS from '../../constants/colors';

type Props = {
    isSelected?: boolean
}

export default function CartItem({ isSelected }: Props) {
    const [totalProduct, setTotalProduct] = useState<number>(1)

    const handleTotalProduct = (value: number) => {
        if (totalProduct + value < 1) return
        else setTotalProduct(pre => pre + value)
    }

    return (
        <View style={styles.container}>
            <InputCheckbox isSelected={isSelected} />
            <View style={styles.root}>
                <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.image} />

                <View style={styles.product}>
                    <View style={styles.product_content}>
                        <Text style={styles.product_name}>Barbie T-Shirt in White</Text>
                        <Text style={styles.product_infor}>Size S, H&M Offcial Store</Text>
                        <Text style={styles.product_price}>$19</Text>
                    </View>

                    <View style={styles.buttonActions}>
                        <TouchableOpacity style={styles.button} onPress={() => handleTotalProduct(-1)}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: 600 }}>{totalProduct}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleTotalProduct(1)}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.button_trash_container}>
                <TouchableOpacity style={styles.button_trash}><Ionicons name='trash-outline' size={18} color={COLORS['Grey-Grey-1']} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 20,
    },
    root: {
        flexDirection: "row",
        gap: 12,
        flexGrow: 1,
        flexShrink: 1
    },
    image: {
        width: 98,
        height: 98,
        borderRadius: 10
    },
    product: {
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: "space-between",
    },
    product_content: {
        gap: 6
    },
    product_name: {
        fontSize: 14,
        fontWeight: 700
    },
    product_infor: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
    product_price: {
        fontSize: 16,
        fontWeight: 700,
        color: COLORS['Primary-Green-1']
    },
    button_trash_container: {
        justifyContent: "flex-end"
    },
    button_trash: {
        backgroundColor: COLORS["Light-Grey-L-Grey-1"],
        padding: 5,
        borderRadius: 4,
        height: "auto"
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