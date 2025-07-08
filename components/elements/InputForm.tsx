import React, { ChangeEvent, useState } from 'react'
import { KeyboardTypeOptions, ReturnKeyTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

type Props = {
    placeholder: string,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType: ReturnKeyTypeOptions,
    secureTextEntry?: boolean,
    error?: string | false | undefined,
    onChangeText?: (text: string) => void
}

export default function InputForm({ placeholder, keyboardType, returnKeyType, secureTextEntry, error, onChangeText }: Props) {
    const [isShowValue, setIsShowValue] = useState(secureTextEntry)
    const [onFocus, setOnFocus] = useState<boolean>(false)

    const handleOnFocus = () => setOnFocus(!onFocus)

    const handleShowValue = () => setIsShowValue(!isShowValue)

    return (
        <View style={styles.root}>
            <View style={[styles.container, { borderColor: !!error ? COLORS['Support-Color-Red'] : onFocus ? '#1CB060' : COLORS["Light-Grey-L-Grey-3"] }]}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onBlur={handleOnFocus}
                    onFocus={handleOnFocus}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    secureTextEntry={isShowValue}
                    onChangeText={onChangeText}
                />
                {secureTextEntry && <TouchableOpacity onPress={handleShowValue}>{isShowValue ? <Feather name='eye-off' size={18} color="#CACACA" /> : <Feather name='eye' size={18} color="#CACACA" />}</TouchableOpacity>}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 4
    },
    container: {
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: COLORS["Light-Grey-L-Grey-1"],
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    input: {
        flexGrow: 1,
        flexShrink: 1
    },
    error: {
        fontSize: 12,
        color: COLORS['Support-Color-Red'],
    }
})
