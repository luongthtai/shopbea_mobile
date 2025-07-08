import React from 'react'
import { SafeAreaView, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'

export default function StatusCheckoutScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Payment Status' />
        </SafeAreaView>
    )
}
