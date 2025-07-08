import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MessageItem from '../../elements/MessageItem';
import COLORS from '../../../constants/colors';

export default function ChatSection() {
    return (
        <View style={styles.root}>
            <View style={styles.input}>
                <Ionicons name='search' size={20} color={COLORS['Grey-Grey-1']} />
                <TextInput style={styles.input_form} placeholder='Search for seller & message' />
            </View>

            <View style={styles.messages}>
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
                <MessageItem />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        gap: 20,
        paddingBottom: 20
    },
    input: {
        paddingHorizontal: 12,
        paddingVertical: 13,
        backgroundColor: COLORS["Light-Grey-L-Grey-2"],
        borderRadius: 100,
        flexDirection: "row",
        gap: 4,
    },
    input_form: {

    },
    messages: {
        gap: 16
    }
})
