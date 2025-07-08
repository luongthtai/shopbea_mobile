import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderCategory from '../components/layouts/HeaderCategory'
import InforCategorySection from '../components/sections/DetailCategory/InforCategorySection'
import ProductsCategorySection from '../components/sections/DetailCategory/ProductsCategorySection'
import GlobalStyles from '../assets/css/GlobalStyles'

export default function DetailCategoryScreen() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderCategory />
                <View style={styles.article}>
                    <InforCategorySection />
                    <ProductsCategorySection />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    article: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        gap: 20,
    }
})