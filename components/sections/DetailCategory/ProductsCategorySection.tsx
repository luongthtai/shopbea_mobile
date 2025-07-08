import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TitleSection from '../../elements/TitleSection'
import ProductsSection from '../../shared/ProductsSection'

export default function ProductsCategorySection() {
    return (
        <View style={styles.container}>
            <TitleSection title='Products' />
            <ProductsSection />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 12
    }
})