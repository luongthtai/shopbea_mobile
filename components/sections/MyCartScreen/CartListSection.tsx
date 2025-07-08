import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import CartItem from '../../elements/CartItem'
import ButtonPrimary from '../../elements/ButtonPrimary'
import COLORS from '../../../constants/colors'

export default function CartListSection() {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <CartItem />
                    <CartItem isSelected />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </View>
            </ScrollView>

            <View style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: COLORS["White-White-1"] }}>
                <ButtonPrimary title='Checkout' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        gap: 20
    }
})
