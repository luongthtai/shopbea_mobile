import React from 'react'
import { SafeAreaView } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import CartListSection from '../components/sections/MyCartScreen/CartListSection'
// import EmptyCartSection from '../components/sections/MyCartScreen/EmptyCartSection'

export default function MyCartScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='My Cart' />
            {/* <EmptyCartSection /> */}
            <CartListSection />
        </SafeAreaView>
    )
}
