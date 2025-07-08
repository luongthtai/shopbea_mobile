import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/stackParams'
import { getAsyncStorage, setAsyncStorage } from '../units/asyncStorage'

export default function OnBoardingScreen() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const [isBoarded, setIsBoarded] = useState<boolean | null>(null)

    const onNavigateToApp = async () => {
        await setAsyncStorage('onboarded', "true")
        navigation.reset({
            index: 0,
            routes: [{ name: 'signin' }],
        })
    }

    useEffect(() => {
        const checkBoarding = async () => {
            const onboarded = await getAsyncStorage('onboarded')
            setIsBoarded(!!onboarded)
        }

        checkBoarding()
    }, [])

    useEffect(() => {
        if (isBoarded) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'signin' }],
            })
        }
    }, [isBoarded])

    if (isBoarded) return null

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.root}>
                <Text>Welcome to app</Text>
                <Button title='Get Started' onPress={onNavigateToApp} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
