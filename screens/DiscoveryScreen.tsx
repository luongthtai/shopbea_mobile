import React, { useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import HeaderSearch from '../components/layouts/HeaderSearch'
import CategoriesSection from '../components/sections/DiscoveryScreen/CategoriesSection'
import ProductsSection from '../components/shared/ProductsSection'
import GlobalStyles from '../assets/css/GlobalStyles'

export default function DiscoveryScreen() {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <HeaderSearch />
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.article}>
                    <CategoriesSection />
                    <ProductsSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    article: {
        paddingVertical: 6,
        gap: 20,
        paddingHorizontal: 20
    }
})