import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import DetailOrderSection from '../components/sections/CheckoutScreen/DetailOrderSection'
import VoucherSection from '../components/sections/CheckoutScreen/VoucherSection'
import ShippingAddressSection from '../components/sections/CheckoutScreen/ShippingAddressSection'
import PaymentMethodSection from '../components/sections/CheckoutScreen/PaymentMethodSection'
import TotalPriceSection from '../components/sections/CheckoutScreen/TotalPriceSection'
import COLORS from '../constants/colors'

export default function CheckoutScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Checkout' />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: COLORS["Light-Grey-L-Grey-1"] }}>
                <View style={styles.container}>
                    <View style={styles.contents}>
                        <DetailOrderSection />
                        <VoucherSection />
                        <ShippingAddressSection />
                        <PaymentMethodSection />
                    </View>

                    <TotalPriceSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    contents: {
        gap: 24,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS["White-White-1"],
    }
})
