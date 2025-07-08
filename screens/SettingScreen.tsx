import React from 'react'
import { SafeAreaView, View } from 'react-native'
import NavBarScreen from '../components/layouts/NavBarScreen'
import SettingHeaderSection from '../components/sections/SettingsScreen/SettingHeaderSection'
import GlobalStyles from '../assets/css/GlobalStyles'
import AccountSettingSection from '../components/sections/SettingsScreen/AccountSettingSection'
import COLORS from '../constants/colors'

export default function SettingScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Settings' />
            <SettingHeaderSection />
            <View style={{ height: 8, backgroundColor: COLORS["Light-Grey-L-Grey-1"], marginVertical: 25 }}></View>
            <AccountSettingSection />
        </SafeAreaView>
    )
}
