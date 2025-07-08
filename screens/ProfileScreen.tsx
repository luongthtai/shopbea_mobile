import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import ProfileHeaderSection from '../components/sections/ProfileScreen/ProfileHeaderSection'
import BalancePointsSection from '../components/sections/ProfileScreen/BalancePointsSection'
import MyOrderSection from '../components/sections/ProfileScreen/MyOrderSection'
import COLORS from '../constants/colors'

export default function ProfileScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Profile' isScreen />
            <ProfileHeaderSection />
            <View style={{ height: 8, backgroundColor: COLORS["Light-Grey-L-Grey-1"], marginVertical: 25 }}></View>
            <View style={{ gap: 20 }}>
                <BalancePointsSection />
                <MyOrderSection />
            </View>
        </SafeAreaView>
    )
}
