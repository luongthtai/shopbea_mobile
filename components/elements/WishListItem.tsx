import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

export default function WishListItem() {
    return (
        <View style={styles.root}>
            <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.image} />

            <View style={styles.contents}>
                <View style={styles.contents_infor}>
                    <View style={{ gap: 4 }}>
                        <Text style={styles.contents_infor_name}>Barbie T-Shirt in White</Text>
                        <Text style={styles.contents_infor_size}>Size S, H&M Official Store</Text>
                        <Text style={styles.contents_infor_price}>$19</Text>
                    </View>

                    <TouchableOpacity><Ionicons name='close' size={18} color={COLORS['Grey-Grey-1']} /></TouchableOpacity>
                </View>

                <ButtonPrimary title='Buy' width="100%" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        gap: 15
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 10
    },
    contents: {
        gap: 10,
        flexGrow: 1,
        flexShrink: 1
    },
    contents_infor: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    contents_infor_name: {
        fontSize: 14,
        fontWeight: 700
    },
    contents_infor_size: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
    contents_infor_price: {
        fontSize: 14,
        fontWeight: 700,
        color: COLORS['Primary-Green-1']
    },
})