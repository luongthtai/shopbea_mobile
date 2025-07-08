import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'

export default function MessageItem() {
    return (
        <TouchableOpacity>
            <View style={styles.root}>
                <Image source={require(`../../assets/images/herobanner.jpg`)} style={styles.avatar} />

                <View style={styles.infor}>
                    <View style={styles.infor_name}>
                        <Text style={styles.username}>H&M Official Store</Text>
                        <Text style={styles.time}>09.22</Text>
                    </View>
                    <View style={styles.infor_message}>
                        <Text numberOfLines={1} style={styles.last_message}>Hi, today's event is the 28th. Lots of discount hello viet nam</Text>
                        <View style={styles.new_message}>
                            <Text style={{ color: COLORS["White-White-1"], fontSize: 10 }}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 100
    },
    infor: {
        flexGrow: 1,
        flexShrink: 1,
        gap: 8
    },
    infor_name: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    last_message: {
        flexGrow: 1,
        flexShrink: 1,
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
    infor_message: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        // flexGrow: 1,
        // flexShrink: 1
    },
    username: {
        fontSize: 16,
        fontWeight: 700
    },
    time: {
        fontSize: 12,
        color: COLORS['Grey-Grey-1']
    },
    new_message: {
        fontSize: 10,
        backgroundColor: COLORS['Primary-Green-1'],
        color: COLORS["White-White-1"],
        width: 14,
        height: 14,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    }
})