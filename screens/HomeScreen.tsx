import React, { useState } from 'react'
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import HeaderSearch from '../components/layouts/HeaderSearch'
import HeroSection from '../components/sections/HomeScreen/HeroSection'
import BrandPopularSection from '../components/sections/HomeScreen/BrandPopularSection'
import ProductPopularSection from '../components/sections/HomeScreen/ProductPopularSection'
import GlobalStyles from '../assets/css/GlobalStyles'

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <HeaderSearch />
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.article}>
                    <HeroSection />
                    <BrandPopularSection />
                    <ProductPopularSection />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    article: {
        paddingVertical: 6,
        gap: 20
    }
})