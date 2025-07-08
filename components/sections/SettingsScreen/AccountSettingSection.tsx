import React from 'react'
import { StyleSheet, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import SettingButton from '../../elements/SettingButton'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/stackParams';
import { removeAsyncStorage } from '../../../units/asyncStorage';

export default function AccountSettingSection() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToAddressListScreen = () => navigation.navigate('address_list')
    const onNavigateToPasswordSecurityScreen = () => navigation.navigate('password_security')

    const handleLogout = async () => {
        await removeAsyncStorage('accessToken')
        navigation.navigate('signin')
    }

    return (
        <View style={styles.root}>
            <TitleSection title='Account Settings' />

            <View style={styles.list}>
                <SettingButton title='address list' subTitle='Set your shipping address' icon={<Feather name='home' size={20} />} onPress={onNavigateToAddressListScreen} />
                <SettingButton title='payment method' subTitle='Set your payment method' icon={<MaterialIcons name='attach-money' size={20} />} />
                <SettingButton title='password & security' subTitle='Password PIN and self verification' icon={<MaterialIcons name='privacy-tip' size={20} />} onPress={onNavigateToPasswordSecurityScreen} />
                <SettingButton title='privacy account' subTitle='Set your privacy account' icon={<Feather name='globe' size={20} />} />
                <SettingButton title='logout' subTitle='Logout from your account' icon={<MaterialIcons name='logout' size={20} />} onPress={handleLogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        gap: 20
    },
    list: {
        gap: 16
    }
})
