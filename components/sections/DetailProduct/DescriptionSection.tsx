import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import COLORS from '../../../constants/colors'

export default function DescriptionSection() {
    return (
        <View style={styles.root}>
            <TitleSection title='Description' />
            <View>
                <Text style={styles.text}>
                    Oversized T-shirt in soft cotton jersey with a printed graphic design at front and back. Ribbed crew neck and gently dropped shoulders.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    text: {
        color: COLORS['Grey-Grey-1']
    }
})
