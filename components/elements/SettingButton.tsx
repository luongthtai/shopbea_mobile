import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

type Props = {
    title: string,
    subTitle: string,
    onPress?: () => void,
    icon: React.ReactNode
}

export default function SettingButton({ onPress, title, subTitle, icon }: Props) {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    {icon}
                </View>

                <View>
                    <Text style={styles.content_title}>{title}</Text>
                    <Text style={styles.content_subtitle}>{subTitle}</Text>
                </View>
            </View>

            <AntDesign name='right' size={20} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    content_title: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 2,
        textTransform: "capitalize"
    },
    content_subtitle: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
    logo: {
        backgroundColor: COLORS["Light-Grey-L-Grey-1"],
        padding: 5,
        aspectRatio: "1/1",
        borderRadius: 100,
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})