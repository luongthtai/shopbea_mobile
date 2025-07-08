import React from 'react'
import { StyleSheet, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import SizeItem from '../../elements/SizeItem'

export default function SizeProductSection() {
    return (
        <View style={styles.root}>
            <TitleSection title='size' />

            <View style={styles.sizes}>
                <SizeItem isActive={false} size='s' />
                <SizeItem isActive={false} size='sm' />
                <SizeItem isActive={false} size='m' />
                <SizeItem isActive={false} size='lg' />
                <SizeItem isActive size='z' />
                <SizeItem isActive={false} size='xl' />
                <SizeItem isActive={false} size='2xl' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        gap: 12
    },
    sizes: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12
    }
})
