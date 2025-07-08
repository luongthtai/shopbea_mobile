import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonSelect from './ButtonSelect'
import COLORS from '../../constants/colors'

type Props = {
    isSelected?: boolean
}

export default function PaymentItem({ isSelected }: Props) {
    return (
        <View style={styles.root}>
            <View style={styles.method}>
                <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.logo} />

                <View style={styles.method_infor}>
                    <Text style={styles.method_infor_name}>Mastercard</Text>
                    <Text style={styles.method_infor_subtitl}>Checked Automatically</Text>
                </View>
            </View>
            <ButtonSelect isActive={isSelected} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        padding: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        width: 32,
        height: 32,
        borderRadius: 100
    },
    method: {
        flexDirection: "row",
        gap: 16
    },
    method_infor: {
        gap: 4
    },
    method_infor_name: {
        fontWeight: 700,
        fontSize: 14
    },
    method_infor_subtitl: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12,
    },
})
