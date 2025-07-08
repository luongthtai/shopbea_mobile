import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/stackParams';
import COLORS from '../../../constants/colors';

export default function SettingHeaderSection() {
    const navigate: NavigationProp<RootStackParamList> = useNavigation()

    const onNavigateToEditProfile = () => navigate.navigate('edit_profile')

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.container_infor}>
                    <Image source={require(`../../../assets/images/herobanner.jpg`)} style={styles.avatar} />

                    <View style={{ gap: 2 }}>
                        <Text style={styles.name} numberOfLines={1}>Luong The Tai</Text>
                        <Text style={styles.role} numberOfLines={1}>Gold Member</Text>
                        <Text style={styles.email} numberOfLines={1}>luongthetai2705@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={onNavigateToEditProfile}><Octicons name='pencil' size={20} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        gap: 20
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    },
    container_infor: {
        flexDirection: "row",
        gap: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        objectFit: "cover",
        borderRadius: 100
    },
    name: {
        fontSize: 18,
        fontWeight: 700
    },
    role: {
        fontSize: 14,
        color: COLORS['Grey-Grey-1']
    },
    email: {
        fontSize: 12,
        color: COLORS['Primary-Green-1']
    },
})