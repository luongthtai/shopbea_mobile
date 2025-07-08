import RNDateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerAndroid from '@react-native-community/datetimepicker'
import moment from 'moment'
import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import COLORS from '../../constants/colors'

type Props = {
    date?: Date
}

export default function InputDate({ }: Props) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState<boolean>(false)
    const [onFocus, setOnFocus] = useState<boolean>(false)

    const onChange = (e: any, selectedDate: any) => {
        const currentDate = selectedDate
        setDate(currentDate)
        Platform.OS === "android" && setOpen(false)
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                style={[styles.input, { borderColor: onFocus ? '#1CB060' : COLORS["Light-Grey-L-Grey-3"] }]}
            >
                <Text>{moment(date).format('DD-MM-YYYY')}</Text>
            </TouchableOpacity>

            {
                open && Platform.OS === "android" &&
                <DateTimePickerAndroid
                    value={date}
                    mode="date"
                    onChange={onChange}
                    display='spinner'
                />
            }

            {
                Platform.OS === "ios" &&
                <ReactNativeModal
                    swipeDirection="down"
                    backdropOpacity={0.3}
                    isVisible={open}
                    onBackdropPress={() => setOpen(false)}
                    style={{ marginHorizontal: 0, marginBottom: 0, justifyContent: "flex-end" }}
                >
                    <View style={styles.modalDate}>
                        <RNDateTimePicker
                            value={date}
                            mode="date"
                            display="spinner"
                            onChange={onChange}
                        />
                    </View>
                </ReactNativeModal>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
    },
    input: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: COLORS["Light-Grey-L-Grey-1"]
    },
    modalDate: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS["White-White-1"],
        borderRadius: 10,
        paddingBottom: StatusBar.currentHeight || 20
    },
})