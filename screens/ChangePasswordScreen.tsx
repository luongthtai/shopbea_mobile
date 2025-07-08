import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import InputLabel from '../components/elements/InputLabel'
import InputForm from '../components/elements/InputForm'
import COLORS from '../constants/colors'

export default function ChangePasswordScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Change Pasword' />

            <View style={styles.root}>
                <View style={styles.input_container}>
                    <InputLabel title='Old Pasword' />
                    <InputForm placeholder='Password' returnKeyType='done' secureTextEntry />
                </View>
                <View style={styles.input_container}>
                    <InputLabel title='New Pasword' />
                    <InputForm placeholder='Password' returnKeyType='done' secureTextEntry />
                    <Text style={styles.note}>Please enter a password you haven't used before</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        gap: 20,
        alignItems: "flex-end"
    },
    input_container: {
        width: "100%"
    },
    note: {
        marginTop: 2,
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    }
})