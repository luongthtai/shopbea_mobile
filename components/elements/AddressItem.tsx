import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

type Props = {
    isMain?: boolean
}

export default function AddressItem({ isMain }: Props) {
    return (
        <View style={style.root}>
            <View style={style.container}>
                <View style={style.container_infor}>
                    {
                        isMain && <View style={style.main_address}><Text style={style.main_address_text}>Main Address</Text></View>
                    }
                    <View style={style.container_infor_name}>
                        <Text style={{ fontSize: 14, fontWeight: 700 }}>Kevin</Text>
                        <Text style={{ fontSize: 14 }}>-</Text>
                        <Text style={{ fontSize: 14 }}>0813245678901</Text>
                    </View>
                </View>
                <Text style={style.container_address} numberOfLines={1}>10 Park St, Brooklyn, NY 11206, United State, Viet Nam</Text>
            </View>

            <TouchableOpacity>
                <AntDesign name='right' size={20} color={COLORS['Primary-Green-1']} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: COLORS["Light-Grey-L-Grey-3"],
        borderRadius: 10,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20
    },
    container: {
        gap: 8,
        flexGrow: 1,
        flexShrink: 1
    },
    main_address: {
        borderWidth: 1,
        borderColor: COLORS['Primary-Green-1'],
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100
    },
    main_address_text: {
        color: COLORS['Primary-Green-1'],
        fontSize: 10,
        fontWeight: 600
    },
    container_infor: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    container_infor_name: {
        flexDirection: "row",
        gap: 2,
    },
    container_address: {
        color: COLORS['Grey-Grey-1'],
        fontSize: 12
    },
})