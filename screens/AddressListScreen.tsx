import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import GlobalStyles from '../assets/css/GlobalStyles'
import NavBarScreen from '../components/layouts/NavBarScreen'
import AddressItem from '../components/elements/AddressItem'
import ButtonSecon from '../components/elements/ButtonSecon'

export default function AddressListScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <NavBarScreen screen='Address List' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.address}>
                    <AddressItem isMain />
                    <AddressItem />
                    <AddressItem />
                    <ButtonSecon title='Add Address' paddingVertical={16} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    address: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        gap: 16
    }
})
