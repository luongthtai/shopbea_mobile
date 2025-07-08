import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import FormEditProfile from '../components/sections/EditProfileScreen/FormEditProfile'

export default function EditProfileScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Edit Profile' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <FormEditProfile />
            </ScrollView>
        </SafeAreaView>
    )
}
