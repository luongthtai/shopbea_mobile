import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import COLORS from '../../../constants/colors'

export default function VoucherSection() {
    return (
        <View style={styles.root}>
            <TitleSection title='Voucher' />
            <TextInput style={styles.input} placeholder='Enter Voucher Code' />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    input: {
        paddingVertical: 17,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        borderRadius: 100,
        fontSize: 12
    }
})