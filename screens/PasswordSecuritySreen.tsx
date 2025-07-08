import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import InputLabel from '../components/elements/InputLabel'
import InputForm from '../components/elements/InputForm'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/stackParams'
import COLORS from '../constants/colors'

export default function PasswordSecuritySreen() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToChangePassword = () => navigation.navigate('change_password')

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Password & Security' />

            <View style={styles.root}>
                <View style={styles.input_container}>
                    <InputLabel title='Password' />
                    <InputForm placeholder='Password' returnKeyType='done' secureTextEntry />
                </View>
                <TouchableOpacity onPress={onNavigateToChangePassword}><Text style={styles.button}>Change Password</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        gap: 10,
        alignItems: "flex-end"
    },
    input_container: {
        width: "100%"
    },
    button: {
        color: COLORS['Primary-Green-1']
    }
})
